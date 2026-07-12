import slugify from '@sindresorhus/slugify';
import * as crypto from 'node:crypto';
import * as fs from 'node:fs';
import * as path from 'node:path';

const FIXTURES_ROOT = 'src/fixtures';

const FIXTURE_DIRS = [
  'src/fixtures/mainnet',
  'src/fixtures/preprod',
  'src/fixtures/preview',
  'src/fixtures/common',
  'src/fixtures/errors',
];

function getStableId(testName: string, network: string, endpoints: string[]): string {
  const testNameSlug = slugify(testName);
  const sortedEndpoints = [...endpoints].sort();
  const hashInput = JSON.stringify([network, ...sortedEndpoints]);
  const hash = crypto.createHash('sha256').update(hashInput).digest('hex').slice(0, 12);

  return `${testNameSlug}_${hash}`;
}

function getNetworkFromPath(filePath: string): string {
  const relative = path.relative(FIXTURES_ROOT, filePath);

  return relative.split(path.sep)[0];
}

function findFixtureFiles(dir: string): string[] {
  const results: string[] = [];
  let entries;

  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return results;
  }
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      results.push(...findFixtureFiles(fullPath));
    } else if (entry.name.endsWith('.ts')) {
      // Barrel index.ts files contain no testName entries, so parsing them is
      // a no-op; some index.ts files define fixtures directly and need IDs.
      results.push(fullPath);
    }
  }
  return results;
}

type FixtureRecord = {
  file: string;
  network: string;
  testName: string;
  testNameLineIdx: number;
  endpoints: string[];
  existingId: string | null;
  idLineIdx: number | null;
  indent: string;
};

function parseFile(filePath: string, lines: string[]): FixtureRecord[] {
  const records: FixtureRecord[] = [];
  const network = getNetworkFromPath(filePath);

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();

    // Match testName line (single-line or multi-line)
    let testNameMatch = trimmed.match(/^testName:\s*['"](.*?)['"]/);

    if (!testNameMatch && trimmed === 'testName:' && i + 1 < lines.length) {
      testNameMatch = lines[i + 1].trim().match(/^['"](.*?)['"]/);
    }

    if (!testNameMatch) continue;

    // Look back for an existing id within the same fixture object
    let existingId: string | null = null;
    let idLineIdx: number | null = null;

    for (let j = i - 1; j >= Math.max(0, i - 10); j--) {
      const prevTrimmed = lines[j].trim();
      const idMatch = prevTrimmed.match(/^id:\s*['"](.*?)['"]/);

      if (idMatch) {
        existingId = idMatch[1];
        idLineIdx = j;
        break;
      }
      if (prevTrimmed === '{' || prevTrimmed === '' || prevTrimmed.startsWith('//')) continue;
      break;
    }

    records.push({
      file: filePath,
      network,
      testName: testNameMatch[1],
      testNameLineIdx: i,
      endpoints: extractEndpoints(lines, i),
      existingId,
      idLineIdx,
      indent: lines[i].match(/^(\s*)/)?.[1] ?? '    ',
    });
  }

  return records;
}

function extractEndpoints(lines: string[], testNameLineIndex: number): string[] {
  // Look for the endpoints: [...] of the current fixture. The search stops at
  // the next fixture (a following testName:/id: line) so we never read the
  // endpoints of a different fixture.
  let i = testNameLineIndex + 1;

  while (i < lines.length && !lines[i].trim().startsWith('endpoints:')) {
    const trimmed = lines[i].trim();

    if (trimmed.startsWith('testName:') || trimmed.match(/^id:\s*['"]/)) {
      return [];
    }
    i++;
  }

  if (i >= lines.length) return [];

  const endpointsLine = lines[i].trim();

  // Single-line endpoints: ['...'] — template literals are hashed verbatim,
  // including the ${...} placeholders, which is still deterministic.
  const singleLineMatch = endpointsLine.match(/endpoints:\s*\[(.*)\]/);

  if (singleLineMatch) {
    const inner = singleLineMatch[1];
    const matches = inner.match(/'[^']+'|`[^`]+`/g);

    return matches ? matches.map(m => m.slice(1, -1)) : [];
  }

  // Multi-line endpoints
  const endpoints: string[] = [];

  i++;
  while (i < lines.length) {
    const trimmed = lines[i].trim();

    if (trimmed === '],') break;
    if (trimmed === ']') break;
    const match = trimmed.match(/^'([^']+)'|^`([^`]+)`/);

    if (match) {
      endpoints.push(match[1] ?? match[2]);
    }
    i++;
  }
  return endpoints;
}

// Main
const allFiles = FIXTURE_DIRS.flatMap(dir => findFixtureFiles(dir));

const fileLines = new Map<string, string[]>();
const allRecords: FixtureRecord[] = [];

for (const file of allFiles) {
  const lines = fs.readFileSync(file, 'utf-8').split('\n');

  fileLines.set(file, lines);
  allRecords.push(...parseFile(file, lines));
}

// Count occurrences of every existing ID to detect duplicates
const idCounts = new Map<string, number>();

for (const record of allRecords) {
  if (record.existingId) {
    idCounts.set(record.existingId, (idCounts.get(record.existingId) ?? 0) + 1);
  }
}

type Edit =
  | { type: 'insert'; lineIdx: number; text: string }
  | { type: 'replace'; lineIdx: number; oldId: string; newId: string };

const editsByFile = new Map<string, Edit[]>();
let idsAdded = 0;
let idsRegenerated = 0;
const unresolvable: FixtureRecord[] = [];

for (const record of allRecords) {
  if (record.endpoints.length === 0) {
    if (record.existingId && (idCounts.get(record.existingId) ?? 0) > 1) {
      unresolvable.push(record);
    }
    continue;
  }

  const newId = getStableId(record.testName, record.network, record.endpoints);
  const edits = editsByFile.get(record.file) ?? [];

  if (record.existingId === null) {
    edits.push({
      type: 'insert',
      lineIdx: record.testNameLineIdx,
      text: `${record.indent}id: '${newId}',`,
    });
    record.existingId = newId;
    idsAdded++;
  } else if ((idCounts.get(record.existingId) ?? 0) > 1 && record.existingId !== newId) {
    edits.push({
      type: 'replace',
      lineIdx: record.idLineIdx as number,
      oldId: record.existingId,
      newId,
    });
    record.existingId = newId;
    idsRegenerated++;
  }

  if (edits.length > 0) {
    editsByFile.set(record.file, edits);
  }
}

for (const [file, edits] of editsByFile) {
  const lines = fileLines.get(file) as string[];

  // Apply from the bottom up so inserts do not shift pending line indexes
  const sorted = [...edits].sort((a, b) => b.lineIdx - a.lineIdx);

  for (const edit of sorted) {
    if (edit.type === 'insert') {
      lines.splice(edit.lineIdx, 0, edit.text);
    } else {
      lines[edit.lineIdx] = lines[edit.lineIdx].replace(edit.oldId, edit.newId);
    }
  }

  fs.writeFileSync(file, lines.join('\n'));
  console.log(`${file}: ${edits.length} id(s) added or regenerated`);
}

// Final uniqueness check across all fixtures
const finalIds = new Map<string, FixtureRecord[]>();

for (const record of allRecords) {
  if (!record.existingId) continue;
  const existing = finalIds.get(record.existingId) ?? [];

  existing.push(record);
  finalIds.set(record.existingId, existing);
}

const remainingDuplicates = [...finalIds.entries()].filter(([, records]) => records.length > 1);

if (unresolvable.length > 0) {
  console.error('\nCould not regenerate duplicated IDs (endpoints not found):');
  for (const record of unresolvable) {
    console.error(`  - ${record.existingId} in ${record.file}:${record.testNameLineIdx + 1}`);
  }
}

if (remainingDuplicates.length > 0) {
  console.error('\nDuplicate fixture IDs remain (identical network, testName and endpoints):');
  for (const [id, records] of remainingDuplicates) {
    console.error(`  - ${id}`);
    for (const record of records) {
      console.error(`      ${record.file}:${record.testNameLineIdx + 1}`);
    }
  }
  process.exit(1);
}

if (idsAdded === 0 && idsRegenerated === 0) {
  console.log('All fixtures already have unique IDs.');
} else {
  console.log(`\nDone. Added ${idsAdded} ID(s), regenerated ${idsRegenerated} duplicated ID(s).`);
}

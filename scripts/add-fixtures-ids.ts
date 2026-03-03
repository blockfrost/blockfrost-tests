import slugify from '@sindresorhus/slugify';
import * as crypto from 'node:crypto';
import * as fs from 'node:fs';
import * as path from 'node:path';

const FIXTURE_DIRS = [
  'src/fixtures/mainnet',
  'src/fixtures/preprod',
  'src/fixtures/preview',
  'src/fixtures/common',
  'src/fixtures/errors',
];

function getStableId(testName: string, endpoints: string[]): string {
  const testNameSlug = slugify(testName);
  const sortedEndpoints = [...endpoints].sort();
  const endpointsString = JSON.stringify(sortedEndpoints);
  const hash = crypto.createHash('sha256').update(endpointsString).digest('hex').slice(0, 12);

  return `${testNameSlug}_${hash}`;
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
    } else if (entry.name.endsWith('.ts') && entry.name !== 'index.ts') {
      results.push(fullPath);
    }
  }
  return results;
}

function processFile(filePath: string): { modified: boolean; idsAdded: number } {
  const content = fs.readFileSync(filePath, 'utf-8');

  if (!content.includes('testName')) {
    return { modified: false, idsAdded: 0 };
  }

  const lines = content.split('\n');
  const newLines: string[] = [];
  let idsAdded = 0;
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Match testName line
    const testNameMatch = trimmed.match(/^testName:\s*['"](.*?)['"]/);

    if (testNameMatch) {
      // Check if id already exists (look back for it)
      let hasId = false;

      for (let j = newLines.length - 1; j >= Math.max(0, newLines.length - 10); j--) {
        const prevTrimmed = newLines[j].trim();

        if (prevTrimmed.startsWith('id:')) {
          hasId = true;
          break;
        }
        if (prevTrimmed === '{' || prevTrimmed === '' || prevTrimmed.startsWith('//')) continue;
        break;
      }

      if (!hasId) {
        const testName = testNameMatch[1];

        // Extract endpoints from upcoming lines
        const endpoints = extractEndpoints(lines, i);

        if (endpoints.length > 0) {
          const id = getStableId(testName, endpoints);
          // Use the same indentation as the testName line
          const indent = line.match(/^(\s*)/)?.[1] ?? '    ';

          newLines.push(`${indent}id: '${id}',`);
          idsAdded++;
        }
      }
    }

    newLines.push(line);
    i++;
  }

  if (idsAdded > 0) {
    fs.writeFileSync(filePath, newLines.join('\n'));
  }

  return { modified: idsAdded > 0, idsAdded };
}

function extractEndpoints(lines: string[], testNameLineIndex: number): string[] {
  // Look for endpoints: [...] after testName line
  let i = testNameLineIndex + 1;

  while (i < lines.length && !lines[i].trim().startsWith('endpoints:')) {
    // If we hit response: or another testName:, give up
    if (lines[i].trim().startsWith('response:') || lines[i].trim().startsWith('testName:')) {
      return [];
    }
    i++;
  }

  if (i >= lines.length) return [];

  const endpointsLine = lines[i].trim();

  // Single-line endpoints: ['...']
  const singleLineMatch = endpointsLine.match(/endpoints:\s*\[(.*)\]/);

  if (singleLineMatch) {
    const inner = singleLineMatch[1];
    const matches = inner.match(/'([^']+)'/g);

    return matches ? matches.map(m => m.replace(/'/g, '')) : [];
  }

  // Multi-line endpoints
  const endpoints: string[] = [];

  i++;
  while (i < lines.length) {
    const trimmed = lines[i].trim();

    if (trimmed === '],') break;
    if (trimmed === ']') break;
    const match = trimmed.match(/^'([^']+)'/);

    if (match) {
      endpoints.push(match[1]);
    }
    i++;
  }
  return endpoints;
}

// Main
let totalModified = 0;
let totalIds = 0;

const allFiles = FIXTURE_DIRS.flatMap(dir => findFixtureFiles(dir));

for (const file of allFiles) {
  const { modified, idsAdded } = processFile(file);

  if (modified) {
    totalModified++;
    totalIds += idsAdded;
    console.log(`${file}: added ${idsAdded} id(s)`);
  }
}

if (totalIds === 0) {
  console.log('All fixtures already have IDs.');
} else {
  console.log(`\nDone. Modified ${totalModified} files, added ${totalIds} IDs.`);
}

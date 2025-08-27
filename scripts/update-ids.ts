import * as crypto from 'node:crypto';
import * as fs from 'node:fs';
import * as path from 'node:path';
import slugify from '@sindresorhus/slugify';
import { fileURLToPath } from 'node:url';

const getStableId = (testName: string, endpoints: string[]) => {
  const testNameSlug = slugify(testName);
  const sortedEndpoints = [...endpoints].sort();
  const endpointsString = JSON.stringify(sortedEndpoints);
  const hash = crypto.createHash('sha256').update(endpointsString).digest('hex').slice(0, 8);

  return `${testNameSlug}_${hash}`;
};

const updateCode = (code: string): { updated: boolean; newCode: string } => {
  const regex =
    /\{\s*testName:\s*'([^']+)'(?:\s*,\s*)?endpoints:\s*\[([\s\S]*?)\](?:\s*,\s*)?response:[\s\S]*?\}/g;
  let updated = false;

  const newCode = code.replace(regex, (match, testName, endpointsContent) => {
    if (match.includes('id:')) {
      return match;
    }

    const endpoints: string[] = [];
    const endRegex = /'([^']+)'/g;

    let em;

    while ((em = endRegex.exec(endpointsContent)) !== null) {
      endpoints.push(em[1]);
    }

    const id = getStableId(testName, endpoints);

    const openMatch = match.match(/\{\s*/);
    if (!openMatch) return match;

    const afterOpen = openMatch[0].length;
    const indent = '  ';
    const inserted =
      match.substring(0, afterOpen) + `id: '${id}',\n${indent}` + match.substring(afterOpen);

    updated = true;

    return inserted;
  });

  return { updated, newCode };
};

const processFile = (fileName: string) => {
  const fileContent = fs.readFileSync(fileName, 'utf8');
  const { updated, newCode } = updateCode(fileContent);

  if (updated) {
    fs.writeFileSync(fileName, newCode, 'utf8');
    console.log(`Updated file: ${fileName}`);
  } else {
    console.log(`No changes for: ${fileName}`);
  }
};

const processFolder = (folderName: string) => {
  const files = fs.readdirSync(folderName, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(folderName, file.name);

    if (file.isDirectory()) {
      processFolder(fullPath);
    } else if (file.isFile() && path.extname(file.name) === '.ts') {
      processFile(fullPath);
    }
  }
};

const __filename = fileURLToPath(import.meta.url);
if (process.argv[1] === __filename) {
  processFolder('./src/fixtures');
}

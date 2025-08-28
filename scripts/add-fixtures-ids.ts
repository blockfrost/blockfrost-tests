import * as crypto from 'node:crypto';
import * as fs from 'node:fs';
import * as path from 'node:path';
import slugify from '@sindresorhus/slugify';
import * as recast from 'recast';
// @ts-expect-error this is weird yes
import babelParser from 'recast/parsers/babel';
import { fileURLToPath } from 'node:url';
import * as t from '@babel/types';
import traverse from '@babel/traverse';

const getStableId = (testName: string, endpoints: string[]) => {
  const testNameSlug = slugify(testName);
  const sortedEndpoints = [...endpoints].sort();
  const endpointsString = JSON.stringify(sortedEndpoints);
  const hash = crypto.createHash('sha256').update(endpointsString).digest('hex').slice(0, 12);

  return `${testNameSlug}_${hash}`;
};

export const updateCode = (code: string): { updated: boolean; newCode: string } => {
  const ast = recast.parse(code, {
    parser: babelParser,
  });
  let updated = false;

  traverse.default(ast, {
    ObjectExpression(path) {
      const node = path.node;
      const getProp = (name: string) =>
        node.properties.find(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (p: any): p is t.ObjectProperty =>
            t.isObjectProperty(p) &&
            ((t.isIdentifier(p.key) && p.key.name === name) ||
              (t.isStringLiteral(p.key) && p.key.value === name)),
        );

      const hasId = !!getProp('id');
      const testNameProp = getProp('testName');
      const endpointsProp = getProp('endpoints');

      if (!hasId && testNameProp && endpointsProp) {
        const testName = t.isStringLiteral(testNameProp.value)
          ? testNameProp.value.value
          : undefined;
        let endpoints: string[] = [];

        if (t.isArrayExpression(endpointsProp.value)) {
          endpoints = endpointsProp.value.elements
            .filter((el: t.StringLiteral): el is t.StringLiteral => t.isStringLiteral(el))
            .map((el: t.StringLiteral) => el.value);
        }

        if (testName) {
          const id = getStableId(testName, endpoints);
          const idProp = t.objectProperty(t.identifier('id'), t.stringLiteral(id));

          // add at start
          node.properties.unshift(idProp);
          updated = true;
        }
      }
    },
  });

  const newCode = recast.print(ast).code;

  return { updated, newCode };
};

const processFile = (fileName: string) => {
  try {
    const fileContent = fs.readFileSync(fileName, 'utf8');
    const { updated, newCode } = updateCode(fileContent);

    if (updated) {
      fs.writeFileSync(fileName, newCode, 'utf8');
      console.log(`Updated file: ${fileName}`);
    } else {
      // console.log(`No changes for: ${fileName}`);
    }
  } catch (error) {
    console.error(`Error processing file ${fileName}: ${(error as Error).message}`);
  }
};

const processFolder = (folderName: string) => {
  try {
    const files = fs.readdirSync(folderName, { withFileTypes: true });

    for (const file of files) {
      const fullPath = path.join(folderName, file.name);

      if (file.isDirectory()) {
        processFolder(fullPath);
      } else if (file.isFile() && ['.ts', '.tsx'].includes(path.extname(file.name))) {
        processFile(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error processing folder ${folderName}: ${(error as Error).message}`);
  }
};

const __filename = fileURLToPath(import.meta.url);

if (process.argv[1] === __filename) {
  const directory = process.argv[2] || './src/fixtures';

  console.log(`Processing folder: ${directory}`);
  processFolder(directory);
}

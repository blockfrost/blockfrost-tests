import { parse } from '@babel/parser';
import _traverse from '@babel/traverse';
import * as fs from 'node:fs';
import * as path from 'node:path';

// @babel/traverse ships as CJS; the default export lives on `.default` under ESM interop.
const traverse = (_traverse as unknown as { default: typeof _traverse }).default ?? _traverse;

const NETWORKS = ['mainnet', 'preprod', 'preview'] as const;
const FIXTURES_ROOT = 'src/fixtures';

/**
 * Fixture files whose names match these patterns are treated as shared helpers /
 * intentionally-not-wired modules and are excluded from the orphan check.
 * Add an entry here (with a short justification) when a fixture file is
 * legitimately not meant to be wired into a network aggregator.
 */
const IGNORED_BASENAMES = new Set<string>([
  // Nested aggregators that are themselves imported by the network index.ts.
  'index.ts',
]);

interface Orphan {
  file: string;
  reason: string;
}

interface NetworkReport {
  network: string;
  orphanFiles: Orphan[];
  missingImports: string[]; // imported paths that don't resolve to a file on disk
  deadImports: string[]; // default imports that are never spread into the export
}

/** Recursively collect fixture `.ts` files (excluding aggregator index files). */
function findFixtureFiles(dir: string): string[] {
  const results: string[] = [];
  let entries: fs.Dirent[];

  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return results;
  }

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      results.push(...findFixtureFiles(fullPath));
    } else if (
      entry.name.endsWith('.ts') &&
      !entry.name.endsWith('.d.ts') &&
      !IGNORED_BASENAMES.has(entry.name)
    ) {
      results.push(fullPath);
    }
  }

  return results;
}

interface ParsedIndex {
  /** Absolute-from-repo-root .ts paths that the index imports as default bindings. */
  importedFiles: Set<string>;
  /** Map of local binding name -> resolved .ts file path. */
  bindingToFile: Map<string, string>;
  /** Set of local binding names that appear in a spread element anywhere in the module. */
  spreadBindings: Set<string>;
}

/** Resolve a relative import specifier (using `.js` extension) to the on-disk `.ts` file. */
function resolveImport(indexDir: string, specifier: string): string | null {
  if (!specifier.startsWith('.')) return null;
  const rel = specifier.replace(/\.js$/, '');
  const candidateFile = path.normalize(path.join(indexDir, `${rel}.ts`));

  if (fs.existsSync(candidateFile)) return candidateFile;
  const candidateIndex = path.normalize(path.join(indexDir, rel, 'index.ts'));

  if (fs.existsSync(candidateIndex)) return candidateIndex;

  return null;
}

function parseIndex(indexPath: string): ParsedIndex {
  const source = fs.readFileSync(indexPath, 'utf-8');
  const ast = parse(source, {
    sourceType: 'module',
    plugins: ['typescript'],
  });

  const indexDir = path.dirname(indexPath);
  const importedFiles = new Set<string>();
  const bindingToFile = new Map<string, string>();
  const spreadBindings = new Set<string>();

  traverse(ast, {
    ImportDeclaration(nodePath) {
      const specifier = nodePath.node.source.value;
      const resolved = resolveImport(indexDir, specifier);

      for (const spec of nodePath.node.specifiers) {
        if (spec.type === 'ImportDefaultSpecifier' || spec.type === 'ImportSpecifier') {
          if (resolved) {
            importedFiles.add(resolved);
            bindingToFile.set(spec.local.name, resolved);
          }
        }
      }
    },
    SpreadElement(nodePath) {
      const arg = nodePath.node.argument;

      if (arg.type === 'Identifier') {
        spreadBindings.add(arg.name);
      }
    },
  });

  return { importedFiles, bindingToFile, spreadBindings };
}

function auditNetwork(network: string): NetworkReport {
  const networkDir = path.join(FIXTURES_ROOT, network);
  const indexPath = path.join(networkDir, 'index.ts');

  const report: NetworkReport = {
    network,
    orphanFiles: [],
    missingImports: [],
    deadImports: [],
  };

  if (!fs.existsSync(indexPath)) {
    report.orphanFiles.push({ file: indexPath, reason: 'network index.ts not found' });

    return report;
  }

  const { importedFiles, bindingToFile, spreadBindings } = parseIndex(indexPath);
  const fixtureFiles = findFixtureFiles(networkDir).map(f => path.normalize(f));

  // 1. Orphan files: exist on disk but never imported by the index.
  for (const file of fixtureFiles) {
    if (!importedFiles.has(file)) {
      report.orphanFiles.push({ file, reason: 'not imported by index.ts' });
    }
  }

  // 2. Missing imports: index imports a path that has no file on disk.
  //    (resolveImport returns null for these, so they never enter importedFiles;
  //    re-scan the raw specifiers to catch them.)
  const source = fs.readFileSync(indexPath, 'utf-8');
  const specifierRegex = /from\s+['"](\.[^'"]+)['"]/g;
  let match: RegExpExecArray | null;

  while ((match = specifierRegex.exec(source)) !== null) {
    const specifier = match[1];

    if (resolveImport(path.dirname(indexPath), specifier) === null) {
      report.missingImports.push(specifier);
    }
  }

  // 3. Dead imports: a default binding is imported but never spread into the export.
  for (const [binding] of bindingToFile) {
    if (!spreadBindings.has(binding)) {
      report.deadImports.push(binding);
    }
  }

  return report;
}

function main(): void {
  const reports = NETWORKS.map(auditNetwork);
  let hasProblem = false;

  for (const report of reports) {
    const problems =
      report.orphanFiles.length + report.missingImports.length + report.deadImports.length;

    if (problems === 0) {
      console.log(`OK  ${report.network}: all fixture files wired.`);
      continue;
    }

    hasProblem = true;
    console.log(`\nFAIL ${report.network}: ${problems} issue(s)`);

    if (report.orphanFiles.length > 0) {
      console.log('  Orphaned fixture files (exist but not imported by index.ts):');
      for (const orphan of report.orphanFiles) {
        console.log(`    - ${orphan.file}`);
      }
    }

    if (report.deadImports.length > 0) {
      console.log('  Dead imports (imported but never spread into the exported fixtures):');
      for (const binding of report.deadImports) {
        console.log(`    - ${binding}`);
      }
    }

    if (report.missingImports.length > 0) {
      console.log('  Broken imports (index references a file that does not exist):');
      for (const specifier of report.missingImports) {
        console.log(`    - ${specifier}`);
      }
    }
  }

  if (hasProblem) {
    console.log(
      '\nFixture wiring check failed. Wire the orphaned fixtures into the network index.ts,' +
        '\nor add a justified exception to IGNORED_BASENAMES in scripts/check-fixture-wiring.ts.',
    );
    process.exit(1);
  }

  console.log('\nAll networks OK.');
}

main();

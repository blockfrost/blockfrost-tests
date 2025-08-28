import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettierFlat from 'eslint-config-prettier/flat';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

const globalIgnores = {
  ignores: [
    '**/.yarn/**',
    'node_modules/**',
    'lib/**',
    'submodules/**',
    '.eslintrc.js',
    'openapi.ts',
  ],
};

const srcRules = tseslint.config(
  { files: ['src/**/*.{js,ts,tsx}'] },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  eslintConfigPrettierFlat,
  {
    rules: {
      'no-console': 'off',
      'no-extra-boolean-cast': 'off',
      'arrow-parens': ['error', 'as-needed'],
      eqeqeq: ['error', 'always'],
      'newline-after-var': ['error', 'always'],
    },
  },
);

export default [globalIgnores, ...srcRules];

// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";
import unicorn from "eslint-plugin-unicorn";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  unicorn.configs["flat/recommended"],
  prettierConfig,
  {
    ignores: [
      "lib",
      "node_modules",
      ".eslintrc.js",
      "openapi.ts",
      ".yarn/**",
      ".yarn",
    ],

    rules: {
      "no-console": "off",
      "no-extra-boolean-cast": "off",
      "arrow-parens": [2, "as-needed"],
      //   'prettier/prettier': 2,
      eqeqeq: ["error", "always"],
      "newline-after-var": ["error", "always"],
      "unicorn/prefer-module": 0,
      "unicorn/prefer-string-raw": 0,
      "unicorn/no-zero-fractions": 0,
      "unicorn/numeric-separators-style": 0,
      "unicorn/prefer-node-protocol": 0,
      "unicorn/prefer-json-parse-buffer": 0,
      "unicorn/no-process-exit": 0,
      "unicorn/prefer-ternary": 0,
      "unicorn/no-null": "off",
      "unicorn/prevent-abbreviations": [
        "error",
        {
          allowList: {
            dbSync: true,
            CardanoDbSync: true,
            getDbSync: true,
            clientDbSync: true,
          },
        },
      ],
    },
  },
);

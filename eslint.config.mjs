import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  { files: ['src/**/*.{ts,tsx}', 'scripts/**/*.{ts,tsx}'] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  // prettierと競合するlint対応
  eslintConfigPrettier,
  // コンフィグファイルはlintから除外
  { ignores: ['*.config.{js,mjs,ts}'] },
];

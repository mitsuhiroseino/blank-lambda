import jsPlugin from '@eslint/js';
import prettierPlugin from 'eslint-config-prettier';
import globals from 'globals';
import tsPlugin from 'typescript-eslint';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  { languageOptions: { globals: globals.node } },
  ...tsPlugin.configs.recommended,
  jsPlugin.configs.recommended,
  // prettierと競合するlint対応
  prettierPlugin,
  // build配下とnode_modules配下は除外
  { ignores: ['build/**/*', 'node_modules/**/*'] },
  // コンフィグファイルはlintから除外
  { ignores: ['*.config.{js,mjs,ts}'] },
];

import normal from './prettier.config';

/** @type {import("prettier").Config} */
const config = {
  ...normal,
  organizeImportsSkipDestructiveCodeActions: false,
};
export default config;


/**
 * Specific eslint rules for this app/package, extends the base rules
 * @see https://github.com/belgattitude/perso/blob/main/docs/about-linters.md
 */

const {
  getDefaultIgnorePatterns,
} = require('@belgattitude/eslint-config-bases/helpers');

module.exports = {
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
  },
  ignorePatterns: [...getDefaultIgnorePatterns()],
  extends: [
    '@belgattitude/eslint-config-bases/typescript',
    // Apply prettier and disable incompatible rules
    '@belgattitude/eslint-config-bases/prettier',
  ],
  rules: {
    // optional overrides per project
  },
  overrides: [
    // optional overrides per project file match
  ],
};

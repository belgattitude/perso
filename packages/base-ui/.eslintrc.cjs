/**
 * Specific eslint rules for this workspace, learn how to compose
 * @link https://github.com/belgattitude/perso/tree/main/packages/eslint-config-bases
 */

// Workaround for https://github.com/eslint/eslint/issues/3458
require('@belgattitude/eslint-config-bases/patch/modern-module-resolution');

const {
  getDefaultIgnorePatterns,
} = require('@belgattitude/eslint-config-bases/helpers');

module.exports = {
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
  },
  ignorePatterns: [...getDefaultIgnorePatterns(), 'dist'],
  extends: [
    '@belgattitude/eslint-config-bases/typescript',
    '@belgattitude/eslint-config-bases/sonar',
    '@belgattitude/eslint-config-bases/regexp',
    '@belgattitude/eslint-config-bases/jest',
    '@belgattitude/eslint-config-bases/react',
    // '@belgattitude/eslint-config-bases/tailwind',
    '@belgattitude/eslint-config-bases/rtl',
    // Apply prettier and disable incompatible rules
    '@belgattitude/eslint-config-bases/prettier-plugin',
  ],
  rules: {
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    // https://medium.com/@steven-lemon182/are-typescript-barrel-files-an-anti-pattern-72a713004250
    'import/no-cycle': 2,
  },
  overrides: [
    {
      files: ['src/types.d/**/*.d.ts'],
      rules: {
        'react/display-name': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};

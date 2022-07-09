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
  /** Seems not necessary in nextjs 12 with yarn 3+
  settings: {
    next: {
      rootDir: __dirname,
    },
  },
  */
  ignorePatterns: [...getDefaultIgnorePatterns(), '.next', '.out'],
  extends: [
    '@belgattitude/eslint-config-bases/typescript',
    '@belgattitude/eslint-config-bases/sonar',
    '@belgattitude/eslint-config-bases/regexp',
    '@belgattitude/eslint-config-bases/jest',
    '@belgattitude/eslint-config-bases/react',
    '@belgattitude/eslint-config-bases/tailwind',
    '@belgattitude/eslint-config-bases/rtl',
    '@belgattitude/eslint-config-bases/graphql-schema',
    // Add specific rules for nextjs
    'next/core-web-vitals',
    // Apply prettier and disable incompatible rules
    '@belgattitude/eslint-config-bases/prettier',
  ],
  rules: {
    // Seems not necessary in nextjs 12 with yarn 3+
    // https://nextjs.org/docs/messages/no-html-link-for-pages#pagesdir
    // '@next/next/no-html-link-for-pages': ['error', `${__dirname}/src/pages`],

    // Disabled: https://github.com/vercel/next.js/discussions/16832
    '@next/next/no-img-element': 'off',

    // For the sake of example
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
  },
  overrides: [
    {
      files: ['src/config/**/*.ts', '*.config.ts'],
      rules: {
        'sonarjs/no-duplicate-string': 'off',
      },
    },
    {
      files: ['src/**/*.d.ts'],
      rules: {
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: ['src/backend/**/*graphql*schema*.ts'],
      rules: {
        '@typescript-eslint/naming-convention': [
          'error',
          {
            // Fine-tune naming convention for graphql resolvers and allow PascalCase
            selector: ['objectLiteralProperty'],
            format: ['camelCase', 'PascalCase'],
          },
        ],
      },
    },
  ],
};

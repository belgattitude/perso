// @ts-check

const { getTsconfig } = require('get-tsconfig');
const { pathsToModuleNameMapper } = require('ts-jest');
const { defaults: tsPreset } = require('ts-jest/presets');

const { getJestCachePath } = require('../../cache.config');

const packageJson = require('./package.json');

const tsConfigFile = './tsconfig.jest.json';

/**
 * Transform the tsconfig paths into jest compatible one (support extends)
 * @param {string} tsConfigFile
 */
const getTsConfigBasePaths = (tsConfigFile) => {
  const parsedTsConfig = getTsconfig(tsConfigFile);
  if (parsedTsConfig === null) {
    throw new Error(`Cannot find tsconfig file: ${tsConfigFile}`);
  }
  const tsPaths = parsedTsConfig.config.compilerOptions?.paths;
  return tsPaths
    ? pathsToModuleNameMapper(tsPaths, {
        prefix: '<rootDir>/',
      })
    : {};
};

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const config = {
  displayName: `${packageJson.name}:unit`,
  cacheDirectory: getJestCachePath(packageJson.name),
  testEnvironment: 'jsdom',
  verbose: true,
  rootDir: './src',
  transform: {
    ...tsPreset.transform,
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testMatch: ['<rootDir>/**/*.{spec,test}.{js,jsx,ts,tsx}'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
    '\\.svg$': '<rootDir>/../config/tests/ReactSvgrMock.tsx',
    ...getTsConfigBasePaths(tsConfigFile),
  },
  // false by default, overrides in cli, ie: yarn test:unit --collect-coverage=true
  collectCoverage: false,
  coverageDirectory: '<rootDir>/../coverage',
  collectCoverageFrom: [
    '<rootDir>/**/*.{ts,tsx,js,jsx}',
    '!**/*.test.{js,ts}',
    '!**/__mock__/*',
  ],
  globals: {
    'ts-jest': {
      diagnostics: false,
      tsconfig: tsConfigFile,
    },
  },
};

module.exports = config;

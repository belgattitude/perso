// @ts-check
import { pathsToModuleNameMapper } from 'ts-jest';
import getTsconfig from 'get-tsconfig';
import { getJestCachePath } from '../../cache.config.js';

const tsConfigFile = new URL('./tsconfig.json', import.meta.url).pathname;

/**
 * Transform the tsconfig paths into jest compatible one
 * @param {string} tsConfigFile
 */
const getTsConfigBasePaths = (tsConfigFile) => {
  const parsedTsConfig = getTsconfig(tsConfigFile);
  if (parsedTsConfig === null) {
    throw new Error(`Cannot find tsconfig file: ${tsConfigFile}`);
  }
  const tsPaths = parsedTsConfig.config.compilerOptions?.paths ?? {};

  return Object.entries(tsPaths).length > 0
    ? // @ts-ignore
      pathsToModuleNameMapper(tsPaths, {
        prefix: '<rootDir>/',
      })
    : {};
};

/** @type {import('ts-jest/dist').InitialOptionsTsJest} */
const config = {
  displayName: `crypto:unit`,
  preset: 'ts-jest/presets/default-esm',
  cacheDirectory: getJestCachePath('@belgattitude/ts-utils'),
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  verbose: true,
  rootDir: './src',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testMatch: ['<rootDir>/**/*.{spec,test}.{js,jsx,ts,tsx}'],
  moduleNameMapper: {
    ...getTsConfigBasePaths(tsConfigFile),
  },
  // false by default, overrides in cli, ie: yarn test:unit --collect-coverage=true
  collectCoverage: false,
  coverageDirectory: '<rootDir>/../coverage',
  collectCoverageFrom: ['<rootDir>/**/*.{ts,tsx,js,jsx}', '!**/*.test.ts'],
  globals: {
    'ts-jest': {
      useESM: true,
      tsconfig: './tsconfig.json',
    },
  },
};

export default config;

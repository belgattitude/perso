/* eslint-disable sonarjs/no-duplicate-string */

import { createRequire } from 'node:module';
import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
const require = createRequire(import.meta.url);

const pkg = require('./package.json');

const external = [
  ...Object.keys(pkg.dependencies ?? {}),
  ...Object.keys(pkg?.peerDependencies ?? {}),
];

const distDir = './dist';

const ecmascriptLevel = 'es2017';

const getTerserPlugin = (format) => {
  return terser({
    compress: true,
    format,
  });
};

/**
 *
 * @param format
 * @param minify
 * @returns {Plugin}
 */
const getEsbuildPlugin = (format, minify) => {
  return esbuild({
    format,
    tsconfig: './tsconfig.build.json',
    sourceMap: false,
    treeShaking: true,
    platform: 'neutral',
    //target: [ecmascriptLevel],
    target: 'es2017',
    minify: minify,
    minifyWhitespace: minify, // setting to false allows to create patches
    minifyIdentifiers: minify,
  });
};

export default () => [
  // ESM
  {
    input: ['./src/index.ts'],
    preserveModules: true,
    external,
    plugins: [getEsbuildPlugin('esm', true)],
    output: {
      dir: `${distDir}/esm`,
      format: 'esm',
      sourcemap: false,
    },
  },
  // CJS
  {
    input: ['./src/index.ts'],
    preserveModules: false,
    external,
    plugins: [getEsbuildPlugin('esm', true)],
    output: {
      dir: `${distDir}/cjs`,
      format: 'cjs',
      sourcemap: false,
    },
  },
  // Typings
  {
    input: './src/index.ts',
    output: {
      file: `${distDir}/types/index.d.ts`,
    },
    external,
    plugins: [
      dts({
        compilerOptions: {
          tsBuildInfoFile: './tsconfig.tsbuildinfo.dts',
        },
      }),
    ],
  },
];

/* eslint-disable sonarjs/no-duplicate-string */

import { createRequire } from 'node:module';
import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import { terser } from 'rollup-plugin-terser';
const require = createRequire(import.meta.url);

const pkg = require('./package.json');

const external = [
  ...Object.keys(pkg.dependencies ?? {}),
  ...Object.keys(pkg?.peerDependencies ?? {}),
];

const distDir = './dist';

// Terser seems to give slightly bigger sizes than esbuild, but
// looks to give a better tree-shakable output (based on size-limit/webpack)
const useTerser = true;

const getEsbuildPlugin = (minify) => {
  return esbuild({
    tsconfig: './tsconfig.build.json',
    sourceMap: false,
    platform: 'neutral',
    target: 'es2017',
    minify: minify,
    treeShaking: true,
    minifyWhitespace: minify, // setting to false allows to create patches
    minifyIdentifiers: minify,
  });
};

export default () => [
  // ESM
  {
    input: ['./src/index.ts'],
    preserveModules: false,
    external,
    plugins: [getEsbuildPlugin(!useTerser)],
    output: {
      dir: `${distDir}/esm`,
      format: 'esm',
      sourcemap: false,
      plugins: [...(useTerser ? [terser()] : [])],
    },
  },
  // CJS
  {
    input: ['./src/index.ts'],
    preserveModules: false,
    external,
    plugins: [getEsbuildPlugin(!useTerser)],
    output: {
      dir: `${distDir}/cjs`,
      format: 'cjs',
      sourcemap: false,
      plugins: [...(useTerser ? [terser()] : [])],
    },
  },
  // UMD
  {
    input: ['./src/index.ts'],
    preserveModules: false,
    external,
    plugins: [getEsbuildPlugin(true)],
    output: {
      file: 'dist/umd/errorh.umd.js',
      name: `errorh`,
      format: 'umd',
      sourcemap: true,
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
          sourceMap: false,
          tsBuildInfoFile: './tsconfig.tsbuildinfo.dts',
        },
      }),
    ],
  },
];

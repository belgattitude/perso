import { createRequire } from 'node:module';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
const require = createRequire(import.meta.url);

const pkg = require('./package.json');

const external = [
  ...Object.keys(pkg.dependencies ?? {}),
  ...Object.keys(pkg?.peerDependencies ?? {}),
];

const distDir = './dist';

const plugins = [
  nodeResolve(),
  esbuild({
    tsconfig: './tsconfig.build.json',
    sourceMap: false,
    platform: 'neutral',
    target: 'es2017',
    minify: true,
    treeShaking: true,
    minifyWhitespace: true, // setting to false allows to create patches
    minifyIdentifiers: true,
    minifySyntax: true,
  }),
];

export default () => [
  // ESM
  {
    input: ['./src/index.ts'],
    preserveModules: false,
    external,
    plugins,
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
    plugins: [...plugins],
    output: {
      dir: `${distDir}/cjs`,
      format: 'cjs',
      sourcemap: false,
    },
  },
  // UMD
  {
    input: ['./src/index.ts'],
    preserveModules: false,
    external,
    plugins: [...plugins],
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

import { defineConfig } from 'tsup';

export default defineConfig((options) => {
  return {
    entry: ['src/index.ts'],
    splitting: true,
    clean: true,
    dts: true,
    format: ['esm'],
    platform: 'node',
    target: ['node14'],
    tsconfig: new URL('./tsconfig.build.json', import.meta.url).pathname,
    sourcemap: !options.watch,
    minify: false, // do not minify for a node package, so it's possible to patch the code (yarn patch / patch-package)
  };
});

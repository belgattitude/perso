import { defineConfig } from 'tsup';

export default defineConfig((options) => {
  return {
    entry: ['src/index.ts'],
    splitting: true,
    clean: true,
    dts: true,
    tsconfig: './tsconfig.build.json',
    sourcemap: !options.watch,
    minify: !options.watch,
  };
});

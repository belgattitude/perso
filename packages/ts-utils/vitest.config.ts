/// <reference types="vitest" />
/// <reference types="vite/client" />

import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

const testFiles = ['./src/**/*.test.{js,ts}'];

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    environment: 'node',
    passWithNoTests: false,
    include: testFiles,
    coverage: {
      reporter: ['text', 'clover'],
      extension: ['js', 'jsx', 'ts', 'tsx'],
    },
  },
});

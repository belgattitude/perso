import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

const testFiles = ['./src/**/*.test.{js,ts}'];

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    environment: 'node',
    passWithNoTests: false,
    cache: {
      dir: '../../.cache/vitest/failwell',
    },
    setupFiles: './config/test/setupVitest.ts',
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'clover'],
      extension: ['js', 'jsx', 'ts', 'tsx'],
    },
    include: testFiles,
    // To mimic Jest behaviour regarding mocks.
    // @link https://vitest.dev/config/#clearmocks
    clearMocks: true,
    mockReset: true,
    restoreMocks: true,
    exclude: [
      '**/node_modules/**',
      'dist/**',
      '**/coverage/**',
      '**/.{idea,git,cache,output,temp}/**',
    ],
  },
});

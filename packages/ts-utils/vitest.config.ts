/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    // environment: 'happy-dom',
    passWithNoTests: false,
    exclude: ['**/e2e/**'],
    // setupFiles: './config/tests/setupVitest.ts',
  },
});

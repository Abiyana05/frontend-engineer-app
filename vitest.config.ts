import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts', // create this file
    exclude: [
      'node_modules',
      'dist',
      '.storybook',          // ignore Storybook
      '**/*.stories.tsx',    // ignore all stories
    ],
  },
});

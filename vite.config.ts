/// <reference types="vitest" />

import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    __GLOBAL__: process.env.GLOBAL
  },
  test: {
    // Remove the `pool` option to make the test pass
    pool: 'forks'
  }
});

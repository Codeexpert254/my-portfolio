import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import envCompatible from 'vite-plugin-env-compatible';

export default defineConfig({
  envPrefix: 'REACT_APP_',
  plugins: [
    react(),
    envCompatible(),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  test: {
    globals: true, // Allows using global `test`, `expect`, etc.
    environment: 'jsdom', // Emulates a browser-like environment
    setupFiles: './setupTests.js', // Optional: for custom setup
  },
  server: {
    port: 3000,
  },
});

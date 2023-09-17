import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // '@components': path.resolve(__dirname, './src/components'),
      // '@routes': path.resolve(__dirname, './src/routes'),
      // '@utils': path.resolve(__dirname, './src/utils'),
      // '@feature': path.resolve(__dirname, './src/feature'),
      // '@api': path.resolve(__dirname, './src/api'),
      // '@core': path.resolve(__dirname, './src/core'),
      // '@store': path.resolve(__dirname, './src/store'),
      // '@hooks': path.resolve(__dirname, './src/hooks'),
    },
  },
  plugins: [react()],
  server: {
    port: 3001,
  },
});
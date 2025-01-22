import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import svgr from '@svgr/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // svgr()
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
  server: {
    host: '127.0.0.1',
  },
});

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['projectData.json'],
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
});
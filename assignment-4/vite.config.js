import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/webdev-main/assignment-4/',
  plugins: [react()]
});
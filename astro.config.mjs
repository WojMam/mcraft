import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://wojmam.github.io',
  base: '/mcraft',
  vite: {
    plugins: [tailwindcss()],
  },
});

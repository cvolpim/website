import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://cvolpim.github.io',
  base: '/website',
  trailingSlash: 'always',
  output: 'static',
  integrations: [sitemap()],
});

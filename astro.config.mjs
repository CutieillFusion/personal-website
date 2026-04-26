import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dylannorquist.codes',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/blog'),
    }),
  ],
});

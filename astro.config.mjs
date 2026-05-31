// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://personal-website.a0972210123.workers.dev',
  output: 'static',
  adapter: cloudflare(),
});
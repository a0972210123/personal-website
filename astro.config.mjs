// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // update when custom domain is ready
  site: 'https://a0972210123.github.io',

  output: 'static',
  adapter: cloudflare(),
});
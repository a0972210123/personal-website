// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, statSync } from 'fs';
import { join, relative } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

function findPublicHtmlPages(publicDir, siteUrl) {
  const pages = [];
  function scan(dir) {
    for (const entry of readdirSync(dir)) {
      const fullPath = join(dir, entry);
      if (statSync(fullPath).isDirectory()) {
        scan(fullPath);
      } else if (entry === 'index.html') {
        const rel = relative(publicDir, dir);
        pages.push(`${siteUrl}/${rel}/`);
      }
    }
  }
  scan(publicDir);
  return pages;
}

const publicPages = findPublicHtmlPages(join(__dirname, 'public'), 'https://mattye.dev');

export default defineConfig({
  site: 'https://mattye.dev',
  output: 'static',
  integrations: [sitemap({
    customPages: publicPages,
    // keep unlinked prototype/lab pages out of the sitemap (also noindex'd)
    filter: (page) => !page.includes('/projects/globe-lab'),
  })],
});

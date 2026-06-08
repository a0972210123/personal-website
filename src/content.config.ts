import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    lang: z.enum(['zh', 'en']).default('zh'),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
    series: z.string().optional(),
  }),
});

export const collections = { blog };

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Cada archivo .md dentro de src/content/blog se vuelve un post automáticamente.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string().default('Arquitectura'),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };

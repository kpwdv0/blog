import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['math', 'cs', 'essays', 'misc']),
    readTime: z.number().int().positive(),
    description: z.string().optional(),
    thumbnail: z.string().optional(),
    featured: z.boolean().default(false),
    published: z.boolean().default(true),
  }),
});

export const collections = { posts };

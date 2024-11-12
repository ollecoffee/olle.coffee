import { glob } from 'astro/loaders';
import { defineCollection, z, type InferEntrySchema } from 'astro:content';

export type BlogSchema = InferEntrySchema<'blog'>;

const blogCollection = defineCollection({
    loader: glob({ pattern: '**\/[^_]*.mdx', base: "./src/content/blog" }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            pubDate: z.coerce.date(),
            updatedDate: z.optional(z.string()),
            heroImage: z.optional(image()),
            badge: z.optional(z.string()),
            tags: z
                .optional(
                    z.array(z.string()).refine((items) => new Set(items).size === items.length, {
                        message: 'tags must be unique',
                    })
                ),
            video: z.optional(z.string()),
        }),
});

export const collections = {
    blog: blogCollection,
};
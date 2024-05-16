import { z, defineCollection } from "astro:content";

const blog = defineCollection({
    schema: ({image}) =>
        z.object({
            title: z.string(),
            description: z.string(),
            pubDate: z.coerce.date(),
            updatedDate: z.string().optional(),
            heroImage: image().optional(),
            badge: z.string().optional(),
            tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
                message: 'tags must be unique',
            }).optional(),
            video: z.string().optional(),
        })
});

export const collections = {
    'blog': blog,
}
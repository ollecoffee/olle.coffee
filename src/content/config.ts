import { z, defineCollection } from "astro:content";

const blogSchema =
     ({image}) =>
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

export type BlogSchema = z.infer<typeof blogSchema>;

const blogCollection = defineCollection({ schema: blogSchema,
    type: 'content'});

export const collections = {
    'blog': blogCollection,
}
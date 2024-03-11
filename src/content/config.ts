import { z, defineCollection } from "astro:content";

const notesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()).optional(),
        isDraft: z.boolean(),
        publishDate: z.date(),
        updatedDate: z.date(),
    })
});

export const collections = {
    'notes': notesCollection,
};
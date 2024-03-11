import { z, defineCollection } from "astro:content";

const notesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()).optional(),
        isDraft: z.boolean(),
        publishDate: z.coerce.date(),
        updatedDate: z.coerce.date(),
    })
});

export const collections = {
    'notes': notesCollection,
};
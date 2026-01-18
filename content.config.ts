import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      type: 'page',
      source: 'articles/*.md',
      schema: z.object({
        title: z.string(),
        date: z.string(),
        category: z.string(),
        author: z.object({
          name: z.string(),
          role: z.string(),
          avatar: z.string().optional(),
        }),
        readingTime: z.number(),
        hero: z.string(),
        showPromoCard: z.boolean().optional(),
        carousel: z.array(z.string()).optional(),
        relatedArticles: z.array(z.object({
          id: z.string(),
          title: z.string(),
          image: z.string(),
          category: z.string().optional(),
          date: z.string().optional(),
          excerpt: z.string().optional(),
        })).optional(),
      }),
    }),
  },
})

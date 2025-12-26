import { z } from 'zod'

export const productSchema = z.object({
  name: z.string(),
  price: z.number(),
  short_description: z.string(),
  long_description: z.string(),
  sku: z.string(),
  discount: z.number(),
  images: z.array(z.string()),
  category_id: z.number()
})

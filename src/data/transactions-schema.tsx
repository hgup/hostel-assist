import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const transactions = z.object({
  id: z.number(),
  particulars: z.string(),
  amount: z.number(),
  date: z.string(),
  place: z.string(),
  commodityId: z.number(),
  acaYear: z.string(),
})

export type Transaction = z.infer<typeof transactions>

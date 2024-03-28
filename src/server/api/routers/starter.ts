import { z } from 'zod'
import { createTRPCRouter, publicProcedure } from '../trpc'

export const starterRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.starter.findMany()
  })
})

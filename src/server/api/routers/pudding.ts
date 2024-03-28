import { z } from 'zod'
import { createTRPCRouter, publicProcedure } from '../trpc'

export const puddingRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.pudding.findMany()
  })
})

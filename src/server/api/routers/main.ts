import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const mainRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.main.findMany();
  }),
});

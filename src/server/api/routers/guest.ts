import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const guestRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.guest.findMany();
  }),
});

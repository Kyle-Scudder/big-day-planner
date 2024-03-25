import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { guestRouter } from "~/server/api/routers/guest";
import { starterRouter } from "./routers/starter";
import { mainRouter } from "./routers/main";
import { puddingRouter } from "./routers/pudding";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  guest: guestRouter,
  starter: starterRouter,
  main: mainRouter,
  pudding: puddingRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);

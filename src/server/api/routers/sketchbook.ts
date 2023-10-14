import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const sketchbookRouter = createTRPCRouter({
  getById: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.db.sketchbook.findMany({
      take: 10,
      where: {
        authorId: input,
      }
    });
  }),
});





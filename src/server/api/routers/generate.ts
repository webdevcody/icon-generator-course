import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const generateRouter = createTRPCRouter({
  generateIcon: publicProcedure
    .input(
      z.object({
        prompt: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      console.log("we are here", input.prompt);
      return {
        message: "success",
      };
    }),
});

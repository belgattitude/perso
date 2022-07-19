import path from 'node:path';
import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { z } from 'zod';
import { prismaDbMain } from '@/backend/config';
import {
  GetMarkdownFilesFromFs,
  GetMarkdownFilesFromFsCommand,
} from '@/backend/features/blog';

export const appRouter = trpc
  .router()
  .query('hello', {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `hello ${input?.text ?? 'world'}`,
      };
    },
  })
  .query('blog/test', {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      const blogDirectory = path.join(process.cwd(), '/src/data/blog');
      const uc = new GetMarkdownFilesFromFs();
      return uc.execute(GetMarkdownFilesFromFsCommand.create(blogDirectory));
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});

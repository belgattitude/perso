import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { customAlphabet } from 'nanoid';
import { generateSlug } from 'random-word-slugs';
import { z } from 'zod';
import { prismaDbMain } from '@/backend/config';
import { getProjectFormSchema } from '@/features/poc/components/ProjectForm';

const createProjectSlug = () => {
  const nanoid = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyz', 5);
  return generateSlug(3, { format: 'kebab' }) + '-' + nanoid(5);
};

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
  .mutation('poc/create_project', {
    input: getProjectFormSchema(),
    async resolve({ input }) {
      const slug = createProjectSlug();
      return await prismaDbMain.pocProject.create({
        data: {
          slug,
          ...input,
        },
      });
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});

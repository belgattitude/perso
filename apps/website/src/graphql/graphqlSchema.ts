import type { DbMainPrismaTypes } from '@belgattitude/db-main';
import SchemaBuilder from '@pothos/core';
import ErrorsPlugin from '@pothos/plugin-errors';
import PrismaPlugin from '@pothos/plugin-prisma';
import type { Prisma } from '@prisma/client';
import { prismaDbMain } from '@/backend/config';

const builder = new SchemaBuilder<{
  // eslint-disable-next-line @typescript-eslint/naming-convention
  PrismaTypes: DbMainPrismaTypes;
}>({
  plugins: [ErrorsPlugin, PrismaPlugin],
  /**
  prisma: {
    client: prismaDbMain,
  }, */
  prisma: {
    client: (_ctx) => prismaDbMain,
    // Because the prisma client is loaded dynamically, we need to explicitly pass the builder some information about the prisma schema
    // eslint-disable-next-line @typescript-eslint/naming-convention
    dmmf: (prismaDbMain as unknown as { _dmmf: Prisma.DMMF.Document })._dmmf,
  },
  errorOptions: {
    defaultTypes: [],
  },
});

builder.prismaObject('User', {
  findUnique: (user) => ({ id: user.id }),
  fields: (t) => ({
    id: t.exposeID('id'),
    email: t.exposeString('email'),
    posts: t.relation('Post', {
      args: {
        oldestFirst: t.arg.boolean(),
      },
      query: (args, _context) => ({
        orderBy: {
          createdAt: args.oldestFirst ? 'asc' : 'desc',
        },
      }),
    }),
  }),
});

builder.prismaObject('Post', {
  findUnique: (post) => ({ id: post.id }),
  fields: (t) => ({
    id: t.exposeID('id'),
    title: t.exposeString('title'),
    content: t.exposeString('content'),
  }),
});

builder.queryType({
  fields: (t) => ({
    hello: t.string({
      args: {
        name: t.arg.string(),
      },
      resolve: (parent, { name }) => `hello, ${name || 'World'}`,
    }),
    me: t.prismaField({
      type: 'User',
      args: {
        id: t.arg.int({ required: true }),
      },
      resolve: async (query, root, args, _ctx, _info) =>
        prismaDbMain.user.findUnique({
          // the `query` argument will add in `include`s or `select`s to
          // resolve as much of the request in a single query as possible
          ...query,
          rejectOnNotFound: true,
          where: { id: args.id },
        }),
    }),
  }),
});

export const graphqlSchema = builder.toSchema({});

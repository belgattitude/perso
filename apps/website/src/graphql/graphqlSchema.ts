import type { DbMainPrismaTypes, PrismaDbMain } from '@belgattitude/db-main';
import SchemaBuilder from '@pothos/core';
import ErrorsPlugin from '@pothos/plugin-errors';
import PrismaPlugin from '@pothos/plugin-prisma';
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
    dmmf: (prismaDbMain as unknown as { _dmmf: PrismaDbMain.DMMF.Document })
      ._dmmf,
  },
  errorOptions: {
    defaultTypes: [],
  },
});

builder.prismaObject('Contact', {
  findUnique: (contact) => ({ id: contact.id }),
  fields: (t) => ({
    id: t.exposeID('id'),
    email: t.exposeString('email'),
  }),
});

builder.prismaObject('MeetingAttendee', {
  findUnique: (attendee) => ({ id: attendee.id }),
  fields: (t) => ({
    id: t.exposeID('id'),
    role: t.exposeString('role'),
  }),
});

builder.prismaObject('Meeting', {
  findUnique: (meeting) => ({ id: meeting.id }),
  fields: (t) => ({
    id: t.exposeID('id'),
    slug: t.exposeString('slug'),
    title: t.exposeString('title'),
    description: t.exposeString('description'),
    status: t.exposeString('status'),
    meetProvider: t.exposeString('meetProvider', { nullable: true }),
    meetProviderUrl: t.exposeString('meetProviderUrl', { nullable: true }),

    MeetingAttendees: t.relation('MeetingAttendees', {
      query: (_args, _context) => ({
        orderBy: {
          createdAt: 'asc',
        },
      }),
    }),
  }),
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
    getMeeting: t.prismaField({
      type: 'Meeting',
      args: {
        slug: t.arg.string({ required: true }),
      },
      resolve: async (query, root, args, _ctx, _info) => {
        return prismaDbMain.meeting.findUniqueOrThrow({
          // the `query` argument will add in `include`s or `select`s to
          // resolve as much of the request in a single query as possible
          ...query,
          where: { slug: args.slug },
        });
      },
    }),
    me: t.prismaField({
      type: 'User',
      args: {
        id: t.arg.int({ required: true }),
      },
      resolve: async (query, root, args, _ctx, _info) => {
        return prismaDbMain.user.findUniqueOrThrow({
          // the `query` argument will add in `include`s or `select`s to
          // resolve as much of the request in a single query as possible
          ...query,
          where: { id: args.id },
        });
      },
    }),
  }),
});

export const graphqlSchema = builder.toSchema({});

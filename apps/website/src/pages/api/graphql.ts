import { readFileSync } from 'node:fs';
import { createServer } from '@graphql-yoga/node';

import resolvers from '@/graphql/resolvers';

const typeDefs = readFileSync('src/graphql/schema.graphql', 'utf8');

const server = createServer({
  schema: {
    typeDefs,
    resolvers,
  },
  endpoint: '/api/graphql',
  graphiql: true,
});

export default server;

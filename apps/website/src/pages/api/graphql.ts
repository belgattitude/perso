import { createServer } from '@graphql-yoga/node';
import { graphqlSchema } from '@/graphql/graphqlSchema';

const server = createServer({
  schema: graphqlSchema,
  endpoint: '/api/graphql',
  graphiql: true,
});

export default server;

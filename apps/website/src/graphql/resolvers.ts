import type { Resolvers } from './generated/resolvers-types';

const resolvers: Resolvers = {
  Query: {
    getRandomPost(_parent, _args, _context, _info) {
      return {
        id: '1',
        slug: 'cool',
        title: 'Hello les amis',
        content: 'This is the post content',
      };
    },
  },
};

export default resolvers;

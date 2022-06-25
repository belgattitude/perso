import { PrismaAdapter } from '@next-auth/prisma-adapter';
import type { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import { prismaDbMain } from '@/backend/config';

export const authOptions: NextAuthOptions = {
  providers: [],
  adapter: PrismaAdapter(prismaDbMain),
  theme: {
    colorScheme: 'light',
  },
  callbacks: {
    async jwt({ token }) {
      token.userRole = 'guest';
      return token;
    },
  },
};

export default NextAuth(authOptions);

import { PrismaAdapter } from '@next-auth/prisma-adapter';
import type { NextAuthOptions, User, Session } from 'next-auth';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { match } from 'ts-pattern';
import { prismaDbMain } from '@/backend/config';
import { LoginCommand } from '@/backend/features/auth/login/login.command';
import { LoginUseCase } from '@/backend/features/auth/login/login.usecase';

const oneDayInSeconds = 86400;

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prismaDbMain),
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const login = new LoginUseCase(prismaDbMain);
        const cmd = LoginCommand.create(
          credentials?.username ?? '',
          credentials?.password ?? ''
        );
        const r = await login.execute(cmd);
        return match(r.payload)
          .with({ isError: true }, ({ error }) => {
            throw error;
          })
          .with({ isError: false }, ({ value }) => {
            return {
              id: value.id.toString(),
              name: value.username,
              email: value.email,
              role: value.role,
              image: undefined,
            } as User & { role: string; id: string };
          })
          .exhaustive();
      },
    }),
  ],
  theme: {
    colorScheme: 'light',
  },
  session: {
    strategy: 'jwt',
  },
  /**
  session: {
    // When using `"database"`, the session cookie will only contain a `sessionToken` value,
    // which is used to look up the session in the database.
    strategy: 'jwt',
    maxAge: oneDayInSeconds * 30,
    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    // updateAge: 24 * 60 * 60, // 24 hours
  }, */
  jwt: {
    // The maximum age of the NextAuth.js issued JWT in seconds.
    // Defaults to `session.maxAge`.
    maxAge: oneDayInSeconds * 30,
    // You can define your own encode/decode functions for signing and encryption
    // async encode() {},
    // async decode() {},
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async session({ session, token, user }) {
      const sess: Session = {
        ...session,
        user: {
          ...session.user,
          // id: token.id as string,
          // role: token.role as string,
        },
      };

      return sess;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
  },
  pages: {
    signIn: '/auth/login',
    /*
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
    */
  },
};

export default NextAuth(authOptions);

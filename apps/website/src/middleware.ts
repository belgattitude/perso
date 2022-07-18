import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized: ({ req, token }) =>
      // /admin requires admin role, but /me only requires the user to be logged in.
      req.nextUrl.pathname !== '/admin' || token?.userRole === 'admin',
  },
});

export const config = { matcher: ['/admin', '/me'] };

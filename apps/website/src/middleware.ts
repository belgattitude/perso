import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized: ({ req, token }) => {
      const { pathname = '' } = req.nextUrl;
      if (pathname.startsWith('/admin')) {
        return token?.role === 'admin';
      }
      if (pathname.startsWith('/u')) {
        return ['admin', 'user'].includes(token?.role ?? '');
      }
      return true;
    },
  },
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - static (static files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|static|favicon.ico).*)',
    // All under admin will be matched
    '/admin/:path*',
    // All under /u
    '/u/:path*',
  ],
};

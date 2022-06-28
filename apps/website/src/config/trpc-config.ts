import type { withTRPC } from '@trpc/next';

export type WithTrpcConfig = Parameters<typeof withTRPC>[0];

export const getWithTrpcConfig = (): WithTrpcConfig => {
  let url = '';
  if (process.env.NODE_ENV === 'development') {
    url = 'http://localhost:3000/api/trpc';
  } else if (process.env.VERCEL_URL) {
    url = `https://${process.env.VERCEL_URL}/api/trpc`;
  } else {
    throw new Error('Cannot get vercel url');
  }

  return {
    config({ ctx }) {
      // const url = '/api/trpc';
      return {
        url,
        // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
      };
    },
    // disabled because of incompatibilities with react-i18next
    // https://github.com/trpc/trpc/issues/1507
    ssr: false,
  };
};

import type { withTRPC } from '@trpc/next';

export type WithTrpcConfig = Parameters<typeof withTRPC>[0];

const isServer = () => {
  return typeof window === 'undefined';
};

export const getWithTrpcConfig = (): WithTrpcConfig => {
  const vercelUrl =
    process.env.VERCEL_URL || process.env.NEXT_PUBLIC_VERCEL_URL;
  const localDevUrl =
    process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : false;

  let url = '/api/trpc';
  if (isServer()) {
    if (localDevUrl) {
      url = `${localDevUrl}${url}`;
    } else {
      url = `${vercelUrl}/${url}`;
    }
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

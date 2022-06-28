import { withTRPC } from '@trpc/next';
import type { NextPage } from 'next';
import { appWithTranslation } from 'next-i18next';
import type { AppProps as NextAppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import { getWithTrpcConfig } from '@/config/trpc-config';
import { MainLayout } from '@/layouts/main';
import { AppProviders } from '../app-providers';
import type { AppRouter } from './api/trpc/[...trpc]';
/**
 * Import global styles for tailwind compatibility
 */
import '../styles/global.css';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

// Workaround for https://github.com/zeit/next.js/issues/8592
export type AppProps = NextAppProps & {
  /** Will be defined only is there was an error */
  err?: Error;
} & {
  Component: NextPageWithLayout;
};

/**
 * @link https://nextjs.org/docs/advanced-features/custom-app
 */
const MyApp = (appProps: AppProps) => {
  const { Component, pageProps, err } = appProps;

  const getLayout =
    Component.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>);

  return (
    <AppProviders>
      {/* Workaround for https://github.com/vercel/next.js/issues/8592 */}
      {getLayout(<Component {...pageProps} err={err} />)}
    </AppProviders>
  );
};

/*
export default appWithTranslation(
  withTRPC<AppRouter>(trpcConfig)(MyApp) as unknown as any // eslint-disable-line @typescript-eslint/no-explicit-any
);
*/

export default withTRPC<AppRouter>(getWithTrpcConfig())(
  appWithTranslation(MyApp)
);

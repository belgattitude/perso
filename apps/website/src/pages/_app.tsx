import { withTRPC } from '@trpc/next';
import type { NextComponentType, NextPageContext } from 'next';
import type { Session } from 'next-auth';
import type { SSRConfig } from 'next-i18next';
import { appWithTranslation } from 'next-i18next';
import type { AppProps as NextAppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import { getWithTrpcConfig } from '@/config/trpc.config';
import { MainLayout } from '@/themes/layouts/main';
import { AppProviders } from '../AppProviders';
import type { AppRouter } from './api/trpc/[...trpc]';

/**
 * Import global styles for tailwind compatibility
 */
import '../themes/styles/global.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type NextPageWithLayout = NextComponentType<NextPageContext, any, any> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

// Workaround for https://github.com/zeit/next.js/issues/8592
export type AppProps = NextAppProps<
  {
    session?: Session;
  } & SSRConfig
> & {
  /** Will be defined only is there was an error */
  err?: Error;
} & {
  Component: NextPageWithLayout;
};

/**
 * @link https://nextjs.org/docs/advanced-features/custom-app
 */
const MyApp = (appProps: AppProps) => {
  const { Component, pageProps } = appProps;

  const getLayout =
    Component.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>);

  return (
    <AppProviders session={pageProps.session}>
      {getLayout(<Component {...pageProps} />)}
    </AppProviders>
  );
};

export default withTRPC<AppRouter>(getWithTrpcConfig())(
  appWithTranslation<AppProps>(MyApp)
);

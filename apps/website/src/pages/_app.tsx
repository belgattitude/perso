import type { EmotionCache } from '@emotion/react';
import type { NextPage } from 'next';
import { appWithTranslation } from 'next-i18next';
import type { AppProps as NextAppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import { MainLayout } from '@/layouts/main';
import { AppProviders } from '../app-providers';

/**
 * Import global styles for tailwind compatibility
 */
import '../styles/global.css';

// Workaround for https://github.com/zeit/next.js/issues/8592
export type AppProps = NextAppProps & {
  /** Will be defined only is there was an error */
  err?: Error;
  emotionCache?: EmotionCache;
} & {
  Component: NextPageWithLayout;
};

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

/**
 * @link https://nextjs.org/docs/advanced-features/custom-app
 */
const MyApp = (appProps: AppProps) => {
  const { Component, pageProps, emotionCache, err } = appProps;

  const getLayout =
    Component.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>);

  return (
    <AppProviders emotionCache={emotionCache}>
      <MainLayout>
        {/* Workaround for https://github.com/vercel/next.js/issues/8592 */}
        {getLayout(<Component {...pageProps} err={err} />)}
      </MainLayout>
    </AppProviders>
  );
};

export default appWithTranslation(MyApp);

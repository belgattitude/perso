import Head from 'next/head';
import type { FC, ReactNode } from 'react';
import { MainLayoutFavicon } from '@/layouts/main/head';
import { EmptyLayoutFonts, EmptyLayoutMeta } from './Head';

type Props = {
  children: ReactNode;
};

export const EmptyLayout: FC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <Head>
        <EmptyLayoutMeta />
        <MainLayoutFavicon />
        <EmptyLayoutFonts />
      </Head>
      {children}
    </>
  );
};

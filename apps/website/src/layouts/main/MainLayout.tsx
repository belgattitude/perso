import Head from 'next/head';
import type { FC, ReactNode } from 'react';
import { TopNav } from '@/components/navbar';
import { MainLayoutFavicon, MainLayoutFonts, MainLayoutMeta } from './head';

type Props = {
  children: ReactNode;
};

export const MainLayout: FC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <Head>
        <MainLayoutMeta />
        <MainLayoutFavicon />
        <MainLayoutFonts />
      </Head>
      <TopNav />
      {children}
    </>
  );
};

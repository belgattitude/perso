import Head from 'next/head';
import type { FC, ReactNode } from 'react';
import { TopNav } from '@/components/navbar/topnav';
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
      <div className="flex min-h-screen flex-col justify-between">
        <main className="relative pt-16">{children}</main>
      </div>
    </>
  );
};

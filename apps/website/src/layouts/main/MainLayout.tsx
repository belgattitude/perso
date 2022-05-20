import Head from 'next/head';
import type { FC, ReactNode } from 'react';
import { TopNav } from '@/components/nav/topnav';
import { siteConfig } from '@/config';
import { MainLayoutFavicon, MainLayoutFonts, MainLayoutMeta } from './head';

type Props = {
  children: ReactNode;
};

const { navLinks, iconLinks } = siteConfig.topNav;

export const MainLayout: FC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <Head>
        <MainLayoutMeta />
        <MainLayoutFavicon />
        <MainLayoutFonts />
      </Head>
      <TopNav navLinks={navLinks} iconLinks={iconLinks} />
      <div className="flex flex-col justify-between min-h-screen">
        <main className="relative pt-16">{children}</main>
      </div>
    </>
  );
};

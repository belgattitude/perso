import Head from 'next/head';
import type { FC, PropsWithChildren } from 'react';
import { TopNav } from '@/components/nav/topnav';
import { siteConfig } from '@/config';
import { MainLayoutFavicon, MainLayoutFonts, MainLayoutMeta } from './head';

const { navLinks, iconLinks } = siteConfig.topNav;

export const MainLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <>
      <Head>
        <MainLayoutMeta />
        <MainLayoutFavicon />
        <MainLayoutFonts />
      </Head>
      <TopNav navLinks={navLinks} iconLinks={iconLinks} />
      <div className="flex min-h-screen flex-col justify-between">
        <main className="relative pt-16">{children}</main>
      </div>
    </>
  );
};

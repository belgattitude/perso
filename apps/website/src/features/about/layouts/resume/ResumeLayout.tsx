import Head from 'next/head';
import type { FC, ReactNode } from 'react';
import { TopNav } from '@/components/nav/topnav';
import { navConfig } from '@/features/about/config';
import { MainLayoutFavicon } from '@/layouts/main/head';
import { ResumeLayoutFonts, ResumeLayoutMeta } from './Head';

type Props = {
  children: ReactNode;
};

const { navLinks, iconLinks } = navConfig.topNav;

export const ResumeLayout: FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <Head>
        <ResumeLayoutMeta />
        <MainLayoutFavicon />
        <ResumeLayoutFonts />
      </Head>
      <TopNav navLinks={navLinks} iconLinks={iconLinks} />
      <div className="flex min-h-screen flex-col justify-between">
        <main className="relative pt-16">{children}</main>
      </div>
    </>
  );
};

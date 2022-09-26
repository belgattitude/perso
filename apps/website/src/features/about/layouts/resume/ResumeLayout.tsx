import Head from 'next/head';
import type { FC, PropsWithChildren } from 'react';
import { TopNav } from '@/components/nav/topnav';
import { navConfig } from '@/features/about/config';
import { MainLayoutFavicon } from '@/themes/layouts/main/head';
import { ResumeLayoutFonts, ResumeLayoutMeta } from './Head';

type Props = PropsWithChildren;

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

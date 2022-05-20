import Head from 'next/head';
import type { FC, ReactNode } from 'react';
import { TopNav } from '@/components/nav/topnav';
import GithubIcon from '@/public/icons/devicons/github/github-original.svg';
import { MainLayoutFavicon, MainLayoutFonts, MainLayoutMeta } from './head';

type Props = {
  children: ReactNode;
};

const navLinks: Array<{ label: string; url: string }> = [
  { label: 'Blog', url: '/blog' },
];

const iconLinks: Array<{ label: string; Icon: FC; url: string }> = [
  {
    label: 'Github',
    Icon: GithubIcon,
    url: 'https://github.com/belgattitude/perso',
  },
];

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
        <main className="relative pt-16 border-2 border-red-500">
          {children}
        </main>
      </div>
    </>
  );
};

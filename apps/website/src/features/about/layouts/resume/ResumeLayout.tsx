import Head from 'next/head';
import type { FC, ReactNode } from 'react';
import { MainLayoutFavicon } from '@/layouts/main/head';
import { ResumeLayoutFonts, ResumeLayoutMeta } from './Head';

type Props = {
  children: ReactNode;
};

export const ResumeLayout: FC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <Head>
        <ResumeLayoutMeta />
        <MainLayoutFavicon />
        <ResumeLayoutFonts />
      </Head>
      {children}
    </>
  );
};

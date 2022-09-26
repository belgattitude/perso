import Head from 'next/head';
import type { FC, ReactNode } from 'react';
import { MainLayoutFavicon } from '@/themes/layouts/main/head';
import { MeetLayoutFonts, MeetLayoutMeta } from './Head';

type Props = {
  children: ReactNode;
};

export const MeetLayout: FC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <Head>
        <MeetLayoutMeta />
        <MainLayoutFavicon />
        <MeetLayoutFonts />
      </Head>
      {children}
    </>
  );
};

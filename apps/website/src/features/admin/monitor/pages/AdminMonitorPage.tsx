import { css } from '@emotion/react';
import { NextSeo } from 'next-seo';
import type { FC } from 'react';
import { Header } from '@/features/meet/components/Header';

type Props = {
  hello?: string;
};

export const AdminMonitorPage: FC<Props> = (props) => {
  const { hello } = props;
  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <Header />
      <h1>{hello}</h1>
    </>
  );
};

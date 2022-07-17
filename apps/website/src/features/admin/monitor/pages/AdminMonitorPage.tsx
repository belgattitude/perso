import { NextSeo } from 'next-seo';
import type { FC } from 'react';
import { Header } from '@/features/meet/components/Header';

type Props = {
  room: string;
};

export const AdminMonitorPage: FC<Props> = (props) => {
  const { room } = props;
  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <Header room={room} />
      <h1>Hello {room}</h1>
    </>
  );
};

import { NextSeo } from 'next-seo';
import type { FC } from 'react';
import { LoggerPanel } from '@/features/meet/components/Logger';

export type MeetLoggerPageProps = {
  room: string;
};

export const MeetLoggerPage: FC<MeetLoggerPageProps> = (props) => {
  const { room } = props;

  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <LoggerPanel room={room} />
    </>
  );
};

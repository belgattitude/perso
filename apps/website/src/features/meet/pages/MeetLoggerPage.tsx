import { NextSeo } from 'next-seo';
import type { FC } from 'react';
import { LoggerPanel } from '@/features/meet/components/Logger';

export type MeetLoggerPageProps = {
  meetingSlug: string;
};

export const MeetLoggerPage: FC<MeetLoggerPageProps> = (props) => {
  const { meetingSlug } = props;

  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <LoggerPanel meetingSlug={meetingSlug} />
    </>
  );
};

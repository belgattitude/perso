import { NextSeo } from 'next-seo';
import type { FC } from 'react';
import { Header } from '@/features/meet/components/Header';

type Props = {
  meetingSlug: string;
};

export const AdminMonitorPage: FC<Props> = (props) => {
  const { meetingSlug } = props;
  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <Header meetingSlug={meetingSlug} />
      <h1>Hello {meetingSlug}</h1>
    </>
  );
};

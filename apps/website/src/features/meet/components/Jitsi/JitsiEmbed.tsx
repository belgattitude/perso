import type { IJitsiMeetingProps } from '@jitsi/react-sdk/lib/types';
import dynamic from 'next/dynamic';
import type { FC } from 'react';
const JitsiMeeting = dynamic<IJitsiMeetingProps>(
  () => import('@jitsi/react-sdk').then((mod) => mod.JitsiMeeting),
  {
    loading: () => <div />,
    ssr: false,
  }
);

export type JitsiEmbedProps = {
  jitsiConfig: IJitsiMeetingProps;
};

export const JitsiEmbed: FC<JitsiEmbedProps> = (props) => {
  const { jitsiConfig } = props;
  return <JitsiMeeting {...jitsiConfig} />;
};

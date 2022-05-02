import { JitsiMeeting } from '@jitsi/react-sdk';
import type { IJitsiMeetingProps } from '@jitsi/react-sdk/lib/types';
import type { FC } from 'react';

export type JitsiEmbedProps = {
  jitsiConfig: IJitsiMeetingProps;
};

export const JitsiEmbed: FC<JitsiEmbedProps> = (props) => {
  const { jitsiConfig } = props;
  return (
    <>
      <JitsiMeeting {...jitsiConfig} />
    </>
  );
};

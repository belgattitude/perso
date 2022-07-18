import { nanoid } from 'nanoid';
import { NextSeo } from 'next-seo';
import type { FC } from 'react';
import { useLayoutEffect } from 'react';
import { Header } from '@/features/meet/components/Header';
import { JitsiEmbed } from '../components/Jitsi';

type Props = {
  room: string;
};

const Jitsi: FC<Props> = (props) => {
  const { room } = props;

  useLayoutEffect(() => {
    console.log(`recreated jitsi embed for ${room}`);
  }, [room]);

  return (
    <JitsiEmbed
      key={nanoid()}
      jitsiConfig={{
        configOverwrite: {
          startWithAudioMuted: true,
          enableEmailInStats: false,
          disableThirdPartyRequests: true,
          hiddenPremeetingButtons: ['microphone'],
        },
        roomName: room,
        getIFrameRef: (node) => (node.style.height = '800px'),
        // getIFrameRef: (node) => (iframeRef.current = node),
      }}
      /*
      interfaceConfigOverwrite={{
        MOBILE_APP_PROMO: false,
        TILE_VIEW_MAX_COLUMNS: 4,
      }} */
    />
  );
};

export const JitsiPage: FC<Props> = (props) => {
  const { room } = props;

  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <Header room={room} inMeeting={true} />
      <div className="container mx-auto px-4">
        <Jitsi {...props} />
      </div>
    </>
  );
};

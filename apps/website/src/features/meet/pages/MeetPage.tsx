import { css } from '@emotion/react';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import type { FC } from 'react';
import { Header } from '@/features/meet/components/Header';
import type { LoggerPanelProps } from '@/features/meet/components/Logger';
import { ProviderSelectionCard } from '@/features/meet/components/ProviderSelection';
import type { JitsiEmbedProps } from '../components/Jitsi';
import { useStore } from '../stores';

const JitsiEmbed = dynamic<JitsiEmbedProps>(
  () =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    import('../components/Jitsi').then(({ JitsiEmbed }) => JitsiEmbed) as any,
  {
    ssr: false,
  }
);

const LoggerPanel = dynamic<LoggerPanelProps>(
  () =>
    import('../components/Logger/LoggerPanel').then(
      ({ LoggerPanel }) => LoggerPanel
    ),
  {
    ssr: false,
  }
);

type Props = {
  meetingSlug: string;
};

const Jitsi: FC<Props> = (props) => {
  const { meetingSlug } = props;
  return (
    <JitsiEmbed
      jitsiConfig={{
        configOverwrite: {
          startWithAudioMuted: true,
          hiddenPremeetingButtons: ['microphone'],
        },
        roomName: meetingSlug,
        getIFrameRef: (node) => (node.style.height = '800px'),
      }}
    />
  );
};

export const Welcome: FC<Props> = (props) => {
  const { meetingSlug } = props;
  const openVideoEmbed = useStore((state) => state.openVideoEmbed);
  return (
    <div className="container mx-auto px-4">
      <div className="container mx-auto px-4 p-5">
        <div className={'mb-5 pt-5'}>
          Welcome to this experiment, you've joined the project{' '}
          <span className="text-cyan-700 font-bold">{meetingSlug}</span> Next
          meeting is wednesday at 10:00 AM.
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={openVideoEmbed}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Enter the meeting
          </button>
          <button
            type="button"
            className="py-2.5 px-5 mr-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Alternate ?
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <ProviderSelectionCard />
      </div>
      <div
        css={css`
          position: absolute;
          bottom: 0;
          right: 0;
          width: 45vw;
          height: 50vh;
        `}
      >
        <LoggerPanel />
      </div>
    </div>
  );
};

export const MeetPage: FC<Props> = (props) => {
  const videoEmbedStatus = useStore((state) => state.videoEmbedStatus);

  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <Header />
      <div className="container mx-auto px-4">
        {videoEmbedStatus === 'open' ? (
          <Jitsi {...props} />
        ) : (
          <Welcome {...props} />
        )}
      </div>
    </>
  );
};

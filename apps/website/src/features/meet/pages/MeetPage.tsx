import { css } from '@emotion/react';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import type { FC } from 'react';
import create from 'zustand';
import type { JitsiEmbedProps } from '../components/jitsi';

interface UiState {
  videoEmbedStatus: 'open' | 'closed';
  openVideoEmbed: () => void;
  closeVideoEmbed: () => void;
}

const useStore = create<UiState>()((set) => ({
  videoEmbedStatus: 'closed',
  openVideoEmbed: () => set((state) => ({ videoEmbedStatus: 'open' })),
  closeVideoEmbed: () => set((state) => ({ videoEmbedStatus: 'closed' })),
}));

const JitsiEmbed = dynamic<JitsiEmbedProps>(
  () =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    import('../components/jitsi').then(({ JitsiEmbed }) => JitsiEmbed) as any,
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
    <div>
      <div>
        Welcome to this experiment, you've joined the project{' '}
        <span className="text-cyan-700 font-bold">{meetingSlug}</span> Next
        meeting is wednesday at 10:00 AM.
      </div>
      <button
        onClick={openVideoEmbed}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Enter the meeting
      </button>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Not you ?
      </button>
    </div>
  );
};

export const MeetPage: FC<Props> = (props) => {
  const videoEmbedStatus = useStore((state) => state.videoEmbedStatus);

  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <div
        css={css`
          margin: 50px;
        `}
      >
        {videoEmbedStatus === 'open' ? (
          <Jitsi {...props} />
        ) : (
          <Welcome {...props} />
        )}
      </div>
    </>
  );
};

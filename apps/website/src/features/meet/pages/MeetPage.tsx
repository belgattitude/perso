import { css } from '@emotion/react';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { logMeetEvent } from '@/features/meet/api/logMeetEvent';
import type { MeetEventAction } from '@/features/meet/backend/logger';
import { Header } from '@/features/meet/components/Header';
import { ProviderSelectionCard } from '@/features/meet/components/ProviderSelection';
import { createMeetLogEvent } from '@/features/meet/lib/helper';
import { useStore } from '../stores';

type Props = {
  meetingSlug: string;
};

export const Welcome: FC<Props> = (props) => {
  const router = useRouter();
  const { meetingSlug } = props;
  // const openVideoEmbed = useStore((state) => state.openVideoEmbed);

  const connect = (action: MeetEventAction, meetingSlug: string) => {
    // openVideoEmbed();
    logMeetEvent(
      createMeetLogEvent({
        meetingSlug,
        action,
        role: 'AGENCY',
      })
    );
    setTimeout(() => {
      router.push(`/meet/j/${meetingSlug}`);
    }, 200);
  };

  const openLogWindow = (meetingSlug: string) => {
    window.open(
      `/meet/_log/${encodeURIComponent(meetingSlug)}`,
      '_blank',
      'width=400,height=800,scrollbars=no,toolbar=no,screenx=0,screeny=0,location=no,titlebar=no,directories=no,status=no,menubar=no'
    );
  };

  return (
    <div className="container px-4 mx-auto">
      <div className="container p-5 px-4 mx-auto">
        <div className={'pt-5 mb-5'}>
          Welcome to this experiment, you've joined the project{' '}
          <span className="font-bold text-cyan-700">{meetingSlug}</span> Next
          meeting is wednesday at 10:00 AM.
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => {
              connect('JOIN', meetingSlug);
            }}
            type="button"
            className="py-2.5 px-5 mr-2 mb-2 text-lg font-medium text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            Enter the meeting
          </button>
          <button
            type="button"
            className="focus:z-10 py-2.5 px-5 mr-2 mb-2 text-lg font-medium text-gray-900 hover:text-blue-700 dark:text-gray-400 dark:hover:text-white bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700"
          >
            Alternate ?
          </button>
        </div>
      </div>

      <div className="container px-4 mx-auto">
        <ProviderSelectionCard />
      </div>
      <div
        css={css`
          position: absolute;
          bottom: 0;
          right: 0;
        `}
      >
        <button
          onClick={() => {
            openLogWindow(meetingSlug);
          }}
          type="button"
          className="focus:z-10 py-2.5 px-5 mr-2 mb-2 text-lg font-medium text-gray-900 hover:text-blue-700 dark:text-gray-400 dark:hover:text-white bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700"
        >
          Open logs
        </button>
      </div>
    </div>
  );
};

export const MeetPage: FC<Props> = (props) => {
  const { meetingSlug } = props;
  // const videoEmbedStatus = useStore((state) => state.videoEmbedStatus);

  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <Header meetingSlug={meetingSlug} />
      <div className="container px-4 mx-auto">
        <Welcome {...props} />
      </div>
    </>
  );
};

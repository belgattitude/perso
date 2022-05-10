import { css } from '@emotion/react';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { logMeetEvent } from '@/features/meet/api/logMeetEvent';
import { Header } from '@/features/meet/components/Header';
import { ProviderSelectionCard } from '@/features/meet/components/ProviderSelection';
import { createMeetLogEvent } from '@/features/meet/lib/helper';
import type { MeetEventAction } from '@/features/meet/lib/logger';
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
    <div className="container mx-auto px-4">
      <div className="container mx-auto px-4 p-5">
        <div className={'mb-5 pt-5'}>
          Welcome to this experiment, you've joined the project{' '}
          <span className="text-cyan-700 font-bold">{meetingSlug}</span> Next
          meeting is wednesday at 10:00 AM.
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => {
              connect('JOIN', meetingSlug);
            }}
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
        `}
      >
        <button
          onClick={() => {
            openLogWindow(meetingSlug);
          }}
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
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
      <div className="container mx-auto px-4">
        <Welcome {...props} />
      </div>
    </>
  );
};

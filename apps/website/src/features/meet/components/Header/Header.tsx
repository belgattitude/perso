import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { logMeetEvent } from '@/features/meet/api/logMeetEvent';
import { createMeetLogEvent } from '@/features/meet/lib/helper';
import { useStore } from '@/features/meet/stores';

type HeaderProps = {
  meetingSlug: string;
  inMeeting?: boolean;
};

export const Header: FC<HeaderProps> = (props) => {
  const router = useRouter();
  const { meetingSlug, inMeeting = false } = props;
  const { videoEmbedStatus, closeVideoEmbed } = useStore(
    ({ closeVideoEmbed, videoEmbedStatus }) => ({
      closeVideoEmbed,
      videoEmbedStatus,
    })
  );
  const returnToMain = (meetingSlug: string) => {
    logMeetEvent(
      createMeetLogEvent({
        action: 'LEAVE',
        meetingSlug,
        role: 'AGENCY',
      })
    );
    setTimeout(() => {
      router.push(`/meet/${meetingSlug}`);
    }, 250);
  };

  return (
    <nav className="py-5 px-2 bg-white rounded border-gray-200 sm:px-4">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold dark:text-white whitespace-nowrap">
            {/* TITLE */}
          </span>
        </Link>
        {videoEmbedStatus === 'open' ||
          (inMeeting && (
            <button
              onClick={() => returnToMain(meetingSlug)}
              type="button"
              className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              Close video embed
            </button>
          ))}
      </div>
    </nav>
  );
};

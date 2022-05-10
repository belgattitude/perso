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
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-5 rounded bg-white/30">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            {/* TITLE */}
          </span>
        </Link>
        {videoEmbedStatus === 'open' ||
          (inMeeting && (
            <button
              onClick={() => returnToMain(meetingSlug)}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Close video embed
            </button>
          ))}
      </div>
    </nav>
  );
};

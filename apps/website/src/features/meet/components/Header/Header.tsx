import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { logMeetEvent } from '@/features/meet/api/logMeetEvent';
import { createMeetLogEvent } from '@/features/meet/lib/helper';
import { useStore } from '@/features/meet/stores';

type HeaderProps = {
  room: string;
  inMeeting?: boolean;
};

export const Header: FC<HeaderProps> = (props) => {
  const router = useRouter();
  const { room, inMeeting = false } = props;
  const { videoEmbedStatus } = useStore(
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
    <nav className="rounded border-gray-200 bg-white py-5 px-2 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="flex items-center" legacyBehavior>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            {/* TITLE */}
          </span>
        </Link>
        {videoEmbedStatus === 'open' ||
          (inMeeting && (
            <button
              onClick={() => returnToMain(room)}
              type="button"
              className="mr-2 mb-2 rounded-lg bg-blue-700 py-2.5 px-5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Close video embed
            </button>
          ))}
      </div>
    </nav>
  );
};

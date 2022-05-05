import { css } from '@emotion/react';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { getPusher } from '@/config';
import type { CaptureMeetingEvent } from '@/features/meet/lib/logger';

const pusher = getPusher();

export type LoggerPanelProps = {
  meetingSlug: string;
};

type LogPayload = CaptureMeetingEvent['payload'];

export const LoggerPanel: FC<LoggerPanelProps> = (props) => {
  const { meetingSlug } = props;
  const [messages, setMessages] = useState<LogPayload[]>([]);
  useEffect(() => {
    const channel = pusher.subscribe(meetingSlug);
    channel.bind('log', function (data: LogPayload) {
      setMessages((prev) => [...prev, data]);
    });
    return () => {
      channel.unbind('log');
      pusher.unsubscribe(meetingSlug);
    };
  }, [meetingSlug]);

  return (
    <div className="container mx-auto px-4">
      <div className="container mx-auto px-4 p-5">
        <p className="text-xl dark:text-white mb-6">
          Logs for meeting {meetingSlug}
        </p>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {messages.reverse().map((message) => {
            return (
              <li key={message.date} className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {message.date}
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {message.action}
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  This guy connected from browser{' '}
                  <span className="text-blue-500">{message.browserString}</span>{' '}
                  to the meeting but right now I don't know who he is.
                </p>
                <a
                  href={'https://github.com/sortlist/sortlist/issues/18768'}
                  target={'_blank'}
                  rel={'noreferrer'}
                  className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  Learn more{' '}
                  <svg
                    className="ml-2 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );

  return (
    <div
      css={css`
        overflow: auto;
        height: 300px;
      `}
    >
      <h1>Meeting: {meetingSlug}</h1>
      <ul>
        {messages.map((message) => (
          <li key={message.date}>
            {message.date}-{message.meetingId}-{message.browserString}
          </li>
        ))}
      </ul>
    </div>
  );
};

import type Pusher from 'pusher-js';
import type { Channel } from 'pusher-js';
import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import { getLazyPusher } from '@/config';
import type { MeetLogEvent } from '@/features/meet/backend/logger';
import { meetLogChannel } from '@/features/meet/config';

export type LoggerPanelProps = {
  room: string;
};

type LogPayload = MeetLogEvent;

const channelName = meetLogChannel;

export const LoggerPanel: FC<LoggerPanelProps> = (props) => {
  const { room } = props;
  const channelRef = useRef<Channel | null>(null);
  const pusherRef = useRef<Pusher | null>(null);

  const [messages, setMessages] = useState<LogPayload[]>([]);
  useEffect(() => {
    getLazyPusher().then((pusher) => {
      pusherRef.current = pusher;
      channelRef.current = pusher.subscribe(room);
      channelRef.current.bind(channelName, function (data: LogPayload) {
        setMessages((prev) => [...prev, data]);
      });
    });
    return () => {
      channelRef.current?.unbind(channelName);
      pusherRef.current?.unsubscribe(room);
    };
  }, [room]);

  return (
    <div className="container mx-auto px-4">
      <div className="container mx-auto p-5 px-4">
        <p className="mb-6 text-xl dark:text-white">Logs for meeting {room}</p>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {messages.reverse().map((message) => {
            return (
              <li key={message.date} className="mb-10 ml-4">
                <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
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
                  className="inline-flex items-center rounded-lg border border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  Learn more{' '}
                  <svg
                    className="ml-2 h-3 w-3"
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
};

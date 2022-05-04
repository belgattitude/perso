import { css } from '@emotion/react';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { getPusher } from '@/config';
import { meetConfig } from '@/features/meet/config';
import type { CaptureMeetingEvent } from '@/features/meet/lib/logger';

const pusher = getPusher();

const channel = pusher.subscribe(meetConfig.logger.channel);

export type LoggerPanelProps = {
  hello?: string;
};

type LogPayload = CaptureMeetingEvent['payload'];

export const LoggerPanel: FC<LoggerPanelProps> = (props) => {
  const { hello = 'hello' } = props;
  const [messages, setMessages] = useState<LogPayload[]>([]);
  useEffect(() => {
    channel.bind('log', function (data: LogPayload) {
      setMessages((prev) => [...prev, data]);
    });
    return () => {
      channel.unbind('log');
    };
  }, []);
  return (
    <div
      css={css`
        overflow: auto;
        height: 300px;
      `}
    >
      <h1>{hello}</h1>
      <ul>
        {messages.map((message, idx) => (
          <li key={message.date}>{JSON.stringify(message)}</li>
        ))}
      </ul>
    </div>
  );
};

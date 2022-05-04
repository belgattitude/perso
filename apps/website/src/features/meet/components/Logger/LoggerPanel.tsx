import type { FC } from 'react';
import { getPusher } from '@/config';

const pusher = getPusher();

const channel = pusher.subscribe('my-channel');
channel.bind('my-event', function (data: unknown) {
  alert(JSON.stringify(data));
});

export type LoggerPanelProps = {
  hello?: string;
};

export const LoggerPanel: FC<LoggerPanelProps> = (props) => {
  const { hello = 'hello' } = props;
  return <div>{hello}</div>;
};

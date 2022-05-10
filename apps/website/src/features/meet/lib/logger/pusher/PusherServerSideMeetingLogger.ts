import type Pusher from 'pusher';
import type { MeetLogEvent } from '@/features/meet/lib/logger';
import type { MeetLoggerInterface } from '@/features/meet/lib/logger/MeetLogger.interface';

type Params = {
  channel: string;
};

export class PusherServerSideMeetingLogger implements MeetLoggerInterface {
  constructor(private pusher: Pusher, private params: Params) {}
  captureEvent = async (event: MeetLogEvent): Promise<true | Error> => {
    const resp = await this.pusher.trigger(this.params.channel, 'log', {
      ...event,
    });
    if (resp.status === 200) {
      return true;
    }
    return new Error(`Can't reach pusher`);
  };
}

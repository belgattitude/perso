import type Pusher from 'pusher';
import type { MeetLogEvent, IMeetLogger } from '@/features/meet/backend/logger';
import { meetLogChannel } from '@/features/meet/config';

type Params = {
  channel: string;
};

export class PusherServerSideMeetingLogger implements IMeetLogger {
  constructor(private pusher: Pusher, private params: Params) {}
  captureEvent = async (event: MeetLogEvent): Promise<true | Error> => {
    const resp = await this.pusher.trigger(
      this.params.channel,
      meetLogChannel,
      {
        ...event,
      }
    );
    if (resp.status === 200) {
      return true;
    }
    return new Error(`Can't reach pusher`);
  };
}

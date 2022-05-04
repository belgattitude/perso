import type Pusher from 'pusher';
import type {
  CaptureMeetingEvent,
  MeetingLogger,
} from '@/features/meet/lib/logger';

type Params = {
  channel: string;
};

export class PusherServerSideMeetingLogger implements MeetingLogger {
  constructor(private pusher: Pusher, private params: Params) {}
  captureEvent = async (event: CaptureMeetingEvent): Promise<true | Error> => {
    const resp = await this.pusher.trigger(this.params.channel, event.name, {
      date: new Date().toISOString(),
      ...event.payload,
    });
    if (resp.status === 200) {
      return true;
    }
    return new Error(`Can't reach pusher`);
  };
}

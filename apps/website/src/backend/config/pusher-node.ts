import { Asserts } from '@belgattitude/ts-utils';
import Pusher from 'pusher';

let pusherServerSide: Pusher | null = null;

export const getPusherServerSide = (): Pusher => {
  if (!pusherServerSide) {
    Asserts.nonEmptyString(
      process.env.NEXT_PUBLIC_PUSHER_KEY,
      `Missing NEXT_PUBLIC_PUSHER_KEY`
    );
    Asserts.nonEmptyString(
      process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
      `Missing NEXT_PUBLIC_PUSHER_CLUSTER`
    );
    Asserts.nonEmptyString(process.env.PUSHER_APP_ID, `Missing PUSHER_APP_ID`);
    Asserts.nonEmptyString(process.env.PUSHER_SECRET, `Missing PUSHER_SECRET`);
    pusherServerSide = new Pusher({
      appId: process.env.PUSHER_APP_ID,
      key: process.env.NEXT_PUBLIC_PUSHER_KEY,
      secret: process.env.PUSHER_SECRET,
      cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
      useTLS: true,
    });
  }
  return pusherServerSide;
};

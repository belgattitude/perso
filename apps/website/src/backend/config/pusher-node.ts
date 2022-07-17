import { assertNonEmptyString } from '@belgattitude/ts-utils';
import Pusher from 'pusher';

let pusherServerSide: Pusher | null = null;

export const getPusherServerSide = (): Pusher => {
  if (!pusherServerSide) {
    assertNonEmptyString(
      process.env.NEXT_PUBLIC_PUSHER_KEY,
      `Missing NEXT_PUBLIC_PUSHER_KEY`
    );
    assertNonEmptyString(
      process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
      `Missing NEXT_PUBLIC_PUSHER_CLUSTER`
    );
    assertNonEmptyString(process.env.PUSHER_APP_ID, `Missing PUSHER_APP_ID`);
    assertNonEmptyString(process.env.PUSHER_SECRET, `Missing PUSHER_SECRET`);
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

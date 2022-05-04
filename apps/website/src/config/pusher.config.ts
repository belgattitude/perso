import { Asserts } from '@belgattitude/ts-utils';
import Pusher from 'pusher-js';

let pusher: Pusher | null = null;

export const getPusher = (): Pusher => {
  if (!pusher) {
    Asserts.nonEmptyString(
      process.env.NEXT_PUBLIC_PUSHER_KEY,
      `Missing NEXT_PUBLIC_PUSHER_KEY`
    );
    Asserts.nonEmptyString(
      process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
      `Missing NEXT_PUBLIC_PUSHER_CLUSTER`
    );
    pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
    });
  }
  return pusher;
};

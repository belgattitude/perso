import { Asserts } from '@belgattitude/ts-utils';
import type Pusher from 'pusher-js';

let pusher: Pusher | null = null;

/**
 * Lazy factory with dynamic import of the pusher library so
 * it can be tree-shaken correctly.
 */
export const getLazyPusher = async (): Promise<Pusher> => {
  if (!pusher) {
    Asserts.nonEmptyString(
      process.env.NEXT_PUBLIC_PUSHER_KEY,
      `Missing NEXT_PUBLIC_PUSHER_KEY`
    );
    Asserts.nonEmptyString(
      process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
      `Missing NEXT_PUBLIC_PUSHER_CLUSTER`
    );
    const pusherJs = (await import('pusher-js')).default;

    pusher = new pusherJs(process.env.NEXT_PUBLIC_PUSHER_KEY, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
    });
  }
  return pusher;
};

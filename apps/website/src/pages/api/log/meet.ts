import { Asserts, isNonEmptyString } from '@belgattitude/ts-utils';
import { Guards } from '@soluble/cache-interop';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getPusherServerSide } from '@/backend/config/pusher-node';
import { meetConfig } from '@/features/meet/config';
import { PusherServerSideMeetingLogger } from '@/features/meet/lib/logger';

export default async function apiLogMeetRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405).send(`Method ${req.method} Not Allowed`);
    return;
  }

  const { meetingSlug, action } = req.query;

  if (!Guards.isNonEmptyString(meetingSlug)) {
    res.status(405).send(`Missing meetingSlug param`);
    return;
  }

  if (!Guards.isNonEmptyString(action)) {
    res.status(405).send(`Missing action param`);
    return;
  }

  const logger = new PusherServerSideMeetingLogger(getPusherServerSide(), {
    channel: meetingSlug,
  });

  const resp = await logger.captureEvent({
    name: 'log',
    payload: {
      date: new Date().toISOString(),
      action,
      meetingId: '123',
      browserString: req.headers['user-agent'] ?? '',
    },
  });

  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');

  if (resp === true) {
    res.status(200).send(
      JSON.stringify({
        success: true,
      })
    );
  } else {
    res.status(500).send(resp.message);
  }
}

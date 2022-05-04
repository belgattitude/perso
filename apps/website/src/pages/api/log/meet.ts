import type { NextApiRequest, NextApiResponse } from 'next';
import { getPusherServerSide } from '@/backend/config/pusher-node';
import { PusherServerSideMeetingLogger } from '@/features/meet/lib/logger';

const logger = new PusherServerSideMeetingLogger(getPusherServerSide(), {
  channel: 'meet-log',
});

export default async function apiLogMeetRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  const resp = await logger.captureEvent({
    name: 'CONNECT',
    payload: {
      meetingId: '123',
      browserString: req.headers['user-agent'] ?? '',
    },
  });

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

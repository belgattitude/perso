import { isNonEmptyString } from '@belgattitude/ts-utils';
import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { getPusherServerSide } from '@/backend/config/pusher-node';
import { getCorsMiddleware } from '@/backend/lib/middlewares/cors/getCorsMiddleware';
import type { MeetEventAction } from '@/features/meet/backend/logger';
import { PusherServerSideMeetingLogger } from '@/features/meet/backend/logger';

async function apiLogMeetRoute(req: NextApiRequest, res: NextApiResponse) {
  const { meetingSlug, action, role } = req.body;

  if (!isNonEmptyString(meetingSlug)) {
    res.status(405).send(`Missing meetingSlug param`);
    return;
  }

  if (!isNonEmptyString(action)) {
    res.status(405).send(`Missing action param`);
    return;
  }

  const logger = new PusherServerSideMeetingLogger(getPusherServerSide(), {
    channel: meetingSlug,
  });

  const resp = await logger.captureEvent({
    meetingSlug: meetingSlug,
    action: action as MeetEventAction,
    attendee: {
      role: role ?? 'AGENCY',
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

const handler = nc<NextApiRequest, NextApiResponse>({
  onError: (err, req, res, _next) => {
    // console.error(err.stack);
    res.status(500).end('Something broke!');
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Page is not found');
  },
})
  .use(getCorsMiddleware())
  .options((req, res) => {
    // to allow preflight request
    res.status(200).end();
  })
  .post((req, res) => {
    apiLogMeetRoute(req, res);
  });

export default handler;

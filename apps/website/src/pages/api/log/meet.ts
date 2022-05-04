import type { NextApiRequest, NextApiResponse } from 'next';
import { getPusherServerSide } from '@/backend/config/pusher-node';

const pusher = getPusherServerSide();

export default async function apiLogMeetRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  const resp = await pusher.trigger('my-channel', 'my-event', {
    message: 'hello world',
  });

  if (resp.status === 200) {
    res.status(200).send(
      JSON.stringify({
        success: true,
      })
    );
  } else {
    res.status(500).send('Error while connecting to pusher');
  }
}

import type { NextApiRequest, NextApiResponse } from 'next';
import { withApiErrorHandler } from '@/backend/helpers';
import { assertHttpMethod } from '@/backend/lib/utils';

export type HealthCheckApiPayload = {
  status: 'ok' | 'error';
  message: string;
  appName: string;
  appVersion: string;
  timestamp: string;
};

const healthcheckHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  assertHttpMethod(req, 'GET');

  const payload: HealthCheckApiPayload = {
    status: 'ok',
    message: 'Health check successful for API route',
    appName: process.env.APP_NAME ?? 'unknown',
    appVersion: process.env.APP_VERSION ?? 'unknown',
    timestamp: new Date().toISOString(),
  };

  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(JSON.stringify(payload, undefined, 2));
  res.end();
};

export default withApiErrorHandler(healthcheckHandler);

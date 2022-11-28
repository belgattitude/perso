import { isHttpException } from '@httpx/exception';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { LoggerInterface } from '@/backend/lib/logger';

export class BetterNextErrorFactory {
  constructor(private logger: LoggerInterface) {}

  /**
   * create Higher order function for use with nextjs api handler
   */
  createWithApiErrorHandler = () => {
    return (handler: (req: NextApiRequest, res: NextApiResponse) => void) =>
      async (req: NextApiRequest, res: NextApiResponse) => {
        try {
          await handler(req, res);
        } catch (e) {
          await this.logger.log('error', `[api-error] ${req.url}`, e);
          const payload = isHttpException(e)
            ? {
                // add anything that can be useful from HttpException
                statusCode: e.statusCode,
                message: e.message,
                url: req.url,
              }
            : {
                statusCode: 500,
                message: e instanceof Error ? e.message : 'Unknown error',
              };

          res.status(payload.statusCode).json({
            success: false,
            error: payload,
          });
        } finally {
          // Do whatever, ie res.end();
        }
      };
  };
}

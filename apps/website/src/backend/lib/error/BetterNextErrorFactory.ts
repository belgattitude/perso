import { isHttpException } from '@belgattitude/http-exception';
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
          if (isHttpException(e)) {
            const msg = [
              `${e.statusCode} ${e.name}: ${e.message}`,
              e.url ? `(on ${e.url}).` : '.',
            ].join(',');
            await this.logger.log('log', msg, e);
            res.status(e.statusCode).json({
              success: false,
              error: {
                // Choose what is useful to expose
                message: e.message,
              },
            });
          }
        } finally {
          // res.end();
        }
      };
  };
}

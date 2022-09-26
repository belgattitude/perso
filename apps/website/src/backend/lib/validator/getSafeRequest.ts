import type { IncomingMessage } from 'node:http';
import type { HttpException } from '@belgattitude/http-exception';
import { HttpBadRequest } from '@belgattitude/http-exception';
import type { NextApiRequest } from 'next';
import type { z, ZodSchema } from 'zod';

type Params<T> = {
  onError?: (error: z.ZodError<T>) => Error | HttpException;
};

/**
 * Validate nextjs api request handler
 * @throws HttpException
 */
export const getSafeRequest = <
  T extends ZodSchema,
  TReq extends IncomingMessage = NextApiRequest
>(
  req: TReq,
  schema: T,
  params?: Params<T>
): z.infer<T> => {
  const { onError } = params ?? {};
  const parsed = schema.safeParse(req);
  if (!parsed.success) {
    const { error } = parsed;
    if (onError) {
      throw onError(error);
    }
    const msg = parsed.error.errors
      .map((err) => `${err.code} - ${err.message}`)
      .join(', ');
    throw new HttpBadRequest({
      message: `Bad request, invalid parameter (${msg})`,
      url: req.url,
    });
  }
  return parsed.data;
};

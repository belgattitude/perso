import type { IncomingMessage } from 'node:http';
import { assertIncludes } from '@belgattitude/ts-utils';
import { HttpMethodNotAllowed } from '@httpx/exception';

type HttpMethod =
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH';

export function assertHttpMethod<T extends IncomingMessage>(
  req: T,
  method: HttpMethod | HttpMethod[]
): asserts req is T {
  assertIncludes(
    req.method,
    typeof method === 'string' ? [method] : method,
    () => {
      throw new HttpMethodNotAllowed({
        message: `Method not allowed (${req.method})`,
        url: req.url,
      });
    },
    true
  );
}

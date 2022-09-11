import type { HttpException } from '../../base';
import { statusMap } from '../../status';
import { createHttpException } from '../createHttpException';
import { HttpClientException, HttpServerException } from '../../base';

describe('createHttpException tests', () => {
  describe('when error status has a concrete class', () => {
    const all = Object.entries(statusMap).map(([code, cls]) => {
      const obj = new cls();
      return [
        obj.name,
        Number.parseInt(code, 10),
        cls as unknown as HttpException,
      ];
    }) as [className: string, status: number, cls: HttpException][];

    it.each(all)(
      'should return %p from status %p',
      (className, status, cls) => {
        const params = 'msg';
        const error = createHttpException(status, params);
        const expected = new (cls as any)(params);
        expect(error).toStrictEqual(expected);
      }
    );
  });

  describe('when server status does not have a concrete class', () => {
    const unlistedServerErrors = [
      ['Arbitrary number 599', 599],
      ['Cloudflare - 524 - A Timeout Occurred', 524],
      ['Cloudflare - 525 - SSL Handshake Failed', 525],
    ] as [msg: string, status: number][];

    it.each(unlistedServerErrors)(
      'should return HttpServerException',
      (msg, status) => {
        const error = createHttpException(status, msg);
        expect(error).toStrictEqual(
          new HttpServerException({
            message: msg,
            statusCode: status,
          })
        );
        expect(error?.name).toStrictEqual('HttpServerException');
      }
    );
  });

  describe('when client status does not have a concrete class', () => {
    const unlistedClientErrors = [['Arbitrary number 499', 499]] as [
      msg: string,
      status: number
    ][];

    it.each(unlistedClientErrors)(
      'should return HttpClientException',
      (msg, status) => {
        const error = createHttpException(status, msg);
        expect(error).toStrictEqual(
          new HttpClientException({
            message: msg,
            statusCode: status,
          })
        );
        expect(error?.name).toStrictEqual('HttpClientException');
      }
    );
  });
});

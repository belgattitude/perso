import type { HttpException } from '../../base';
import { HttpInternalServerError } from '../../server';
import { statusMap } from '../../status';
import { createHttpException } from '../createHttpException';

describe('createHttpException tests', () => {
  it('should return HttpInternalServerError from 500', () => {
    const error = createHttpException(500, 'cool');
    expect(error).toStrictEqual(new HttpInternalServerError('cool'));
    expect(error?.name).toStrictEqual('HttpInternalServerError');
  });
  const all = Object.entries(statusMap).map(([code, cls]) => {
    const obj = new cls();
    return [
      obj.name,
      Number.parseInt(code, 10),
      cls as unknown as HttpException,
    ];
  }) as [className: string, status: number, cls: HttpException][];
  describe.each(all)(
    'should return %p from status %p',
    (className, status, cls) => {
      const params = 'msg';
      const error = createHttpException(status, params);
      const expected = new (cls as any)(params);
      expect(error).toStrictEqual(expected);
    }
  );
});

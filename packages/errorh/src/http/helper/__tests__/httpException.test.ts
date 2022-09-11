import { createHttpException } from '../../factory';
import { httpException } from '../httpException';

describe('httpException helper', () => {
  describe('client exceptions', () => {
    const allFcts = Object.entries(httpException.client).map(([name, fct]) => {
      return [name, fct];
    }) as [name: string, fct: typeof httpException.client.notFound][];
    it.each(allFcts)(
      'should return correct http exception when calling %p',
      (name, fct) => {
        const error = fct({ message: 'cool' });
        const status = error.statusCode;
        expect(error).toStrictEqual(createHttpException(status, 'cool'));
      }
    );
  });
  describe('server exceptions', () => {
    const allFcts = Object.entries(httpException.client).map(([name, fct]) => {
      return [name, fct];
    }) as [name: string, fct: typeof httpException.client.notFound][];
    it.each(allFcts)(
      'should return correct http exception when calling %p',
      (name, fct) => {
        const error = fct({ message: 'cool' });
        const status = error.statusCode;
        expect(error).toStrictEqual(createHttpException(status, 'cool'));
      }
    );
  });
});

import { hello } from '../index';

it('should pass', () => {
  expect(hello).toStrictEqual('world');
});

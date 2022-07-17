import { assertNonEmptyString } from '../asserts';

describe('Asserts test', () => {
  describe('assertNonEmptyString', () => {
    it('should work as expected', () => {
      expect(() => {
        assertNonEmptyString('cool');
      }).not.toThrowError('');
      expect(() => {
        assertNonEmptyString(' ', 'message');
      }).toThrow('message');
      expect(() => {
        assertNonEmptyString(true, () => {
          return new Error('message2');
        });
      }).toThrowError('message2');
    });
  });
});

import { isExternalUrl } from '@/lib/helpers/url';

describe('isExternalUrl', () => {
  it('should work as expected', () => {
    expect(isExternalUrl('http://test.com')).toBeTruthy();
    expect(isExternalUrl('https://test.com')).toBeTruthy();
    expect(isExternalUrl('/test')).toBeFalsy();
    expect(isExternalUrl('./test')).toBeFalsy();
  });
});

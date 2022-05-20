import { getCommonPathnameLevels } from '@/lib/helpers/url';

describe('getCommonPathnameLevels', () => {
  it('should work as expected', () => {
    expect(getCommonPathnameLevels('/path', '/url')).toStrictEqual(0);
    expect(getCommonPathnameLevels('/path', '/path')).toStrictEqual(1);
    expect(getCommonPathnameLevels('/path/about', '/path/about')).toStrictEqual(
      2
    );
    expect(getCommonPathnameLevels('/path/about', '/path')).toStrictEqual(1);
    expect(getCommonPathnameLevels('/path', '/path/about')).toStrictEqual(1);
    expect(getCommonPathnameLevels('/', '/')).toStrictEqual(0);
  });
});

import { CacheKeySerializer } from '@/backend/lib/serializer/cache-key/CacheKeySerializer';

describe('CacheKeySerializer tests', () => {
  const cks = new CacheKeySerializer();
  it('should work as expected', () => {
    expect(
      cks.serialize({
        name: 'hello',
      })
    ).toStrictEqual('name=hello');
  });
});

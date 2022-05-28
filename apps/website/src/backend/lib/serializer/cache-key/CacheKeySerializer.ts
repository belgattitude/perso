import type {
  ICacheKeySerializer,
  SerializableData,
} from '@/backend/lib/serializer/cache-key/ICacheKeySerializer';

export class CacheKeySerializer<T extends SerializableData = SerializableData>
  implements ICacheKeySerializer<T>
{
  serialize(params: T): string {
    const query = new URLSearchParams({
      name: 'hello',
    });
    return query.toString();
  }
  unserialize(cacheKey: string): any {
    return {
      cool: 'true',
    };
  }
}

export type SerializableData = Record<string | number | symbol, unknown>;

export interface ICacheKeySerializer<
  T extends SerializableData = SerializableData
> {
  serialize(params: T): string;
  unserialize(cacheKey: string): T;
}

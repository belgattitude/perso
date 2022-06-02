import type { IDTO } from '@/backend/lib/dto';
import { DTOSerializer } from '../DTOSerializer';

describe('DTOSerializer tests', () => {
  const dtoSerializer = new DTOSerializer();

  const dto: IDTO = {
    aBool: true,
    aDate: new Date(),
    aBigInt: BigInt(10),
    aBigIntAlt: 9007199254740991n,
    aString: 'belgattitude',
    aNull: null,
    aPositiveInt: 10,
    aNegativeInt: -10_123,
    aFloat: 1.222222222,
    anArrayOfStrings: ['admin', 'guest'],
    anArrayOfDTO: [{ updatedAt: new Date(), isAdmin: true }, { sort: 'asc' }],
  };
  describe('from/to string', () => {
    it('serialize/deserialize should give the same value', () => {
      const serialized = dtoSerializer.stringify(dto);
      const deserialized = dtoSerializer.parse(serialized);
      expect(deserialized).toStrictEqual(dto);
    });
  });
});

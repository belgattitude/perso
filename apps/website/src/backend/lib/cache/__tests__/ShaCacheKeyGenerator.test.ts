import type { ShaCacheKeyGenerateOptions } from '@/backend/lib/cache/ShaCacheKeyGenerator';
import { ShaCacheKeyGenerator } from '@/backend/lib/cache/ShaCacheKeyGenerator';

describe('ShaCacheKeyGenerator tests', () => {
  describe('Syntax and generated hexadecimal format', () => {
    const algoSpecs: [
      algo: ShaCacheKeyGenerateOptions['algorithm'],
      length: number,
      regexp: RegExp
    ][] = [
      ['sha256', 64, /^[a-f\d]{64}$/i],
      ['sha512', 128, /^[a-f\d]{128}$/i],
    ];
    it.each(algoSpecs)(
      'when algo is %p should return %p chars and pass regexp',
      (algo, length, regexp) => {
        const cacheKeyGen = new ShaCacheKeyGenerator({
          algorithm: algo,
        });
        const str = 'hello+world-{cool123}';
        expect(cacheKeyGen.createHash(str)).toHaveLength(length);
        expect(cacheKeyGen.createHash(str)).toMatch(regexp);
      }
    );
  });
  describe('Expected values', () => {
    const constSpecs: [
      algo: ShaCacheKeyGenerateOptions['algorithm'],
      value: string,
      expected: string
    ][] = [
      [
        'sha512',
        'sunny',
        '60e00ebd283eacdcea353a2f943e57abe04406cf8506413224d55f270b255c60c2d0d3b62e1c63181f2affc2a264ae9196feda06518ff087aee76e9582a28662',
      ],
      [
        'sha256',
        'cool',
        'c34045c1a1db8d1b3fca8a692198466952daae07eaf6104b4c87ed3b55b6af1b',
      ],
    ];

    it.each(constSpecs)(
      'should return expected constant values',
      (algo, value, expected) => {
        const cacheKeyGen = new ShaCacheKeyGenerator({
          algorithm: algo,
        });
        expect(cacheKeyGen.createHash(value)).toStrictEqual(expected);
      }
    );
  });
  it('should be stable return the hash from the same value', () => {
    const cacheKeyGen = new ShaCacheKeyGenerator();
    const str = 'hello+world-{cool123}';
    expect(cacheKeyGen.createHash(str)).toStrictEqual(
      cacheKeyGen.createHash(str)
    );
  });
});

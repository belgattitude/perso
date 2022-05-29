import type { IDTO } from '@/backend/lib/dto';

export type RequestDto = IDTO;
export type ResponseDto = unknown;

export interface IQuery<TRequestDto extends RequestDto> {
  execute(params: TRequestDto): Promise<unknown>;
}
/*
class Test implements IQuery<Params> {
  execute = async (params?: Params) => {
    return { h: true };
  };
}

abstract class AbstractQuery<TRequestDto extends RequestDto>
  implements IQuery<TRequestDto>
{
  abstract readonly queryName: string;
  abstract execute<T extends ResponseDto>(params: TRequestDto): Promise<T>;
}

class Test2 extends AbstractQuery<never> {
  readonly queryName = 'cool';
  execute = async () => {
    return { h2: true };
  };
}


class AA<T> {
  execute = async (): Promise<T> => {
    return true;
  };
}

type Params = { test: boolean };

const test = new Test();
const { h } = await test.execute();
// const test2 = new Test2();
// const { h2 } = await test2.execute();
*/

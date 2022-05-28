type PlainObject<T = unknown> = Record<string, T>;
type RequestDto = PlainObject;
type ResponseDto = PlainObject;

export interface IQuery<
  TRequestDto extends RequestDto,
  TResponseDto extends ResponseDto
> {
  execute(params: TRequestDto): Promise<TResponseDto>;
}

abstract class AbstractQuery<
  TRequestDto extends RequestDto,
  TResponseDto extends ResponseDto
> implements IQuery<TRequestDto, TResponseDto>
{
  abstract readonly queryName: string;
  abstract execute(params: TRequestDto): Promise<TResponseDto>;
}

/*
class Test2 extends AbstractQuery<
  never,
  Awaited<ReturnType<Test2['execute']>>
> {
  readonly queryName = 'cool';
  execute = async () => {
    return { h2: true };
  };
}
*/

/*
class AA<T> {
  execute = async (): Promise<T> => {
    return true;
  };
}
*/

type Params = { test: boolean };

class Test implements IQuery<Params, Awaited<ReturnType<Test['execute']>>> {
  execute = async (params?: Params) => {
    return { h: true };
  };
}

const test = new Test();
const { h } = await test.execute();
// const test2 = new Test2();
// const { h2 } = await test2.execute();

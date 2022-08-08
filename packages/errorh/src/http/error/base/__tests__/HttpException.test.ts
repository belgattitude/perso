import { HttpException } from '../HttpException';

describe('HttpException', () => {
  it('should be instance of Error and HttpException', () => {
    const exception = new HttpException({ message: 'test', statusCode: 500 });
    expect(exception).toBeInstanceOf(HttpException);
    expect(exception).toBeInstanceOf(Error);
  });
  it('should have native error properties', () => {
    const exception = new HttpException({ message: 'test', statusCode: 500 });
    expect(exception.name).toStrictEqual('HttpException');
    expect(exception.message).toStrictEqual('test');
    expect(exception.stack).toStrictEqual(expect.any(String));
    expect(exception.cause).toBeUndefined();
  });
  it('should persist url and statusCode', () => {
    const exception = new HttpException({
      message: 'test',
      statusCode: 500,
      url: 'https://localhost',
    });
    expect(exception.url).toStrictEqual('https://localhost');
    expect(exception.statusCode).toStrictEqual(500);
  });
  it('should be catchable', () => {
    const exception = new HttpException({
      message: 'test',
      statusCode: 500,
      url: 'https://localhost',
    });
    expect(() => {
      throw exception;
    }).toThrowError(HttpException);
  });
  it('should support sending a cause', () => {
    let exception: HttpException;
    const errorCause = new Error('Origin error');
    try {
      throw errorCause;
    } catch (cause) {
      exception = new HttpException({
        message: 'test with cause',
        statusCode: 500,
        cause: cause as unknown as Error,
      });
    }
    expect(exception.cause).toStrictEqual(errorCause);
    expect(exception.cause?.message).toStrictEqual('Origin error');
  });
});

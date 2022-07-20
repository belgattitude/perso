import type { FailPayload } from '../result';
import { Result } from '../result';

describe('Result tests', () => {
  type User = {
    username: string;
  };

  class ExampleError extends Error {
    constructor(message: string) {
      super(message);
      Object.setPrototypeOf(this, ExampleError.prototype);
      this.name = this.constructor.name;
    }
  }

  describe('When result is created with an error', () => {
    const errorResult = Result.fail(new Error('Not okay'));
    it('isError() must return true', () => {
      expect(errorResult.isError()).toBeTruthy();
    });
    it('the payload should contains isError=true', () => {
      expect(errorResult.payload.isError).toBeTruthy();
    });
    it('unwrap() should return error message', () => {
      expect((errorResult.unwrap() as Error).message).toStrictEqual('Not okay');
    });
  });

  describe('When result is created with an success value', () => {
    const result = Result.ok<User>({ username: 'Jest' });
    it('isError() must return false', () => {
      expect(result.isError()).toBeFalsy();
    });
    it('payload.isError must be false', () => {
      expect(result.payload.isError).toBeFalsy();
    });
    it('unwrap() should return the value', () => {
      expect(result.unwrap()).toStrictEqual({ username: 'Jest' });
    });
  });

  it('payload.error should be an error even if it was given as string', () => {
    const failFromString = Result.fail('from string').payload;
    expect((failFromString as unknown as FailPayload).error).toBeInstanceOf(
      Error
    );
  });

  it('should allow to map over a successful result', () => {
    // Arrange
    const success = Result.ok<User>({ username: 'Jest' });
    // Act
    const result = success
      .map<string>((r) => {
        return `Username is ${r.username}`;
      })
      .map<string[]>((r) => {
        return r.toLowerCase().split(' ');
      })
      .mapErr((e) => {
        throw new Error(`This cannot happen: ${e.message}`);
      })
      .unwrap();
    // Assert
    expect(result).toStrictEqual(['username', 'is', 'jest']);
  });

  it('should allow to mapErr over a failed result', () => {
    // Arrange
    const fail = Result.fail(new ExampleError(`I'm a failure :)`));
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const mockCallback = jest.fn(() => {});

    // Act
    const result = fail
      .map((r) => {
        throw new Error(`This cannot happen: ${r}`);
      })
      .mapErr((e) => {
        if (e instanceof ExampleError) {
          mockCallback();
          return new Error('cool');
        }
        return e;
      })
      .map((r) => {
        throw new Error(`This cannot happen too:  ${r}`);
      })
      .unwrap();

    expect(mockCallback.mock.calls).toHaveLength(1);
    expect(result).toBeInstanceOf(Error);
    expect((result as unknown as Error).message).toStrictEqual('cool');
    expect((result as unknown as Error).name).toStrictEqual('Error');
  });

  it('should allow to asyncMap over a successful result', async () => {
    // Arrange
    const success = Result.ok<User>({ username: 'Jest' });
    // Act
    const result = (
      await success.asyncMap(async (r) => {
        return `Username is ${r.username}`;
      })
    ).unwrap();
    // Assert
    expect(result).toStrictEqual('Username is Jest');
  });
});

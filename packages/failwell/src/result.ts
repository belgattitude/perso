type ErrorType = Error;

export type OkPayload<T> = {
  isError: false;
  value: T;
};

export type FailPayload<E extends ErrorType = Error> = {
  isError: true;
  error: E;
};

type ResultPayload<T, E extends ErrorType = Error> =
  | OkPayload<T>
  | FailPayload<E>;

export class Result<T, E extends ErrorType = Error> {
  /**
   * Discriminated union between OkPayload | FailPayload
   */
  readonly payload: Readonly<ResultPayload<T, E>>;

  /**
   * @throws Error if runtime validation of the payload failed
   */
  constructor(payload: ResultPayload<T, E>) {
    this.runRuntimePayloadValidation(payload);
    this.payload = payload;
    Object.freeze(this);
  }

  /**
   * Create a successful result
   * @param value can be anything except an instance of Error.
   * @throws Error if runtime validation of the payload failed
   */
  static ok<U, E extends ErrorType = Error>(value: U): Result<U, E> {
    return new Result({
      isError: false,
      value,
    });
  }

  isError(): boolean {
    return this.payload.isError;
  }

  /**
   * Creates a failed result
   * @param error - An Error object or string (Error object is recommended to keep trace)
   * @throws Error if runtime validation of the payload failed
   */
  static fail<E extends ErrorType>(error: E | string): Result<never, E> {
    return new Result({
      isError: true,
      error: typeof error === 'string' ? new Error(error) : error,
    } as FailPayload<E>);
  }

  /**
   * Unwraps a value or Error
   */
  unwrap(): T | E {
    return this.payload.isError ? this.payload.error : this.payload.value;
  }

  map<U>(mapFn: (value: T) => U): Result<U, E> {
    if (this.payload.isError) {
      return this as unknown as Result<U, E>;
    }
    const newValue = mapFn(this.payload.value);
    if (newValue instanceof Error) {
      throw new Error('Cannot return an error from a map function');
    }
    return Result.ok(newValue);
  }

  async asyncMap<U>(mapFn: (value: T) => Promise<U>): Promise<Result<U, E>> {
    if (this.payload.isError) {
      return Promise.resolve(this as unknown as Result<U, E>);
    } else {
      try {
        const newInner = await mapFn(this.payload.value);
        if (newInner instanceof Error) {
          throw new Error('Cannot return an error from a asyncMap function');
        }
        return Result.ok(newInner);
      } catch (e: unknown) {
        return new Result({
          isError: true,
          error: e,
        } as FailPayload<E>);
      }
    }
  }

  mapErr<F extends ErrorType = Error>(mapFn: (error: E) => F): Result<T, F> {
    return this.payload.isError
      ? Result.fail(mapFn(this.payload.error))
      : (this as unknown as Result<T, F>);
  }

  /**
   * What could possibly go wrong at runtime.
   *
   * @remarks
   * This should not be necessary for typescript only projects.
   * The type system already guards against those errors.
   *
   * @throws Error when payload fails validation
   */
  private runRuntimePayloadValidation(payload: ResultPayload<T, E>): void {
    const msg = 'Result class runtime validation failure';
    if (typeof payload !== 'object') {
      throw new Error(`${msg}: Payload must be an object.`);
    }
    if (!('isError' in payload)) {
      throw new Error(`${msg}: Payload lacks 'isError' discriminant.`);
    }
    if (typeof payload.isError !== 'boolean') {
      throw new Error(`${msg}: isError must stricly be a boolean.`);
    }
    if (payload.isError) {
      if (!('error' in payload)) {
        throw new Error(`${msg}: Failure payload require a valid error.`);
      }
      if (!(payload.error instanceof Error)) {
        throw new Error(
          `${msg}: Failure payload error must be an instance of Error.`
        );
      }
    }
    if (!payload.isError) {
      if (!('value' in payload)) {
        throw new Error(`${msg}: Success payload requires a value.`);
      }
      if (payload.value instanceof Error) {
        throw new Error(
          `${msg}: Success payload value cannot be an instance of Error.`
        );
      }
    }
  }
}

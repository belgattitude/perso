import { isNonEmptyString } from '../typeguards';

export function assertNonEmptyString(
  v: unknown,
  msgOrErrorFactory?: string | (() => Error),
  /** auto-trim, default true */
  trim?: boolean
): asserts v is string {
  if (!isNonEmptyString(v, trim ?? true)) {
    throw createAssertException(msgOrErrorFactory);
  }
}

export function assertIsPresent<T>(
  v: T,
  msgOrErrorFactory?: string | (() => Error)
): asserts v is NonNullable<T> {
  if (v === null || v == undefined) {
    throw createAssertException(
      msgOrErrorFactory,
      'Value is null or undefined.'
    );
  }
}

export function assertSafeInteger(
  v: unknown,
  msgOrErrorFactory?: string | (() => Error)
): asserts v is number {
  if (typeof v !== 'number' || !Number.isSafeInteger(v)) {
    throw createAssertException(
      msgOrErrorFactory,
      'Value is not a safe integer BILOUTEBILL'
    );
  }
}

function createAssertException(
  msgOrErrorFactory?: string | (() => Error),
  fallbackMsg?: string
) {
  if (
    typeof msgOrErrorFactory === 'string' ||
    msgOrErrorFactory === undefined
  ) {
    throw new Error(
      msgOrErrorFactory ?? fallbackMsg ?? 'Assertion did not pass.'
    );
  }
  throw msgOrErrorFactory();
}

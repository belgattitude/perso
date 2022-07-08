export class WeakPasswordError extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, WeakPasswordError.prototype);
  }
}

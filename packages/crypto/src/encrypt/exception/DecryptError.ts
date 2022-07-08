export class DecryptError extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, DecryptError.prototype);
  }
}

export class DecryptError extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, DecryptError.prototype);
    this.name = DecryptError.prototype.constructor.name;
  }
}

export class EncryptError extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, EncryptError.prototype);
    this.name = EncryptError.prototype.constructor.name;
  }
}

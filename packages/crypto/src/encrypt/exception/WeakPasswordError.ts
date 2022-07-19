export class WeakPasswordError extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, WeakPasswordError.prototype);
    this.name = WeakPasswordError.prototype.constructor.name;
  }
}

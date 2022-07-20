export class LoginCommand {
  constructor(
    public readonly usernameOrEmail: string,
    public readonly password: string
  ) {}
  static create(usernameOrEmail: string, password: string): LoginCommand {
    return new LoginCommand(usernameOrEmail, password);
  }
}

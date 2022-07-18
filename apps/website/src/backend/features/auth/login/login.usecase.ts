import { BcryptJsPasswordHasher } from '@belgattitude/crypto';
import type { PrismaClientDbMain } from '@belgattitude/db-main';
import { isNonEmptyString } from '@belgattitude/ts-utils';
import type { LoginCommand } from '@/backend/features/auth/login/login.command';

const passwordHasher = new BcryptJsPasswordHasher({ rounds: 12 });

interface IUseCase<C, R = unknown> {
  execute(command: C): Promise<R>;
}

export class LoginUseCase implements IUseCase<LoginCommand> {
  constructor(private readonly prisma: PrismaClientDbMain) {}
  async execute(command: LoginCommand) {
    const { usernameOrEmail, password } = command;
    const user = await this.prisma.user.findUnique({
      select: {
        id: true,
        username: true,
        firstName: true,
        lastName: true,
        email: true,
        password: true,
        role: true,
      },
      where: {
        email: usernameOrEmail,
      },
    });
    if (!user) {
      return null;
    }
    if (!isNonEmptyString(user.password)) {
      return null;
    }
    console.log('user', user);
    const isValid = passwordHasher.verify(password, user.password);

    if (isValid) {
      return {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role.toLowerCase(),
      };
    }
    return null;
  }
}

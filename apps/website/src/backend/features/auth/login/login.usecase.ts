import { BcryptJsPasswordHasher } from '@belgattitude/crypto';
import type { PrismaClientDbMain } from '@belgattitude/db-main';
import { Result } from '@belgattitude/failwell';
import { isNonEmptyString } from '@belgattitude/ts-utils';
import type { LoginCommand } from '@/backend/features/auth/login/login.command';

const passwordHasher = new BcryptJsPasswordHasher({ rounds: 12 });

interface IUseCase<C, R = unknown> {
  execute(command: C): Promise<R>;
}

type User = {
  id: number;
  username: string;
  email: string;
  role: string;
};

export class LoginUseCase implements IUseCase<LoginCommand> {
  constructor(private readonly prisma: PrismaClientDbMain) {}
  async execute(command: LoginCommand): Promise<Result<User>> {
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
      return Result.fail('User not found');
    }
    if (!isNonEmptyString(user.password)) {
      return Result.fail('Not password set');
    }
    const isValid = passwordHasher.verify(password, user.password);
    if (!isValid) {
      return Result.fail('Wrong password');
    }
    return Result.ok({
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role.toLowerCase(),
    });
  }
}

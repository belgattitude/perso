import { BcryptJsPasswordHasher } from '@belgattitude/crypto';
import { UserPermissionRole } from '@prisma/client';
import type { PrismaDbMain as Prisma } from '../../';
import { AbstractSeed } from '../lib/AbstractSeed';

const passwordHasher = new BcryptJsPasswordHasher({ rounds: 12 });

const userSeeds: Prisma.UserCreateInput[] = [
  {
    username: 'demo',
    firstName: 'Sébastien',
    lastName: 'Vanvelthem',
    email: 's.vanvelthem@gmail.com',
    role: UserPermissionRole.USER,
    password: passwordHasher.hash(process.env.SEED_DEMO_PASSWORD || 'demo123'),
  },
  {
    username: 'belgattitude',
    firstName: 'Sébastien',
    lastName: 'Vanvelthem',
    email: 'belgattitude@gmail.com',
    role: UserPermissionRole.ADMIN,
    password: passwordHasher.hash(
      process.env.SEED_ADMIN_PASSWORD || 'admin123'
    ),
  },
];

export class UserSeeds extends AbstractSeed {
  execute = async (): Promise<void> => {
    for (const u of userSeeds) {
      const { email, username, ...userNonUnique } = u;
      const user = await this.prisma.user.upsert({
        where: { email },
        update: userNonUnique,
        create: u,
      });
      this.log('UPSERT', `User ${user.id} - ${user.email} - ${user.password}`);
    }
  };
}

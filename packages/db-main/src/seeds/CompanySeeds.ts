import type { PrismaDbMain as Prisma } from '../../';
import { AbstractSeed } from '../lib/AbstractSeed';

const companySeed: Prisma.CompanyCreateInput[] = [
  {
    slug: 'wwf',
    title: 'Word Wild Fundation',
    Contact: {
      connectOrCreate: [
        {
          create: {
            firstName: 'Jacques',
            lastName: 'Bergier',
            email: 'lemondevousaime@gmail.com',
          },
          where: {
            email: 'lemondevousaime@gmail.com',
          },
        },
      ],
    },
  },
  {
    slug: 'msf',
    title: 'Médecins sans frontières',
    Contact: {
      connectOrCreate: [
        {
          create: {
            firstName: 'John',
            lastName: 'Wayne',
            email: 'belgattitude@gmail.com',
          },
          where: {
            email: 'belgattitude@gmail.com',
          },
        },
      ],
    },
  },
];

export class CompanySeeds extends AbstractSeed {
  execute = async (): Promise<void> => {
    for (const c of companySeed) {
      const company = await this.prisma.company.upsert({
        where: { slug: c.slug },
        update: {},
        create: c,
      });
      this.log('UPSERT', `Company ${company.id} - ${company.title}`);
    }
  };
}

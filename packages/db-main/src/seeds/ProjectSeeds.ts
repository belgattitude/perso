import { MeetingStatus, UserPermissionRole } from '@prisma/client';
import type { PrismaDbMain as Prisma } from '../../';
import { AbstractSeed } from '../lib/AbstractSeed';

const projectSeed: Prisma.ProjectCreateInput[] = [
  {
    slug: 'first-project',
    title: 'My very first cool project',
    Meetings: {
      connectOrCreate: [
        {
          create: {
            slug: 'my-first-meeting',
            timeZone: 'Europe/Brussels',
            title: 'First meeting',
            description: 'Hey this is our meeting description',
            startAt: new Date(),
            endAt: new Date(),
            meetProvider: 'google',
            meetProviderUrl: 'https://meet.google.com/',
            status: MeetingStatus.PENDING,
          },
          where: {
            slug: 'my-first-meeting',
          },
        },
      ],
    },
  },
];

export class ProjectSeeds extends AbstractSeed {
  execute = async (): Promise<void> => {
    for (const p of projectSeed) {
      const project = await this.prisma.project.upsert({
        where: { slug: p.slug },
        include: {
          Meetings: true,
        },
        update: {},
        create: p,
      });
      this.log('UPSERT', `Project ${project.id} - ${project.title}`);
    }
  };
}

import type { Prisma } from '@prisma/client';
import {
  MeetingAttendeeRole,
  MeetingStatus,
  PrismaClient,
} from '@prisma/client';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    firstName: 'Sébastien',
    lastName: 'Vanvelthem',
    nickname: 'belgattitude',
    email: 'belgattitude@gmail.com',
    Post: {
      create: [
        {
          title: 'Nextjs monorepo example',
          slug: 'first-post',
          link: 'https://github.com/belgattitude/nextjs-monorepo-example',
          content: 'Hello world',
          image:
            'https://images.unsplash.com/photo-1625904835711-fa25795530e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',
          publishedAt: new Date(),
        },
      ],
    },
  },
];

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

async function main() {
  console.log(`Start seeding ...`);
  // users and posts
  for (const u of userData) {
    const user = await prisma.user.upsert({
      where: { email: u.email },
      update: {},
      create: u,
    });
    console.log(`Created or updated user with id: ${user.id}`);
  }
  for (const c of companySeed) {
    const company = await prisma.company.upsert({
      where: { slug: c.slug },
      update: {},
      create: c,
    });
    console.log(`Created or updated company with id: ${company.id}`);
  }
  for (const p of projectSeed) {
    const project = await prisma.project.upsert({
      where: { slug: p.slug },
      include: {
        Meetings: true,
      },
      update: {},
      create: p,
    });

    const person1 = await prisma.contact.findUnique({
      where: { email: 'belgattitude@gmail.com' },
    });
    const person2 = await prisma.contact.findUnique({
      where: { email: 'lemondevousaime@gmail.com' },
    });

    console.log(`Created or updated company with id: ${project.id}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

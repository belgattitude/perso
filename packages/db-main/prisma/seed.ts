import { PrismaClientDbMain } from '../src';
import { CompanySeeds, ProjectSeeds, UserSeeds } from '../src/seeds';

const prisma = new PrismaClientDbMain();

async function main() {
  console.log(`Start seeding ...`);

  const userSeeds = new UserSeeds(prisma);
  userSeeds.execute();

  const companySeeds = new CompanySeeds(prisma);
  companySeeds.execute();

  const projectSeeds = new ProjectSeeds(prisma);
  projectSeeds.execute();

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

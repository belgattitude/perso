import type {
  SectionAnimationConfig,
  SkillRecord,
} from '@/features/about/components/Skills';

export const skillSections = [
  'Overview',
  'Frontend',
  'PHP',
  'Node',
  'DB',
  'Dev',
  'Past stacks',
] as const;
export const defaultSection: typeof skillSections[number] = 'Overview';

export const sectionAnimations: SectionAnimationConfig = {
  none: [],
  adrenaline: [],
  topdown: ['Overview', 'Frontend', 'PHP', 'DB', 'Overview'],
  soft: ['Past stacks'],
};

export const skillType = [
  'language',
  'library',
  'database',
  'design',
  'architecture',
  'tooling',
] as const;

export const skillsRecords: SkillRecord[] = [
  {
    name: 'ReactJs',
    logo: '/icons/devicons/react/react-original.svg',
    homepage: 'https://reactjs.org',
    years: 5,
    rating: 4,
    sections: ['Frontend', 'Overview'],
    type: 'library',
  },
  {
    name: 'Typescript',
    logo: '/icons/devicons/typescript/typescript-original.svg',
    homepage: 'https://www.typescriptlang.org',
    years: 5,
    rating: 4,
    sections: ['Node', 'Frontend', 'Overview'],
    type: 'language',
  },
  {
    name: 'NextJs',
    logo: '/icons/devicons/nextjs/nextjs-original.svg',
    homepage: 'https://nextjs.org',
    years: 2,
    rating: 4,
    sections: ['Frontend', 'Overview'],
    type: 'library',
  },
  {
    name: 'Redux',
    logo: '/icons/devicons/redux/redux-original.svg',
    homepage: 'https://github.com/reduxjs/redux-toolkit',
    rating: 4,
    sections: ['Frontend'],
    type: 'library',
  },

  {
    name: 'Emotion',
    logo: '/images/logos/technos/emotion-styled.png',
    homepage: 'https://emotion.sh',
    rating: 3,
    sections: ['Frontend'],
    type: 'library',
  },
  {
    name: 'Jest',
    logo: '/icons/devicons/jest/jest-plain.svg',
    homepage: 'https://jestjs.io',
    years: 3,
    rating: 3,
    sections: ['Frontend', 'Node'],
    type: 'library',
  },
  {
    name: 'Scss',
    logo: '/images/logos/technos/sass.png',
    homepage: 'https://sass-lang.com',
    rating: 4,
    sections: ['Frontend'],
    type: 'design',
  },
  {
    name: 'PHP',
    logo: '/images/logos/technos/php.svg',
    homepage: 'https://php.net',
    years: 15,
    rating: 5,
    sections: ['PHP', 'Overview'],
    type: 'language',
  },
  {
    name: 'Doctrine',
    logo: '/icons/devicons/doctrine/doctrine-original.svg',
    homepage: 'https://doctrine-project.org',
    rating: 4,
    sections: ['PHP'],
    type: 'library',
  },
  {
    name: "PSR's & FIG",
    logo: '/images/logos/technos/php-fig.png',
    homepage: 'https://php-fig.org',
    rating: 5,
    sections: ['PHP'],
    type: 'library',
  },
  {
    name: 'Zend 2+',
    logo: '/icons/devicons/zend/zend-plain.svg',
    homepage: 'https://zend.com',
    years: 2,
    rating: 4,
    sections: ['PHP'],
    type: 'library',
  },
  {
    name: 'SF components',
    logo: '/icons/devicons/symfony/symfony-original.svg',
    homepage: 'https://symfony.com',
    years: 4,
    rating: 3,
    sections: ['PHP'],
    type: 'library',
  },
  {
    name: 'PHPUnit',
    logo: '/images/logos/technos/phpunit.png',
    homepage: 'https://phpunit.de',
    years: 8,
    rating: 4,
    sections: ['PHP'],
    type: 'library',
  },
  {
    name: 'SQL',
    logo: '/images/logos/technos/sql.png',
    homepage: 'https://en.wikipedia.org/wiki/SQL',
    years: 10,
    rating: 5,
    sections: ['DB', 'Overview'],
    type: 'language',
  },
  {
    name: 'Express',
    logo: '/icons/devicons/express/express-original.svg',
    homepage: 'https://expressjs.com',
    rating: 4,
    sections: ['Node', 'Overview'],
    type: 'library',
  },
  {
    name: 'GraphQL',
    logo: '/icons/devicons/graphql/graphql-plain.svg',
    homepage: 'https://graphql.org/',
    // years: 1,
    rating: 2,
    sections: ['Node', 'Frontend', 'Overview'],
    type: 'language',
  },
  {
    name: 'Rest Api',
    logo: '/images/logos/technos/openapi.webp',
    homepage: 'https://jsonapi.org/',
    // years: 10,
    rating: 2,
    sections: ['Node', 'PHP', 'Overview'],
    type: 'tooling',
  },
  {
    name: 'Prisma 2',
    logo: '/images/logos/technos/prisma2.png',
    homepage: 'https://prisma.io',
    rating: 3,
    sections: ['Node'],
    type: 'library',
  },
  {
    name: 'MySQL',
    logo: '/icons/devicons/mysql/mysql-plain.svg',
    homepage: 'https://mysql.com',
    rating: 5,
    sections: ['DB'],
    type: 'database',
  },
  {
    name: 'MariaDatabase',
    logo: '/images/logos/technos/mariadb.png',
    homepage: 'https://mariadb.com',
    rating: 5,
    sections: ['DB'],
    type: 'database',
  },
  {
    name: 'Redis',
    logo: '/icons/devicons/redis/redis-plain.svg',
    homepage: 'https://redis.io',
    rating: 3,
    sections: ['DB'],
    type: 'database',
  },
  {
    name: 'PostgreSQL',
    logo: '/icons/devicons/postgresql/postgresql-plain.svg',
    homepage: 'https://www.postgresql.org/',
    rating: 3,
    sections: ['DB'],
    type: 'database',
  },
  {
    name: 'Algolia',
    logo: '/images/logos/technos/algolia.png',
    homepage: 'https://www.algolia.com/',
    rating: 3,
    sections: ['DB'],
    type: 'database',
  },

  {
    name: 'Git',
    logo: '/icons/devicons/git/git-plain.svg',
    homepage: 'https://github.com',
    rating: 4,
    sections: ['Dev'],
    type: 'tooling',
  },
  {
    name: 'Github',
    logo: '/images/logos/technos/github.png',
    homepage: 'https://github.com',
    rating: 4,
    sections: ['Dev'],
    type: 'tooling',
  },
  {
    name: 'Travis',
    logo: '/icons/devicons/travis/travis-plain.svg',
    homepage: 'https://travis-ci.org',
    rating: 4,
    sections: ['Dev'],
    type: 'tooling',
  },
  {
    name: 'Gitlab',
    logo: '/icons/devicons/gitlab/gitlab-plain.svg',
    homepage: 'https://gitlab.com',
    rating: 4,
    sections: ['Dev'],
    type: 'tooling',
  },
  {
    name: 'Docker',
    logo: '/icons/devicons/docker/docker-plain.svg',
    homepage: 'https://docker.com',
    years: 0.2,
    rating: 1,
    sections: ['Dev'],
    type: 'tooling',
  },
  {
    name: 'Linux',
    logo: '/icons/devicons/linux/linux-original.svg',
    homepage: 'https://linux.org',
    years: 20,
    rating: 4,
    sections: ['Dev'],
    type: 'tooling',
  },
  {
    name: 'Ubuntu',
    logo: '/icons/devicons/ubuntu/ubuntu-plain.svg',
    homepage: 'https://ubuntu.org',
    rating: 4,
    sections: ['Dev'],
    type: 'tooling',
  },
  {
    name: 'Storybook',
    logo: '/icons/devicons/storybook/storybook-original.svg',
    homepage: 'https://storybook.js.org/',
    rating: 2,
    sections: ['Frontend', 'Dev'],
    type: 'tooling',
  },
  {
    name: 'Webpack',
    logo: '/icons/devicons/webpack/webpack-plain.svg',
    homepage: 'https://webpack.js.org',
    rating: 4,
    sections: ['Dev'],
    type: 'library',
  },
  {
    name: 'Zend v1',
    logo: '/images/logos/technos/zf.jpg',
    homepage: 'https://zend.com',
    years: 3,
    rating: 4,
    sections: ['Past stacks'],
    type: 'library',
  },
  {
    name: 'AngularJs',
    logo: '/images/logos/technos/angularjs.svg',
    homepage: 'https:/angular.io',
    years: 3,
    rating: 4,
    sections: ['Past stacks'],
    type: 'library',
  },
  {
    name: 'ExtJs 3.x',
    logo: '/images/logos/technos/extjs.png',
    homepage: 'https://sencha.com',
    years: 4,
    rating: 4,
    sections: ['Past stacks'],
    type: 'library',
  },
  {
    name: 'Java',
    logo: '/icons/devicons/java/java-original.svg',
    homepage: 'https://www.oracle.com/java',
    rating: 3,
    sections: ['Past stacks'],
    type: 'library',
  },
];

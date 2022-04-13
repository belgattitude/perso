/**
 * Configure sections and skill types
 */
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
  'Relics',
] as const;
export const defaultSection: typeof skillSections[number] = 'Overview';

export const sectionAnimations: SectionAnimationConfig = {
  none: [],
  adrenaline: ['Overview'],
  topdown: ['Frontend', 'PHP', 'DB', 'Overview'],
  soft: ['Relics'],
};

export const skillType = [
  'language',
  'library',
  'database',
  'design',
  'architecture',
  'tooling',
] as const;

/**
 * Here add the skills
 */
export const skillsRecords: SkillRecord[] = [
  {
    name: 'ReactJs',
    logo: '/images/logos/technos/reactjs.png',
    homepage: 'https://reactjs.org',
    years: 5,
    rating: 4,
    sections: ['Frontend', 'Overview'],
    type: 'library',
  },
  {
    name: 'Typescript',
    logo: '/images/logos/technos/typescript.png',
    homepage: 'https://www.typescriptlang.org',
    years: 5,
    rating: 4,
    sections: ['Node', 'Frontend', 'Overview'],
    type: 'language',
  },
  {
    name: 'Redux',
    logo: '/images/logos/technos/redux.svg',
    homepage: 'https://reactjs.org',
    rating: 4,
    sections: ['Frontend'],
    type: 'library',
  },
  {
    name: 'NextJs',
    logo: '/images/logos/technos/nextjs.png',
    homepage: 'https://nextjs.org',
    years: 2,
    rating: 4,
    sections: ['Frontend', 'Overview'],
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
    name: 'React Router',
    logo: '/images/logos/technos/react-router.png',
    homepage: 'https://reacttraining.com/react-router',
    rating: 4,
    sections: ['Frontend'],
    type: 'library',
  },
  {
    name: 'Formik',
    logo: '/images/logos/technos/formik.png',
    homepage: 'https://jaredpalmer.com/formik/',
    rating: 4,
    sections: ['Frontend'],
    type: 'library',
  },
  {
    name: 'Jest',
    logo: '/images/logos/technos/jest.png',
    homepage: 'https://jestjs.io',
    years: 3,
    rating: 3,
    sections: ['Frontend', 'Node'],
    type: 'library',
  },
  {
    name: 'Webpack',
    logo: '/images/logos/technos/webpack.png',
    homepage: 'https://webpack.js.org',
    rating: 4,
    sections: ['Frontend'],
    type: 'library',
  },
  {
    name: 'Javascript',
    logo: '/images/logos/technos/ecmascript.png',
    years: 8,
    rating: 4,
    sections: ['Frontend'],
    type: 'language',
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
    name: 'HTML5 & CSS3',
    logo: '/images/logos/technos/html5-css3.svg',
    homepage: 'http://w3c.org',
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
    logo: '/images/logos/technos/doctrine.png',
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
    logo: '/images/logos/technos/zf.jpg',
    homepage: 'https://zend.com',
    years: 2,
    rating: 4,

    sections: ['PHP'],
    type: 'library',
  },
  {
    name: 'SF components',
    logo: '/images/logos/technos/symfony.png',
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
    name: 'PHPStan',
    logo: '/images/logos/technos/phpstan.png',
    homepage: 'https://github.com/phpstan',
    rating: 4,
    sections: ['PHP'],
    type: 'library',
  },
  {
    name: 'Psalm',
    logo: '/images/logos/technos/psalm.png',
    homepage: 'https://github.com/vimeo/psalm',
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
    logo: '/images/logos/technos/express.png',
    homepage: 'https://expressjs.com',
    rating: 4,
    sections: ['Node', 'Overview'],
    type: 'library',
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
    name: 'TypeORM',
    logo: '/images/logos/technos/typeorm.png',
    homepage: 'https://typeorm.io',
    rating: 3,
    sections: ['Node'],
    type: 'library',
  },
  {
    name: 'Docker',
    logo: '/images/logos/technos/docker.png',
    homepage: 'https://docker.com',
    years: 0.2,
    rating: 1,
    sections: ['Dev'],
    type: 'tooling',
  },
  {
    name: 'MySQL',
    logo: '/images/logos/technos/mysql.png',
    homepage: 'https://mysql.com',
    rating: 5,
    sections: ['DB'],
    type: 'database',
  },
  {
    name: 'MariaDB',
    logo: '/images/logos/technos/mariadb.png',
    homepage: 'https://mariadb.com',
    rating: 5,
    sections: ['DB'],
    type: 'database',
  },
  {
    name: 'Redis',
    logo: '/images/logos/technos/redis.png',
    homepage: 'https://redis.io',
    rating: 3,
    sections: ['DB'],
    type: 'database',
  },
  {
    name: 'PostgreSQL',
    logo: '/images/logos/technos/postgresql.png',
    homepage: 'https://www.postgresql.org/',
    rating: 3,
    sections: ['DB'],
    type: 'database',
  },
  {
    name: 'PHPStorm...',
    logo: '/images/logos/technos/phpstorm.png',
    homepage: 'https://jetbrains.com',
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
    name: 'Travis CI',
    logo: '/images/logos/technos/travis.png',
    homepage: 'https://travis-ci.org',
    rating: 4,
    sections: ['Dev'],
    type: 'tooling',
  },

  {
    name: 'Gitlab',
    logo: '/images/logos/technos/gitlab.png',
    homepage: 'https://gitlab.com',
    rating: 4,
    sections: ['Dev'],
    type: 'tooling',
  },

  {
    name: 'Apache',
    logo: '/images/logos/technos/apache.png',
    homepage: 'https://httpd.apache.org',
    rating: 4,
    sections: ['Dev'],
    type: 'tooling',
  },
  {
    name: 'Nginx',
    logo: '/images/logos/technos/nginx.png',
    homepage: 'https://nginx.org',
    rating: 4,
    sections: ['Dev'],
    type: 'tooling',
  },

  {
    name: 'Linux',
    logo: '/images/logos/technos/linux.png',
    homepage: 'https://linux.org',
    years: 20,
    rating: 4,
    sections: ['Dev'],
    type: 'tooling',
  },
  {
    name: 'Ubuntu',
    logo: '/images/logos/technos/ubuntu.png',
    homepage: 'https://ubuntu.org',
    rating: 4,
    sections: ['Dev'],
    type: 'tooling',
  },
  {
    name: 'Zend v1',
    logo: '/images/logos/technos/zf.jpg',
    homepage: 'https://zend.com',
    years: 3,
    rating: 4,
    sections: ['Relics'],
    type: 'library',
  },
  {
    name: 'AngularJs',
    logo: '/images/logos/technos/angularjs.svg',
    homepage: 'https:/angular.io',
    years: 3,
    rating: 4,
    sections: ['Relics'],
    type: 'library',
  },
  {
    name: 'ExtJs 3.x',
    logo: '/images/logos/technos/extjs.png',
    homepage: 'https://sencha.com',
    years: 4,
    rating: 4,
    sections: ['Relics'],
    type: 'library',
  },
  {
    name: 'Boostrap',
    logo: '/images/logos/technos/bootstrap.png',
    homepage: 'https://getbootstrap.com',
    rating: 4,
    sections: ['Relics'],
    type: 'library',
  },
  {
    name: 'JQuery',
    logo: '/images/logos/technos/jquery.png',
    homepage: 'https://jquery.com',
    rating: 4,
    sections: ['Relics'],
    type: 'library',
  },
  {
    name: 'Java',
    logo: '/images/logos/technos/java.png',
    homepage: 'https://www.oracle.com/java',
    rating: 3,
    sections: ['Relics'],
    type: 'library',
  },
];

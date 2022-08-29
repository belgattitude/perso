import path from 'path';

export default {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
  react: {
    useSuspense: false,
  },
  localePath: path.resolve('../../packages/common-i18n/src/locales'),
};

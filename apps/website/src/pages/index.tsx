import { Asserts } from '@belgattitude/ts-utils';
import { BadRequest } from '@tsed/exceptions';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { homeConfig } from '@/features/home/home.config';
import { HomePage } from '@/features/home/pages';

type Props = {
  /** Add props here */
};

export default function HomePageRoute(
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return <HomePage />;
}

const { i18nNamespaces } = homeConfig;

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { locale } = context;
  Asserts.nonEmptyString(locale, () => {
    throw new BadRequest('Locale is missing');
  });
  return {
    props: {
      // i18nNamespaces.slice() is needed here to get rid off readonly
      ...(await serverSideTranslations(locale, i18nNamespaces.slice())),
    },
  };
};

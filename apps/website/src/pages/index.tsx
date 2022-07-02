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

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { locale } = context;
  if (locale === undefined) {
    throw new BadRequest('locale is missing');
  }
  return {
    props: {
      ...(await serverSideTranslations(locale, homeConfig.i18nNamespaces)),
    },
  };
};

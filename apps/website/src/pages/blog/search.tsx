import { HttpBadRequest } from '@httpx/exception';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { blogConfig } from '@/features/blog/blog.config';
import { SearchPage } from '@/features/blog/pages';

type Props = {
  /** Add props here */
};

export default function HomePageRoute(
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return <SearchPage />;
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { locale } = context;
  if (locale === undefined) {
    throw new HttpBadRequest('locale is missing');
  }
  return {
    props: {
      ...(await serverSideTranslations(locale, blogConfig.i18nNamespaces)),
    },
  };
};

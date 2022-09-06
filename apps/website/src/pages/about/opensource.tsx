import { HttpBadRequest } from '@belgattitude/errorh';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { aboutConfig } from '@/features/about/about.config';
import { OpensourcePage } from '@/features/about/pages';

type Props = {
  /** Add props here */
};

export default function ResumeRoute(
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return <OpensourcePage />;
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { locale } = context;
  if (locale === undefined) {
    throw new HttpBadRequest('locale is missing');
  }
  const { i18nNamespaces } = aboutConfig;
  return {
    props: {
      ...(await serverSideTranslations(locale, i18nNamespaces)),
    },
  };
};

import { BadRequest } from '@tsed/exceptions';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { resumeConfig } from '@/features/about/about.config';
import { ResumePage } from '@/features/about/pages';

type Props = {
  /** Add HomeRoute props here */
};

export default function HomeRoute(
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return <ResumePage />;
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { locale } = context;
  if (locale === undefined) {
    throw new BadRequest('locale is missing');
  }
  const { i18nNamespaces } = resumeConfig;
  return {
    props: {
      // i18nNamespaces.slice() is needed here to get rid off readonly
      ...(await serverSideTranslations(locale, i18nNamespaces.slice())),
    },
  };
};

import { BadRequest } from '@tsed/exceptions';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { ReactElement } from 'react';
import { aboutConfig } from '@/features/about/about.config';
import { ResumeLayout } from '@/features/about/layouts/resume';
import { ResumePage } from '@/features/about/pages';

type Props = {
  /** Add props here */
};

export default function ResumeRoute(
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return <ResumePage />;
}

/*
ResumeRoute.getLayout = function getLayout(page: ReactElement) {
  return <ResumeLayout>{page}</ResumeLayout>;
}; */

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { locale } = context;
  if (locale === undefined) {
    throw new BadRequest('locale is missing');
  }
  const { i18nNamespaces } = aboutConfig;
  return {
    props: {
      // i18nNamespaces.slice() is needed here to get rid off readonly
      ...(await serverSideTranslations(locale, i18nNamespaces.slice())),
    },
    // revalidate: 60,
  };
};

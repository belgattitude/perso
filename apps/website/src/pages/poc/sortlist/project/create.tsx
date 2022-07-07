import { Asserts } from '@belgattitude/ts-utils';
import { BadRequest } from '@tsed/exceptions';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { ReactElement } from 'react';
import { CreateProjectPage } from '@/features/poc/pages';
import { EmptyLayout } from '@/layouts/empty/EmptyLayout';

type Props = {
  /** nothing yet */
};

export default function ProjectRoute(
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return <CreateProjectPage />;
}

ProjectRoute.getLayout = function getLayout(page: ReactElement) {
  return <EmptyLayout>{page}</EmptyLayout>;
};

const i18nNamespaces = ['common'];

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { slug = '' } = context.params ?? {};
  const { locale } = context;

  Asserts.nonEmptyString(locale, () => {
    throw new BadRequest('Locale is missing');
  });

  return {
    props: {
      projectSlug: slug,
      ...(await serverSideTranslations(locale, i18nNamespaces.slice())),
    },
  };
};

import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';
import type { FC } from 'react';
import { useQuery } from 'react-query';
import { searchBlog } from '@/features/blog/api';
import { blogConfig } from '@/features/blog/blog.config';

export const AdminPage: FC = () => {
  const { t } = useTranslation(blogConfig.i18nNamespaces);

  return (
    <>
      <NextSeo title={t('blog:page.title')} />
      <div className="flex h-screen items-center justify-center">
        <div className="h-full w-3/5"></div>
      </div>
    </>
  );
};

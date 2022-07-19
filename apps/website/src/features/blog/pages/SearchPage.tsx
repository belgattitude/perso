import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';
import type { FC } from 'react';
import { blogConfig } from '@/features/blog/blog.config';
import { trpc } from '@/utils/trpc';

const BlogPosts: FC = () => {
  // const { t } = useTranslation(blogConfig.i18nNamespaces);
  const { data, error } = trpc.useQuery(['blog/test'], {
    retry: false,
  });

  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <pre>{JSON.stringify(error.data, null, 2)}</pre>
      </div>
    );
  }

  return (
    <>
      {data &&
        data.map((post) => {
          return (
            <div key={post.slug}>
              <pre>{JSON.stringify(post, null, 2)}</pre>
            </div>
          );
        })}
    </>
  );
};

export const SearchPage: FC = () => {
  const { t } = useTranslation(blogConfig.i18nNamespaces);

  return (
    <>
      <NextSeo title={t('blog:page.title')} />
      <div className="flex h-screen items-center justify-center">
        <div className="h-full w-3/5">
          <BlogPosts />
        </div>
      </div>
    </>
  );
};

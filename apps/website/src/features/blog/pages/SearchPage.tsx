import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';
import type { FC } from 'react';
import { useQuery } from 'react-query';
import { searchBlog } from '@/features/blog/api';
import { blogConfig } from '@/features/blog/blog.config';

const BlogPosts: FC = () => {
  const { t } = useTranslation(blogConfig.i18nNamespaces);
  const { isError, isLoading, data } = useQuery(['searchBlog'], searchBlog);
  return (
    <>
      {data &&
        data.map((post) => {
          return (
            <div key={post.slug}>
              <>
                <h1>{post.title}</h1>
                <div>
                  {post.image && <img alt={post.title} src={post.image} />}
                </div>
              </>
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

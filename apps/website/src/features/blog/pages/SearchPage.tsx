import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';
import type { FC } from 'react';
import { blogConfig } from '@/features/blog/blog.config';
import { BlogContainer, PostCard } from '@/features/blog/components';
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
    <BlogContainer>
      <div className="grid gap-10 md:grid-cols-2 lg:gap-10">
        {data &&
          data
            .slice(0, 2)
            .map((post) => (
              <PostCard
                key={post.slug}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
      </div>
      <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
        {data &&
          data
            .slice(2)
            .map((post) => (
              <PostCard key={post.slug} post={post} aspect="square" />
            ))}
      </div>
    </BlogContainer>
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

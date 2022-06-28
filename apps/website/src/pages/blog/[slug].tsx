import { Asserts } from '@belgattitude/ts-utils';
import { BadRequest } from '@tsed/exceptions';
import { format, parseISO } from 'date-fns';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import type { FC } from 'react';
import { blogConfig } from '@/features/blog/blog.config';
import type { Post } from 'contentlayer/generated';
import { allPosts } from 'contentlayer/generated';

const i18nNamespaces = blogConfig.i18nNamespaces.slice();

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
};

type Props = {
  post: Post;
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { locale, params } = context;
  Asserts.nonEmptyString(locale, () => {
    throw new BadRequest('Locale is missing');
  });
  const post: Post | undefined = allPosts.find((post) => {
    return post._raw.flattenedPath === params?.slug;
  });
  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post: post,
      ...(await serverSideTranslations(locale, i18nNamespaces)),
    },
  };
};

const PostLayout: FC<Props> = (props) => {
  const { post } = props;
  if (!post) {
    return <div>No post</div>;
  }
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="py-8 mx-auto max-w-xl">
        <div className="mb-8 text-center">
          <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>
          <h1>{post.title}</h1>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </article>
    </>
  );
};

export default PostLayout;

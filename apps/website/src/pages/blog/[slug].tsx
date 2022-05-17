import { format, parseISO } from 'date-fns';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import type { FC } from 'react';
import type { Post } from 'contentlayer/generated';
import { allPosts } from 'contentlayer/generated';

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
  const { params } = context;
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
    },
  };
};

const PostLayout: FC<Props> = (props) => {
  const { post } = props;
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="max-w-xl mx-auto py-8">
        <div className="text-center mb-8">
          <time dateTime={post.date} className="text-xs text-gray-600 mb-1">
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

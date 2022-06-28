import { Asserts } from '@belgattitude/ts-utils';
import { BadRequest } from '@tsed/exceptions';
import { compareDesc, format, parseISO } from 'date-fns';
import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Link from 'next/link';
import { blogConfig } from '@/features/blog/blog.config';
import type { Post } from 'contentlayer/generated';
import { allPosts } from 'contentlayer/generated';

const i18nNamespaces = blogConfig.i18nNamespaces.slice();

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { locale } = context;
  Asserts.nonEmptyString(locale, () => {
    throw new BadRequest('Locale is missing');
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return {
    props: { posts, ...(await serverSideTranslations(locale, i18nNamespaces)) },
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="text-xl">
        <Link href={post.url}>
          <a className="text-blue-700 hover:text-blue-900">{post.title}</a>
        </Link>
      </h2>
      <time dateTime={post.date} className="block mb-2 text-xs text-gray-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <div
        className="text-sm"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </div>
  );
}

type Props = {
  posts: Post[];
};

export default function Home(props: Props) {
  const { posts } = props;
  return (
    <div className="py-16 mx-auto max-w-2xl text-center">
      <Head>
        <title>Contentlayer Blog Example</title>
      </Head>

      <h1 className="mb-8 text-3xl font-bold">Contentlayer Blog Example</h1>

      {posts && posts.map((post, idx) => <PostCard key={idx} {...post} />)}
    </div>
  );
}

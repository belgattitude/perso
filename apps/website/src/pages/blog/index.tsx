import { compareDesc, format, parseISO } from 'date-fns';
import Head from 'next/head';
import Link from 'next/link';
import type { Post } from 'contentlayer/generated';
import { allPosts } from 'contentlayer/generated';

export async function getStaticProps() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="text-xl">
        <Link href={post.url}>
          <a className="text-blue-700 hover:text-blue-900">{post.title}</a>
        </Link>
      </h2>
      <time dateTime={post.date} className="block text-xs text-gray-600 mb-2">
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
    <div className="mx-auto max-w-2xl py-16 text-center">
      <Head>
        <title>Contentlayer Blog Example</title>
      </Head>

      <h1 className="mb-8 text-3xl font-bold">Contentlayer Blog Example</h1>

      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}

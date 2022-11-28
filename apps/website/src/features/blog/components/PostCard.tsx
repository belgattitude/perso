import {
  format,
  formatRFC3339,
  parseISO,
  formatDistance,
  formatRelative,
  subDays,
} from 'date-fns';
import Link from 'next/link';
import type { FC } from 'react';
import type { MarkdownFile } from '@/backend/features/blog/fs/GetMarkdownFilesFromFs';
import { clsxm } from '@/lib/tailwind';

type Props = {
  aspect: 'landscape' | 'square';
  post: MarkdownFile;
  preloadImage?: boolean;
};
export const PostCard: FC<Props> = (props) => {
  const { post, preloadImage = false, aspect } = props;
  const { data } = post;

  if (data instanceof Error) {
    return <div>Error in post</div>;
  }

  const createdAt =
    typeof data.createdAt === 'string'
      ? parseISO(data.createdAt)
      : data.createdAt;
  const updatedAt =
    typeof data.updatedAt === 'string'
      ? parseISO(data.updatedAt)
      : data.updatedAt;

  // const img = data.image;
  const img = 'https://source.unsplash.com/random/640x480';

  return (
    <div className="group cursor-pointer">
      <div
        className={clsxm(
          'relative overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800 hover:scale-105',
          aspect === 'landscape' ? 'aspect-video' : 'aspect-square'
        )}
      >
        <Link href={`/post/${post.slug}`}>

          <img
            loading={preloadImage ? 'eager' : 'lazy'}
            src={img}
            className="transition-all"
          />

        </Link>
        <h2 className="text-brand-primary mt-2 text-lg font-semibold tracking-normal dark:text-white">
          <Link href={`/post/${post.slug}`} legacyBehavior>
            <span
              className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-500
          dark:from-purple-800 dark:to-purple-900"
            >
              {data.title}
            </span>
          </Link>
        </h2>
        <div>
          {data.summary && (
            <p className="mt-2 text-sm text-gray-500 line-clamp-3 dark:text-gray-400">
              <Link href={`/post/${post.slug}`} legacyBehavior>{data.summary}</Link>
            </p>
          )}
        </div>
        <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-3">
            <div className="relative h-5 w-5 shrink-0">
              {/** author image */}
              <img loading={'lazy'} src={img} className="transition-all" />
            </div>
            <span className="text-sm">{data.author}</span>
          </div>
          <span className="text-xs text-gray-300 dark:text-gray-600">
            &bull;
          </span>
          <time className="text-sm" dateTime={formatRFC3339(createdAt)}>
            {format(createdAt, 'MMMM dd, yyyy')}
          </time>
        </div>

        <pre>{JSON.stringify(post, null, 2)}</pre>
      </div>
    </div>
  );
};

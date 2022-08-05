import type { FC, PropsWithChildren } from 'react';
import { clsxm } from '@/lib/tailwind';

type Props = PropsWithChildren<{
  className?: string;
}>;

export const BlogContainer: FC<Props> = (props) => {
  return (
    <div
      className={clsxm(
        'container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg',
        props.className
      )}
    >
      {props.children}
    </div>
  );
};

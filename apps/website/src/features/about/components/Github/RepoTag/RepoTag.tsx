import type { FC } from 'react';

import { RepoTagSpan } from './styles';

type Props = {
  className?: string;
  title: string;
};

export const RepoTag: FC<Props> = (props) => {
  const { className, title } = props;

  return <RepoTagSpan className={className}>{title}</RepoTagSpan>;
};

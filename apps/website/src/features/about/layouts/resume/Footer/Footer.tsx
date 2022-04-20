import type { FC, ReactNode } from 'react';
import { FooterCtn } from './styles';

type FooterProps = {
  children: ReactNode;
};

export const Footer: FC<FooterProps> = (props) => {
  const { children } = props;
  return (
    <FooterCtn>
      <div>{children}</div>
    </FooterCtn>
  );
};

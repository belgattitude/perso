import styled from '@emotion/styled';
import type { FC, PropsWithChildren } from 'react';
import { breakpoints } from '@/features/about/config';

type BlockProps = PropsWithChildren<{
  className?: string;
}>;

export const UnstyledBlock: FC<BlockProps> = (props) => {
  const { children, className } = props;
  return <div className={className}>{children}</div>;
};

export const Block = styled(UnstyledBlock)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.page.background};
  color: ${(props) => props.theme.colors.primary};

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 45px 20px 45px 20px;
    font-weight: 400;
    letter-spacing: -0.003em;
    line-height: 1.58em;

    @media (${breakpoints.large}) {
      font-size: 1em;
      max-width: 900px;
    }

    h1,
    h2,
    h3,
    p {
      color: ${(props) => props.theme.colors.primary};
    }
    h3 {
      font-size: 1.3em;
      font-weight: 500;
    }

    .block__title {
      h1 {
        margin: 0;
        padding: 0;
        font-family: 'RubikVariable', sans-serif;
        font-size: 2.5em;
        color: #2c2b2b;
        font-weight: 700;
        @media (${breakpoints.large}) {
          font-size: 3.5em;
        }
      }
      h2 {
        margin-top: 1.8em;
        letter-spacing: 0.015em;
        font-weight: 500;
        font-size: 1.5em;
      }
      margin-bottom: 2em;
    }

    p {
      font-size: 1.1em;
      line-height: 1.8em;
      color: #494949;
      //padding: 0;
    }
    .highlight {
      border: 0px solid white;
      //box-shadow: 0 0 4px 0px white inset, 0 0 3px 0px white;
      padding: 15px 10px;
      border-radius: 91% 9% 90% 10% / 29% 82% 18% 71%;
      background-color: #500895;
      color: rgb(236, 239, 244);
      margin-right: 3px;
    }
  }
`;

type BlockTitleProps = {
  title: string;
  subtitle?: string;
};

export const BlockTitle: FC<BlockTitleProps> = (props) => {
  const { title, subtitle } = props;
  return (
    <div className={'block__title'}>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  );
};

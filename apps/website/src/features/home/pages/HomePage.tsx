import { NextSeo } from 'next-seo';
import type { FC } from 'react';

type Props = {
  children?: never;
};

export const HomePage: FC<Props> = () => {
  return (
    <>
      <NextSeo title="Home" description="Home page" />
      <h1>Home page</h1>
    </>
  );
};

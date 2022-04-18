import { NextSeo } from 'next-seo';
import type { FC } from 'react';

export const HomePage: FC = () => {
  return (
    <>
      <NextSeo title="Home" description="Home page" />
      <h1>Home page</h1>
    </>
  );
};

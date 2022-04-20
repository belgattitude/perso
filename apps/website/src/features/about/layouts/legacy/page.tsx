import Head from 'next/head';
import type { FC, ReactNode } from 'react';
export const Page: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="resume-page">
    <div className="resume-layout">
      <Head>
        <title>Who's this ?</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <div>{children}</div>
    </div>
  </div>
);

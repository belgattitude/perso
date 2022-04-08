import Head from 'next/head';

export const Page: React.FC = ({ children }) => (
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

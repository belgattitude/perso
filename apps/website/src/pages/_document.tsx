import type { DocumentProps } from 'next/document';
import Document, { Html, Main, Head, NextScript } from 'next/document';

type Props = DocumentProps;

class MyDocument extends Document<Props> {
  render() {
    const { locale } = this.props.__NEXT_DATA__;
    return (
      <Html lang={locale}>
        <Head>
          <meta charSet="utf-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

import type { DocumentProps } from 'next/document';
import Document, { Html, Main, Head, NextScript } from 'next/document';
import { i18n } from '../../next-i18next.config';

type Props = DocumentProps;

class MyDocument extends Document<Props> {
  /**
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    return await Document.getInitialProps(ctx);
  }
  */
  render() {
    const { locale } = this.props.__NEXT_DATA__ ?? {
      locale: i18n.defaultLocale,
    };
    return (
      <Html lang={locale}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="emotion-insertion-point" content="" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// Example to process graceful shutdowns (ie: closing db... from a docker/server mode)
// https://nextjs.org/docs/deployment#manual-graceful-shutdowns
if (process.env.NEXT_MANUAL_SIG_HANDLE) {
  // this should be added in your custom _document
  process.on('SIGTERM', () => {
    console.log('Received SIGTERM: ', 'cleaning up');
    process.exit(0);
  });

  process.on('SIGINT', () => {
    console.log('Received SIGINT: ', 'cleaning up');
    process.exit(0);
  });
}

export default MyDocument;

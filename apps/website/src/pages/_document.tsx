import type { EmotionCache } from '@emotion/cache';
import createEmotionServer from '@emotion/server/create-instance';
import type {
  AppContextType,
  AppInitialProps,
  AppPropsType,
  NextComponentType,
} from 'next/dist/shared/lib/utils';
import type { DocumentContext, DocumentProps } from 'next/document';
import Document, { Html, Main, Head, NextScript } from 'next/document';
import { Children as ReactChildren } from 'react';
import { MainLayoutFonts } from '@/layouts/main/head';
import { createEmotionCache } from '@/lib/emotion';

type Props = DocumentProps;

type EnhancedApp = NextComponentType<
  AppContextType,
  AppInitialProps,
  AppPropsType & { emotionCache?: EmotionCache }
>;

class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;

    // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
    // However, be aware that it can have global side effects.
    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: EnhancedApp) => (props) =>
          <App emotionCache={cache} {...props} />,
      });

    const initialProps = await Document.getInitialProps(ctx);
    // This is important. It prevents emotion to render invalid HTML.
    // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        key={style.key}
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        ...ReactChildren.toArray(initialProps.styles),
        ...emotionStyleTags,
      ],
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <MainLayoutFonts />
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

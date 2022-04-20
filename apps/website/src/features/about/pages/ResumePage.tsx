import { css, ThemeProvider } from '@emotion/react';
import { MDXProvider } from '@mdx-js/react';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import type { FC } from 'react';
import { mdxConfig, siteConfig, appClassName } from '@/config';
import {
  HeroBlock,
  AboutMeBlock,
  OpenSourceBlock,
  FeaturesBlock,
  Block,
} from '@/features/about/blocks';
import type { TechnosBlockProps } from '@/features/about/blocks/technos/TechnosBlock';
import { defaultTheme } from '@/themes';
import { Footer } from '../layouts/resume/Footer';

const Technos = dynamic<TechnosBlockProps>(
  () =>
    import('@/features/about/blocks/technos/TechnosBlock').then(
      (mod) => mod.TechnosBlock
    ),
  {
    ssr: false,
  }
);

export const ResumePage: FC = () => {
  return (
    <div css={appClassName}>
      <NextSeo
        nofollow={true}
        noindex={true}
        title={siteConfig.siteTitle}
        description={siteConfig.siteDesc}
      />
      <Head>
        <meta property="og:url" content={siteConfig.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteConfig.siteTitle} />
        <meta property="og:description" content={siteConfig.siteDesc} />
        <meta property="og:image" content={siteConfig.siteImg} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteConfig.siteTitle} />
        <meta name="twitter:description" content={siteConfig.siteDesc} />
        <meta name="twitter:image" content={siteConfig.siteImg} />
      </Head>
      <ThemeProvider theme={defaultTheme}>
        <MDXProvider components={mdxConfig}>
          <HeroBlock
          // avatarImg={siteConfig.profileImg}
          />
          <Block
            css={css`
              margin-top: 3.5em;
            `}
          >
            <AboutMeBlock />
          </Block>
          <Block>
            <FeaturesBlock
              css={css`
                background-color: #fefefe;
              `}
            />
          </Block>
          <Block>
            <Technos />
          </Block>
          <Block>
            <OpenSourceBlock />
          </Block>
          <Footer />
        </MDXProvider>
      </ThemeProvider>
    </div>
  );
};

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
  BlockTitle,
} from '@/features/about/blocks';
import type { TechnosBlockProps } from '@/features/about/blocks/technos/TechnosBlock';
import LinkedInIcon from '@/public/icons/devicons/linkedin/linkedin-original.svg';
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
        openGraph={{
          type: 'website',
          title: siteConfig.siteTitle,
          description: siteConfig.siteDesc,
          url: siteConfig.canonical,
          images: [{ url: siteConfig.siteImg }],
        }}
        twitter={{
          site: siteConfig.siteTitle,
          cardType: 'summary_large_image',
        }}
      />
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
            <div>
              <BlockTitle title={'Experience'} subtitle={'Current'} />
              <p>
                I'm currently Tech Lead at{' '}
                <a
                  href={'https://www.sortlist.com'}
                  target={'_blank'}
                  rel={'noreferrer'}
                >
                  Sortlist
                </a>
                , a Belgium scale-up that connects projects with a network of
                international agencies. Check my{' '}
              </p>
              <h3
                css={css`
                  margin-top: 20px;
                `}
              >
                <a
                  href={siteConfig.linkedIn}
                  target={'_blank'}
                  rel="noreferrer"
                >
                  <LinkedInIcon
                    css={css`
                      display: inline-block;
                      width: 64px;
                    `}
                  />
                </a>
              </h3>
            </div>
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

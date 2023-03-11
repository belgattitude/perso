import { css, ThemeProvider } from '@emotion/react';
import { MDXProvider } from '@mdx-js/react';
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
import type { FC } from 'react';
import { mdxConfig, appClassName } from '@/config';
import {
  HeroBlock,
  AboutMeBlock,
  OpenSourceBlock,
  FeaturesBlock,
} from '@/features/about/blocks';
import type { TechnosBlockProps } from '@/features/about/blocks/technos/TechnosBlock';
import { Block, BlockTitle } from '@/features/about/components/Block';
import { pageConfig } from '@/features/about/config';
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
        title={pageConfig.siteTitle}
        description={pageConfig.siteDesc}
        openGraph={{
          type: 'website',
          title: pageConfig.siteTitle,
          description: pageConfig.siteDesc,
          url: pageConfig.canonical,
          images: [{ url: pageConfig.siteImg }],
        }}
        twitter={{
          site: pageConfig.siteTitle,
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
                  href={pageConfig.linkedIn}
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

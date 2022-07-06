import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import type { FC } from 'react';
import type { WobbleCanvasProps } from '@/features/home/components/Wobble/WobbleCanvas';
import { homeConfig } from '@/features/home/home.config';
const WobbleCanvas = dynamic<WobbleCanvasProps>(
  () => import('../components/Wobble').then((mod) => mod.WobbleCanvas),
  {
    loading: () => <div />,
    ssr: false,
  }
);

const videoUrl = '/videos/influx-red.mp4';

export const HomePage: FC = () => {
  const { t } = useTranslation(homeConfig.i18nNamespaces);
  return (
    <>
      <NextSeo
        title={t('home:page.title')}
        description={t('home:page.description')}
      />
      <div className="flex h-screen items-center justify-center">
        <div className="h-full w-3/5">
          <WobbleCanvas
            wobbleProps={{
              wireframe: false,
              videoUrl,
            }}
          />
        </div>
      </div>
    </>
  );
};

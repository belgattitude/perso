import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';
import type { FC } from 'react';
import { WobbleCanvas } from '@/features/home/components/Wobble';
import { homeConfig } from '@/features/home/home.config';

const videoUrl = '/videos/influx-red.mp4';

export const HomePage: FC = () => {
  const { t } = useTranslation(homeConfig.i18nNamespaces);
  return (
    <>
      <NextSeo
        title={t('home:page.title')}
        description={t('home:page.description')}
      />
      <div className="flex justify-center items-center h-screen">
        <div className="w-3/5 h-full">
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

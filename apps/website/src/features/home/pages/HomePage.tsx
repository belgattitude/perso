import { softShadows, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';
import type { CSSProperties, FC } from 'react';
import { Wobble } from '@/features/home/components/Wobble';
import { homeConfig } from '@/features/home/home.config';

const canvasStyle: CSSProperties = {
  width: '100vw',
  height: '100vh',
};

softShadows();

export const HomePage: FC = () => {
  const { t } = useTranslation(homeConfig.i18nNamespaces);
  return (
    <>
      <NextSeo
        title={t('home:page.title')}
        description={t('home:page.description')}
      />
      <Canvas style={canvasStyle}>
        <ambientLight intensity={0.4} />
        <directionalLight color="yellow" position={[0, 5, 5]} />
        <Wobble />
        <OrbitControls
          maxPolarAngle={90}
          minPolarAngle={1}
          enablePan={false}
          enableRotate={true}
          enableZoom={true}
          maxZoom={0.1}
          minZoom={0.01}
        />
      </Canvas>
    </>
  );
};

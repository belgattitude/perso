/* eslint-disable react/no-unknown-property */
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import type { FC } from 'react';
import type { WobbleProps } from '@/features/home/components/Wobble/Wobble';
import { Wobble } from '@/features/home/components/Wobble/Wobble';

export type WobbleCanvasProps = {
  wobbleProps: WobbleProps;
};

export const WobbleCanvas: FC<WobbleCanvasProps> = (props) => {
  const { wobbleProps } = props;
  return (
    <Canvas>
      <ambientLight intensity={0.4} />
      <directionalLight color="yellow" position={[0, 5, 5]} />
      <Wobble {...wobbleProps} />

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
  );
};

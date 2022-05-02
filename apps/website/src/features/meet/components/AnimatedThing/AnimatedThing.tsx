import { MeshWobbleMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import type { Mesh } from 'three';
import { Vector2 } from 'three';

export const AnimatedThing: FC = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = meshRef.current.rotation.y += 0.0001;
    }
  });
  const [video] = useState(() => {
    const vid = document.createElement('video');
    vid.src = '/videos/influx-red.mp4';
    vid.crossOrigin = 'Anonymous';
    vid.loop = true;
    vid.playbackRate = 1;
    vid.muted = true;
    return vid;
  });
  useEffect(() => void video.play(), [video]);
  return (
    <>
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 2]} />
        <MeshWobbleMaterial color="#4488FF" speed={0.8} wireframe={true}>
          <videoTexture
            attach="map"
            args={[video]}
            offset={new Vector2(0.4, 0.1)}
          />
        </MeshWobbleMaterial>
      </mesh>
    </>
  );
};

import { useRef, useEffect } from 'react';

export function useRaf(
  callback: (timeElapsed: number, lastTime: number) => void,
  isActive: boolean
): void {
  const savedCallback = useRef<(timeElapsed: number) => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    let animationFrame: number;
    let startTime: number;

    function tick() {
      const timeElapsed = Date.now() - startTime;
      startTime = Date.now();
      loop();
      savedCallback.current && savedCallback.current(timeElapsed);
    }

    function loop() {
      animationFrame = requestAnimationFrame(tick);
    }

    if (isActive) {
      startTime = Date.now();
      loop();
      return () => {
        cancelAnimationFrame(animationFrame);
      };
    }
  }, [isActive]);
}

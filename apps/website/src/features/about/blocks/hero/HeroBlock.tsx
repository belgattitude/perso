import { css } from '@emotion/react';
import {
  m as motion,
  useViewportScroll,
  useTransform,
  useSpring,
  LazyMotion,
  domAnimation,
} from 'framer-motion';
import { backOut } from 'popmotion';
import type { FC } from 'react';
import { useCallback, useState } from 'react';
import Typewriter from 'typewriter-effect';

import { breakpoints } from '@/features/about/config';
import * as S from './styles';

type HeroProps = {
  className?: string;
};

export const HeroBlock: FC<HeroProps> = (props) => {
  const { className } = props;
  const { scrollY } = useViewportScroll();

  const [elementRect, setElementRect] = useState<DOMRect | null>(null);

  const measuredRef = useCallback((node: HTMLDivElement | null) => {
    if (node !== null) {
      setElementRect(node.getBoundingClientRect());
    }
  }, []);

  const springConfig = {
    damping: 10,
    stiffness: 20,
    mass: 1.2,
  };

  const minWidth = 600;
  const minHeight = 400;
  const { width } = elementRect || { width: minWidth };
  const { height } = elementRect || { height: minHeight };
  const x = useSpring(
    useTransform(
      scrollY,
      [0, height],
      [0, -Math.ceil(Math.max(width * 1.7, minWidth))]
    ),
    springConfig
  );
  const x2 = useSpring(
    useTransform(
      scrollY,
      [0, 100],
      [0, Math.ceil(width > minWidth ? width / 4 : 0)]
    ),
    springConfig
  );
  const y = useTransform(scrollY, [0, height], [0, Math.ceil(height / 1.1)]);
  const y2 = useTransform(
    scrollY,
    [0, height / 2],
    [0, Math.ceil(height / 2.4)]
  );

  const opacity = useTransform(scrollY, [0, height], [1, 0.3], {
    ease: backOut,
  });
  const bgOverlayOpacity = useTransform(
    scrollY,
    [0, height / 2],
    // width < 500 ? [1, 0.1] : [0.0, 0.5]
    [1, 0.1]
  );
  const zoom = useTransform(scrollY, [0, height], [1, 0]);

  const img = '/images/unsplash-bigrock.jpg';
  return (
    <div className="z-50 w-full bg-white border-b border-gray-200">
      <LazyMotion strict features={domAnimation}>
        <S.ProfileHeroCtn
          ref={measuredRef}
          className={className}
          css={{ overflow: 'hidden' }}
        >
          <div
            className={'background'}
            css={css`
              background: white;
              background-size: cover;
              //background-image: url(${img});
              // background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
              background-attachment: fixed;
              background-position: bottom left;
              background-repeat: no-repeat;
              position: absolute;
              bottom: 0;
              top: 0;
              left: 0;
              right: 0;
              @media (${breakpoints.large}) {
                //                background-size: cover;
              }
            `}
          />
          <motion.div
            className={'background-overlay'}
            css={css`
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              //background-image: url('/images/cine.jpg');
              background-image: url('/images/keyboard-pexels-photo-220357.webp');
              background-size: cover;
              background-repeat: no-repeat;
              background-position: top;
            `}
            initial={{ opacity: 0 }}
            style={{ opacity: bgOverlayOpacity }}
          ></motion.div>

          <div className={'content'}>
            <motion.h1
              initial={{ x: 0, y: 0, opacity: 0 }}
              style={{ y, x, opacity, zoom }}
            >
              <div
                css={css`
                font-family: RubikVariable, sans-serif;
                // font-size: clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem);
                font-size: 1.3em;
                // border: 1px solid blue;
                font-weight: 700;
                letter-spacing: 0;
                line-height: 1.5em;
                display: flex;
                flex-direction: column;
                color: white;
                text-align: left;
                text-transform: capitalize;
                @supports (font-variation-settings: normal) {
                    font-family: RubikVariable, sans-serif;
                    font-variation-settings: "wght" 800;
              `}
              >
                <div
                  css={css`
                    font-size: 0.8em;
                    @supports (font-variation-settings: normal) {
                      font-family: RubikVariable, sans-serif;
                      font-variation-settings: 'wght' 400;
                    }
                  `}
                >
                  Greetings
                </div>
                <div>
                  I am
                  <span
                    css={css`
                      .Typewriter {
                        opacity: 0.85;
                        display: inline-block;
                        &:first-of-type {
                          border: 1px solid white;
                          box-shadow: 0 0 4px 0 white inset, 0 0 3px 0 white;
                          padding: 15px 10px;
                          border-radius: 91% 9% 90% 10% / 29% 82% 18% 71%;
                          background-color: #500895;
                          color: rgb(236, 239, 244);
                          margin-left: 10px;
                        }
                      }
                    `}
                  >
                    <Typewriter
                      options={{
                        strings: [
                          'Sébastien Vanvelthem.',
                          'A Software Developer.',
                          // 'A Backend Engineer.',
                        ],
                        deleteSpeed: 0,
                        delay: 'natural',
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                  {/*
                <TypedText
                  delay={100}
                  sentences={[
                    'Sébastien.',
                    // 'A Front-end Developer.',
                    // 'A Backend Engineer.',
                  ]}
                  css={css`
                    border: 1px solid white;
                    box-shadow: 0 0 4px 0px white inset, 0 0 3px 0px white;
                    padding: 15px 10px;
                    border-radius: 91% 9% 90% 10% / 29% 82% 18% 71%;
                    background-color: #500895;
                    color: rgb(236, 239, 244);
                    margin-left: 10px;
                  `}
                />
                */}
                </div>
              </div>
            </motion.h1>

            <motion.p
              initial={{ x: 40, y: 0, opacity: 0.7 }}
              style={{ x: x2, y: y2 }}
              animate={{
                opacity: 1,
                transition: { duration: 1 },
                transitionEnd: {},
              }}
            >
              Developer in React, Typescript and PHP.
            </motion.p>
          </div>
        </S.ProfileHeroCtn>
      </LazyMotion>
    </div>
  );
};

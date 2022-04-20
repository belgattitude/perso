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
import { Avatar } from '@/features/about/components/Avatar';
import { breakpoints } from '@/features/about/config';
import * as S from './styles';

type HeroProps = {
  className?: string;
  avatarImg?: string;
};

export const HeroBlock: FC<HeroProps> = (props) => {
  const { avatarImg, className } = props;
  const { scrollY } = useViewportScroll();

  const [elementRect, setElementRect] = useState<DOMRect | null>(null);

  // just because useRef and useLayoutEffect won't do it.
  const measuredRef = useCallback((node: HTMLDivElement | null) => {
    if (node !== null) {
      setElementRect(node.getBoundingClientRect());
    }
  }, []);

  const springConfig = {
    damping: 10,
    stiffness: 40,
    mass: 1,
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
  const opacity2 = useTransform(
    scrollY,
    [0, height / 2],
    width < 500 ? [1, 0.1] : [0.0, 0.5]
  );
  const zoom = useTransform(scrollY, [0, height], [1, 0]);
  const xAvatar = useSpring(
    useTransform(scrollY, [0, height], [0, Math.ceil(width / 2)]),
    springConfig
  );
  const opacityAvatar = useTransform(scrollY, [0, height], [0, 1]);

  // const img = '/images/unsplash-bigrock.jpg';
  // const img = '/images/wolfgang-hasselmann-cow.jpg';
  const img = '/images/crop-nicolas-i-unsplash.webp';
  // const img = 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  return (
    <LazyMotion strict features={domAnimation}>
      <S.ProfileHeroCtn
        ref={measuredRef}
        className={className}
        css={{ overflow: 'hidden' }}
      >
        <div
          className={'background'}
          css={css`
            background: black;
            background-size: cover;
            background-image: url(${img});
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
              background-size: cover;
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
            //background: #0f0c29;
            //background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
            //background-image: url('/images/wolfgang-hasselmann-cow.webp');
            //background-image: url('/images/cine.jpg');
            background-image: url('https://images.pexels.com/photos/220357/pexels-photo-220357.jpeg');
            background-image: url('https://images.pexels.com/photos/1440387/pexels-photo-1440387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
            //background-image: url('/images/picos.jpg');
            //background-image: url('https://images.unsplash.com/photo-1563057828-434ef414eff6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=648&q=80');
            //background-image: url("https://images.unsplash.com/photo-1588359886706-cbbd20ff2b29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
            background-size: cover;
            background-repeat: no-repeat;
            background-position: top;
          `}
          initial={{ opacity: 0 }}
          style={{ opacity: opacity2 }}
        ></motion.div>
        {avatarImg && (
          <motion.div
            css={css`
              position: absolute;
              bottom: 0;
            `}
            initial={{ x: 0, opacity: 0 }}
            style={{ x: xAvatar, opacity: opacityAvatar }}
          >
            <Avatar src={avatarImg} size={'80px'} />
          </motion.div>
        )}

        <div className={'content'}>
          <motion.h1
            initial={{ x: 0, y: 0, opacity: 0 }}
            style={{ y, x, opacity, zoom }}
          >
            Sébastien Vanvelthem
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
  );
};

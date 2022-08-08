import useEmblaCarousel from 'embla-carousel-react';
import type { FC } from 'react';
import { useCallback, useEffect, useState } from 'react';
import { EmblaCtn } from './Carousel.styles';

const PARALLAX_FACTOR = 1.2;

type Props = {
  slides: string[];
};
export const Carousel: FC<Props> = (props) => {
  const { slides } = props;
  const [viewportRef, embla] = useEmblaCarousel({
    loop: false,
    dragFree: true,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [parallaxValues, setParallaxValues] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  // eslint-disable-next-line sonarjs/cognitive-complexity
  const onScroll = useCallback(() => {
    if (!embla) return;

    const engine = embla.internalEngine();
    const scrollProgress = embla.scrollProgress();

    const styles = embla.scrollSnapList().map((scrollSnap, index) => {
      if (!embla.slidesInView().includes(index)) return 0;
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.getTarget();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      return diffToTarget * (-1 / PARALLAX_FACTOR) * 100;
    });
    setParallaxValues(styles);
  }, [embla, setParallaxValues]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    onScroll();
    embla.on('select', onSelect);
    embla.on('scroll', onScroll);
    embla.on('resize', onScroll);
  }, [embla, onSelect, onScroll]);

  return (
    <EmblaCtn>
      <div className="viewport" ref={viewportRef}>
        <div className="container">
          {slides.map((imgUrl, index) => (
            <div className="slide" key={index}>
              <div className="slide__inner">
                <div
                  className="slide__parallax"
                  style={{ transform: `translateX(${parallaxValues[index]}%)` }}
                >
                  <img className="slide__img" src={imgUrl} alt="A cool cat." />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      */}
    </EmblaCtn>
  );
};

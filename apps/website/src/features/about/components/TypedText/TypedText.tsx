import { useEffect, useRef, useState } from 'react';
import type { HTMLAttributes, FC } from 'react';
import { useRaf } from '../../../../hooks/useRaf';

type TypedTextProps = {
  /**
   * Animation speed in milliseconds
   */
  delay: number;
  sentences: string[];
} & HTMLAttributes<HTMLSpanElement>;

const defaultProps = {
  delay: 200,
};

export const TypedText: FC<TypedTextProps> = (props) => {
  const { delay, sentences, ...restProps } = { ...defaultProps, ...props };
  const [d, setD] = useState(delay);
  const [state, setState] = useState<{
    currIdx: number;
    direction: 'forward' | 'backward';
    sentence: string;
    sentenceIdx: number;
  }>({
    currIdx: 0,
    direction: 'forward',
    sentence: sentences[0],
    sentenceIdx: 0,
  });

  /**
  useRaf((timeElapsed) => {
    if (timeElapsed > 5000 || true) {
      setState(({ direction, currIdx, sentence, sentenceIdx }) => {
        let dir: 'forward' | 'backward' = direction;
        let sent: string = sentence;
        let sentIdx = sentenceIdx;
        if (direction === 'forward' && currIdx > sentence.length) {
          dir = 'backward';
        } else if (direction === 'backward' && currIdx < 1) {
          dir = 'forward';
          sentIdx = sentenceIdx >= sentences.length - 1 ? 0 : sentenceIdx + 1;
          sent = sentences[sentIdx];
        }
        return {
          currIdx: dir === 'forward' ? currIdx + 1 : currIdx - 1,
          direction: dir,
          sentenceIdx: sentIdx,
          sentence: sent,
        };
      });
    } else {
      // console.log('timeElapsed', timeElapsed);
    }
  }, true);
   */

  const interval = useRef<number | null | undefined>();
  useEffect(() => {
    interval.current = window.setInterval(() => {
      setState(({ direction, currIdx, sentence, sentenceIdx }) => {
        let dir: 'forward' | 'backward' = direction;
        let sent: string = sentence;
        let sentIdx = sentenceIdx;
        if (direction === 'forward' && currIdx > sentence.length) {
          dir = 'backward';
          setD(75);
        } else if (direction === 'backward' && currIdx < 1) {
          dir = 'forward';
          sentIdx = sentenceIdx >= sentences.length - 1 ? 0 : sentenceIdx + 1;
          sent = sentences[sentIdx];
          setD(delay);
        }
        return {
          currIdx: dir === 'forward' ? currIdx + 1 : currIdx - 1,
          direction: dir,
          sentenceIdx: sentIdx,
          sentence: sent,
        };
      });
    }, d);
    return () => {
      if (interval.current) {
        window.clearInterval(interval.current);
      }
    };
  }, [d, sentences]);

  const slice =
    state.currIdx - 1 > state.sentence.length
      ? state.currIdx.toString(10)
      : `${state.sentence.slice(0, state.currIdx)}`;

  return <span {...restProps}>{slice}</span>;
};

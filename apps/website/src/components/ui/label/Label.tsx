import type { FC } from 'react';

type Props = {
  text: string;
};

export const Label: FC<Props> = (props) => {
  return (
    <span className="[font-size:10px] inline-block px-1.5 font-medium tracking-wide leading-4 text-slate-500 align-middle whitespace-nowrap rounded border border-slate-400/70">
      {props.text}
    </span>
  );
};

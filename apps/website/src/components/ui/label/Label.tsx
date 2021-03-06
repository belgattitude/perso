import type { FC } from 'react';

type Props = {
  text: string;
};

export const Label: FC<Props> = (props) => {
  return (
    <span className="inline-block whitespace-nowrap rounded border border-slate-400/70 px-1.5 align-middle font-medium leading-4 tracking-wide text-slate-500 [font-size:10px]">
      {props.text}
    </span>
  );
};

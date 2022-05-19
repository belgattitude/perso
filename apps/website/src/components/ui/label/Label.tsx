import type { FC } from 'react';

type Props = {
  text: string;
};

export const Label: FC<Props> = (props) => {
  return (
    <span className="inline-block whitespace-nowrap rounded px-1.5 align-middle font-medium leading-4 tracking-wide [font-size:10px] border border-slate-400/70 text-slate-500">
      {props.text}
    </span>
  );
};

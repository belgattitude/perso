import type { ButtonProps as JoyButtonProps } from '@mui/joy';
import { Button as JoyButton } from '@mui/joy';
import type { FC } from 'react';
import { forwardRef } from 'react';

export type ButtonProps = JoyButtonProps;

// eslint-disable-next-line react/display-name
export const Button: FC<ButtonProps> = forwardRef(function (props, ref) {
  const { children, ...rest } = props;
  return (
    <JoyButton ref={ref} {...rest}>
      {props.children}
    </JoyButton>
  );
});

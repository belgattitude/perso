import type { FC, ReactNode } from 'react';
import { I18nextTestStubProvider } from './I18nextTestStubProvider';

export const AppTestProviders: FC<{ children: ReactNode }> = ({ children }) => {
  return <I18nextTestStubProvider>{children}</I18nextTestStubProvider>;
};

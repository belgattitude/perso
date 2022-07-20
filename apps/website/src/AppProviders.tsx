import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { FC, ReactNode } from 'react';

const queryClient = new QueryClient({});

type Props = {
  session: Session | null;
  children: ReactNode;
};

export const AppProviders: FC<Props> = (props) => {
  const { children, session } = props;
  return (
    <SessionProvider session={session} refetchInterval={0}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SessionProvider>
  );
};

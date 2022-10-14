import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { FC, PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({});

type Props = PropsWithChildren<{
  /**
   * next-auth sessions if available
   */
  session?: Session | null;
}>;

export const AppProviders: FC<Props> = (props) => {
  const { children, session } = props;
  return (
    <SessionProvider session={session} refetchInterval={0}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SessionProvider>
  );
};

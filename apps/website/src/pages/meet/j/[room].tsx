import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import type { ReactElement } from 'react';
import { match } from 'ts-pattern';
import { z } from 'zod';
import { logger } from '@/config/logger.config';
import { MeetLayout } from '@/features/meet/layouts/MeetLayout';
import { roomSchema } from '@/features/meet/lib/validateRoom';
import { JitsiPage } from '@/features/meet/pages';

type Props = {
  room: string;
};

export default function MeetJitsiRoute(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { room } = props;
  return <JitsiPage room={room} />;
}

MeetJitsiRoute.getLayout = function getLayout(page: ReactElement) {
  return <MeetLayout>{page}</MeetLayout>;
};

const contextSchema = z.object({
  params: z.object({
    room: roomSchema,
  }),
});

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const result = contextSchema.safeParse(context);
  return match(result)
    .with({ success: false }, ({ error }) => {
      logger.info(`Invalid room: ${error.message}`);
      return {
        notFound: true,
      } as const;
      // @todo maybe throw new HttpBadRequest(`Invalid room ${error.message}`);
    })
    .with({ success: true }, ({ data }) => ({
      props: {
        room: data.params.room,
      },
    }))
    .exhaustive();
};

import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import type { ReactElement } from 'react';
import { match } from 'ts-pattern';
import { z } from 'zod';
import { logger } from '@/config/logger.config';
import { MeetLayout } from '@/features/meet/layouts/MeetLayout';
import { MeetPage } from '@/features/meet/pages';

type Props = {
  room: string;
};

export default function MeetRoute(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { room } = props;
  return <MeetPage room={room} />;
}

MeetRoute.getLayout = function getLayout(page: ReactElement) {
  return <MeetLayout>{page}</MeetLayout>;
};

const contextSchema = z.object({
  params: z.object({
    room: z
      .string({
        required_error: 'room name is required',
      })
      .min(10, 'room name is too short'),
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

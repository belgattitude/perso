import { Asserts } from '@belgattitude/ts-utils';
import { BadRequest } from '@tsed/exceptions';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import type { ReactElement } from 'react';
import { MeetLayout } from '@/features/meet/layouts/MeetLayout';
import { MeetLoggerPage } from '@/features/meet/pages';

type Props = {
  meetingSlug: string;
};

export default function MeetLogRoute(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { meetingSlug } = props;
  return <MeetLoggerPage meetingSlug={meetingSlug} />;
}

MeetLogRoute.getLayout = function getLayout(page: ReactElement) {
  return <MeetLayout>{page}</MeetLayout>;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { meetingSlug = '' } = context.params ?? {};
  Asserts.nonEmptyString(meetingSlug, () => {
    throw new BadRequest('Meeting slug is required');
  });
  return {
    props: {
      meetingSlug,
    },
  };
};

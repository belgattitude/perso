import { Asserts } from '@belgattitude/ts-utils';
import { BadRequest } from '@tsed/exceptions';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { HubspotSchedulePage } from '@/features/meet/pages/HubspotSchedulePage';

type Props = {
  user: string;
};

export default function MeetRoute(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { user } = props;
  return <HubspotSchedulePage user={user} />;
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { user = '' } = context.params ?? {};
  Asserts.nonEmptyString(user, () => {
    throw new BadRequest('User slug is required');
  });
  return {
    props: {
      user,
    },
  };
};

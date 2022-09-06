import { HttpBadRequest } from '@belgattitude/errorh';
import { assertNonEmptyString } from '@belgattitude/ts-utils';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import type { HubspotContact } from '@/features/meet/api/hubspot/getHubspotContacts';
import { getHubspotContacts } from '@/features/meet/api/hubspot/getHubspotContacts';
import { HubspotSchedulePage } from '@/features/meet/pages/HubspotSchedulePage';

type Props = {
  user: string;
  contacts: HubspotContact[];
};

export default function MeetRoute(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { user, contacts } = props;

  return (
    <>
      <HubspotSchedulePage user={user} contacts={contacts} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { user = '' } = context.params ?? {};
  assertNonEmptyString(user, () => {
    throw new HttpBadRequest('User slug is required');
  });

  const contacts = await getHubspotContacts();

  return {
    props: {
      user,
      contacts: contacts,
    },
  };
};

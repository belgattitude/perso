import { Asserts } from '@belgattitude/ts-utils';
import { BadRequest } from '@tsed/exceptions';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import type { HubspotContact } from '@/features/poc/api/hubspot/getHubspotContacts';
import { getHubspotContacts } from '@/features/poc/api/hubspot/getHubspotContacts';
import { HubspotSchedulePage } from '@/features/poc/pages/HubspotSchedulePage';

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
  Asserts.nonEmptyString(user, () => {
    throw new BadRequest('User slug is required');
  });

  const contacts = await getHubspotContacts();

  return {
    props: {
      user,
      contacts: contacts,
    },
  };
};

import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import type { ReactElement } from 'react';
import { MeetLayout } from '@/features/meet/layouts/MeetLayout';

type Props = {
  hello?: string;
};

export default function AdminMonitorMeetRoute(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { hello } = props;
  return <AdminMonitorMeetRoute hello={hello} />;
}

AdminMonitorMeetRoute.getLayout = function getLayout(page: ReactElement) {
  return <MeetLayout>{page}</MeetLayout>;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  _context
) => {
  return {
    props: {
      hello: 'world',
    },
  };
};

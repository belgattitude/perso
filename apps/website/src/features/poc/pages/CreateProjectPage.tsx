import type { FC } from 'react';
import { ProjectForm } from '@/features/poc/components/ProjectForm';

type Props = {
  /** add props here */
};

const HeaderBox: FC = () => {
  return (
    <div className="w-full rounded-xl bg-blue-800 p-5 text-white drop-shadow-md">
      <p className="mb-5 text-2xl font-bold">Just a Poc</p>
      <p>Add some test data here, submit and try hubspot integration</p>
    </div>
  );
};

const ProjectInfoBox: FC = () => {
  return (
    <div className="rounded-sm bg-white p-5 drop-shadow-md">
      <ProjectForm />
    </div>
  );
};

const BookingBox: FC = () => {
  return (
    <div className="rounded-sm bg-white p-5 drop-shadow-md">
      <p className="mb-5 text-2xl font-bold">Some help ?</p>
    </div>
  );
};

export const CreateProjectPage: FC<Props> = (_props) => {
  return (
    <div className="bg-gray-50">
      <div className="m-5 flex">
        <HeaderBox />
      </div>

      <div className="m-5 flex h-full flex-row space-x-4">
        <div className="basis-2/3">
          <ProjectInfoBox />
        </div>
        <div className="basis-1/3">
          <BookingBox />
        </div>
      </div>
    </div>
  );
};

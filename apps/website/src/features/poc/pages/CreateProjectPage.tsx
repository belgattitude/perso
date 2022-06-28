import type { FC } from 'react';
import { ProjectForm } from '@/features/poc/components/ProjectForm';

type Props = {
  /** add props here */
};

const HeaderBox: FC = () => {
  return (
    <div className="p-5 w-full text-white bg-blue-800 rounded-xl drop-shadow-md">
      <p className="mb-5 text-2xl font-bold">Just a Poc</p>
      <p>Add some test data here, submit and try hubspot integration</p>
    </div>
  );
};

const ProjectInfoBox: FC = () => {
  return (
    <div className="p-5 bg-white rounded-sm drop-shadow-md">
      <ProjectForm />
    </div>
  );
};

const BookingBox: FC = () => {
  return (
    <div className="p-5 bg-white rounded-sm drop-shadow-md">
      <p className="mb-5 text-2xl font-bold">Some help ?</p>
    </div>
  );
};

export const CreateProjectPage: FC<Props> = (props) => {
  return (
    <div className="bg-gray-50">
      <div className="flex m-5">
        <HeaderBox />
      </div>

      <div className="flex flex-row m-5 space-x-4 h-full">
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

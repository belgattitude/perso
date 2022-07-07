import type { ProjectFormValues } from '@/features/poc/components/ProjectForm';

export const getFakeProjectData = (): ProjectFormValues => {
  return {
    title: 'Looking to do a website',
    description: 'We want something beautiful',
    service: 'Advertising',
    email: 's.vanvelthem@gmail.com',
    firstName: 'Sébastien',
    lastName: 'Vanvelthem',
    gsm: '+32476421608',
  };
};

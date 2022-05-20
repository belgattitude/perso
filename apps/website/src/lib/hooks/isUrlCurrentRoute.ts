import { useRouter } from 'next/router';

export const isUrlCurrentRoute = (url: string): boolean => {
  const router = useRouter();
  return router.pathname.split('/')[1] == url.replace('/', '');
};

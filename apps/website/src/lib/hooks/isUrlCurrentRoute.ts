import { useRouter } from 'next/router';
import { getCommonPathnameLevels } from '@/lib/helpers/url';

export const isUrlCurrentRoute = (url: string, levels = 0): boolean => {
  const router = useRouter();
  return getCommonPathnameLevels(router.pathname, url) > levels;
};

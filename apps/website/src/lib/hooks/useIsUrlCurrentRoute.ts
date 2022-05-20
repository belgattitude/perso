import { useRouter } from 'next/router';
import { getCommonPathnameLevels } from '@/lib/helpers/url';

export const useIsUrlCurrentRoute = (url: string, levels = 0): boolean => {
  const { pathname } = useRouter();
  return getCommonPathnameLevels(pathname, url) > levels;
};

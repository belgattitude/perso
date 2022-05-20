import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { isExternalUrl } from '@/lib/helpers/url';

export const TopNavLink: FC<{
  label?: string;
  hideLabel?: boolean;
  Icon?: FC;
  url: string;
}> = ({ label, hideLabel = false, Icon, url }) => {
  const router = useRouter();
  const active = router.pathname.split('/')[1] == url.replace('/', '');

  return (
    <Link href={url}>
      <a
        className={`group flex h-8 items-center rounded-md bg-transparent px-3 text-sm font-medium leading-none ${
          active
            ? 'bg-purple-50 text-purple-800 hover:bg-purple-100'
            : 'text-slate-600 hover:bg-purple-100 hover:text-slate-700'
        }`}
        target={isExternalUrl(url) ? '_blank' : undefined}
        rel={isExternalUrl(url) ? 'noreferrer' : undefined}
      >
        {Icon && (
          <span className="block w-5 text-slate-400 group-hover:text-slate-500">
            <Icon />
          </span>
        )}
        {label && <span className={hideLabel ? 'sr-only' : ''}>{label}</span>}
      </a>
    </Link>
  );
};

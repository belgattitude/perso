import Link from 'next/link';
import type { FC } from 'react';
import { isExternalUrl } from '@/lib/helpers/url';
import { isUrlCurrentRoute } from '@/lib/hooks';

export const TopNavLink: FC<{
  label?: string;
  hideLabel?: boolean;
  Icon?: FC;
  url: string;
}> = ({ label, hideLabel = false, Icon, url }) => {
  const active = isUrlCurrentRoute(url);
  return (
    <Link href={url}>
      <a
        className={`group flex h-8 items-center rounded-md bg-transparent px-3 text-sm font-medium leading-none ${
          active
            ? 'bg-gray-100 text-purple-800'
            : 'text-purple-900 hover:bg-gray-50 hover:text-purple-800'
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

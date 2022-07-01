import Link from 'next/link';
import type { FC } from 'react';
import { isExternalUrl } from '@/lib/helpers/url';
import ExternalLinkIcon from '@/public/icons/main/external-link.svg';
import { TopNavLink } from './TopNavLink';

type Props = {
  navLinks: Array<{
    label: string;
    url: string;
  }>;
  iconLinks: Array<{
    label: string;
    Icon: FC;
    url: string;
  }>;
};

export const TopNav: FC<Props> = (props) => {
  const { navLinks, iconLinks } = props;
  return (
    <header className="fixed z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-screen-2xl items-center justify-between px-4 md:px-8 lg:px-16">
        <div className="flex items-center space-x-2.5">
          <Link href="/">
            <a className="flex items-center space-x-2.5 font-bold text-slate-800 no-underline dark:text-white">
              <span className="-mt-0.5">Home</span>
            </a>
          </Link>
        </div>
        <nav className="hidden items-center divide-x divide-gray-200 dark:divide-gray-800 lg:flex">
          <div className="flex items-center pr-2 lg:space-x-4 lg:pr-8">
            {navLinks.map(({ label, url }, index) => (
              <TopNavLink
                key={index}
                label={label}
                url={url}
                Icon={isExternalUrl(url) ? ExternalLinkIcon : undefined}
              />
            ))}
          </div>
          <div className="flex items-center pl-2 lg:space-x-2 lg:pl-8">
            {iconLinks.map(({ label, Icon, url }, index) => (
              <TopNavLink
                key={index}
                label={label}
                hideLabel
                url={url}
                Icon={Icon}
              />
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

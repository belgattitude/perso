import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { Label } from '@/components/ui/label';
import { isExternalUrl } from '@/lib/helpers/url';
import GithubIcon from '@/public/icons/devicons/github/github-original.svg';
import ExternalLinkIcon from '@/public/icons/main/external-link.svg';

type Props = {
  title?: string;
};

const navLinks: Array<{ label: string; url: string }> = [
  { label: 'Blog', url: '/blog' },
];

const iconLinks: Array<{ label: string; Icon: FC; url: string }> = [
  {
    label: 'Github',
    Icon: GithubIcon,
    url: 'https://github.com/belgattitude/perso',
  },
];

const NavLink: FC<{
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
            ? 'bg-violet-50 text-violet-900 dark:bg-violet-500/20 dark:text-violet-50'
            : 'text-slate-600 hover:bg-gray-50 hover:text-slate-700 dark:text-slate-300 dark:hover:bg-gray-900 dark:hover:text-slate-200'
        }`}
        target={isExternalUrl(url) ? '_blank' : undefined}
        rel={isExternalUrl(url) ? 'noreferrer' : undefined}
      >
        {Icon && (
          <span className="block w-5 text-slate-400 group-hover:text-slate-500 dark:text-slate-500 dark:group-hover:text-slate-400">
            <Icon />
          </span>
        )}
        {label && <span className={hideLabel ? 'sr-only' : ''}>{label}</span>}
      </a>
    </Link>
  );
};

export const TopNav: FC<Props> = (_props) => {
  return (
    <header className="fixed z-50 w-full bg-white bg-opacity-90 border-b border-gray-200 backdrop-blur">
      <div className="flex justify-between items-center px-4 mx-auto w-full max-w-screen-2xl h-16 md:px-8 lg:px-16">
        <div className="flex items-center space-x-2.5">
          <Link href="/apps/website/src/pages">
            <a className="flex items-center space-x-2.5 font-bold text-slate-800 dark:text-white no-underline">
              <span className="-mt-0.5">Home</span>
            </a>
          </Link>
          <Label text="Wip" />
        </div>
        <nav className="hidden items-center divide-x divide-gray-200 dark:divide-gray-800 lg:flex">
          <div className="flex items-center pr-2 lg:pr-8 lg:space-x-4">
            {navLinks.map(({ label, url }, index) => (
              <NavLink
                key={index}
                label={label}
                url={url}
                Icon={isExternalUrl(url) ? ExternalLinkIcon : undefined}
              />
            ))}
          </div>
          <div className="flex items-center pl-2 lg:pl-8 lg:space-x-2">
            {iconLinks.map(({ label, Icon, url }, index) => (
              <NavLink
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

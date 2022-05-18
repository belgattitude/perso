import Link from 'next/link';
import type { FC } from 'react';

type Props = {
  title?: string;
};

export const TopNav: FC<Props> = (props) => {
  const { title } = props;
  return (
    <header className="fixed z-50 w-full border-b border-gray-200 bg-white bg-opacity-90 backdrop-blur backdrop-filter dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex h-16 w-full max-w-screen-2xl items-center justify-between px-4 md:px-8 lg:px-16">
        <div className="flex items-center space-x-2.5">
          <Link href="/">
            <a className="flex items-center space-x-2.5 font-bold text-slate-800 no-underline dark:text-white">
              <span className="-mt-0.5">Home</span>
            </a>
          </Link>
          <span className="inline-block whitespace-nowrap rounded px-1.5 align-middle font-medium leading-4 tracking-wide [font-size:10px] border border-slate-400/70 text-slate-500 dark:border-slate-600 dark:text-slate-400">
            Beta
          </span>
        </div>
        <div className="lg:hidden">
          <button
            type="button"
            aria-label="Toggle menu"
            className="flex h-8 w-8 items-center justify-end text-slate-600 dark:text-slate-300"
          >
            <span className="inline-block w-4">
              <svg
                viewBox="0 0 32 32"
                fill="current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 4.28571C0 3.02357 1.02357 2 2.28571 2H29.7143C30.9786 2 32 3.02357 32 4.28571C32 5.55 30.9786 6.57143 29.7143 6.57143H2.28571C1.02357 6.57143 0 5.55 0 4.28571ZM0 15.7143C0 14.45 1.02357 13.4286 2.28571 13.4286H29.7143C30.9786 13.4286 32 14.45 32 15.7143C32 16.9786 30.9786 18 29.7143 18H2.28571C1.02357 18 0 16.9786 0 15.7143ZM29.7143 29.4286H2.28571C1.02357 29.4286 0 28.4071 0 27.1429C0 25.8786 1.02357 24.8571 2.28571 24.8571H29.7143C30.9786 24.8571 32 25.8786 32 27.1429C32 28.4071 30.9786 29.4286 29.7143 29.4286Z"></path>
              </svg>
            </span>
          </button>
        </div>
        <nav className="hidden items-center divide-x divide-gray-200 dark:divide-gray-800 lg:flex">
          <div className="flex items-center pr-2 lg:space-x-4 lg:pr-8">
            <Link href={'/blog'}>
              <a className="group flex h-8 items-center rounded-md bg-transparent px-3 text-sm font-medium leading-none text-slate-600 hover:bg-gray-50 hover:text-slate-700 dark:text-slate-300 dark:hover:bg-gray-900 dark:hover:text-slate-200">
                <span className="">Blog</span>
              </a>
            </Link>
            <div className="px-3">
              <button
                aria-label="Search"
                className="flex h-8 cursor-text items-center rounded-md border border-gray-200 bg-gray-50 px-2 text-sm hover:border-gray-300 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700 dark:hover:bg-gray-800"
              >
                <span className="mr-2 block w-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="current"
                    viewBox="0 0 512 512"
                  >
                    <path d="M504.1 471l-134-134C399.1 301.5 415.1 256.8 415.1 208c0-114.9-93.13-208-208-208S-.0002 93.13-.0002 208S93.12 416 207.1 416c48.79 0 93.55-16.91 129-45.04l134 134C475.7 509.7 481.9 512 488 512s12.28-2.344 16.97-7.031C514.3 495.6 514.3 480.4 504.1 471zM48 208c0-88.22 71.78-160 160-160s160 71.78 160 160s-71.78 160-160 160S48 296.2 48 208z"></path>
                  </svg>
                </span>
                <span className="mr-8 text-slate-400 dark:text-slate-500">
                  Search...
                </span>
                <span className="inline-block whitespace-nowrap rounded px-1.5 align-middle font-medium leading-4 tracking-wide [font-size:10px] border border-slate-400/70 text-slate-500 dark:border-slate-600 dark:text-slate-400">
                  ⌘K
                </span>
              </button>
            </div>
          </div>
          <div className="flex items-center pl-2 lg:space-x-2 lg:pl-8">
            <a
              className="group flex h-8 items-center rounded-md bg-transparent px-3 text-sm font-medium leading-none text-slate-600 hover:bg-gray-50 hover:text-slate-700 dark:text-slate-300 dark:hover:bg-gray-900 dark:hover:text-slate-200"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/belgattitude/perso"
            >
              <span className="block w-5 text-slate-400 group-hover:text-slate-500 dark:text-slate-500 dark:group-hover:text-slate-400">
                <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                  <path d="M127.975 10C61.1744 10 7 64.167 7 130.99C7 184.444 41.663 229.787 89.7396 245.786C95.7928 246.9 97.9987 243.164 97.9987 239.955C97.9987 237.088 97.8947 229.475 97.8353 219.382C64.1824 226.69 57.082 203.161 57.082 203.161C51.5784 189.182 43.6461 185.461 43.6461 185.461C32.6612 177.96 44.4779 178.108 44.4779 178.108C56.6215 178.963 63.0089 190.579 63.0089 190.579C73.8007 209.065 91.329 203.725 98.2215 200.628C99.3208 192.814 102.448 187.482 105.901 184.459C79.0369 181.406 50.7911 171.023 50.7911 124.662C50.7911 111.456 55.5074 100.65 63.2466 92.1974C61.9988 89.1374 57.847 76.8304 64.435 60.1785C64.435 60.1785 74.588 56.9254 97.7016 72.582C107.35 69.8934 117.703 68.5565 127.99 68.5045C138.269 68.5565 148.615 69.8934 158.278 72.582C181.377 56.9254 191.515 60.1785 191.515 60.1785C198.118 76.8304 193.966 89.1374 192.726 92.1974C200.48 100.65 205.159 111.456 205.159 124.662C205.159 171.142 176.869 181.369 149.923 184.362C154.26 188.098 158.13 195.481 158.13 206.77C158.13 222.939 157.981 235.989 157.981 239.955C157.981 243.193 160.165 246.959 166.3 245.778C214.339 229.743 248.973 184.429 248.973 130.99C248.973 64.167 194.798 10 127.975 10Z"></path>
                </svg>
              </span>
              <span className="sr-only">Github</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

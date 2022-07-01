import type { FC, ReactNode } from 'react';
import GoogleIcon from '@/public/icons/devicons/google/google-original.svg';
import JitsiIcon from '@/public/icons/services/jitsi.svg';
import TwilioIcon from '@/public/icons/services/twilio.svg';
import ZoomIcon from '@/public/icons/services/zoom.svg';

export type ProviderSelectionCardProps = {
  providers?: Array<{
    id: string;
    name: string;
    Icon: ReactNode;
    tag?: string;
  }>;
};

const defaultProps = {
  providers: [
    {
      id: 'jitsi',
      name: 'Jitsi',
      Icon: JitsiIcon,
      tag: 'opensource',
    },
    {
      id: 'google-meet',
      name: 'Google Meet',
      Icon: GoogleIcon,
    },
    {
      id: 'zoom',
      name: 'Zoom',
      Icon: ZoomIcon,
    },
    {
      id: 'twilio',
      name: 'Twilio',
      Icon: TwilioIcon,
    },
  ],
};

export const ProviderSelectionCard: FC<ProviderSelectionCardProps> = (
  props
) => {
  const { providers } = { ...defaultProps, ...props };
  return (
    <div className="max-w-sm rounded-lg border bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800 sm:p-6">
      <h5 className="mb-3 text-base font-semibold text-gray-900 dark:text-white lg:text-xl">
        Embed exploration
      </h5>
      <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
        Exploring some services that could be embedded.
      </p>
      <ul className="my-4 space-y-3">
        {providers.map((provider) => {
          const { id, name, tag, Icon } = provider;
          return (
            <li key={id}>
              <a
                href="#"
                className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
              >
                {Icon && <Icon width={20} />}
                <span className="ml-3 flex-1 whitespace-nowrap">{name}</span>
                {tag && (
                  <span className="ml-3 inline-flex items-center justify-center rounded bg-gray-200 py-0.5 px-2 text-xs font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                    {tag}
                  </span>
                )}
              </a>
            </li>
          );
        })}
      </ul>
      <div>
        <a
          href="#"
          className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
        >
          <svg
            className="mr-2 h-3 w-3"
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="question-circle"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"
            ></path>
          </svg>
          Problem connecting ?
        </a>
      </div>
    </div>
  );
};

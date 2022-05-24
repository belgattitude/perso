import Script from 'next/script';
import type { FC } from 'react';

type Props = {
  user: string;
};

export const HubspotSchedulePage: FC<Props> = (props) => {
  const { user } = props;

  const prefillData = {
    email: 'belgattitude@gmail.com',
    firstName: 'Sébastien',
    lastName: 'Vanvelthem',
    phoneNumber: '+32476421608',
  };

  const params = new URLSearchParams({
    embed: 'true',
    ...prefillData,
  });

  const link = `https://meetings.hubspot.com/${user}?${params}`;
  return (
    <>
      <Script
        src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
        strategy="afterInteractive"
      />
      <div className="meetings-iframe-container" data-src={link} />
    </>
  );
};

import Script from 'next/script';
import type { FC } from 'react';

type Props = {
  user: string;
};

export const HubspotSchedulePage: FC<Props> = (props) => {
  const { user } = props;

  const link = `https://meetings.hubspot.com/${user}?embed=true`;
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

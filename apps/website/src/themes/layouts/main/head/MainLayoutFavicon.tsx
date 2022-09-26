import type { FC } from 'react';

const basePath = '/layouts/main';

export const MainLayoutFavicon: FC = () => {
  return (
    <>
      <link
        key="favicon-apple-touch-icon"
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${basePath}/apple-touch-icon.png`}
      />
      <link
        key="favicon-icon-32"
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${basePath}/favicon-32x32.png`}
      />
      <link
        key="favicon-icon-16"
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${basePath}/favicon-16x16.png`}
      />
      <link
        key="site-webmanifest"
        rel="manifest"
        href={`${basePath}/site.webmanifest`}
      />
    </>
  );
};

// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import { init as sentryInit } from '@sentry/nextjs';

sentryInit({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Adjust the tracesSampleRate value in production, or use tracesSampler for greater control
  // @see https://develop.sentry.dev/sdk/performance/
  // Don't add tracesSampleRate to avoid 30kb (gzip) js in the client bundle (staring nextjs 12).
  // @see https://github.com/getsentry/sentry-javascript/discussions/4503#discussioncomment-2143116
  tracesSampleRate: ['true', '1'].includes(
    process.env.NEXTJS_SENTRY_TRACING ?? ''
  )
    ? 0.005
    : undefined,

  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
  beforeSend: async (event, hint) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Sentry event', event);
      console.log('Sentry hint', hint);
    }
    return event;
  },
});

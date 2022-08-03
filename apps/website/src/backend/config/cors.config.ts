import type { CorsOptions } from 'cors';

export const corsAllowedOrigins = [
  'soluble.io',
  // Sandboxes
  '.+\\-belgattitude.vercel.app',
  // for local development
  'localhost',
  // For proof-of-concepts
  'sortlist.com',
  'sortlist-test.com',
  'sortlist.cloud',
];

const regexpString = `^https?://(([^/])+\\.)?(${corsAllowedOrigins.join(
  '|'
)})(\\:\\d+)?$`;

export const corsWhilelistedOriginsRegexp = new RegExp(regexpString);

type CorsDefaultOptions = Pick<CorsOptions, 'maxAge'>;

export const corsDefaultOptions: CorsDefaultOptions = {
  maxAge: 3600,
};

// @link https://github.com/ai/size-limit

let manifest;
try {
  manifest = require('./.next/build-manifest.json');
} catch (e) {
  throw new Error(
    'Cannot find a NextJs build folder, did you forget to build ?'
  );
}
const pages = manifest.pages;

const limitCfg = {
  defaultSize: '120kb',
  pages: {
    '/': '100kb',
    '/404': '90kb',
    '/_app': '177kb',
    '/_error': '100kb',
    '/_monitor/sentry/csr-page': '90kb',
    '/_monitor/sentry/ssr-page': '90kb',
    '/about/opensource': '150kb', // includes framer-motion
    '/about/resume': '150kb', // includes framer-motion
    '/meet/[meetingSlug]': '120kb',
    '/meet/_log/[meetingSlug]': '120kb',
    '/meet/j/[meetingSlug]': '120kb',
  },
};
const getPageLimits = () => {
  let pageLimits = [];
  for (const [uri, paths] of Object.entries(pages)) {
    pageLimits.push({
      name: `Browser page '${uri}'`,
      limit: limitCfg.pages?.[uri] ?? limitCfg.defaultSize,
      path: paths.map((p) => `.next/${p}`),
    });
  }
  return pageLimits;
};

module.exports = [
  ...getPageLimits(),
  {
    name: 'CSS',
    path: ['.next/static/css/**/*.css'],
    limit: '10 kB',
  },
];

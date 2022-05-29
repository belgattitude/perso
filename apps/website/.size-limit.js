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
  defaultSize: '100kb',
  pages: {
    '/': '100kb',
    '/404': '80kb',
    '/_app': '150kb',
    '/_error': '80kb',
    '/_monitor/sentry/csr-page': '75kb',
    '/_monitor/sentry/ssr-page': '75kb',
    '/about/opensource': '160kb', // includes framer-motion
    '/about/resume': '160kb', // includes framer-motion
    '/meet/[meetingSlug]': '310kb',
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

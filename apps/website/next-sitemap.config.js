/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://soluble.io',
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000,
  exclude: ['_monitor/*', '/404', '/*/404', '/admin/*', '/*/auth/*', '/auth/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['_monitor', '**/_monitor', 'admin', '**/admin'],
      },
    ],
  },
};

const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  framework: '@storybook/react',
  core: {
    builder: {
      name: 'webpack5',
      options: {
        fsCache: true,
      },
    },
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(ts|tsx|js|jsx)'],
  features: {
    // Still issues with mdx2 and react 18
    // @link https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#opt-in-mdx2-support
    previewMdx2: true,
  },
  babel: (config) => {
    config.presets.push(require.resolve('@emotion/babel-preset-css-prop'));
    return config;
  },
  webpackFinal: async (config) => {
    config.resolve.plugins = config.resolve.plugins || [];
    config.resolve.plugins.push(
        new TsconfigPathsPlugin({
          configFile: path.resolve(__dirname, '../tsconfig.json'),
        })
    );
    return config;
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
};

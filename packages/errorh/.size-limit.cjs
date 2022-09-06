module.exports = [
  {
    name: 'CJS',
    path: ['dist/cjs/**/*.js'],
    limit: '3KB',
  },
  {
    name: 'ESM',
    path: ['dist/esm/**/*.js'],
    limit: '3KB',
  },
  {
    name: 'UMD',
    path: ['dist/umd/*.js'],
    limit: '3KB',
  },
];

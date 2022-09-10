// @ts-check

// Regularly update this max size when new hooks are added (keep a threshold)
const fullBundleMaxSize = "3KB";

/**
 * Will ensure esm tree-shakeability and total size are within expectations.
 *
 * @link https://github.com/ai/size-limit/
 * @type {{name: string, path: string[], limit: string, import?: string, webpack?: boolean}[]}
 */
module.exports = [
  // ###################################################
  // ESM full bundle and individual imports
  // ###################################################
  {
    name: "ESM Webpack (*)",
    path: ["dist/esm/index.js"],
    import: "*",
    limit: fullBundleMaxSize,
  },
  {
    name: "ESM Webpack (one client exception)",
    path: ["dist/esm/index.js"],
    import: "{ HttpBadMapping }",
    limit: "400B",
  },
  {
    name: "ESM Webpack (one server exception)",
    path: ["dist/esm/index.js"],
    import: "{ HttpInternalServerError }",
    limit: "400B",
  },
  {
    name: "ESM Webpack (one typeguard)",
    path: ["dist/esm/index.js"],
    import: "{ isHttpException }",
    limit: "400B",
  },
  // ###################################################
  // Commonjs full bundle
  // ###################################################
  {
    name: "CJS Webpack (*)",
    path: ["dist/cjs/index.js"],
    limit: fullBundleMaxSize,
  }
];

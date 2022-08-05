import createCache from '@emotion/cache';
import type { EmotionCache, Options } from '@emotion/cache';

type Params = {
  /**
   * Insertion point, default to 'meta[name="emotion-insertion-point"]'
   * Note that it needs to be an existing meta tag in your document
   */
  insertionPointSelector?: string;
} & Options;

const defaults = {
  key: 'css',
  insertionPointSelector: 'meta[name="emotion-insertion-point"]',
};

const isBrowser = typeof document !== 'undefined';

export const createEmotionCache = (params?: Params): EmotionCache => {
  const { insertionPointSelector, ...cacheOptions } = {
    ...defaults,
    ...(params ?? {}),
  };

  if (!cacheOptions.insertionPoint && isBrowser) {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
      insertionPointSelector
    );
    cacheOptions.insertionPoint = emotionInsertionPoint ?? undefined;
  }

  return createCache(cacheOptions);
};

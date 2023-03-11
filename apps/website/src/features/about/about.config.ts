import type { I18nActiveNamespaces } from '@/lib/i18n';

export type AboutConfig = {
  // Define namespaces in use in both the type and the config.
  i18nNamespaces: I18nActiveNamespaces;
};
export const aboutConfig: AboutConfig = {
  /** Namespaces that should be loaded for this page */
  i18nNamespaces: ['common', 'about', 'navigation'],
};

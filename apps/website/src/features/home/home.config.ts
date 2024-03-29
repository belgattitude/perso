import type { I18nActiveNamespaces } from '@/lib/i18n';

export type HomeConfig = {
  // Define namespaces in use in both the type and the config.
  i18nNamespaces: I18nActiveNamespaces;
};

export const homeConfig: HomeConfig = {
  i18nNamespaces: ['common', 'navigation', 'home'],
};

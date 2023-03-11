import type { I18nActiveNamespaces } from '@/lib/i18n';

export type BlogConfig = {
  // Define namespaces in use in both the type and the config.
  i18nNamespaces: I18nActiveNamespaces;
};

export const blogConfig: BlogConfig = {
  i18nNamespaces: ['common', 'blog', 'navigation'],
};

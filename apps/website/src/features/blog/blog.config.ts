import type { I18nActiveNamespaces } from '@/lib/i18n';

export type BlogConfig = {
  // Define installed namespaces in the type here
  // to allow full typechecking of your translation keys.
  i18nNamespaces: I18nActiveNamespaces<'common' | 'blog' | 'navigation'>;
};

export const blogConfig: BlogConfig = {
  i18nNamespaces: ['common', 'blog', 'navigation'],
};

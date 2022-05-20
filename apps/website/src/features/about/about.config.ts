import type { I18nActiveNamespaces } from '@/lib/i18n';

export type AboutConfig = {
  // Define installed namespaces in the type here
  // to allow full typechecking of your translation keys.
  i18nNamespaces: Readonly<
    I18nActiveNamespaces<'common' | 'about' | 'navigation'>
  >;
};
export const aboutConfig: AboutConfig = {
  /** Namespaces that should be loaded for this page */
  i18nNamespaces: ['common', 'about', 'navigation'],
} as const;

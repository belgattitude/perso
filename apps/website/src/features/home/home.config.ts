import type { I18nActiveNamespaces } from '@/lib/i18n';

export type HomeConfig = {
  // Define installed namespaces in the type here
  // to allow full typechecking of your translation keys.
  i18nNamespaces: I18nActiveNamespaces<'common' | 'home' | 'navigation'>;
};

export const homeConfig: HomeConfig = {
  i18nNamespaces: ['common', 'navigation', 'home'],
};

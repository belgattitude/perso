import type { I18nActiveNamespaces } from '@/lib/i18n';

export type HomeConfig = {
  // Define installed namespaces in the type here
  // to allow full typechecking of your translation keys.
  i18nNamespaces: Readonly<I18nActiveNamespaces<'common' | 'home'>>;
};

export const homeConfig: HomeConfig = {
  i18nNamespaces: ['common', 'home'],
} as const;

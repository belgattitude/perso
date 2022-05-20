import type { I18nActiveNamespaces } from '@/lib/i18n';

export type SystemConfig = {
  // Define installed namespaces in the type here
  // to allow full typechecking of your translation keys.
  i18nNamespaces: Readonly<I18nActiveNamespaces<'system' | 'navigation'>>;
};

export const systemConfig: SystemConfig = {
  i18nNamespaces: ['system', 'navigation'],
} as const;

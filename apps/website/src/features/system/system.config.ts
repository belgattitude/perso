import type { I18nActiveNamespaces } from '@/lib/i18n';

export type SystemConfig = {
  // Define namespaces in use in both the type and the config.
  i18nNamespaces: Readonly<I18nActiveNamespaces<'system' | 'navigation'>>;
};

export const systemConfig: SystemConfig = {
  i18nNamespaces: ['system', 'navigation'],
};

import type about from './locales/en/about.json';
import type common from './locales/en/common.json';
import type home from './locales/en/home.json';
import type system from './locales/en/system.json';

export interface I18nNamespaces {
  home: typeof home;
  about: typeof about;
  common: typeof common;
  system: typeof system;
}

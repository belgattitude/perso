import type about from './locales/en/about.json';
import type blog from './locales/en/blog.json';
import type common from './locales/en/common.json';
import type home from './locales/en/home.json';
import type navigation from './locales/en/navigation.json';
import type system from './locales/en/system.json';

export interface I18nNamespaces {
  home: typeof home;
  blog: typeof blog;
  about: typeof about;
  common: typeof common;
  system: typeof system;
  navigation: typeof navigation;
}

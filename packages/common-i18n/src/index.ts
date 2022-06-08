import type about from './locales/en/about.json';
import type blog from './locales/en/blog.json';
import type common from './locales/en/common.json';
import type home from './locales/en/home.json';
import type navigation from './locales/en/navigation.json';
import type system from './locales/en/system.json';

export interface I18nNamespaces {
  about: typeof about;
  blog: typeof blog;
  common: typeof common;
  home: typeof home;
  navigation: typeof navigation;
  system: typeof system;
}

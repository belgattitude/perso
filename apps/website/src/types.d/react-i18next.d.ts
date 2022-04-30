/**
 * Types augmentation for translation keys to allow to typecheck
 * and suggesting keys to the t function. In case it's too slow
 * you can opt out by commenting the following code.
 * @link https://react.i18next.com/latest/typescript
 */
import 'react-i18next';
import type { I18nNamespaces } from '@belgattitude/common-i18n';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: I18nNamespaces['common'];
      home: I18nNamespaces['home'];
      about: I18nNamespaces['about'];
      system: I18nNamespaces['system'];
    };
  }
}

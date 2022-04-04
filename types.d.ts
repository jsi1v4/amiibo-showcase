/// <reference types="vite/client" />

import { defineComponent } from 'vue';
import { DateTimeFormatResult, Locale } from 'vue-i18n';

declare module '*.vue' {
  const component: ReturnType<typeof defineComponent>;
  export default component;
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $d(value: string): DateTimeFormatResult;
    $d(value: string, key: string): DateTimeFormatResult;
    $d(value: string, key: string, locale: Locale): DateTimeFormatResult;
  }
}

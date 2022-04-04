import { createI18n } from 'vue-i18n';

import { getLocale } from '@/utils';

import en from './locales/en.json';
import pt from './locales/pt.json';

import { LANG } from './types';

const i18n = createI18n({
  locale: getLocale() || LANG.EN,
  fallbackLocale: LANG.EN,
  messages: {
    [LANG.EN]: en,
    [LANG.PT]: pt
  },
  dateTimeFormats: {
    [LANG.EN]: {
      short: {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      },
      long: {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      }
    },
    [LANG.PT]: {
      short: {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      },
      long: {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      }
    }
  }
});

export default i18n;

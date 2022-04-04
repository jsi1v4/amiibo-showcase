import Cookies from 'js-cookie';

import envs from '@/envs';
import { Dictionary } from '@/types';

/**
 * Create/Update cookie with security
 * @param data Dictionary (key: value)
 * @param expires Date
 */
export function saveCookie(data: Dictionary, expires?: Date) {
  // Object.keys(data).forEach(key => (document.cookie = `${key}=${data[key]}`));
  Object.keys(data).forEach((key) => {
    Cookies.set(key, data[key], {
      path: '',
      secure: true,
      sameSite: 'Lax',
      expires
    });
  });
}

export function loadCookie(key: string) {
  const cookies = Cookies.get();
  return cookies[key] || undefined;
}

/**
 * Remove cookie with security
 * @param keys String (e.g: removeCookie(keyA, keyB, keyC))
 */
export function removeCookie(...keys: string[]) {
  // keys.forEach(key => (document.cookie = `${key}=`));
  keys.forEach((key) => {
    Cookies.remove(key, { path: '' });
  });
}

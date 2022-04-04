import { addMinutes, parseISO } from 'date-fns';
import envs from '@/envs';

/**
 * Save data in storage with expire
 * @param key String storage key
 * @param data Any to save
 * @param expire Number minutes to invalidate data
 */
export function saveCache<T>(key: string, data: T, expire?: number) {
  const at = new Date().toISOString();
  const until = expire ? addMinutes(parseISO(at), expire).toISOString() : null;
  const version = envs.appVersion;
  localStorage.setItem(key, JSON.stringify({ at, until, version, data }));
  return data;
}

/**
 * Remove data in storage
 * @param key String storage key
 */
export function removeCache(key: string) {
  localStorage.removeItem(key);
}

/**
 * Load data in storage with expire
 * @param key String storage key
 */
export function loadCache<T>(key: string) {
  const raw = localStorage.getItem(key);
  if (raw) {
    const cache = JSON.parse(raw);
    // if (envs.appVersion === cache.version && (!cache.until || new Date() < parseISO(cache.until))) {
    if (!cache.until || new Date() < parseISO(cache.until)) {
      return cache.data as T;
    } else {
      removeCache(key);
    }
  }
}

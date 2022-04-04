import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';

import envs from '@/envs';
import { saveCache } from '@/utils/cache';
import { loadCookie } from '@/utils/cookie';

export default function (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  if (to.matched.some((r) => r.meta.protected)) {
    const isAuth = envs.local.enabled
      ? envs.local.accessToken
      : loadCookie(envs.keys.core.accessToken);
    if (isAuth) {
      next();
    } else {
      saveCache(envs.keys.core.redirectPath, to.fullPath);
      next('/login');
    }
    return;
  }
  next();
}

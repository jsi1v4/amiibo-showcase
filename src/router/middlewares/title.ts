import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import envs from '@/envs';

export default function (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  if (to.meta.title) {
    document.title = `${envs.appTitle} | ${to.meta.title}`;
  } else {
    document.title = envs.appTitle;
  }
  next();
}

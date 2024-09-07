import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import envs from '@/envs';
import i18n from '@/i18n';

import AuthGuard from './guards/auth';
import TitleMiddleware from './middlewares/title';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    alias: i18n.global.t('routes.home'),
    component: () => import(/* webpackPrefetch: true */ '@/views/home/HomePage.vue'),
    meta: { title: i18n.global.t('home.title'), protected: true }
  },
  {
    path: '/login',
    alias: i18n.global.t('routes.login'),
    component: () => import(/* webpackPrefetch: true */ '@/views/auth/LoginPage.vue'),
    meta: { title: i18n.global.t('login.title') }
  },
  {
    path: '/logout',
    alias: i18n.global.t('routes.logout'),
    component: () => import(/* webpackPrefetch: true */ '@/views/auth/LogoutPage.vue'),
    meta: { title: i18n.global.t('logout.title') }
  }
];

const router = createRouter({
  history: createWebHashHistory(envs.baseUrl),
  routes
});

router.beforeEach(AuthGuard);
router.beforeEach(TitleMiddleware);

export default router;

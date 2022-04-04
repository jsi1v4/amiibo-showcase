import { provide, inject } from 'vue';
import axios from 'axios';

import envs from '@/envs';
import { useAuthProvider } from '@/providers/auth';
import { paramsSerializer } from '@/utils';
import { saveCache } from '@/utils/cache';
import { factoryHttpMockProvider } from './mock';

export const HttpProviderKey = Symbol('http-provider');

function factoryHttpProvider() {
  const { accessToken, handleUnauthorized } = useAuthProvider();

  const http = axios.create({
    baseURL: envs.backend.apiUrl,
    paramsSerializer
  });

  http.interceptors.request.use((req) => {
    return accessToken.value
      ? {
          ...req
          // headers: {
          //   authorization: `Bearer ${accessToken.value}`
          // }
        }
      : req;
  });

  http.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response?.status === 401) {
        saveCache(envs.keys.core.redirectPath, window.location.pathname);
        handleUnauthorized();
      }
      return Promise.reject(error);
    }
  );

  return http;
}

export type HttpProvider = ReturnType<typeof factoryHttpProvider>;

export function createHttpProvider() {
  if (envs.local.enabled) {
    provide(HttpProviderKey, factoryHttpMockProvider());
  } else {
    provide(HttpProviderKey, factoryHttpProvider());
  }
}

export function useHttpProvider() {
  return inject(HttpProviderKey) as HttpProvider;
}

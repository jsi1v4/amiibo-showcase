import { provide, inject } from 'vue';
import { useHttpProvider } from '@/providers/http';

import { AmiiboService } from '@/services/amiibo';

export const ApiProviderKey = Symbol('api-provider');

function factoryApiProvider() {
  const http = useHttpProvider();

  const amiibo = new AmiiboService(http);

  return {
    amiibo
  };
}

export type ApiProvider = ReturnType<typeof factoryApiProvider>;

export function createApiProvider() {
  provide(ApiProviderKey, factoryApiProvider());
}

export function useApiProvider() {
  return inject(ApiProviderKey) as ApiProvider;
}

import jwtdecode from 'jwt-decode';
import { computed, inject, provide } from 'vue';

import envs from '@/envs';
import { AuthUser } from '@/types/auth';
import { loadCookie, removeCookie, saveCookie } from '@/utils/cookie';
import { useRef } from '@/utils/hooks';

export const AuthProviderKey = Symbol('auth-provider');

function factoryAuthProvider() {
  const [accessToken, setAccessToken] = useRef<string | undefined>(
    envs.local.enabled ? envs.local.accessToken : loadCookie(envs.keys.core.accessToken)
  );
  const user = computed<AuthUser | undefined>(() => {
    if (accessToken.value && !accessToken.value.includes('undefined')) {
      return jwtdecode(accessToken.value);
    }
    return undefined;
  });
  const authenticated = computed<boolean>(() => !!accessToken.value);

  function authOn(accessToken: string, expires?: Date) {
    setAccessToken(accessToken);
    saveCookie({ [envs.keys.core.accessToken]: accessToken }, expires);
  }

  function authOff() {
    setAccessToken(undefined);
    removeCookie(envs.keys.core.accessToken);
  }

  function login(renew?: boolean) {
    authOn(envs.local.accessToken || '');

    window.location.replace('/');
  }

  function logout() {
    authOff();

    window.location.replace('/');
  }

  function handleUnauthorized() {
    login(true);
  }

  return {
    accessToken,
    user,
    authenticated,
    login,
    logout,
    handleUnauthorized
  };
}

export type AuthProvider = ReturnType<typeof factoryAuthProvider>;

export function createAuthProvider() {
  provide(AuthProviderKey, factoryAuthProvider());
}

export function useAuthProvider() {
  return inject(AuthProviderKey) as AuthProvider;
}

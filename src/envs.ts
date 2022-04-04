import pkg from '@/../package.json';

export default {
  appName: pkg.name,
  appVersion: pkg.version,
  appTitle: pkg.title,
  baseUrl: String(import.meta.env.BASE_URL),
  env: {
    dev: import.meta.env.NODE_ENV === 'development',
    test: import.meta.env.NODE_ENV === 'testing',
    prod: import.meta.env.NODE_ENV === 'production'
  },
  local: {
    enabled: import.meta.env.VITE_LOCAL_MODE === 'true',
    accessToken: String(import.meta.env.VITE_ACCESS_TOKEN)
  },
  backend: {
    apiUrl: String(import.meta.env.VITE_API_URL)
  },
  keys: {
    core: {
      accessToken: 'js.amiiboShowcase.accessToken',
      redirectPath: 'js.amiiboShowcase.redirectPath'
    }
  }
};

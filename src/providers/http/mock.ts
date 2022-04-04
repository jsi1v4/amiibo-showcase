import { delay } from '@/utils';

function importMock(method: 'get' | 'post') {
  return (url: string) => {
    const name = url.replace(/\//gi, '-').toLowerCase();
    const data = import(/* @vite-ignore */ `../../mocks/${method}${name}`);
    return delay(data);
  };
}

export function factoryHttpMockProvider() {
  const http = {
    get: importMock('get'),
    post: importMock('post'),
    put: () => {
      return delay(true);
    },
    patch: () => {
      return delay(true);
    },
    delete: () => {
      return delay(true);
    }
  };

  return http;
}

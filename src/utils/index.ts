import { Dictionary } from '@/types';

/**
 * Return language of browser
 * @return String
 */
export function getLocale(): string {
  const locale = typeof navigator !== 'undefined' && navigator.language;
  return String(locale).slice(0, 2);
}

/**
 * Extract initials of name
 * @param text String
 * @return String
 */
export function getInitials(text?: string): string {
  const names = String(text).toUpperCase().split(' ');
  return names[0][0] + names[names.length - 1][0];
}

/**
 * Generate Promise with delay
 * @param data Any
 * @param milliseconds Number (default = 2000)
 */
export function delay<T>(data: T | (() => T), milliseconds = 2000): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (typeof data === 'function') {
        resolve((data as CallableFunction)());
      } else {
        resolve(data);
      }
    }, milliseconds);
  });
}

/**
 * Generate Promise and reject
 * @param data Any
 */
export function reject<T>(data: T | (() => T)): Promise<T> {
  return new Promise((resolve, reject) => {
    if (typeof data === 'function') {
      reject((data as CallableFunction)());
    } else {
      reject(data);
    }
  });
}

/**
 * Forces a function to wait time before running again
 * @param wait Number (default = 500)
 */
export function debounce(wait = 500) {
  let timeoutID: NodeJS.Timeout;

  return (callback: () => void) => {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(callback, wait);
  };
}

/**
 * Transform to TitleCase
 * @param text String
 * @return String
 */
export function titleCase(str: string) {
  return String(str)
    .replace(/(-|_)/g, ' ')
    .split(' ')
    .map((x) => x.charAt(0).toUpperCase() + x.substring(1).toLowerCase())
    .join('');
}

/**
 * Transform to camelCase
 * @param text String
 * @return String
 */
export function camelCase(str: string) {
  const text = titleCase(str);
  return text.charAt(0).toLowerCase() + text.substring(1);
}

/**
 * Print element dom
 * @param element Element
 * @param title String (optional)
 * @param mode portrait | landscape (optional)
 */
export function print(element: Element, title?: string, mode?: 'portrait' | 'landscape') {
  const w = window.open(
    '',
    'PRINT',
    mode === 'portrait' ? 'width=1400,height=900' : 'width=900,height=1400'
  );

  if (w) {
    const content = `
      <html>
        <head>
          <title>${title}</title>
        </head>
        <body>${element.innerHTML}</body>
      </html>
    `;
    w.document.write(content);
    w.print();
    w.close();
  }
}

/**
 * Create or update css property of element
 * @param key String
 * @param value String
 * @param el HTMLElement (default is root)
 */
export function setCssProperty(key: string, value: string, el?: HTMLElement) {
  const element = el || document.documentElement;
  element.style.setProperty(key, value);
}

/**
 * Extract deep property in object by path
 * @param object any
 * @param path String (e.g 'foo.bar')
 * @return Generic is last property of path
 */
export function deepFind<T, O = unknown>(object: O, path: string): T | undefined {
  const parts = path.split('.');
  if (parts.length === 1) {
    return object[parts[0]];
  }
  return deepFind(object[parts[0]], parts.slice(1).join('.'));
}

/**
 * Sort array of elements
 * @param field String (keys of object A/B)
 * @return Function
 */
export function sorter<A, B>() {
  return (a: A, b: B) =>
    String(a).localeCompare(String(b), undefined, {
      numeric: true,
      sensitivity: 'base'
    });
}

/**
 * Sort array of object by field property
 * @param field String (keys of object A/B)
 * @return Function
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function sorterByField<A = any, B = any, F extends keyof A & keyof B = any>(field: F) {
  return (a: A, b: B) =>
    String(a[field]).localeCompare(String(b[field]), undefined, {
      numeric: true,
      sensitivity: 'base'
    });
}

/**
 * Sorter array of deep object by path (using deepFind)
 * @param path String (e.g 'foo.bar')
 * @return Function
 */
export function sorterDeep<A, B>(path: string) {
  return (a: A, b: B) =>
    deepFind<string>(a, path)?.localeCompare(deepFind<string>(b, path) || '', undefined, {
      numeric: true,
      sensitivity: 'base'
    }) || 0;
}

/**
 * Copy object without reference, using JSON tools
 * @param object Any
 * @return object copy
 */
export function objectCopy<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj || {}));
}

/**
 * Serialize parameters to string (array separate by comma)
 * @param params Dictionary
 * @return string
 */
export function paramsSerializer(params: Dictionary) {
  return Object.keys(params).reduce((qs, key) => {
    const param = params[key];
    if (!param) {
      return qs;
    }
    if (Array.isArray(param)) {
      if (param.length === 0) {
        return qs;
      }
      return `${qs}&${key}=${param.join(',')}`;
    }
    return `${qs}&${key}=${param}`;
  }, '');
}

/**
 * Generate random number, from 0 to param
 * @param params Number
 * @return Number
 */
export function randomNumber(max = 9999) {
  return Math.floor(Math.random() * max);
}

/**
 * Get element position on screen
 * @param element HTMLElement
 * @return Object { x, y }
 */
export function getElementPosition(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  return {
    x: rect.left + window.scrollX,
    y: rect.top + window.scrollY
  };
}

/**
 * Get list control of html form
 * @param form HTMLFormElement
 * @return Array FormControl
 */
export type FormControl = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
export function getFormControls(form: HTMLFormElement): FormControl[] {
  const controls: FormControl[] = [];
  for (let i = 0, iLen = form.elements.length; i < iLen; i++) {
    const item = form.elements.item(i);
    if (item) {
      controls.push(item as FormControl);
    }
  }
  return controls;
}

/**
 * Prevent defaults util to functional compose
 * @param form HTMLFormElement
 * @return Array FormControl
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function preventDefault(fn?: (...args: any[]) => any) {
  return (e: Event) => {
    e.preventDefault();
    fn?.();
  };
}

/**
 * Get position of scroll on screen
 * @return Object coordinates
 */
export function scrollPosition() {
  const doc = document.documentElement;
  const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  const left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  const bottom = top + doc.clientHeight;
  const right = left + doc.clientWidth;
  return { top, right, bottom, left };
}

/**
 * Get array of enum entries
 * @return Array {key,value}
 */
export function enumToCollection<T>(en: T): { key: string; value: T }[] {
  return Object.entries(en)
    .filter((x) => !Number(x[0]))
    .map((x) => ({ key: x[0], value: x[1] }));
}

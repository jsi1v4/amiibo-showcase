import { ref, Ref, UnwrapRef, shallowRef, ShallowRef, shallowReactive } from 'vue';

export type UseDeepRef<T> = [Ref<UnwrapRef<T>>, (v: UnwrapRef<T>) => UnwrapRef<T>];

export function useDeepRef<T>(initial: T): UseDeepRef<T>;
export function useDeepRef<T>(): UseDeepRef<T | undefined>;
export function useDeepRef<T>(initial?: T): UseDeepRef<T | undefined> {
  const state = ref<T | undefined>(initial);

  function setState(v?: UnwrapRef<T>) {
    state.value = v;
    return v;
  }

  return [state, setState];
}

export type UseRef<T> = [ShallowRef<T>, (v: T) => T];

export function useRef<T>(initial: T): UseRef<T>;
export function useRef<T>(): UseRef<T | undefined>;
export function useRef<T>(initial?: T): UseRef<T | undefined> {
  const state = shallowRef<T | undefined>(initial);

  function setState(v?: T) {
    state.value = v;
    return v;
  }

  return [state, setState];
}

export interface UseForm<T> {
  value: T;
  set: (f: keyof T, v: T[keyof T]) => T[keyof T];
  setAll: (v: T) => T;
  reset: () => T;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function useForm<T extends object>(initial: T): UseForm<T> {
  const value = shallowReactive<T>({ ...initial }) as T;

  function set(f: keyof T, v: T[keyof T]) {
    value[f] = v;
    return v;
  }

  function setAll(v: T) {
    Object.keys(value).forEach((key) => {
      value[key] = v[key];
    });
    return v;
  }

  function reset() {
    setAll(initial);
    return initial;
  }

  return { value, set, setAll, reset };
}

export function useTemplateRef<T = HTMLElement>(initial?: T) {
  return shallowRef<T | null>(initial || null);
}

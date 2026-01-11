import type {
  ComponentPublicInstance,
  Ref,
  ShallowRef,
  WritableComputedRef,
} from "vue";
import { getCurrentScope, onScopeDispose, unref, watch } from "kirbyuse";

type MaybeRef<T> = T | Ref<T> | ShallowRef<T> | WritableComputedRef<T>; // TODO: Remove in Vue 3
type MaybeElement = HTMLElement | ComponentPublicInstance | undefined | null;

export function useEventListener<K extends keyof HTMLElementEventMap>(
  target: MaybeRef<MaybeElement>,
  event: K,
  listener: (this: HTMLElement, event: HTMLElementEventMap[K]) => unknown,
  options?: boolean | AddEventListenerOptions,
): () => void {
  let cleanupFn: (() => void) | undefined;

  const cleanup = () => {
    cleanupFn?.();
    cleanupFn = undefined;
  };

  const register = (
    el: HTMLElement,
    event: K,
    listener: (this: HTMLElement, event: HTMLElementEventMap[K]) => unknown,
    options?: boolean | AddEventListenerOptions,
  ) => {
    el.addEventListener(event, listener, options);
    return () => el.removeEventListener(event, listener, options);
  };

  const stopWatch = watch(
    () => unrefElement(target),
    (el) => {
      cleanup();
      if (!el) return;

      cleanupFn = register(el, event, listener, options);
    },
    { immediate: true, flush: "post" },
  );

  const stop = () => {
    stopWatch();
    cleanup();
  };

  if (getCurrentScope()) {
    onScopeDispose(stop);
  }

  return stop;
}

export function unrefElement<T extends MaybeElement>(
  elRef: MaybeRef<T>,
): HTMLElement | undefined | null {
  const plain = unref(elRef);
  return ((plain as ComponentPublicInstance)?.$el as HTMLElement) ?? plain;
}

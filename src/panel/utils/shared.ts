import { hash } from "ohash";
import { STORAGE_KEY_PREFIX } from "../constants";

/** Generates a hashed storage key with the plugin prefix. */
export function getHashedStorageKey(...args: unknown[]) {
  return `${STORAGE_KEY_PREFIX}${hash([...args])}`;
}

export function isObject(value: unknown): value is Record<any, any> {
  return Object.prototype.toString.call(value) === "[object Object]";
}

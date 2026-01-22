import { hash } from "ohash";
import { STORAGE_KEY_PREFIX } from "../constants";

/** Generates a hashed storage key with the plugin prefix. */
export function getHashedStorageKey(...args: unknown[]) {
  return `${STORAGE_KEY_PREFIX}${hash([...args])}`;
}

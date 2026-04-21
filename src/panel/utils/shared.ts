import { hash } from "ohash";
import { STORAGE_KEY_PREFIX } from "../constants";

export function getHashedStorageKey(...args: unknown[]) {
  return `${STORAGE_KEY_PREFIX}${hash([...args])}`;
}

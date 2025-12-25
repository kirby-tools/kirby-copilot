import { hash } from "ohash";
import { STORAGE_KEY_PREFIX } from "../constants";

/**
 * Generates a hashed storage key with the plugin prefix.
 *
 * @param {...unknown} args - Values to hash into the key
 * @returns {string} Prefixed hash string for localStorage/sessionStorage
 */
export function getHashedStorageKey(...args) {
  return `${STORAGE_KEY_PREFIX}${hash([...args])}`;
}

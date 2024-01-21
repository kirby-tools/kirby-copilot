import { hash } from "ohash";

export const SUPPORTED_PROVIDERS = ["openai", "mistral"];
export const STORAGE_KEY_PREFIX = "kirby$copilot$";
export const getHashedStorageKey = (...args) =>
  `${STORAGE_KEY_PREFIX}${hash([...args])}`;

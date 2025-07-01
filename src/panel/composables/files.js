import { SUPPORTED_IMAGE_MIME_TYPES } from "../constants";
import { openFilePicker } from "../utils/upload";

export function useFilePicker() {
  return openFilePicker({
    accept: [...SUPPORTED_IMAGE_MIME_TYPES, "application/pdf"].join(","),
  });
}

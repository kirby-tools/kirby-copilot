import { SUPPORTED_VISION_MIME_TYPES } from "../constants";
import { openFilePicker } from "../utils/upload";

export function useFilePicker() {
  return openFilePicker({
    accept: [...SUPPORTED_VISION_MIME_TYPES, "application/pdf"].join(","),
  });
}

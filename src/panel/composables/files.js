import { SUPPORTED_FILE_MIME_TYPES } from "../constants";
import { openFilePicker } from "../utils/upload";

export function useFilePicker() {
  return openFilePicker({
    accept: SUPPORTED_FILE_MIME_TYPES.join(","),
  });
}

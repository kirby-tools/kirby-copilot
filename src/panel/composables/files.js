import { SUPPORTED_VISION_MIME_TYPES } from "../constants";
import { openFilePicker, toReducedBlob } from "../utils/upload";

export async function useFilePicker() {
  const selectedFiles = await openFilePicker({
    accept: [...SUPPORTED_VISION_MIME_TYPES, "application/pdf"].join(","),
  });

  return await Promise.all(
    selectedFiles.map(async (blob) => {
      if (blob.type.startsWith("image/")) {
        return toReducedBlob(blob, 2048);
      }

      return blob;
    }),
  );
}

import { SUPPORTED_VISION_MIME_TYPES } from "../constants";
import { openFilePicker, toReducedBlob } from "../utils/upload";

export async function useFilePicker() {
  const selectedFiles = await openFilePicker({
    accept: [...SUPPORTED_VISION_MIME_TYPES, "application/pdf"].join(","),
  });

  return await Promise.all(
    selectedFiles.map(async (file) => {
      if (file.type.startsWith("image/")) {
        return await toReducedBlob(file, 2048);
      }

      return file;
    }),
  );
}

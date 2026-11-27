import type { MaybeRefOrGetter } from "vue";
import type { FilePreview } from "../types";
import { onScopeDispose, shallowRef, toValue, watch } from "vue";
import { SUPPORTED_IMAGE_MIME_TYPES } from "../constants";

export function useFilePreviews(files: MaybeRefOrGetter<File[]>) {
  const previews = shallowRef<FilePreview[]>([]);
  const thumbnailUrls = new Map<File, string>();

  function revokeThumbnailUrl(file: File) {
    URL.revokeObjectURL(thumbnailUrls.get(file)!);
    thumbnailUrls.delete(file);
  }

  watch(
    () => [...toValue(files)],
    (currentFiles) => {
      for (const file of thumbnailUrls.keys()) {
        if (!currentFiles.includes(file)) revokeThumbnailUrl(file);
      }

      previews.value = currentFiles.map((file) => {
        if (!SUPPORTED_IMAGE_MIME_TYPES.includes(file.type)) {
          return {
            name: file.name,
            image: { icon: "document", color: "red-500", back: "pattern" },
          };
        }

        if (!thumbnailUrls.has(file)) {
          thumbnailUrls.set(file, URL.createObjectURL(file));
        }

        return {
          name: file.name,
          image: { src: thumbnailUrls.get(file), cover: true, back: "pattern" },
        };
      });
    },
    { immediate: true },
  );

  onScopeDispose(() => {
    for (const file of thumbnailUrls.keys()) revokeThumbnailUrl(file);
  });

  return previews;
}

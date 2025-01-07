export async function openFilePicker({ accept = "*", multiple = true } = {}) {
  const input = document.createElement("input");
  input.type = "file";
  input.classList.add("sr-only");
  input.value = null;
  input.accept = accept;
  input.multiple = multiple;

  input.click();

  return new Promise((resolve) => {
    input.addEventListener(
      "change",
      (event) => {
        resolve([...(event.target?.files ?? [])]);
        input.remove();
      },
      { once: true },
    );
  });
}

export async function toReducedBlob(blob, maxDimension) {
  if (!maxDimension) return blob;

  const loadedImage = await loadImage(blob);
  const resizedBlob = await imageToBlob(loadedImage, blob.type, maxDimension);
  return resizedBlob;
}

async function loadImage(blob, options = {}) {
  if (!blob.type.startsWith("image/")) {
    throw new TypeError(`MIME type must be an image, but got: ${blob.type}`);
  }

  const imageElement = new Image();
  const objectUrl = URL.createObjectURL(blob);

  if (options.crossOrigin) {
    imageElement.crossOrigin = options.crossOrigin;
  }

  try {
    const resolvedImage = await new Promise((resolve, reject) => {
      imageElement.addEventListener("load", () => {
        resolve(imageElement);
      });

      imageElement.addEventListener("error", reject);

      imageElement.src = objectUrl;
    });

    return resolvedImage;
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}

async function imageToBlob(
  image,
  /** MIME type for the output blob (e.g., `image/jpeg`, `image/png`) */
  mimeType,
  /** Maximum dimension (width or height) in pixels */
  maxDimension,
) {
  if (!image.complete || !image.naturalWidth) {
    throw new Error("Image has not been properly loaded");
  }

  if (!mimeType.startsWith("image/")) {
    throw new Error(`Blob type must be an image, but got: ${mimeType}`);
  }

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const scaleFactor = maxDimension
    ? Math.min(1, maxDimension / Math.max(image.width, image.height))
    : 1;
  const targetWidth = Math.round(image.width * scaleFactor);
  const targetHeight = Math.round(image.height * scaleFactor);

  canvas.width = targetWidth;
  canvas.height = targetHeight;

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(image, 0, 0, targetWidth, targetHeight);

  const blob = await new Promise((resolve) => {
    canvas.toBlob(resolve, mimeType);
  });

  if (!blob) {
    throw new Error("Failed to convert canvas to Blob");
  }

  return blob;
}

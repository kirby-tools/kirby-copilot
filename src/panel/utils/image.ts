const DEFAULT_QUALITY = 0.85;
const PROGRESSIVE_THRESHOLD = 1024;
const LOSSY_FORMATS = new Set(["image/jpeg", "image/webp", "image/avif"]);

/**
 * Opens a native file picker dialog and returns selected files.
 * Handles both selection and cancellation properly.
 */
export function openFilePicker({
  accept = "*",
  multiple = true,
}: {
  accept?: string;
  multiple?: boolean;
} = {}): Promise<File[]> {
  return new Promise<File[]>((resolve) => {
    const input = document.createElement("input");
    input.type = "file";
    input.classList.add("sr-only");
    input.accept = accept;
    input.multiple = multiple;

    const cleanup = () => {
      input.remove();
    };

    // Handle file selection
    input.addEventListener(
      "change",
      (event) => {
        const files = (event.target as HTMLInputElement)?.files;
        resolve(files ? [...files] : []);
        cleanup();
      },
      { once: true },
    );

    // Handle cancel (focus returns to window without selection)
    window.addEventListener(
      "focus",
      () => {
        // Delay to allow change event to fire first if files were selected
        setTimeout(() => {
          if (document.body.contains(input)) {
            resolve([]);
            cleanup();
          }
        }, 300);
      },
      { once: true },
    );

    document.body.appendChild(input);
    input.click();
  });
}

/**
 * Reduces an image blob to the specified maximum dimension while preserving aspect ratio.
 *
 * @remarks
 * Uses progressive downsampling for large reductions to maintain quality.
 */
export async function toReducedBlob(
  blob: Blob,
  options: {
    /** Maximum dimension (width or height) in pixels */
    maxDimension?: number;
    /** Output quality for lossy formats (0-1). Defaults to 0.85 */
    quality?: number;
    /** Preferred output MIME type. Falls back to source type if unsupported */
    outputType?: "image/webp" | "image/jpeg" | "image/png";
  } = {},
): Promise<Blob> {
  const { maxDimension, quality = DEFAULT_QUALITY, outputType } = options;

  if (!maxDimension && !outputType) return blob;

  const imageElement = await blobToImage(blob);

  try {
    return await renderImageToBlob(imageElement, {
      mimeType: outputType ?? blob.type,
      maxDimension,
      quality,
    });
  } finally {
    // Clean up the image element's resources
    imageElement.src = "";
  }
}

async function blobToImage(
  blob: Blob,
  options: { crossOrigin?: "anonymous" | "use-credentials" } = {},
): Promise<HTMLImageElement> {
  if (!blob.type.startsWith("image/")) {
    throw new TypeError(`MIME type must be an image, but got: ${blob.type}`);
  }

  const imageElement = new Image();
  const objectUrl = URL.createObjectURL(blob);

  if (options.crossOrigin) {
    imageElement.crossOrigin = options.crossOrigin;
  }

  try {
    return await new Promise<HTMLImageElement>((resolve, reject) => {
      imageElement.onload = () => resolve(imageElement);
      imageElement.onerror = () =>
        reject(new Error("Failed to load image from blob"));
      imageElement.src = objectUrl;
    });
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}

async function renderImageToBlob(
  image: HTMLImageElement,
  {
    mimeType,
    maxDimension,
    quality,
  }: {
    mimeType: string;
    maxDimension?: number;
    quality: number;
  },
): Promise<Blob> {
  if (!image.complete || !image.naturalWidth) {
    throw new Error("Image has not been properly loaded");
  }

  if (!mimeType.startsWith("image/")) {
    throw new Error(`Blob type must be an image, but got: ${mimeType}`);
  }

  const sourceWidth = image.naturalWidth;
  const sourceHeight = image.naturalHeight;

  const resizeRatio = maxDimension
    ? Math.min(1, maxDimension / Math.max(sourceWidth, sourceHeight))
    : 1;

  const targetWidth = Math.round(sourceWidth * resizeRatio);
  const targetHeight = Math.round(sourceHeight * resizeRatio);

  // Skip processing if no resize needed and format matches
  if (resizeRatio === 1 && mimeType === image.src) {
    const canvas = renderToCanvas(image, targetWidth, targetHeight);
    return canvasToBlob(canvas, mimeType, quality);
  }

  // For large image downscaling (more than 2x reduction), use progressive downsampling
  // following Nyquist-Shannon sampling theorem to avoid aliasing artifacts
  if (
    resizeRatio < 0.5 &&
    Math.max(sourceWidth, sourceHeight) > PROGRESSIVE_THRESHOLD
  ) {
    return progressiveDownsample(
      image,
      targetWidth,
      targetHeight,
      mimeType,
      quality,
    );
  }

  // For smaller images or minor resizing, render directly
  const canvas = renderToCanvas(image, targetWidth, targetHeight);
  return canvasToBlob(canvas, mimeType, quality);
}

async function progressiveDownsample(
  source: HTMLImageElement,
  targetWidth: number,
  targetHeight: number,
  mimeType: string,
  quality: number,
): Promise<Blob> {
  let currentWidth = source.naturalWidth;
  let currentHeight = source.naturalHeight;
  let currentImage: HTMLImageElement | ImageBitmap = source;

  try {
    // Progressive multi-step downsampling for higher quality results
    while (currentWidth > targetWidth * 2 || currentHeight > targetHeight * 2) {
      // Calculate intermediate size (halve dimensions, but don't go below target)
      const intermediateWidth = Math.max(
        targetWidth,
        Math.floor(currentWidth * 0.5),
      );
      const intermediateHeight = Math.max(
        targetHeight,
        Math.floor(currentHeight * 0.5),
      );

      const canvas = renderToCanvas(
        currentImage,
        intermediateWidth,
        intermediateHeight,
      );

      // Clean up previous `ImageBitmap` (but not the original image)
      if (currentImage !== source && "close" in currentImage) {
        currentImage.close();
      }

      currentImage = await createImageBitmap(canvas, {
        resizeQuality: "high",
      });

      currentWidth = intermediateWidth;
      currentHeight = intermediateHeight;
    }

    const finalCanvas = renderToCanvas(currentImage, targetWidth, targetHeight);
    return canvasToBlob(finalCanvas, mimeType, quality);
  } finally {
    // Ensure cleanup of the last `ImageBitmap`
    if (currentImage !== source && "close" in currentImage) {
      currentImage.close();
    }
  }
}

function renderToCanvas(
  image: HTMLImageElement | ImageBitmap,
  width: number,
  height: number,
): HTMLCanvasElement | OffscreenCanvas {
  // Prefer `OffscreenCanvas` for better performance when available
  const canvas =
    typeof OffscreenCanvas !== "undefined"
      ? new OffscreenCanvas(width, height)
      : document.createElement("canvas");

  if ("width" in canvas) {
    canvas.width = width;
    canvas.height = height;
  }

  const ctx = canvas.getContext("2d", {
    alpha: true,
    willReadFrequently: false,
  }) as CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D | null;

  if (!ctx) {
    throw new Error("Failed to get canvas 2D context");
  }

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.clearRect(0, 0, width, height);
  ctx.drawImage(image, 0, 0, width, height);

  return canvas;
}

async function canvasToBlob(
  canvas: HTMLCanvasElement | OffscreenCanvas,
  mimeType: string,
  quality: number,
): Promise<Blob> {
  const qualityOption = LOSSY_FORMATS.has(mimeType) ? quality : undefined;

  if (canvas instanceof OffscreenCanvas) {
    return canvas.convertToBlob({
      type: mimeType,
      quality: qualityOption,
    });
  }

  const blob = await new Promise<Blob | null>((resolve) => {
    canvas.toBlob(resolve, mimeType, qualityOption);
  });

  if (!blob) {
    throw new Error("Failed to convert canvas to Blob");
  }

  return blob;
}

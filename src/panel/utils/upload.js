let inputElement;

export async function openFilePicker({ accept = "*", multiple = true } = {}) {
  inputElement = document.createElement("input");
  inputElement.type = "file";
  inputElement.classList.add("sr-only");
  inputElement.value = null;
  inputElement.accept = accept;
  inputElement.multiple = multiple;

  inputElement.click();

  return new Promise((resolve) => {
    inputElement.addEventListener("change", (event) => {
      resolve([...event.target.files]);
      inputElement.remove();
    });
  });
}

export function fileToDataUri(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const dataUri = event.target.result;
      const mimeType = file.type;
      resolve({ dataUri, mimeType });
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsDataURL(file);
  });
}

export function dataUriToBase64(dataUri) {
  return dataUri.split(",")[1];
}

export async function downscaleFile(file, { maxSize } = {}) {
  if (!maxSize) return file;

  const img = await loadImage(file);
  const reducedBlob = await imageToBlob(img, file.type, maxSize);
  return reducedBlob;
}

async function loadImage(file) {
  const img = new Image();
  const url = URL.createObjectURL(file);

  img.src = url;

  await new Promise((resolve, reject) => {
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      // Revoke the created object URL to avoid memory leaks
      URL.revokeObjectURL(url);
      reject(new Error("Failed to load the image"));
    };
  });

  // Revoke the created object URL to avoid memory leaks
  URL.revokeObjectURL(url);

  return img;
}

async function imageToBlob(img, fileType, maxSize) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  let scaleFactor = 1;
  if (maxSize && (img.width > maxSize || img.height > maxSize)) {
    scaleFactor = maxSize / Math.max(img.width, img.height);
  }

  canvas.width = img.width * scaleFactor;
  canvas.height = img.height * scaleFactor;

  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  const blob = await new Promise((resolve) => {
    canvas.toBlob(resolve, fileType);
  });

  if (!blob) {
    throw new Error("Failed to convert canvas to Blob");
  }

  return blob;
}

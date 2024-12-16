// Polyfill for `Promise.withResolvers`
Promise.withResolvers ??= function () {
  let resolve, reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
};

export * from "pdfjs-dist/build/pdf.worker.min.mjs";

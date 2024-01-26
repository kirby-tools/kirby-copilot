export async function resolvePluginAsset(filename, assets) {
  if (assets.length === 0) {
    throw new Error("Plugin assets are missing");
  }

  const mod = assets.find((asset) => asset.filename === filename);

  if (!mod) {
    throw new Error(`Plugin asset "${filename}" not found`);
  }

  return import(/* @vite-ignore */ mod.url);
}

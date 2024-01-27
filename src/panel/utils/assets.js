/**
 * @typedef {object} PluginAsset
 * @property {string} filename - The name of the asset.
 * @property {string} url - The URL of the asset.
 */

/** @type {PluginAsset[]} */
let _assets = [];

const moduleCache = new Map();

export async function registerPluginAssets(assets) {
  _assets = assets;
}

export async function resolvePluginAsset(filename) {
  if (_assets.length === 0) {
    throw new Error("Plugin assets are missing");
  }

  const mod = _assets.find((asset) => asset.filename === filename);

  if (!mod) {
    throw new Error(`Plugin asset "${filename}" not found`);
  }

  return import(/* @vite-ignore */ mod.url);
}

export async function getModule(filename) {
  if (!filename.endsWith(".mjs")) {
    filename += ".mjs";
  }

  if (moduleCache.has(filename)) {
    return moduleCache.get(filename);
  }

  const mod = await resolvePluginAsset(filename);
  moduleCache.set(filename, mod);
  return mod;
}

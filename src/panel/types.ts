import type {
  KirbyBlock,
  KirbyFieldProps,
  KirbyLayout,
  KirbyLayoutColumn,
} from "kirby-types";
import type { PluginAsset } from "kirbyuse";
import type { ReasoningEffort } from "./constants";

// Re-export kirby-types for convenience
export type { KirbyBlock, KirbyLayout, KirbyLayoutColumn };

// =============================================================================
// Output Formats
// =============================================================================

export type OutputFormat = "text" | "markdown" | "rich-text";

// =============================================================================
// Active Field
// =============================================================================

export interface ActiveField {
  element: HTMLElement;
  name: string;
  type?: string;
}

// =============================================================================
// Kirby Fieldset (Block Type Definition)
// =============================================================================

/**
 * Kirby fieldset definition for blocks.
 *
 * Returned by the `__copilot__/fieldsets` API endpoint.
 * Represents a block type with its name, type identifier, and field definitions.
 *
 * Note: This is a simplified structure from the API, not the full `KirbyFieldsetProps`.
 *
 * @see https://getkirby.com/docs/reference/panel/fields/blocks
 */
export interface KirbyFieldset {
  /** Human-readable block name */
  name: string;
  /** Block type identifier (e.g., `text`, `heading`, `image`) */
  type: string;
  /** Field definitions within the block */
  fields?: Record<string, KirbyFieldProps>;
}

// =============================================================================
// Plugin Configuration
// =============================================================================

export interface ProviderConfig {
  baseUrl?: string;
  hasApiKey?: boolean;
  model?: string;
  completionModel?: string;
  options?: Record<string, any>;
}

export interface CompletionConfig {
  debounce: number;
}

export interface PluginConfig {
  provider: string;
  providers: Record<string, ProviderConfig>;
  systemPrompt?: string;
  reasoningEffort?: ReasoningEffort;
  excludedBlocks?: string[];
  completion?: false | CompletionConfig;
}

// =============================================================================
// API Response Types
// =============================================================================

/**
 * Response from `__copilot__/context` API endpoint.
 *
 * Returns plugin configuration, registered assets, and license status.
 * Called once on plugin initialization to configure the AI provider
 * and load required assets.
 *
 * @example
 * ```ts
 * const context = await panel.api.get("__copilot__/context");
 * registerPluginAssets(context.assets);
 * ```
 */
export interface PluginContextResponse {
  /**
   * Plugin configuration merged from defaults and user config.
   * Contains provider settings, model selection, and feature flags.
   */
  config: PluginConfig;
  /**
   * Plugin assets to register (AI SDK modules, PDF.js worker).
   * Each asset has a filename and URL for dynamic loading.
   */
  assets: PluginAsset[];
  /**
   * License validation status.
   * Used to determine feature availability and show license prompts.
   */
  licenseStatus?: string;
}

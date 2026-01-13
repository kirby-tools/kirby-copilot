import type { LicenseStatus } from "@kirby-tools/licensing";
import type { KirbyFieldProps } from "kirby-types";
import type { PluginAsset } from "kirbyuse";
import type { LogLevel, ReasoningEffort } from "./constants";

export type OutputFormat = "text" | "markdown" | "rich-text";

export interface ActiveField {
  element: HTMLElement;
  name: string;
  type?: string;
}

export interface PromptContext {
  prompt: string;
  files: File[];
  selectedFieldNames?: string[];
  insertMode?: "append" | "replace";
}

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

export interface PromptTemplate {
  id: string;
  label: string;
  prompt: string;
  createdAt: number;
  /** Config-defined templates are read-only for editors */
  readOnly?: boolean;
}

export type PromptTemplateInput = Pick<PromptTemplate, "label" | "prompt">;

export interface PluginConfig {
  provider: string;
  providers: Record<string, ProviderConfig>;
  systemPrompt?: string;
  reasoningEffort?: ReasoningEffort;
  promptTemplates?: PromptTemplateInput[];
  excludedBlocks?: string[];
  completion?: false | CompletionConfig;
  logLevel?: LogLevel;
}

/** Response from `__copilot__/context` API endpoint. */
export interface PluginContextResponse {
  config: PluginConfig;
  assets: PluginAsset[];
  licenseStatus?: LicenseStatus;
}

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

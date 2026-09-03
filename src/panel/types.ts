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
  /** OpenAI only: force Chat Completions API instead of the default Responses API. */
  api?: "chat" | "responses";
}

export interface CompletionConfig {
  debounce: number;
}

export interface PromptTemplate {
  id: string;
  label: string;
  prompt: string;
  createdAt: number;
  /** Config-defined templates are read-only for editors. */
  isReadOnly?: boolean;
}

export type PromptTemplateInput = Pick<PromptTemplate, "label" | "prompt">;

export interface Skill {
  id: string;
  label: string;
  instructions: string;
}

export interface PluginConfig {
  provider: string;
  providers: Record<string, ProviderConfig>;
  systemPrompt?: string;
  reasoningEffort?: ReasoningEffort;
  promptTemplates?: PromptTemplateInput[];
  skills?: Skill[];
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
 * Block type as returned by the `__copilot__/fieldsets` API endpoint: a
 * simplified shape of the blueprint fieldset, not the full
 * `KirbyFieldsetProps`.
 *
 * @see https://getkirby.com/docs/reference/panel/fields/blocks
 */
export interface KirbyFieldset {
  /** Translated, human-readable block label, not an identifier. */
  name: string;
  /** Block type identifier (e.g., `text`, `heading`, `image`). */
  type: string;
  /** Description of the block's purpose, defined in the block blueprint. */
  description?: string | null;
  fields?: Record<string, KirbyFieldProps>;
}

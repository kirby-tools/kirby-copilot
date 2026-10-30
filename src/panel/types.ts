import type { PluginContext } from "@kirby-tools/licensing";
import type { KirbyFieldProps } from "kirby-types";
import type { LogLevel, ReasoningEffort } from "./constants";

export type OutputFormat = "text" | "markdown" | "rich-text";

export type Translate = (key: string, data?: Record<string, unknown>) => string;

export interface ActiveField {
  element: HTMLElement;
  path?: string;
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
  /**
   * OpenAI only: `chat` forces the Chat Completions API over the default
   * Responses API.
   */
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
  agents: boolean;
}

export interface ButtonOptionsResponse {
  userPrompt?: string | null;
  systemPrompt?: string | null;
}

export interface PluginContextResponse extends PluginContext {
  config: PluginConfig;
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

export interface ConnectedAgent {
  id: string;
  name: string;
  host: string | null;
  isVerified: boolean;
  isLocal: boolean;
}

/** A row of the Agents table. */
export interface AgentConnection {
  id: string;
  agent: ConnectedAgent;
  account?: string;
  permissions: string[];
  lastUsedAt: number | null;
  /** False while the owner's role may not connect agents. */
  hasRoleAccess: boolean;
  /** Path of the row's dropdown route. */
  options: string;
}

export interface CopilotFieldLabels {
  generate: string;
  stop: string;
  undo: string;
  prompt: string;
  context: string;
  placeholder: string;
  reset: string;
  selectFiles: string;
  clearFiles: string;
}

export type CopilotFieldError =
  | { type: "model"; provider: string }
  | { type: "field"; field: string }
  | { type: "userPrompt" };

export interface InsertOption {
  value: NonNullable<PromptContext["insertMode"]>;
  text: string;
}

export interface PromptDialogLabels {
  preview: string;
  selectFiles: string;
  clearFiles: string;
  insert: string;
  search: string;
  selectPages: string;
  notFound: string;
  templates: string;
  saveTemplate: string;
  editTemplates: string;
  noTemplates: string;
  history: string;
  fields: string;
  generate: string;
}

/** Field the prompt dialog offers as a `{name}` placeholder. */
export interface PlaceholderField {
  name: string;
  label?: string;
  /** Start of the field's current value. */
  preview?: string;
}

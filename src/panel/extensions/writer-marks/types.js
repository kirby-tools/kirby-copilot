/**
 * @file Type definitions for Kirby Writer mark extensions.
 *
 * These types document the context objects passed to mark extension methods
 * (`commands`, `keys`, `plugins`, `inputRules`, `pasteRules`) by Kirby's
 * Writer component.
 *
 * @see {@link https://github.com/getkirby/kirby/blob/main/panel/src/components/Forms/Writer/Extensions.js}
 */

/**
 * ProseMirror Schema containing all registered nodes and marks.
 *
 * @typedef {import("prosemirror-model").Schema} Schema
 */

/**
 * ProseMirror MarkType for the current mark extension.
 *
 * @typedef {import("prosemirror-model").MarkType} MarkType
 */

/**
 * ProseMirror NodeType for node extensions.
 *
 * @typedef {import("prosemirror-model").NodeType} NodeType
 */

/**
 * Kirby Writer utility functions exported from `Writer/Utils/index.js`.
 *
 * These utilities include ProseMirror commands and custom helpers for
 * working with marks, nodes, and editor state.
 *
 * @typedef {object} WriterUtils
 *
 * @property {typeof import("prosemirror-commands").chainCommands} chainCommands - Chain multiple commands
 * @property {typeof import("prosemirror-commands").exitCode} exitCode - Exit a code block
 * @property {typeof import("prosemirror-commands").lift} lift - Lift content out of wrapping node
 * @property {typeof import("prosemirror-commands").setBlockType} setBlockType - Set block type
 * @property {typeof import("prosemirror-commands").toggleMark} toggleMark - Toggle a mark on/off
 * @property {typeof import("prosemirror-commands").wrapIn} wrapIn - Wrap selection in a node
 *
 * @property {typeof import("prosemirror-inputrules").wrappingInputRule} wrappingInputRule - Create wrapping input rule
 * @property {typeof import("prosemirror-inputrules").textblockTypeInputRule} textblockTypeInputRule - Create textblock type input rule
 *
 * @property {typeof import("prosemirror-schema-list").addListNodes} addListNodes - Add list nodes to schema
 * @property {typeof import("prosemirror-schema-list").wrapInList} wrapInList - Wrap in list
 * @property {typeof import("prosemirror-schema-list").splitListItem} splitListItem - Split list item
 * @property {typeof import("prosemirror-schema-list").liftListItem} liftListItem - Lift list item
 * @property {typeof import("prosemirror-schema-list").sinkListItem} sinkListItem - Sink list item
 *
 * @property {(state: import("prosemirror-state").EditorState, type: MarkType) => Record<string, any>} getMarkAttrs - Get attributes of active mark
 * @property {(state: import("prosemirror-state").EditorState, type: NodeType) => Record<string, any>} getNodeAttrs - Get attributes of active node
 * @property {(type: NodeType, attrs?: Record<string, any>) => import("prosemirror-state").Command} insertNode - Insert a node
 * @property {(regexp: RegExp, type: MarkType, getAttrs?: (match: RegExpMatchArray) => Record<string, any>) => import("prosemirror-inputrules").InputRule} markInputRule - Create mark input rule
 * @property {(state: import("prosemirror-state").EditorState, type: MarkType) => boolean} markIsActive - Check if mark is active
 * @property {(regexp: RegExp, type: MarkType, getAttrs?: (match: string) => Record<string, any>) => import("prosemirror-state").Plugin} markPasteRule - Create mark paste rule
 * @property {(value: number, min: number, max: number) => number} minMax - Clamp value between min and max
 * @property {(regexp: RegExp, type: NodeType, getAttrs?: (match: RegExpMatchArray) => Record<string, any>) => import("prosemirror-inputrules").InputRule} nodeInputRule - Create node input rule
 * @property {(state: import("prosemirror-state").EditorState, type: NodeType, attrs?: Record<string, any>) => boolean} nodeIsActive - Check if node is active
 * @property {(regexp: RegExp, type: MarkType, getAttrs?: (url: string) => Record<string, any>) => import("prosemirror-state").Plugin} pasteRule - Create paste rule for URLs
 * @property {(type: MarkType) => import("prosemirror-state").Command} removeMark - Remove a mark
 * @property {(type: NodeType, toggleType: NodeType, attrs?: Record<string, any>) => import("prosemirror-state").Command} toggleBlockType - Toggle block type
 * @property {(type: NodeType, itemType: NodeType) => import("prosemirror-state").Command} toggleList - Toggle list
 * @property {(type: NodeType) => import("prosemirror-state").Command} toggleWrap - Toggle wrapping node
 * @property {(type: MarkType, attrs: Record<string, any>) => import("prosemirror-state").Command} updateMark - Update mark attributes
 */

/**
 * Context object passed to mark extension methods.
 *
 * The context provides access to the ProseMirror schema, the current mark's
 * type, and utility functions for working with the editor.
 *
 * @typedef {object} WriterMarkContext
 * @property {Schema} schema - The ProseMirror schema with all nodes and marks
 * @property {MarkType} type - The MarkType instance for this mark extension
 * @property {WriterUtils} utils - Utility functions for editor operations
 */

/**
 * Context object passed to node extension methods.
 *
 * @typedef {object} WriterNodeContext
 * @property {Schema} schema - The ProseMirror schema with all nodes and marks
 * @property {NodeType} type - The NodeType instance for this node extension
 * @property {WriterUtils} utils - Utility functions for editor operations
 */

/**
 * Context object passed to generic extension methods (non-mark, non-node).
 *
 * @typedef {object} WriterExtensionContext
 * @property {Schema} schema - The ProseMirror schema with all nodes and marks
 * @property {WriterUtils} utils - Utility functions for editor operations
 */

export {};

/**
 * @typedef {import("../storage/scope.js").NodeScope} NodeScope
 */

/**
 * Represents a standard System Event in Continuum.
 * @typedef {Object} ContinuumEvent
 * @property {NodeScope} scope - The Node context where the event occurred
 * @property {number} timestamp - Unix timestamp of the event
 * @property {string} type - The event type identifier
 * @property {Object} payload - Event-specific data
 */

/**
 * Represents a Signal calling for attention or evolution.
 * @typedef {Object} ContinuumSignal
 * @property {NodeScope} scope - The Node context identifying the signal source
 * @property {number} severity - 1-10 severity rating
 * @property {string} message - Human-readable signal description
 * @property {string} [resolutionPath] - Optional suggested resolution
 */

/**
 * Interface for the Evolution System Logger.
 * @typedef {Object} EvolutionLogger
 * @property {function(ContinuumEvent): void} logEvent - Logs a system event
 * @property {function(ContinuumSignal): void} emitSignal - Emits a system signal
 */


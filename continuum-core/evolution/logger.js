import { NotImplementedByCanonError } from "../safety/blocking/errors.js";

/**
 * Logs a system event.
 * @param {import("./types.js").ContinuumEvent} event
 * @throws {NotImplementedByCanonError} Always in v0
 */
export function logEvent(event) {
    throw new NotImplementedByCanonError("Evolution System is not active in v0.");
}

/**
 * Emits a system signal.
 * @param {import("./types.js").ContinuumSignal} signal
 * @throws {NotImplementedByCanonError} Always in v0
 */
export function emitSignal(signal) {
    throw new NotImplementedByCanonError("Evolution System is not active in v0.");
}

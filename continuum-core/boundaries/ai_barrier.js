import { NotImplementedByCanonError } from "../safety/blocking/errors.js";

/**
 * Blocks any attempt to execute AI actions.
 *
 * Citation: Known_Gaps_v0.md, Section 3
 * "AI may not execute actions"
 */
export function blockAIExecution() {
    throw new NotImplementedByCanonError(
        "AI execution is blocked in v0. See Known_Gaps_v0.md, Section 3."
    );
}

import { NotImplementedByCanonError } from "../safety/blocking/errors.js";

/**
 * Blocks any attempt to perform a governed write.
 *
 * Citation: Known_Gaps_v0.md, Section 1
 * "All governed writes must be refused"
 */
export function blockGovernedWrite() {
    throw new NotImplementedByCanonError(
        "Governed writes are blocked in v0. See Known_Gaps_v0.md, Section 1."
    );
}

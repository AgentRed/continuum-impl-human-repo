/**
 * Thrown when an action is explicitly blocked because it is not yet specified in Canon.
 *
 * Citation: Known_Gaps_v0.md, Section 2
 * "Return a clear 'Not Implemented by Canon' error"
 */
export class NotImplementedByCanonError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotImplementedByCanonError";
  }
}

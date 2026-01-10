import { blockGovernedWrite } from "../boundaries/write_barrier.js";
import { NotImplementedByCanonError } from "../safety/blocking/errors.js";

/**
 * Internal interface for Key-Value storage ensuring strict boundary compliance.
 */
export class StorageInterface {
    /**
     * Reads a value from storage.
     * @param {import("./scope.js").NodeScope} scope - Context for the read
     * @param {string} key - Lookup key
     * @throws {NotImplementedByCanonError} Always in v0
     */
    read(scope, key) {
        throw new NotImplementedByCanonError("Storage.read is not implemented in v0.");
    }

    /**
     * Writes a value to storage.
     * @param {import("./scope.js").NodeScope} scope - Context for the write
     * @param {string} key - Lookup key
     * @param {any} value - Value to store
     * @throws {NotImplementedByCanonError} Always (via blockGovernedWrite)
     */
    write(scope, key, value) {
        blockGovernedWrite();
    }

    /**
     * Deletes a value from storage.
     * @param {import("./scope.js").NodeScope} scope - Context for the delete
     * @param {string} key - Lookup key
     * @throws {NotImplementedByCanonError} Always (via blockGovernedWrite)
     */
    delete(scope, key) {
        blockGovernedWrite();
    }
}

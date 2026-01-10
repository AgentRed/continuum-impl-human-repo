# Continuum v0 Boundary Verification

Purpose: Verify that v0 enforces boundaries structurally and refuses unsafe actions by design.
Constraint: Non-executable verification only, manual inspection and deterministic commands.
Authority: Repository contents and docs/canon in the Developer Package.

## Preconditions

You are running these checks in the human repo:

/Users/jasonseeber/Documents/Nucleus Remingined/Nucleus Continuum/Developer Package - Antigravity/continuum-impl-human-repo

## 1. Directory Boundary Posture

Goal: Confirm the repo is structured into core runtime, app scaffolding, and templates, with no cross-boundary shortcuts.

Run:

pwd

Expected:
Path ends with .../continuum-impl-human-repo

Run:

find . -maxdepth 3 -type d -not -path "./.git*" | sort

Expected:
- continuum-core exists
- continuum-app exists
- templates exists
- No unexpected top-level categories like universe, tenants, workspaces, nodes

## 2. Node Template Completeness

Goal: Confirm templates/node_structure contains the canonical node partitions, and nothing else.

Run:

find templates/node_structure -maxdepth 2 -type d | sort

Expected directories:
- templates/node_structure/knowledge
- templates/node_structure/programs
- templates/node_structure/modules
- templates/node_structure/integrations
- templates/node_structure/surfaces
- templates/node_structure/evolution
- templates/node_structure/ai_adapter

Expected exclusions:
- No storage adapters
- No runtime execution folders
- No cross-node shared folder

## 3. Governed Write Refusal Exists

Goal: Confirm governed writes are blocked by a specific canonical error.

Run:

sed -n '1,220p' continuum-core/safety/blocking/errors.js

Expected:
- NotImplementedByCanonError is defined
- No additional permissive error types are required for v0

Run:

sed -n '1,220p' continuum-core/boundaries/write_barrier.js

Expected:
- blockGovernedWrite() exists
- It throws NotImplementedByCanonError
- Message references v0 and Known_Gaps_v0.md Section 1

## 4. AI Execution Refusal Exists

Goal: Confirm AI execution is structurally blocked.

Run:

sed -n '1,220p' continuum-core/boundaries/ai_barrier.js

Expected:
- blockAIExecution() exists
- It throws NotImplementedByCanonError
- Message references v0 and Known_Gaps_v0.md Section 3

## 5. Storage Mutations Are Structurally Refused

Goal: Confirm any storage write or delete path is blocked via blockGovernedWrite().

Run:

sed -n '1,260p' continuum-core/storage/scope.js

Expected:
- NodeScope is JSDoc typedef only
- No runtime exports
- No defaults
- No validation logic

Run:

sed -n '1,320p' continuum-core/storage/storage_interface.js

Expected:
- write() calls blockGovernedWrite()
- delete() calls blockGovernedWrite()
- read() throws NotImplementedByCanonError in v0

## 6. Evolution Logging Is Present But Non-Operational

Goal: Confirm logging shapes exist, and logger calls refuse.

Run:

sed -n '1,320p' continuum-core/evolution/types.js

Expected:
- JSDoc typedefs only
- ContinuumEvent, ContinuumSignal, EvolutionLogger exist
- No runtime exports

Run:

sed -n '1,260p' continuum-core/evolution/logger.js

Expected:
- logEvent() throws NotImplementedByCanonError
- emitSignal() throws NotImplementedByCanonError

## 7. App Shell Is Directory-Only

Goal: Confirm the app is scaffolded but does not imply an entrypoint.

Run:

find continuum-app -type d | sort

Expected:
- continuum-app/shell
- continuum-app/surfaces/desk
- continuum-app/surfaces/knowledge
- continuum-app/surfaces/settings

Run:

find continuum-app -type f | sort

Expected:
- Only .keep files
- No index.html
- No JavaScript entrypoint

## Pass Criteria

This verification passes if:
- All expected directories exist
- All refusal primitives exist and throw NotImplementedByCanonError
- No executable UI entrypoint files exist
- No runtime defaults or validation behavior exists in typedef-only files

# Continuum v0 Implementation

## Overview
This repository contains the `v0` structural implementation of Nucleus Continuum.
It focuses strictly on directory scaffolding and the structural placement of boundary enforcement and safety primitives. No executable behavior is implemented in v0.

**Status:** Scaffolding & Safety Phase (v0)

## Read-first documents
Before contributing, you must read the authoritative Canon in the Developer Package (parent directory). These documents override code, intuition, and AI output:

- `../pack_index.md` (Entry point)
- `../docs/handoff/Developer_Hand-off_README.md` (Operational rules)
- `../docs/gaps/Known_Gaps_v0.md` (Blocking constraints)
- `../docs/canon/` (Immutable specs)

## Structure

### `continuum-core/`
Runtime logic, boundary enforcement, and storage primitives.
- `runtime/`: Execution flow and context resolution.
- `boundaries/`: Logic to enforce strict Node/Tenant isolation.
- `storage/`: Abstracted storage interfaces.
- `safety/`: Explicit refusal paths for blocked actions.

### `continuum-app/`
Frontend shell for the Unified UI and Surfaces.

### `templates/node_structure/`
The authoritative directory skeleton for all new Nodes.
- Includes `knowledge/`, `programs/`, `modules/`, etc.
- **Note:** `ai_adapter/` is for configuration only; execution is blocked.

## Blocked in v0
Per `Known_Gaps_v0.md`, the following are explicitly blocked and must raise "Not Implemented by Canon" errors:

1. **Forge / Governed Writes**: No system mutation or creation is allowed yet.
2. **AI Execution**: AI cannot execute actions or bypass governance.
3. **Canon Mutation**: No modifications to the Canon logic or files.

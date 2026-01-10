# Continuum v0 – No Invention Verification

Purpose  
Verify that the v0 repository contains no invented frameworks, executable logic, or unauthorized dependencies beyond Canon.

Constraint  
This is a **non-executable, inspection-only** verification. No tests are automated.

Authority  
- Developer Package Canon (`docs/canon`)
- Developer_Hand-off_README.md
- Known_Gaps_v0.md

---

## 1. Executable Surface Check

Goal  
Ensure no runtime entrypoints or executable flows exist.

Run:

find . -type f \\( -name "*.js" -o -name "*.ts" -o -name "*.jsx" -o -name "*.tsx" \\) | sort

Expected:
- All `.js` files are either:
  - Error classes that always throw
  - Barrier functions that always throw
  - JSDoc typedef-only files
- No file contains conditional logic enabling execution

---

## 2. Forbidden Dependency Check

Goal  
Ensure no unauthorized frameworks or runtime dependencies are present.

Run:

find . -name package.json -o -name yarn.lock -o -name pnpm-lock.yaml

Expected:
- No output

---

## 3. Framework Keyword Scan

Goal  
Detect invented or premature frameworks.

Run:

grep -R "express\\|react\\|vue\\|next\\|fs\\.|http\\.|server\\|client\\|router\\|controller" . || true

Expected:
- No matches, or matches only inside documentation explaining prohibitions

---

## 4. Guardrail Language Scan

Goal  
Ensure no permissive placeholders exist.

Run:

grep -R "TODO\\|FIXME\\|implement later\\|stub for now" . || true

Expected:
- No matches in source files
- Documentation references are acceptable

---

## 5. Boundary Integrity Check

Goal  
Ensure no cross-layer shortcuts exist.

Run:

find . -maxdepth 2 -type d | sort

Expected top-level:
- continuum-core
- continuum-app
- templates

Forbidden:
- utils
- common
- shared
- services
- adapters (outside templates)

---

## Result

If all checks pass, v0 satisfies the **No Invention, No Execution, No Drift** constraint.

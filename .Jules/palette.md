## 2024-05-22 - Semantic Modal Patterns
**Learning:** Modals in this codebase use generic `div`s and lack semantic structure (forms, dialog roles), requiring manual remediation for accessibility.
**Action:** When touching other modals, check for `role="dialog"`, `aria-modal`, and proper form wrapping.

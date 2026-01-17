## 2024-05-23 - Accessibility in Modals
**Learning:** Found a pattern of modals implemented as plain `div` overlays without semantic roles or form wrappers. This prevents screen readers from understanding the context and blocks keyboard users from submitting forms naturally.
**Action:** When touching modals, always ensure `role="dialog"`, `aria-modal="true"`, and wrap inputs in a `<form>` tag.

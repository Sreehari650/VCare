## 2026-02-04 - Semantic Buttons for Interactives
**Learning:** Common pattern of using `div` with `onClick` for interactive elements (mobile menu, modal close) instead of semantic `<button>`. This breaks keyboard accessibility.
**Action:** Replace `div` wrappers with `<button type="button">`, maintain existing classes, and add ARIA labels. Ensure `aria-controls` links to the target content ID.

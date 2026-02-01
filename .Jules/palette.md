## 2024-05-21 - [Mobile Menu Accessibility]
**Learning:** The mobile menu toggle was implemented as a clickable `div` without ARIA labels or keyboard support. This is a common "anti-pattern" that makes navigation impossible for screen reader and keyboard-only users.
**Action:** Always use semantic `<button>` elements for interactive toggles. Ensure `aria-expanded` and `aria-controls` are present to communicate state and relationship to the dropdown menu.

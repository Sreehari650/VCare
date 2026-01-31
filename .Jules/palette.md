## 2024-05-21 - [Accessibility: Button Semantics]
**Learning:** The codebase frequently uses `div` elements with `onClick` handlers for interactive elements like mobile menu toggles. This completely breaks accessibility for keyboard and screen reader users.
**Action:** Always replace these with semantic `<button type="button">` elements. Ensure to migrate all existing utility classes (like `p-2`, `rounded-full`) to the new button and add `focus:outline-none focus:ring-2` to restore/add focus visibility. Add `aria-label`, `aria-expanded`, and `aria-controls` for toggle buttons.

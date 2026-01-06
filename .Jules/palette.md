## 2024-05-23 - Interactive Elements Must Be Buttons
**Learning:** The application was using `div` elements with `onClick` handlers for the mobile menu toggle. This completely breaks accessibility for keyboard users and screen readers, as `div`s are not focusable and have no semantic meaning.
**Action:** Always use `<button>` elements for interactive actions. If a custom look is needed, style the button to look like the desired element, but keep the semantic tag. Ensure `aria-label` and `aria-expanded` are present for toggle buttons.

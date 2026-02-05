## 2024-05-24 - [Semantic Toggles]
**Learning:** Interactive elements like menu toggles must be semantic `<button>` elements, not `<div>`s. Divs lack default keyboard focus and activation (Enter/Space), and require manual ARIA role management. Using `<button>` provides these behaviors for free.
**Action:** When identifying custom interactive elements, always refactor to `<button type="button">` and ensure `aria-expanded` and `aria-controls` are present for stateful toggles.

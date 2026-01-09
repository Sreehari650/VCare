## 2024-05-23 - Accessibility First: The Hidden Div Button
**Learning:** Found a common anti-pattern in the Header: a `div` acting as a button for the mobile menu. This makes the menu completely inaccessible to keyboard users and screen readers. It's a reminder that visual design often masks deep accessibility flaws.
**Action:** Always inspect `onClick` handlers attached to non-interactive elements. Convert them to semantic `<button>` elements, ensuring they have `type="button"`, proper `aria-label`, and `aria-expanded` states.

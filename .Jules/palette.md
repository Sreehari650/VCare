## 2024-05-23 - Accessibility in Mobile Menus
**Learning:** Common pattern of using `div` with `onClick` for mobile menus creates severe accessibility barriers.
**Action:** Replace `div` with `<button type="button">`, adding `aria-label`, `aria-expanded`, and `aria-controls` for full screen reader support.

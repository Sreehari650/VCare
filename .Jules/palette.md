## 2024-05-23 - [Modal Accessibility Pattern]
**Learning:** Modals in this codebase are built with Framer Motion but lack semantic structure (form tags, labels) and ARIA roles, making them inaccessible.
**Action:** When refactoring modals, wrap inputs in a <form>, add role="dialog", aria-modal="true", and ensure the close button has an aria-label. Use force=True in Playwright to handle Framer Motion interactions.

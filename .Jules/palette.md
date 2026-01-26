## 2026-01-26 - Accessibility Testing with Playwright & Framer Motion
**Learning:** Testing accessibility features like focus management on animated components (Framer Motion) requires ensuring animations are complete or using `force=True` for clicks. Verifying `htmlFor` works best by checking `document.activeElement` after clicking the label.
**Action:** When testing React/Framer Motion apps, always include wait steps or visibility checks before interaction, and use activeElement checks for label association verification.

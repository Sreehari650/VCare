## 2024-05-23 - Accessibility Patterns for Framer Motion
**Learning:** Animated buttons (using Framer Motion `animate` prop) can cause Playwright tests to fail with "element is not stable".
**Action:** When testing animated elements, use `force=True` on actions like `.click()`, or disable animations in the test environment if possible.

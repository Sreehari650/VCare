## 2026-02-03 - Semantic Forms in React
**Learning:** React components often degenerate into "div soup" for forms, breaking standard browser behaviors like "Enter to submit" and accessibility tools.
**Action:** Always wrap input collections in a `<form>` tag and use `onSubmit` for handling logic, even if no actual HTTP POST happens directly.

## 2026-01-21 - [Semantic Forms Pattern]
**Learning:** The codebase defaults to using `div` wrappers for forms instead of `<form>` tags, breaking implicit submission and semantic value.
**Action:** When touching form-like components, wrap them in `<form>` tags and add `onSubmit` handlers to ensure standard browser behavior and accessibility.

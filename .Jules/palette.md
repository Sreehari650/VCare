## 2026-01-29 - Non-Semantic Form Implementation
**Learning:** The codebase frequently implements forms as collections of inputs within `div` containers instead of semantic `<form>` elements, requiring refactoring for standard browser behavior (like enter-to-submit) and accessibility.
**Action:** When working on forms, check if they are wrapped in `<form>` tags. If not, refactor them to use `<form onSubmit={...}>` and ensure the submit button is `type="submit"`.

## 2026-01-24 - Accessibility Anti-Patterns in Forms
**Learning:** Found a recurring pattern where forms are implemented as `div` wrappers without `<form>` tags, causing missing keyboard submission support. Also noted consistent lack of `id`/`htmlFor` associations.
**Action:** When refactoring forms, always prioritize wrapping in `<form>`, adding `onSubmit`, and manually establishing label-input relationships since the codebase defaults lack them.

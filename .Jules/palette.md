## 2024-05-23 - Form Accessibility Pattern
**Learning:** Common form pattern in this repo separates labels and inputs without semantic association (missing `htmlFor`/`id`), breaking screen reader context.
**Action:** Always wrap inputs in `<form>` and manually restore label-input association using `htmlFor` and matching `id`s when touching form components.

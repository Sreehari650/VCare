## 2024-05-22 - Missing Form Semantics
**Learning:** The codebase frequently implements forms as collections of inputs within `div` containers instead of semantic `<form>` elements. This breaks standard browser behavior (like submitting on Enter) and hurts accessibility.
**Action:** When touching form-like components, always refactor to use `<form>` elements with proper `onSubmit` handlers and semantic input/label associations.

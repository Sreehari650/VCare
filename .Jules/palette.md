## 2024-05-21 - Form Accessibility Pattern
**Learning:** Found forms implemented as `div` collections without semantic `<form>` tags or label-input associations (missing `id`/`htmlFor`).
**Action:** When refactoring forms, always wrap in `<form>` for keyboard support (Enter to submit) and ensure explicit label association for screen readers.

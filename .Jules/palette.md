## 2024-05-23 - Form Accessibility Patterns
**Learning:** Found critical accessibility gap: form components (inputs, selects) consistently lacked `id` attributes and `htmlFor` on labels, making them inaccessible to screen readers despite having visual labels.
**Action:** Always verify `id`/`htmlFor` pairing on form elements. If fixing one, check adjacent inputs as the pattern likely repeats.

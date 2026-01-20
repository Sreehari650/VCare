## 2024-05-22 - Modal Forms Accessibility
**Learning:** Common modal implementations in this codebase use `div` containers instead of `<form>` elements and lack label-input associations, breaking default browser behaviors (submit on enter) and accessibility.
**Action:** When working on modals, always wrap inputs in a `<form>` tag, ensure `id`/`htmlFor` association, and add proper ARIA roles (`dialog`, `aria-label`).

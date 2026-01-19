## 2024-05-22 - Form Semantics & Accessibility
**Learning:** Found that `BookingModal` used `div`s instead of a `<form>` element, which broke "Enter to submit" functionality and prevented proper label-input association for screen readers.
**Action:** When auditing forms, always ensure inputs are wrapped in a `<form>` tag with a proper `onSubmit` handler, and labels are linked via `htmlFor`/`id`.
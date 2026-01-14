## 2024-05-23 - Form Accessibility in Modals
**Learning:** React components using `div` as a container for inputs miss out on native form behaviors like "Enter to submit" and browser validation.
**Action:** Always wrap input groups in a `<form>` element with an `onSubmit` handler, even if the submission is handled by a state change (like closing a modal).

## 2024-05-23 - Label Association
**Learning:** Many form inputs in this repo lack `id` attributes and corresponding `htmlFor` on labels, making them inaccessible to screen readers.
**Action:** Audit and update form inputs to ensure explicit label association.

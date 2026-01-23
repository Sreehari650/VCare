## 2024-05-22 - Semantic Forms in Modals
**Learning:** The `BookingModal` used `div`s for inputs, breaking standard form behavior (Enter key submission) and accessibility (no label association).
**Action:** Always refactor form-like structures into proper `<form>` elements with associated labels and `onSubmit` handlers.

## 2024-05-23 - Modal Accessibility Pattern
**Learning:** Existing modals (like BookingModal) lack semantic structure (form tags, labels) and ARIA roles, making them inaccessible to screen readers and keyboard users.
**Action:** When touching any modal, ensure it has role="dialog", aria-modal="true", and wraps inputs in a semantic <form> with explicit label-input associations.
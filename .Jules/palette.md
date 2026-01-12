## 2024-05-21 - Critical Missing Form Semantics in Modals
**Learning:** High-impact interaction points like the Booking Modal are entirely missing form semantics and accessibility attributes (labels, roles, keyboard nav). This indicates a systemic gap in "interactive" component implementation where visual design was prioritized over semantic structure.
**Action:** When touching any interactive modal or form in this codebase, immediately audit for `role="dialog"`, `<form>` wrappers, and explicit `htmlFor`/`id` associations before making other changes.

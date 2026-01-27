## 2024-05-22 - Framer Motion and Playwright Interaction
**Learning:** When verifying frontend changes with Playwright in this repo, standard clicks on Framer Motion animated components (like the 'Book Now' button or modal overlay) often time out or fail actionable checks.
**Action:** Use `.click(force=True)` and explicit `wait_for_timeout` calls to reliably interact with animated elements during verification scripts.

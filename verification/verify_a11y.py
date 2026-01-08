from playwright.sync_api import sync_playwright, expect

def verify_accessibility():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Emulate a mobile device to test the menu
        context = browser.new_context(viewport={"width": 375, "height": 812})
        page = context.new_page()

        print("Navigating to home page...")
        page.goto("http://localhost:5173") # Assuming default Vite port

        # 1. Verify Header Mobile Menu Button
        print("Checking mobile menu button...")
        # It should be a button now
        menu_button = page.locator("header button.md\\:hidden")

        # Verify it's a button
        expect(menu_button).to_be_visible()

        # Verify ARIA attributes
        attr_label = menu_button.get_attribute("aria-label")
        attr_expanded = menu_button.get_attribute("aria-expanded")
        attr_controls = menu_button.get_attribute("aria-controls")
        attr_type = menu_button.get_attribute("type")

        print(f"Button found. Label: {attr_label}, Expanded: {attr_expanded}, Controls: {attr_controls}, Type: {attr_type}")

        if attr_label != "Open menu":
             print("FAILURE: aria-label should be 'Open menu'")
        if attr_expanded != "false":
             print("FAILURE: aria-expanded should be 'false'")
        if attr_controls != "mobile-menu":
             print("FAILURE: aria-controls should be 'mobile-menu'")
        if attr_type != "button":
             print("FAILURE: type should be 'button'")

        # Click to open
        print("Opening menu...")
        menu_button.click()

        # Verify state changes
        expect(menu_button).to_have_attribute("aria-expanded", "true")
        expect(menu_button).to_have_attribute("aria-label", "Close menu")

        # Verify menu container has ID
        menu_container = page.locator("#mobile-menu")
        expect(menu_container).to_be_visible()
        print("Mobile menu opened and verified.")

        # Take screenshot of open menu
        page.screenshot(path="verification/mobile_menu.png")


        # 2. Verify Booking Modal
        print("Checking booking modal...")
        # Reset viewport to desktop for modal check
        page.set_viewport_size({"width": 1280, "height": 720})

        # Find book button (desktop)
        book_button = page.get_by_role("button", name="Book Now")
        # FORCE click because of animation
        book_button.click(force=True)

        # Check modal attributes
        modal = page.locator("div[role='dialog']")
        expect(modal).to_be_visible()
        expect(modal).to_have_attribute("aria-modal", "true")
        expect(modal).to_have_attribute("aria-labelledby", "modal-title")

        # Check close button
        close_btn = page.locator("div[role='dialog'] button[aria-label='Close modal']")
        expect(close_btn).to_be_visible()

        print("Modal verified.")
        page.screenshot(path="verification/modal.png")

        browser.close()

if __name__ == "__main__":
    try:
        verify_accessibility()
        print("Verification passed!")
    except Exception as e:
        print(f"Verification failed: {e}")
        exit(1)

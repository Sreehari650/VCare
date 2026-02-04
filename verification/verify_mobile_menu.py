from playwright.sync_api import sync_playwright, expect

def verify_mobile_menu():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Mobile viewport
        context = browser.new_context(viewport={"width": 375, "height": 667})
        page = context.new_page()

        try:
            print("Navigating to home page...")
            page.goto("http://localhost:4173")

            print("Checking for mobile menu button...")
            # This verifies the aria-label is correct and the element is clickable
            menu_button = page.get_by_label("Open menu")
            expect(menu_button).to_be_visible()

            print("Clicking menu button...")
            # Force because framer motion might block simple clicks during initial render or if it's considered 'hidden' by some logic
            menu_button.click(force=True)

            # Wait for animation
            page.wait_for_timeout(1000)

            print("Checking menu content...")
            # Verify menu is open by looking for the close button state
            close_button = page.get_by_label("Close menu")
            expect(close_button).to_be_visible()

            # Verify the dropdown ID is present
            menu_dropdown = page.locator("#mobile-menu-dropdown")
            expect(menu_dropdown).to_be_visible()

            print("Taking screenshot...")
            page.screenshot(path="verification/mobile_menu_open.png")
            print("Verification successful!")

        except Exception as e:
            print(f"Verification failed: {e}")
            page.screenshot(path="verification/error.png")
            raise e
        finally:
            browser.close()

if __name__ == "__main__":
    verify_mobile_menu()

from playwright.sync_api import sync_playwright, expect

def verify_mobile_menu(page):
    page.goto("http://localhost:5173/")

    # Locate the button using aria-label
    toggle = page.get_by_label("Open menu")

    # Assert it is visible
    expect(toggle).to_be_visible()

    # Verify it is a button
    tag_name = toggle.evaluate("el => el.tagName")
    print(f"Current tag name: {tag_name}")
    assert tag_name == "BUTTON", f"Expected BUTTON, got {tag_name}"

    # Verify ARIA attributes
    expect(toggle).to_have_attribute("aria-controls", "mobile-menu")
    expect(toggle).to_have_attribute("aria-expanded", "false")

    # Click the button
    toggle.click()

    # After click, the label changes to "Close menu"
    # We need a new locator for the closed state
    toggle_closed = page.get_by_label("Close menu")

    # Verify state changes
    expect(toggle_closed).to_have_attribute("aria-expanded", "true")

    # Verify menu is visible using ID
    menu = page.locator("#mobile-menu")
    expect(menu).to_be_visible()

    # Take a screenshot
    page.screenshot(path="verification/mobile_menu_after.png")
    print("Verification successful!")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Use mobile viewport
        page = browser.new_page(viewport={"width": 375, "height": 667})
        try:
            verify_mobile_menu(page)
        finally:
            browser.close()

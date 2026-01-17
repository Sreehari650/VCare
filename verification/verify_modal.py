import time
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Increase viewport size to ensure elements are visible
        page = browser.new_page(viewport={"width": 1280, "height": 1024})

        # Wait for server to start
        try:
            page.goto("http://localhost:5173", timeout=10000)
        except:
            print("Server not ready, waiting...")
            time.sleep(5)
            page.goto("http://localhost:5173")

        # Scroll to top to be sure
        page.evaluate("window.scrollTo(0, 0)")
        time.sleep(1)

        # Click the Book Now button with force=True because framer motion might be animating it
        # Also try to locate it more specifically if there are multiple
        # The header button is usually the first one or visible
        button = page.get_by_role("button", name="Book Now").first
        button.click(force=True)

        # Wait for modal to appear
        time.sleep(2)

        # Take screenshot of the modal
        page.screenshot(path="verification/modal.png")

        # Verify accessibility attributes exist via script
        modal = page.locator("div[role='dialog']")
        if modal.is_visible():
            print("Modal is visible")
            print(f"Role: {modal.get_attribute('role')}")
            print(f"Aria-Modal: {modal.get_attribute('aria-modal')}")
            print(f"Aria-LabelledBy: {modal.get_attribute('aria-labelledby')}")
        else:
            print("Modal not found")

        # Verify form exists
        form = page.locator("form")
        if form.is_visible():
            print("Form is visible")
        else:
            print("Form not found")

        browser.close()

if __name__ == "__main__":
    run()


from playwright.sync_api import sync_playwright

def verify_booking_modal():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the preview server
        page.goto("http://localhost:4173/")

        # Wait for content to load
        page.wait_for_selector("text=Book Now")

        # Force click because of Framer Motion animation stability issues
        page.click("text=Book Now", force=True)

        # Wait for the modal to appear
        # We can check for the role="dialog" which we added
        page.wait_for_selector('div[role="dialog"]')

        # Take a screenshot of the modal
        page.screenshot(path="verification/booking_modal.png")

        # Print the HTML of the modal to verify attributes programmatically
        modal_html = page.inner_html('div[role="dialog"]')
        print("Modal HTML fragment:")
        print(modal_html[:500]) # Print first 500 chars to verify attributes

        # Verify specific attributes exist
        is_dialog = page.eval_on_selector('div[role="dialog"]', 'el => el.getAttribute("role") === "dialog"')
        is_modal = page.eval_on_selector('div[role="dialog"]', 'el => el.getAttribute("aria-modal") === "true"')
        labelled_by = page.eval_on_selector('div[role="dialog"]', 'el => el.getAttribute("aria-labelledby") === "booking-modal-title"')

        print(f"Role dialog: {is_dialog}")
        print(f"Aria modal: {is_modal}")
        print(f"Labelled by: {labelled_by}")

        # Verify form labels
        name_input_id = page.eval_on_selector('input[placeholder="Jane Doe"]', 'el => el.id')
        name_label_for = page.eval_on_selector('label:has-text("Name")', 'el => el.getAttribute("htmlFor") || el.getAttribute("for")')

        print(f"Name input ID: {name_input_id}")
        print(f"Name label for: {name_label_for}")

        browser.close()

if __name__ == "__main__":
    verify_booking_modal()

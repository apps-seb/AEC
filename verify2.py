from playwright.sync_api import sync_playwright
import time

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto('http://localhost:3000')

    # Wait for initial load
    time.sleep(2)

    # Scroll down to trigger scroll animations
    page.evaluate("window.scrollTo(0, document.body.scrollHeight/2)")
    time.sleep(1)

    # Scroll slightly back up to the commitment section
    page.evaluate("document.getElementById('compromiso').scrollIntoView()")
    time.sleep(1)

    page.screenshot(path='cards_front_after_scroll.png')

    # Click the first flip button
    flip_buttons = page.query_selector_all('.flip-btn')
    if flip_buttons:
        flip_buttons[0].click()
        time.sleep(1) # wait for animation
        page.screenshot(path='cards_back_after_scroll.png')

    browser.close()

import assert from "node:assert/strict";
import { chromium } from "playwright";

// Run against the local Vite server; catching a client-side render crash
// requires a real browser, since the server can still return HTTP 200.
const browser = await chromium.launch({ headless: true });
try {
  for (const viewport of [
    { width: 1280, height: 800 },
    { width: 390, height: 844 },
  ]) {
    const page = await browser.newPage({ viewport });
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto("http://127.0.0.1:8080/", { waitUntil: "domcontentloaded" });
    await page.locator(".shell").waitFor({ state: "visible" });
    await page.locator(".is-live .page-sheet").waitFor({ state: "visible" });
    assert.equal(await page.getByText("Something went wrong", { exact: true }).count(), 0);

    if (viewport.width < 600) {
      // Mobile settings are initially hidden behind the bottom dock.
      await page.locator(".dock").getByRole("button", { name: "Style" }).click();
    }
    for (const name of ["Style", "Advanced", "Content"]) {
      const tab = page.getByRole("tab", { name, exact: true });
      await tab.click({ timeout: 10000 });
      await page.waitForFunction(
        (label) => [...document.querySelectorAll('[role="tab"]')].some(
          (el) => el.textContent?.trim() === label && el.getAttribute("aria-selected") === "true",
        ),
        name,
        { timeout: 5000 },
      );
    }

    await page.waitForTimeout(200);
    assert.deepEqual(errors, [], `Browser errors at ${viewport.width}px: ${errors.join("; ")}`);
    await page.close();
  }
  console.log("Editor renders and its three inspector tabs work on desktop and mobile.");
} finally {
  await browser.close();
}

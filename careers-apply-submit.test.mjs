import assert from "node:assert/strict";
import { writeFile } from "node:fs/promises";
import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1282, height: 964 } });
let capturedPayload = null;

await writeFile("/tmp/cb-resume.pdf", "resume");
await page.route("**/api/applications", async (route) => {
  capturedPayload = JSON.parse(route.request().postData());
  await route.fulfill({
    status: 200,
    contentType: "application/json",
    body: JSON.stringify({ success: true, ref: "CB-PLAYWRIGHT" }),
  });
});

await page.goto("http://localhost:49279/talents/apply/?role=chief-of-staff", { waitUntil: "networkidle" });
await page.locator('[name="first_name"]').fill("Ada");
await page.locator('[name="last_name"]').fill("Lovelace");
await page.locator('[name="email"]').fill("ada@example.com");
await page.locator('[name="phone_country_code"]').selectOption("+1");
await page.locator('[name="phone_number"]').fill("5551234567");
await page.locator('[name="linkedin"]').fill("https://linkedin.com/in/ada");
await page.locator('[name="resume"]').setInputFiles("/tmp/cb-resume.pdf");
await page.locator('[name="monthly_income_usd"]').fill("12000");
await page.locator('[name="open_time_zone"][value="US"]').check();
await page.locator('[name="open_time_zone"][value="Europe"]').check();
await page.locator('[name="location"]').selectOption("United States");
await page.locator('[name="role_question_1"]').fill("Answer one.");
await page.locator('[name="role_question_2"]').fill("Answer two.");
await page.locator('[name="role_question_3"]').fill("Answer three.");
await page.locator('.application-form button[type="submit"]').click();
await page.getByText("Application received. Reference: CB-PLAYWRIGHT.").waitFor();

assert.equal(capturedPayload.role, "Chief of Staff");
assert.equal(capturedPayload.roleSlug, "chief-of-staff");
assert.equal(capturedPayload.firstName, "Ada");
assert.equal(capturedPayload.resume, "cb-resume.pdf");
assert.equal(capturedPayload.monthlyIncomeUsd, "12000");
assert.deepEqual(capturedPayload.timeZones, ["US", "Europe"]);
assert.equal(capturedPayload.location, "United States");
assert.equal(capturedPayload.questions.length, 3);
assert.equal(capturedPayload.questions[0].answer, "Answer one.");
assert.match(capturedPayload.questions[0].question, /messy cross-functional project/);

await browser.close();
console.log("careers apply submit test passed");

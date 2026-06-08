import assert from "node:assert/strict";
import { buildApplicationPayload } from "./api/lib/application-payload.js";

const payload = buildApplicationPayload("db-id", {
  role: "Chief of Staff",
  roleSlug: "chief-of-staff",
  firstName: "Ada",
  lastName: "Lovelace",
  email: "Ada@Example.com",
  phone: "+1 5551234567",
  linkedIn: "https://linkedin.com/in/ada",
  resume: "ada-resume.pdf",
  additionalAttachment: "ada-case-study.pdf",
  monthlyIncomeUsd: "12000",
  timeZones: ["US", "Europe"],
  location: "New York, NY",
  submittedAt: "2026-06-08T12:00:00.000Z",
  url: "https://careandbloom.com/talents/apply/?role=chief-of-staff",
  applicationRef: "CB-TEST",
  questions: [
    { question: "Prompt one?", answer: "Answer one." },
    { question: "Prompt two?", answer: "Answer two." },
    { question: "Prompt three?", answer: "Answer three." },
  ],
});

assert.equal(payload.parent.database_id, "db-id");
assert.equal(payload.properties.Name.title[0].text.content, "Ada Lovelace");
assert.equal(payload.properties.Email.email, "ada@example.com");
assert.equal(payload.properties.Phone.phone_number, "+1 5551234567");
assert.equal(payload.properties.Role.rich_text[0].text.content, "Chief of Staff");
assert.equal(payload.properties["Question 1"].rich_text[0].text.content, "Prompt one?");
assert.equal(payload.properties["Answer 1"].rich_text[0].text.content, "Answer one.");
assert.equal(payload.properties["Monthly Income"].number, 12000);
assert.deepEqual(payload.properties["Time Zone"].multi_select.map((item) => item.name), ["US", "Europe"]);
assert.equal(payload.properties.Resume.rich_text[0].text.content, "ada-resume.pdf");
assert.equal(payload.applicationRef, "CB-TEST");
assert.ok(payload.children.some((block) => JSON.stringify(block).includes("Application Answers")));

console.log("application payload test passed");

import assert from "node:assert/strict";
import { EventEmitter } from "node:events";
import handler, { _private } from "./api/applications.js";

function samplePayload(overrides = {}) {
  return {
    role: "Chief of Staff",
    roleSlug: "chief-of-staff",
    firstName: "Ada",
    lastName: "Lovelace",
    name: "Ada Lovelace",
    email: "Ada@Example.com",
    phoneCountryCode: "+1",
    phoneNumber: "5551234567",
    linkedIn: "https://linkedin.com/in/ada",
    resume: "ada-resume.pdf",
    additionalAttachment: "ada-case-study.pdf",
    monthlyIncomeUsd: "12000",
    timeZone: "US",
    location: "New York, NY",
    url: "https://careandbloom.com/talents/apply/?role=chief-of-staff",
    submittedAt: "2026-06-08T12:00:00.000Z",
    questions: [
      { question: "Prompt one?", answer: "Answer one." },
      { question: "Prompt two?", answer: "Answer two." },
      { question: "Prompt three?", answer: "Answer three." },
    ],
    ...overrides,
  };
}

function makeReq(body, method = "POST") {
  const req = new EventEmitter();
  req.method = method;
  req.body = body;
  req[Symbol.asyncIterator] = async function* () {};
  return req;
}

function makeRes() {
  return {
    statusCode: 200,
    headers: {},
    body: "",
    setHeader(name, value) {
      this.headers[name] = value;
    },
    end(value = "") {
      this.body += value;
    },
  };
}

async function runHandler(body, env = {}, fetchImpl = async () => ({ ok: true, text: async () => "{}" })) {
  const oldEnv = { ...process.env };
  const oldFetch = global.fetch;
  process.env = { ...oldEnv, ...env };
  global.fetch = fetchImpl;
  const res = makeRes();
  try {
    await handler(makeReq(body), res);
    return { res, json: JSON.parse(res.body) };
  } finally {
    process.env = oldEnv;
    global.fetch = oldFetch;
  }
}

assert.equal(_private.validatePayload(samplePayload({ email: "bad" })).error, "Enter a valid email address.");
assert.equal(_private.validatePayload(samplePayload({ monthlyIncomeUsd: "12k" })).error, "Monthly income must be numbers only.");
assert.equal(_private.validatePayload(samplePayload({ timeZone: "Mars" })).error, "Choose a valid time zone.");
assert.equal(_private.validatePayload(samplePayload({ questions: [{ question: "One", answer: "" }] })).error, "Missing required answer: role question 1");

{
  const { res, json } = await runHandler(samplePayload(), { NOTION_INTAKE_DRY_RUN: "1" });
  assert.equal(res.statusCode, 200);
  assert.equal(json.success, true);
  assert.equal(json.dryRun, true);
  assert.match(json.ref, /^CB-/);
}

{
  const calls = [];
  const { res, json } = await runHandler(
    samplePayload({ applicationRef: "CB-TEST" }),
    { NOTION_KEY: "secret_test", NOTION_CB_TALENTS_DB_ID: "target-db" },
    async (url, options) => {
      calls.push({ url, options, body: options.body ? JSON.parse(options.body) : null });
      return { ok: true, text: async () => JSON.stringify({ id: "notion-page-id" }) };
    }
  );
  assert.equal(res.statusCode, 200);
  assert.equal(json.success, true);
  assert.equal(json.notionPageId, "notion-page-id");
  assert.equal(calls.length, 1);
  assert.equal(calls[0].body.parent.database_id, "target-db");
  assert.equal(calls[0].body.properties["Application Ref"].rich_text[0].text.content, "CB-TEST");
  assert.equal(calls[0].body.properties["Question 1"].rich_text[0].text.content, "Prompt one?");
  assert.equal(calls[0].body.properties["Answer 1"].rich_text[0].text.content, "Answer one.");
}

console.log("applications api test passed");

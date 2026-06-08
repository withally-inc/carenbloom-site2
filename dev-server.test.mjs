import assert from "node:assert/strict";
import { spawn } from "node:child_process";

const port = 49391;
const server = spawn("node", ["scripts/dev-server.mjs"], {
  env: {
    ...process.env,
    PORT: String(port),
    NOTION_INTAKE_DRY_RUN: "1",
  },
  stdio: ["ignore", "pipe", "pipe"],
});

function stopServer() {
  if (!server.killed) server.kill("SIGTERM");
}

async function waitForServer() {
  const deadline = Date.now() + 5000;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(`http://localhost:${port}/talents/apply/?role=chief-of-staff`);
      if (response.ok) return response;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  }
  throw new Error("Dev server did not start.");
}

try {
  const pageResponse = await waitForServer();
  assert.match(await pageResponse.text(), /application-form/);

  const apiResponse = await fetch(`http://localhost:${port}/api/applications`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      role: "Chief of Staff",
      roleSlug: "chief-of-staff",
      firstName: "Ada",
      lastName: "Lovelace",
      name: "Ada Lovelace",
      email: "ada@example.com",
      phoneCountryCode: "+1",
      phoneNumber: "5551234567",
      resume: "ada-resume.pdf",
      monthlyIncomeUsd: "12000",
      timeZone: "US",
      location: "New York, NY",
      questions: [{ question: "Prompt?", answer: "Answer." }],
    }),
  });
  const json = await apiResponse.json();
  assert.equal(apiResponse.status, 200);
  assert.equal(json.success, true);
  assert.equal(json.dryRun, true);
  console.log("dev server test passed");
} finally {
  stopServer();
}

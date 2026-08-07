// scripts/test-zeptomail.mjs
//
// Standalone smoke test for the ZeptoMail integration. Sends a real
// "application received" confirmation email to a recipient of your choice
// through the shared helper in ../lib/email.js, so you can confirm the
// Mail Agent, sender address, and API token are all wired up correctly.
//
// Prerequisite: the sender address (fellowship@learnrithm.com) MUST be
// verified inside the ZeptoMail Mail Agent before running this. Unverified
// senders are rejected by the ZeptoMail API and the call will throw.
//
// Requires a ZEPTOMAIL_TOKEN in the environment (load from .env below).
//
// Run it (Node 20.12+ / 21+ with the built-in .env loader):
//   node --env-file=.env scripts/test-zeptomail.mjs you@example.com
//
//   node scripts/test-zeptomail.mjs you@example.com
// (The script also calls process.loadEnvFile() itself; use --env-file only
// if you prefer Node's loader or are on an older Node without loadEnvFile.)

import { sendApplicationReceivedEmail } from "../lib/email.js";

// Load .env into process.env using Node's built-in loader (Node 20.12+/21+).
// Wrapped in try/catch: no-op if .env is missing or the loader is unavailable.
try {
  process.loadEnvFile();
} catch {
  // Fall back to inline process.env, or run with:
  //   node --env-file=.env scripts/test-zeptomail.mjs you@example.com
}

// Determine the recipient: CLI arg first, then TEST_EMAIL_TO env var,
// otherwise print usage and exit.
const recipient = process.argv[2] || process.env.TEST_EMAIL_TO;

if (!recipient) {
  console.error(
    "Usage: node --env-file=.env scripts/test-zeptomail.mjs <email>\n" +
      "   or: set TEST_EMAIL_TO in .env and run: node scripts/test-zeptomail.mjs"
  );
  process.exit(1);
}

try {
  await sendApplicationReceivedEmail({ to: recipient, fullName: "Test Applicant" });
  console.log("✓ Confirmation email sent to " + recipient + " — check the inbox.");
} catch (err) {
  console.error("✗ Failed: " + err.message);
  process.exit(1);
}

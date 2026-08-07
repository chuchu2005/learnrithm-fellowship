// scripts/test-zeptomail.mjs
//
// Standalone smoke test for the ZeptoMail "application received" confirmation
// (sent from Rita). Sends a REAL email to a recipient of your choice through
// the shared helper in ../lib/email.js, with a realistic test persona so the
// personalization (first name, university, country, continent) renders.
//
// Prerequisite: fellowship@learnrithm.com MUST be a verified sender in your
// ZeptoMail Mail Agent, and ZEPTOMAIL_TOKEN must be set in .env.
//
// Run:
//   node --env-file=.env scripts/test-zeptomail.mjs you@example.com
// (Node 20.12+/21+ also loads .env via process.loadEnvFile().)

import { sendApplicationReceivedEmail } from "../lib/email.js";

try {
  process.loadEnvFile();
} catch {}

const recipient = process.argv[2] || process.env.TEST_EMAIL_TO;
if (!recipient) {
  console.error(
    "Usage: node --env-file=.env scripts/test-zeptomail.mjs <email>\n" +
      "   or: set TEST_EMAIL_TO in .env and run: node scripts/test-zeptomail.mjs"
  );
  process.exit(1);
}

try {
  await sendApplicationReceivedEmail({
    to: recipient,
    fullName: "Ada Okafor",
    university: "University of Lagos",
    country: "Nigeria",
    continent: "Africa",
  });
  console.log("✓ Confirmation email sent to " + recipient + " — check the inbox.");
} catch (err) {
  console.error("✗ Failed: " + err.message);
  process.exit(1);
}

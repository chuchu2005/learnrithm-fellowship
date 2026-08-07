// ZeptoMail helper for the "application received" confirmation email, written
// personally by Rita (Program Lead). Sent the instant an application is
// submitted, so the copy says "received" — not "read". Framework-agnostic (no
// Next.js imports), reads env at call time (like lib/r2.js / lib/prisma.js) so
// the admin dashboard repo can copy it verbatim.
// Required env: ZEPTOMAIL_TOKEN. Optional env: ZEPTOMAIL_FROM_ADDRESS,
// ZEPTOMAIL_FROM_NAME, ZEPTOMAIL_REPLY_TO.

const PROGRAM_START_DATE = "1 September 2026";
const SITE_URL = "https://learnrithm.com";

// One-line fix if the ZeptoMail dashboard's sample request ever shows a
// different auth scheme (e.g. "Zoho-oauthtoken" when migrating to OAuth).
const AUTH_SCHEME = "Zoho-enczapikey";

// Accept the token as either the bare key OR the full "Zoho-enczapikey <key>"
// header value (people often paste the whole thing from the dashboard). Returns
// the bare key, so the Authorization header below isn't double-prefixed.
function normalizeToken(raw) {
  const s = (raw || "").trim();
  const idx = s.lastIndexOf(" ");
  return idx >= 0 ? s.slice(idx + 1) : s;
}

// Send the "we've received your application" confirmation. No-ops (with a
// warning) when there is no token or no recipient, so local dev without creds
// never breaks the apply flow; network/API failures still throw and are
// swallowed by the caller. Reads env inside the function on purpose.
export async function sendApplicationReceivedEmail({
  to,
  fullName,
  university,
  country,
  continent,
}) {
  const token = normalizeToken(process.env.ZEPTOMAIL_TOKEN);
  const fromAddress =
    process.env.ZEPTOMAIL_FROM_ADDRESS || "fellowship@learnrithm.com";
  const fromName = process.env.ZEPTOMAIL_FROM_NAME || "Rita";
  const replyTo = process.env.ZEPTOMAIL_REPLY_TO || "peter@learnrithm.com";

  if (!token || !to) {
    console.warn(
      "[email] Skipping application-received email: missing ZEPTOMAIL_TOKEN or recipient."
    );
    return;
  }

  const firstName = String(fullName ?? "").trim().split(/\s+/)[0] || "there";
  const ctx = {
    firstName,
    university: String(university ?? "your university"),
    country: String(country ?? ""),
    continent: String(continent ?? "your continent"),
  };

  const body = {
    from: { address: fromAddress, name: fromName },
    to: [{ email_address: { address: to, name: fullName || undefined } }],
    reply_to: [{ address: replyTo, name: fromName }],
    subject: `Thank you for applying, ${firstName}`,
    htmlbody: buildHtml(ctx),
    textbody: buildText(ctx),
  };

  const res = await fetch("https://api.zeptomail.com/v1.1/email", {
    method: "POST",
    headers: {
      Authorization: `${AUTH_SCHEME} ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(
      "ZeptoMail responded " + res.status + ": " + (await res.text()).slice(0, 500)
    );
  }
}

// Minimal, clean HTML — white background, system font, no card/button. Just text
// with a small eyebrow, a heading, and a thin footer divider. Inline-styled so
// it renders consistently across Outlook/Gmail/Apple Mail.
function buildHtml({ firstName, university, country, continent }) {
  const f = escapeHtml(firstName);
  const u = escapeHtml(university);
  const c = escapeHtml(country);
  const con = escapeHtml(continent);
  const p = "padding:0 0 20px;font-size:15px;line-height:1.65;color:#1f2937;";
  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background-color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    <tr><td align="center" style="padding:36px 16px;">
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">
        <tr><td style="padding-bottom:6px;font-size:12px;font-weight:600;letter-spacing:0.08em;color:#6b7280;">LEARNRITHM AI FELLOWSHIP</td></tr>
        <tr><td style="padding-bottom:24px;font-size:20px;font-weight:600;color:#111827;">We&rsquo;ve received your application</td></tr>
        <tr><td style="${p}">Hi ${f},</td></tr>
        <tr><td style="${p}">I&rsquo;m Rita, and I lead the Learnrithm AI Fellowship. Just wanted to reach out and confirm we&rsquo;ve received your application &mdash; from <strong>${u}</strong>, all the way in <strong>${c}</strong>. Before anything else, thank you for taking the time to apply. It takes real effort, and I don&rsquo;t take that lightly.</td></tr>
        <tr><td style="${p}">Every application here is read by a person. Nothing gets filtered out by a machine, because your story deserves someone actually reading it &mdash; yours will be.</td></tr>
        <tr><td style="${p}">Straight with you on the odds: we accept around 5 people per continent, so for <strong>${con}</strong>, it&rsquo;s a small, competitive group. Whatever happens, I&rsquo;ll write back to you personally.</td></tr>
        <tr><td style="${p}">We begin on <strong>${PROGRAM_START_DATE}</strong>. Until then, if you have questions or just want to introduce yourself, reply to this email &mdash; it comes right to me.</td></tr>
        <tr><td style="padding:8px 0 4px;font-size:15px;line-height:1.65;color:#6b7280;">With gratitude,</td></tr>
        <tr><td style="padding-bottom:24px;font-size:15px;line-height:1.65;color:#1f2937;"><strong>Rita</strong><br>Program Lead, Learnrithm AI Fellowship<br><a href="mailto:fellowship@learnrithm.com" style="color:#1f2937;text-decoration:underline;">fellowship@learnrithm.com</a></td></tr>
        <tr><td style="padding-top:16px;border-top:1px solid #f0f0f0;font-size:12px;color:#9ca3af;"><a href="${SITE_URL}" style="color:#9ca3af;text-decoration:none;">learnrithm.com</a></td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

function buildText({ firstName, university, country, continent }) {
  return [
    `Hi ${firstName},`,
    "",
    `I'm Rita, and I lead the Learnrithm AI Fellowship. Just wanted to reach out and confirm we've received your application — from ${university}, all the way in ${country}. Before anything else, thank you for taking the time to apply. It takes real effort, and I don't take that lightly.`,
    "",
    "Every application here is read by a person. Nothing gets filtered out by a machine, because your story deserves someone actually reading it — yours will be.",
    "",
    `Straight with you on the odds: we accept around 5 people per continent, so for ${continent}, it's a small, competitive group. Whatever happens, I'll write back to you personally.`,
    "",
    `We begin on ${PROGRAM_START_DATE}. Until then, if you have questions or just want to introduce yourself, reply to this email — it comes right to me.`,
    "",
    "With gratitude,",
    "Rita",
    "Program Lead, Learnrithm AI Fellowship",
    "fellowship@learnrithm.com",
    SITE_URL,
    "",
  ].join("\r\n");
}

// Escape the few characters that could appear in a name/school/country and
// break the HTML.
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => {
    switch (c) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
      default:
        return c;
    }
  });
}

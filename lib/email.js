// ZeptoMail helper for the "application received" confirmation email.
// Framework-agnostic (no Next.js imports) and reads env at call time
// (like lib/r2.js and lib/prisma.js) so the admin dashboard repo can copy it
// verbatim. Required env: ZEPTOMAIL_TOKEN. Optional env: ZEPTOMAIL_FROM_ADDRESS,
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

// Send the "we've received your application" confirmation email. No-ops (with a
// warning) when there is no token or no recipient, so local dev without creds
// never breaks the apply flow; network/API failures still throw and are
// swallowed by the caller. Reads env inside the function on purpose.
export async function sendApplicationReceivedEmail({ to, fullName }) {
  const token = normalizeToken(process.env.ZEPTOMAIL_TOKEN);
  const fromAddress =
    process.env.ZEPTOMAIL_FROM_ADDRESS || "fellowship@learnrithm.com";
  const fromName = process.env.ZEPTOMAIL_FROM_NAME || "Learnrithm Fellowship";
  const replyTo = process.env.ZEPTOMAIL_REPLY_TO || "peter@learnrithm.com";

  if (!token || !to) {
    console.warn(
      "[email] Skipping application-received email: missing ZEPTOMAIL_TOKEN or recipient."
    );
    return;
  }

  const firstName = (String(fullName ?? "").trim().split(/\s+/)[0] || "there");
  const html = buildHtml({ firstName, fromName });
  const text = buildText({ firstName });

  const body = {
    from: { address: fromAddress, name: fromName },
    to: [{ email_address: { address: to, name: fullName || undefined } }],
    reply_to: [{ address: replyTo, name: fromName }],
    subject: "We've received your Learnrithm Fellowship application",
    htmlbody: html,
    textbody: text,
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

// Table-based, inline-styled HTML — no <style> tags, no external images or web
// fonts required to load. Safe across Outlook/Gmail/Apple Mail.
function buildHtml({ firstName, fromName }) {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background-color:#f4f6fb;font-family:'Urbanist','Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6fb;">
    <tr><td align="center" style="padding:0;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
        <tr>
          <td style="background-color:#1e63ff;padding:28px 36px;border-radius:12px 12px 0 0;">
            <div style="font-size:22px;font-weight:700;line-height:1;color:#ffffff;letter-spacing:0.2px;">Learnrithm</div>
            <div style="font-size:12px;font-weight:600;color:#ffffff;opacity:0.9;margin-top:4px;letter-spacing:0.8px;text-transform:uppercase;">AI Fellowship</div>
          </td>
        </tr>
        <tr>
          <td style="background-color:#ffffff;padding:36px;border-radius:0 0 12px 12px;">
            <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#1a1f36;">Hi ${escapeHtml(firstName)},</p>
            <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#1a1f36;">Thanks for applying to the Learnrithm AI Fellowship &mdash; we&rsquo;ve received your application, and we read every single one by hand.</p>
            <p style="margin:0 0 12px;font-size:16px;line-height:1.6;color:#1a1f36;font-weight:600;">What happens next:</p>
            <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 24px;">
              <tr><td style="font-size:16px;line-height:1.6;color:#1a1f36;padding:4px 0 4px 0;">&bull;&nbsp;&nbsp;We&rsquo;ll review your application and email you an update on next steps.</td></tr>
              <tr><td style="font-size:16px;line-height:1.6;color:#1a1f36;padding:4px 0 4px 0;">&bull;&nbsp;&nbsp;The fellowship begins on ${escapeHtml(PROGRAM_START_DATE)}.</td></tr>
            </table>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 28px;">
              <tr>
                <td style="border-radius:8px;background-color:#1e63ff;">
                  <a href="${SITE_URL}" target="_blank" rel="noopener" style="display:inline-block;padding:14px 28px;font-size:15px;font-weight:600;color:#ffffff;text-decoration:none;border-radius:8px;font-family:'Urbanist','Helvetica Neue',Helvetica,Arial,sans-serif;">Visit Learnrithm</a>
                </td>
              </tr>
            </table>
            <p style="margin:0 0 28px;font-size:15px;line-height:1.6;color:#5b6478;">Questions? Just reply to this email.</p>
            <p style="margin:0;font-size:15px;line-height:1.6;color:#1a1f36;">&mdash; The Learnrithm Fellowship team<br><a href="mailto:fellowship@learnrithm.com" style="color:#1e63ff;text-decoration:none;">fellowship@learnrithm.com</a></p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

function buildText({ firstName }) {
  return [
    `Hi ${firstName},`,
    "",
    "Thanks for applying to the Learnrithm AI Fellowship — we've received your application, and we read every single one by hand.",
    "",
    "What happens next:",
    "  - We'll review your application and email you an update on next steps.",
    `  - The fellowship begins on ${PROGRAM_START_DATE}.`,
    "",
    "Questions? Just reply to this email.",
    "",
    "— The Learnrithm Fellowship team",
    "fellowship@learnrithm.com",
    "",
  ].join("\r\n");
}

// Escape the few characters that could appear in a first name and break the HTML.
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

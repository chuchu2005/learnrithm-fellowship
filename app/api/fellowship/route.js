import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { uploadPhoto, PhotoValidationError } from "@/lib/r2";
import { sendApplicationReceivedEmail } from "@/lib/email";

// Fields the form marks required. The form uses <form ...> (noValidate removed),
// so the browser validates these first; the server remains authoritative.
const REQUIRED = [
  "fullName",
  "email",
  "phone",
  "linkedin",
  "continent",
  "country",
  "situation",
  "university",
  "major",
  "why",
  "fulltime",
  "timezone",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Normalize an incoming value: non-empty trimmed string -> string; else null.
// Keeps optional fields consistent (null, never "").
function str(value) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length ? trimmed : null;
}

export async function POST(request) {
  // Cap request size on this public, unauthenticated write endpoint.
  // 6 MB headroom over the 5 MB photo limit; multipart parts are not base64.
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 6_000_000) {
    return NextResponse.json({ error: "Payload too large." }, { status: 413 });
  }

  let fd;
  try {
    fd = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Checkbox groups come as arrays from the client (FormData.getAll).
  const languages = fd
    .getAll("languages")
    .map((v) => String(v).trim())
    .filter(Boolean);
  const aiInterests = fd
    .getAll("aiInterests")
    .map((v) => String(v).trim())
    .filter(Boolean);

  // Validate ALL required text/email fields BEFORE touching R2, so a doomed
  // request never produces an orphaned photo upload.
  const missing = REQUIRED.filter((name) => !str(fd.get(name)));
  if (missing.length) {
    return NextResponse.json(
      { error: "Missing required fields: " + missing.join(", ") + "." },
      { status: 400 }
    );
  }

  const email = str(fd.get("email"));
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  const photo = fd.get("photo");

  try {
    // uploadPhoto validates the file (bad/missing/oversized/wrong-type/corrupt)
    // and throws PhotoValidationError BEFORE uploading — safe to call here.
    // The applicant details are attached to the R2 object as custom metadata
    // and the object is named after the applicant (see lib/r2.js).
    const { key } = await uploadPhoto(photo, {
      fullName: str(fd.get("fullName")),
      email,
      phone: str(fd.get("phone")),
      country: str(fd.get("country")),
      university: str(fd.get("university")),
    });

    const fellowship = await prisma.fellowship.create({
      data: {
        fullName: str(fd.get("fullName")),
        email,
        phone: str(fd.get("phone")),
        linkedin: str(fd.get("linkedin")),
        continent: str(fd.get("continent")),
        country: str(fd.get("country")),
        situation: str(fd.get("situation")),
        gradMonth: str(fd.get("gradMonth")),
        gradYear: str(fd.get("gradYear")),
        university: str(fd.get("university")),
        major: str(fd.get("major")),
        languages,
        projects: str(fd.get("projects")),
        apis: str(fd.get("apis")),
        aiml: str(fd.get("aiml")),
        why: str(fd.get("why")),
        aiInterests,
        career: str(fd.get("career")),
        learn: str(fd.get("learn")),
        fulltime: str(fd.get("fulltime")),
        timezone: str(fd.get("timezone")),
        conflicts: str(fd.get("conflicts")),
        proud: str(fd.get("proud")),
        stuck: str(fd.get("stuck")),
        collab: str(fd.get("collab")),
        anythingElse: str(fd.get("anythingElse")),
        photoKey: key,
      },
    });
    // Best-effort confirmation email. The application is already saved, so a
    // ZeptoMail failure must NEVER fail this request — swallow + log only.
    await sendApplicationReceivedEmail({
      to: email,
      fullName: str(fd.get("fullName")),
      university: str(fd.get("university")),
      country: str(fd.get("country")),
      continent: str(fd.get("continent")),
    }).catch((err) => console.error("[fellowship] confirmation email failed:", err));

    return NextResponse.json({ ok: true, id: fellowship.id }, { status: 201 });
  } catch (err) {
    if (err instanceof PhotoValidationError) {
      return NextResponse.json({ error: err.message }, { status: 400 });
    }
    console.error("[fellowship] create failed:", err);
    return NextResponse.json(
      {
        error:
          "Something went wrong while saving your application. Please try again.",
      },
      { status: 500 }
    );
  }
}

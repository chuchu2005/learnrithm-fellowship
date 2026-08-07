import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

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
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Checkbox groups come as arrays from the client (FormData.getAll).
  const languages = Array.isArray(body.languages)
    ? body.languages.map((v) => String(v).trim()).filter(Boolean)
    : [];
  const aiInterests = Array.isArray(body.aiInterests)
    ? body.aiInterests.map((v) => String(v).trim()).filter(Boolean)
    : [];

  const missing = REQUIRED.filter((key) => !str(body[key]));
  if (missing.length) {
    return NextResponse.json(
      { error: "Missing required fields: " + missing.join(", ") + "." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(String(body.email).trim())) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  try {
    const fellowship = await prisma.fellowship.create({
      data: {
        fullName: str(body.fullName),
        email: str(body.email),
        phone: str(body.phone),
        linkedin: str(body.linkedin),
        continent: str(body.continent),
        country: str(body.country),
        situation: str(body.situation),
        gradMonth: str(body.gradMonth),
        gradYear: str(body.gradYear),
        university: str(body.university),
        major: str(body.major),
        languages,
        projects: str(body.projects),
        apis: str(body.apis),
        aiml: str(body.aiml),
        why: str(body.why),
        aiInterests,
        career: str(body.career),
        learn: str(body.learn),
        fulltime: str(body.fulltime),
        timezone: str(body.timezone),
        conflicts: str(body.conflicts),
        proud: str(body.proud),
        stuck: str(body.stuck),
        collab: str(body.collab),
        anythingElse: str(body.anythingElse),
      },
    });
    return NextResponse.json({ ok: true, id: fellowship.id }, { status: 201 });
  } catch (error) {
    console.error("[fellowship] create failed:", error);
    return NextResponse.json(
      {
        error:
          "Something went wrong while saving your application. Please try again.",
      },
      { status: 500 }
    );
  }
}

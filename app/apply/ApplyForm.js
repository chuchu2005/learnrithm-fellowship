"use client";

import { useState, useRef } from "react";
import Link from "next/link";

const COUNTRY_GROUPS = [
  {
    continent: "Africa",
    countries: ["Algeria","Angola","Benin","Botswana","Burkina Faso","Burundi","Cabo Verde","Cameroon","Central African Republic","Chad","Comoros","Congo (Brazzaville)","Congo (Kinshasa)","Côte d'Ivoire","Djibouti","Egypt","Equatorial Guinea","Eritrea","Eswatini","Ethiopia","Gabon","Gambia","Ghana","Guinea","Guinea-Bissau","Kenya","Lesotho","Liberia","Libya","Madagascar","Malawi","Mali","Mauritania","Mauritius","Morocco","Mozambique","Namibia","Niger","Nigeria","Rwanda","São Tomé and Príncipe","Senegal","Seychelles","Sierra Leone","Somalia","South Africa","South Sudan","Sudan","Tanzania","Togo","Tunisia","Uganda","Zambia","Zimbabwe"],
  },
  {
    continent: "Asia",
    countries: ["Afghanistan","Armenia","Azerbaijan","Bahrain","Bangladesh","Bhutan","Brunei","Cambodia","China","Georgia","India","Indonesia","Iran","Iraq","Israel","Japan","Jordan","Kazakhstan","Kuwait","Kyrgyzstan","Laos","Lebanon","Malaysia","Maldives","Mongolia","Myanmar","Nepal","North Korea","Oman","Pakistan","Palestine","Philippines","Qatar","Saudi Arabia","Singapore","South Korea","Sri Lanka","Syria","Taiwan","Tajikistan","Thailand","Timor-Leste","Turkey","Turkmenistan","United Arab Emirates","Uzbekistan","Vietnam","Yemen"],
  },
  {
    continent: "Europe",
    countries: ["Albania","Andorra","Austria","Belarus","Belgium","Bosnia and Herzegovina","Bulgaria","Croatia","Cyprus","Czechia","Denmark","Estonia","Finland","France","Germany","Greece","Hungary","Iceland","Ireland","Italy","Kosovo","Latvia","Liechtenstein","Lithuania","Luxembourg","Malta","Moldova","Monaco","Montenegro","Netherlands","North Macedonia","Norway","Poland","Portugal","Romania","Russia","San Marino","Serbia","Slovakia","Slovenia","Spain","Sweden","Switzerland","Ukraine","United Kingdom","Vatican City"],
  },
  {
    continent: "North America",
    countries: ["Antigua and Barbuda","Bahamas","Barbados","Belize","Canada","Costa Rica","Cuba","Dominica","Dominican Republic","El Salvador","Grenada","Guatemala","Haiti","Honduras","Jamaica","Mexico","Nicaragua","Panama","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Trinidad and Tobago","United States"],
  },
  {
    continent: "South America",
    countries: ["Argentina","Bolivia","Brazil","Chile","Colombia","Ecuador","Guyana","Paraguay","Peru","Suriname","Uruguay","Venezuela"],
  },
  {
    continent: "Oceania",
    countries: ["Australia","Fiji","Kiribati","Marshall Islands","Micronesia","Nauru","New Zealand","Palau","Papua New Guinea","Samoa","Solomon Islands","Tonga","Tuvalu","Vanuatu"],
  },
  {
    continent: "Other",
    countries: ["Other / Not listed"],
  },
];

const TIMEZONES = [
  "UTC-12:00 (Baker Island)",
  "UTC-11:00 (American Samoa)",
  "UTC-10:00 (Hawaii)",
  "UTC-09:30 (Marquesas Islands)",
  "UTC-09:00 (Alaska)",
  "UTC-08:00 (Pacific Time — US/Canada)",
  "UTC-07:00 (Mountain Time — US/Canada)",
  "UTC-06:00 (Central Time — US/Canada/Mexico)",
  "UTC-05:00 (Eastern Time — US/Canada)",
  "UTC-04:00 (Atlantic Time, Caracas)",
  "UTC-03:30 (Newfoundland)",
  "UTC-03:00 (Buenos Aires, São Paulo)",
  "UTC-02:00 (South Georgia)",
  "UTC-01:00 (Azores, Cape Verde)",
  "UTC+00:00 (UK, Portugal, West Africa)",
  "UTC+01:00 (Central Europe, West Africa)",
  "UTC+02:00 (Eastern Europe, Egypt, South Africa)",
  "UTC+03:00 (East Africa, Moscow, Saudi Arabia)",
  "UTC+03:30 (Iran)",
  "UTC+04:00 (UAE, Azerbaijan)",
  "UTC+04:30 (Afghanistan)",
  "UTC+05:00 (Pakistan, Uzbekistan)",
  "UTC+05:30 (India, Sri Lanka)",
  "UTC+05:45 (Nepal)",
  "UTC+06:00 (Bangladesh, Bhutan)",
  "UTC+06:30 (Myanmar)",
  "UTC+07:00 (Thailand, Vietnam, Indonesia)",
  "UTC+08:00 (China, Singapore, Philippines)",
  "UTC+09:00 (Japan, South Korea)",
  "UTC+09:30 (Adelaide, Darwin)",
  "UTC+10:00 (Sydney, Melbourne, Brisbane)",
  "UTC+11:00 (Solomon Islands)",
  "UTC+12:00 (New Zealand, Fiji)",
  "UTC+13:00 (Samoa, Tonga)",
  "UTC+14:00 (Kiribati)",
];

const SITUATIONS = ["Recent graduate", "Still in school", "Career changer", "Other"];

const LANGUAGES = [
  "Python", "JavaScript", "TypeScript", "React", "Node.js",
  "SQL", "Java", "C / C++", "Go", "HTML / CSS", "Other",
];

const AI_INTERESTS = [
  "Chatbots", "RAG systems", "AI tutoring", "Autonomous agents",
  "AI tools & automation", "Computer vision", "Voice / speech AI", "Other",
];

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const YEARS = Array.from({ length: 25 }, (_, i) => 2015 + i);

function Asterisk() {
  return <span className="text-danger"> *</span>;
}

function Field({ label, htmlFor, required, hint, children }) {
  return (
    <div className="mb-4">
      <label htmlFor={htmlFor} className="form-label fw-semibold mb-2">
        {label}
        {required && <Asterisk />}
      </label>
      {children}
      {hint && <div className="form-text">{hint}</div>}
    </div>
  );
}

function Section({ n, title, hint, children }) {
  return (
    <section
      className="apply-card bg-white rounded-5 shadow-sm p-4 p-md-5 mb-4"
      style={{ animationDelay: `${(n - 1) * 70}ms` }}
    >
      <div className="d-flex align-items-center gap-3 mb-4 pb-3 border-bottom">
        <span className="apply-num">{String(n).padStart(2, "0")}</span>
        <div>
          <h2 className="h4 mb-0">{title}</h2>
          {hint && <p className="text-muted mb-0 mt-1">{hint}</p>}
        </div>
      </div>
      {children}
    </section>
  );
}

const inputClass =
  "form-control form-control-lg bg-light border-0 rounded-4";
const selectClass =
  "form-select form-select-lg bg-light border-0 rounded-4";

export default function ApplyForm() {
  // Submit state machine: idle -> submitting -> (submitted | error)
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [continent, setContinent] = useState("");
  const [country, setCountry] = useState("");
  const [photoPreview, setPhotoPreview] = useState("");
  const [photoError, setPhotoError] = useState("");
  // Track the object URL so we can revoke it before minting a new one.
  const photoObjectUrl = useRef("");
  const group = COUNTRY_GROUPS.find((g) => g.continent === continent);

  const ALLOWED_PHOTO_TYPES = ["image/jpeg", "image/png", "image/webp"];

  // Live preview + client-side type check for the profile photo.
  function handlePhotoChange(e) {
    const file = e.target.files?.[0];
    if (photoObjectUrl.current) {
      URL.revokeObjectURL(photoObjectUrl.current);
      photoObjectUrl.current = "";
    }
    if (!file) {
      setPhotoPreview("");
      setPhotoError("");
      return;
    }
    if (!ALLOWED_PHOTO_TYPES.includes(file.type)) {
      setPhotoPreview("");
      setPhotoError("Photo must be a JPG, PNG, or WebP image.");
      return;
    }
    setPhotoError("");
    const url = URL.createObjectURL(file);
    photoObjectUrl.current = url;
    setPhotoPreview(url);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setErrorMsg("");

    // Build the body straight from the form — multipart FormData carries the
    // photo File plus every named field. Do NOT set Content-Type; the browser
    // sets the multipart boundary automatically.
    const fd = new FormData(e.currentTarget);

    // The open-ended textarea is named `else` in the HTML but the server
    // expects `anythingElse` — rename it. Checkbox arrays (languages,
    // aiInterests) and the photo (`photo`) are captured automatically.
    const openEnded = fd.get("else");
    fd.delete("else");
    fd.append("anythingElse", openEnded ?? "");

    // Client-side photo guards (server remains authoritative). A missing
    // file is caught by the input's native `required`.
    const photo = fd.get("photo");
    if (photo instanceof File) {
      if (photo.size > 5 * 1024 * 1024) {
        setErrorMsg("Photo must be 5 MB or smaller.");
        setStatus("error");
        return;
      }
      if (!ALLOWED_PHOTO_TYPES.includes(photo.type)) {
        setErrorMsg("Photo must be a JPG, PNG, or WebP image.");
        setStatus("error");
        return;
      }
    }

    try {
      const res = await fetch("/api/fellowship", {
        method: "POST",
        body: fd,
      });

      if (res.status === 201) {
        setStatus("submitted");
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        return;
      }

      const data = await res.json().catch(() => ({}));
      setErrorMsg(data.error || "Something went wrong. Please try again.");
      setStatus("error");
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "submitted") {
    return (
      <>
        <section className="apply-hero bg-light position-relative overflow-hidden">
          <div className="grid-pattern"></div>
          <div className="container position-relative z-1">
            <div className="row justify-content-center">
              <div className="col-lg-7 text-center">
                <div className="apply-success-mark mx-auto mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="m5 13 4 4L19 7" />
                  </svg>
                </div>
                <h1 className="mb-3">Application received</h1>
                <p className="fs-lg text-dark mb-5">
                  Thank you for applying to the Learnrithm AI Fellowship. We read every
                  application by hand and will email you about next steps soon.
                </p>
                <Link href="/" className="btn btn-primary btn-lg has-icon">
                  Back to Home
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M15 7a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2z"></path>
                      <path d="M7.293.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 1 1-1.414-1.414L13.586 8 7.293 1.707a1 1 0 0 1 0-1.414"></path>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <style jsx>{`
          .apply-hero { padding-top: clamp(8rem, 14vw, 12rem); padding-bottom: clamp(5rem, 10vw, 8rem); }
          .apply-success-mark { width: 96px; height: 96px; border-radius: 50%; background: var(--ss-success); color: #fff; display: flex; align-items: center; justify-content: center; }
        `}</style>
      </>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="apply-hero bg-light position-relative overflow-hidden">
        <div className="grid-pattern"></div>
        <div className="container position-relative z-1">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className="bg-white border rounded-2 shadow-sm d-inline-flex align-items-center gap-2 px-4 py-2 lh-sm fw-semibold text-dark">
                <span className="text-primary" style={{ fontSize: "0.7rem" }}>●</span>
                Fellowship Application
              </div>
              <div className="mb-5"></div>
              <h1 className="mb-4">Apply to the Learnrithm AI Fellowship</h1>
              <p className="fs-lg fw-medium text-dark mb-5">
                Takes about 10 minutes. No coding experience required to apply — we just
                want to get to know you.
              </p>
              <div className="hstack flex-wrap gap-2 justify-content-center">
                {["12 weeks", "Free", "Live on Zoom", "Starts Sept 1"].map((t) => (
                  <span key={t} className="bg-white border rounded-2 shadow-sm px-3 py-2 fw-semibold text-dark">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-10 py-md-15 py-lg-20 position-relative">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-xl-8">
              <form onSubmit={handleSubmit}>
                {status === "error" && (
                  <div
                    className="alert alert-danger d-flex align-items-center gap-2 mb-4"
                    role="alert"
                  >
                    <span aria-hidden="true">⚠️</span>
                    <span>{errorMsg}</span>
                  </div>
                )}
                {/* 01 — Basic Info */}
                <Section n={1} title="Basic Info" hint="Tell us who you are and how to reach you.">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <Field label="Full name" htmlFor="fullName" required>
                        <input id="fullName" name="fullName" type="text" className={inputClass} placeholder="Ada Lovelace" required />
                      </Field>
                    </div>
                    <div className="col-md-6">
                      <Field label="Email" htmlFor="email" required>
                        <input id="email" name="email" type="email" className={inputClass} placeholder="you@email.com" required />
                      </Field>
                    </div>
                    <div className="col-md-6">
                      <Field label="Phone number" htmlFor="phone" required>
                        <input id="phone" name="phone" type="tel" className={inputClass} placeholder="+1 555 000 0000" required />
                      </Field>
                    </div>
                    <div className="col-md-6">
                      <Field label="LinkedIn profile" htmlFor="linkedin" required>
                        <input id="linkedin" name="linkedin" type="url" className={inputClass} placeholder="linkedin.com/in/you" required />
                      </Field>
                    </div>
                    <div className="col-md-6">
                      <Field label="Continent" htmlFor="continent" required hint="Pick your continent first.">
                        <select
                          id="continent"
                          name="continent"
                          className={selectClass}
                          required
                          value={continent}
                          onChange={(e) => { setContinent(e.target.value); setCountry(""); }}
                        >
                          <option value="" disabled>Select your continent</option>
                          {COUNTRY_GROUPS.map((g) => (
                            <option key={g.continent} value={g.continent}>{g.continent}</option>
                          ))}
                        </select>
                      </Field>
                    </div>
                    <div className="col-md-6">
                      <Field label="Country" htmlFor="country" required>
                        <select
                          id="country"
                          name="country"
                          className={selectClass}
                          required
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          disabled={!continent}
                        >
                          <option value="" disabled>{continent ? "Select your country" : "Select a continent first"}</option>
                          {group?.countries.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </Field>
                    </div>
                  </div>

                  <Field label="Profile photo" htmlFor="photo" required hint="JPG, PNG, or WebP — up to 5 MB.">
                    <input
                      id="photo"
                      name="photo"
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      className={inputClass}
                      required
                      onChange={handlePhotoChange}
                    />
                    {photoError && (
                      <div className="form-text text-danger">{photoError}</div>
                    )}
                    {photoPreview && (
                      <img
                        src={photoPreview}
                        alt="Profile photo preview"
                        className="mt-3 d-block"
                        style={{ maxWidth: 160, borderRadius: 12 }}
                      />
                    )}
                  </Field>
                </Section>

                {/* 02 — Background */}
                <Section n={2} title="Background" hint="A bit about where you are in your journey.">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <Field label="What is your current situation?" htmlFor="situation" required>
                        <select id="situation" name="situation" className={selectClass} required defaultValue="">
                          <option value="" disabled>Select one</option>
                          {SITUATIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </Field>
                    </div>
                    <div className="col-md-6">
                      <Field label="Graduation date / expected graduation" htmlFor="grad-month">
                        <div className="row g-2">
                          <div className="col-7">
                            <select id="grad-month" name="gradMonth" className={selectClass} defaultValue="">
                              <option value="" disabled>Month</option>
                              {MONTHS.map((m) => <option key={m} value={m}>{m}</option>)}
                            </select>
                          </div>
                          <div className="col-5">
                            <select id="grad-year" name="gradYear" className={selectClass} defaultValue="">
                              <option value="" disabled>Year</option>
                              {YEARS.map((y) => <option key={y} value={y}>{y}</option>)}
                            </select>
                          </div>
                        </div>
                      </Field>
                    </div>
                    <div className="col-md-6">
                      <Field label="University / Institution name" htmlFor="university" required>
                        <input id="university" name="university" type="text" className={inputClass} placeholder="University of ..." required />
                      </Field>
                    </div>
                    <div className="col-md-6">
                      <Field label="Major / field of study" htmlFor="major" required>
                        <input id="major" name="major" type="text" className={inputClass} placeholder="Computer Science" required />
                      </Field>
                    </div>
                  </div>
                </Section>

                {/* 03 — Technical Skills */}
                <Section n={3} title="Technical Skills" hint="Do not worry if you are a beginner — be honest.">
                  <Field label="Which programming languages are you comfortable with?" htmlFor="lang-other" hint="Tick all that apply.">
                    <div className="row g-2">
                      {LANGUAGES.map((l) => (
                        <div className="col-md-6 col-lg-4" key={l}>
                          <div className="form-check py-2">
                            <input className="form-check-input" type="checkbox" name="languages" value={l} id={`lang-${l}`} />
                            <label className="form-check-label" htmlFor={`lang-${l}`}>{l}</label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Field>
                  <Field label="Have you built any projects?" htmlFor="projects" hint="If yes, share a GitHub link or a short description.">
                    <textarea id="projects" name="projects" rows={3} className={inputClass} placeholder="A short note on what you built and a link if you have one."></textarea>
                  </Field>
                  <Field label="What is your experience with APIs and databases?" htmlFor="apis">
                    <textarea id="apis" name="apis" rows={3} className={inputClass} placeholder="Have you called an API or stored data in a database before?"></textarea>
                  </Field>
                  <Field label="Have you worked with AI / ML before?" htmlFor="aiml" hint="Totally fine if not.">
                    <textarea id="aiml" name="aiml" rows={3} className={inputClass} placeholder="If yes, tell us a little about it."></textarea>
                  </Field>
                </Section>

                {/* 04 — Motivation & Goals */}
                <Section n={4} title="Motivation & Goals" hint="Help us understand why this is right for you.">
                  <Field label="Why do you want to join this fellowship?" htmlFor="why" required>
                    <textarea id="why" name="why" rows={4} className={inputClass} placeholder="What made you click apply?" required></textarea>
                  </Field>
                  <Field label="What type of AI application are you most interested in building?" htmlFor="ai-other" hint="Tick all that apply.">
                    <div className="row g-2">
                      {AI_INTERESTS.map((a) => (
                        <div className="col-md-6 col-lg-4" key={a}>
                          <div className="form-check py-2">
                            <input className="form-check-input" type="checkbox" name="aiInterests" value={a} id={`ai-${a}`} />
                            <label className="form-check-label" htmlFor={`ai-${a}`}>{a}</label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Field>
                  <Field label="Where do you see your career in 2 years?" htmlFor="career">
                    <textarea id="career" name="career" rows={3} className={inputClass} placeholder="Where do you want to be?"></textarea>
                  </Field>
                  <Field label="What is one thing you want to learn during these 12 weeks?" htmlFor="learn">
                    <textarea id="learn" name="learn" rows={2} className={inputClass} placeholder="The one skill or idea you most want to walk away with."></textarea>
                  </Field>
                </Section>

                {/* 05 — Commitment */}
                <Section n={5} title="Commitment" hint="About 5 hours per week, with 2 live Zoom sessions each week.">
                  <Field label="Can you commit to about 5 hours per week, including the 2 live Zoom sessions?" htmlFor="ft-yes" required>
                    <div className="d-flex gap-4 mt-1">
                      {["Yes", "No"].map((v) => (
                        <div className="form-check" key={v}>
                          <input className="form-check-input" type="radio" name="fulltime" value={v.toLowerCase()} id={`ft-${v.toLowerCase()}`} required />
                          <label className="form-check-label" htmlFor={`ft-${v.toLowerCase()}`}>{v}</label>
                        </div>
                      ))}
                    </div>
                  </Field>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <Field label="What timezone are you in?" htmlFor="timezone" required>
                        <select id="timezone" name="timezone" className={selectClass} required defaultValue="">
                          <option value="" disabled>Select your timezone</option>
                          {TIMEZONES.map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </Field>
                    </div>
                    <div className="col-md-6">
                      <Field label="Do you have any conflicts during the program period?" htmlFor="conflicts">
                        <input id="conflicts" name="conflicts" type="text" className={inputClass} placeholder="If none, leave blank" />
                      </Field>
                    </div>
                  </div>
                </Section>

                {/* 06 — Vetting */}
                <Section n={6} title="Vetting" hint="There are no wrong answers — we just want to hear your thinking.">
                  <Field label="Tell us about a project you built that you are proud of. What did you learn?" htmlFor="proud">
                    <textarea id="proud" name="proud" rows={4} className={inputClass} placeholder="It does not have to be coding-related."></textarea>
                  </Field>
                  <Field label="How do you handle getting stuck on a problem?" htmlFor="stuck">
                    <textarea id="stuck" name="stuck" rows={3} className={inputClass} placeholder="Walk us through your process."></textarea>
                  </Field>
                  <Field label="Have you collaborated with others on code before? How did it go?" htmlFor="collab">
                    <textarea id="collab" name="collab" rows={3} className={inputClass} placeholder="Team projects, hackathons, work — anything."></textarea>
                  </Field>
                </Section>

                {/* 07 — Open-Ended */}
                <Section n={7} title="Open-Ended">
                  <Field label="Anything else you want us to know?" htmlFor="else" hint="Optional">
                    <textarea id="else" name="else" rows={4} className={inputClass} placeholder="The floor is yours."></textarea>
                  </Field>
                </Section>

                {/* Submit */}
                <div className="bg-white rounded-5 shadow-sm p-4 p-md-5 text-center">
                  {/* v1 double-submit guard: the `submitting` state + disabled
                      button below prevents re-submission (no idempotency key yet). */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg has-icon px-4 px-md-5"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? "Submitting…" : "Submit Application"}
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M15 7a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2z"></path>
                        <path d="M7.293.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 1 1-1.414-1.414L13.586 8 7.293 1.707a1 1 0 0 1 0-1.414"></path>
                      </svg>
                    </div>
                  </button>
                  <p className="text-muted mt-4 mb-0">
                    Free to apply and free to attend. On completion you get a certificate,
                    lifetime alum status, and AI credits.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .apply-hero { padding-top: clamp(7rem, 12vw, 10rem); padding-bottom: clamp(3rem, 6vw, 5rem); }
        .apply-num {
          width: 44px; height: 44px; flex: 0 0 44px;
          display: inline-flex; align-items: center; justify-content: center;
          border-radius: 50%; background: var(--ss-primary); color: #fff;
          font-weight: 700; font-family: "Syne", sans-serif;
        }
        .apply-card {
          animation: applyFadeUp 0.5s ease both;
          transition: box-shadow 0.2s ease;
        }
        @media (hover: hover) {
          .apply-card:hover { box-shadow: 0 0.6rem 2rem rgba(10, 9, 16, 0.08); }
        }
        @keyframes applyFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </>
  );
}

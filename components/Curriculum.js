import SectionBadge from "@/components/SectionBadge";

const BLOCKS = [
  { week: "Week 1–2", topics: ["Python", "Git", "AI fundamentals"] },
  { week: "Week 3–4", topics: ["APIs", "LLMs", "Prompt engineering"] },
  { week: "Week 5–7", topics: ["React", "Node.js", "AI chat apps"] },
  { week: "Week 8–10", topics: ["RAG", "Agents", "Databases"] },
  { week: "Week 11–12", topics: ["Final project", "Demo Day", "Career preparation"] },
];

export default function Curriculum() {
  return (
    <section className="py-15 py-md-20 py-lg-30 position-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-xxl-6 mx-auto text-center" data-ss-reveal-group data-y="50">
            <SectionBadge>Curriculum</SectionBadge>
            <div className="mb-6"></div>
            <h2 className="ss-text-reveal-blur mb-0">What you will learn, week by week</h2>
        </div>
        </div>

        <div className="mb-10 mb-lg-15"></div>

        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9">
            <div className="position-relative d-grid gap-4 gap-lg-5">
              <div aria-hidden="true" style={{ position: "absolute", left: "23px", top: "14px", bottom: "14px", width: "2px", background: "var(--ss-light-2)" }} />
              {BLOCKS.map((b, i) => (
                <div className="d-flex align-items-start gap-4" key={b.week}>
                  <div
                    className="rounded-circle bg-primary text-white"
                    style={{ width: "48px", height: "48px", flex: "0 0 48px", fontWeight: 700, fontFamily: "'Syne', sans-serif", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1 }}
                  >
                    {i + 1}
                  </div>
                  <div className="bg-white rounded-5 shadow-sm p-4 p-lg-5 flex-grow-1">
                    <div className="text-primary fw-semibold mb-3">{b.week}</div>
                    <div className="d-flex flex-wrap gap-2">
                      {b.topics.map((t) => (
                        <span key={t} className="bg-light border rounded-2 px-3 py-2 fs-md text-dark">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

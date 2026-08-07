import SectionBadge from "@/components/SectionBadge";

const OUTCOMES = [
  { title: "5+ AI projects", desc: "Real apps you design, build, and ship during the program." },
  { title: "GitHub portfolio", desc: "A public body of work you can share with anyone." },
  { title: "Resume-ready experience", desc: "Hands-on engineering work that stands out to employers." },
  { title: "Certificate of completion", desc: "Official proof you finished the fellowship." },
  { title: "Network of mentors", desc: "Real connections with engineers from top companies." },
  { title: "Demo Day presentation", desc: "Show your final project to peers, mentors, and guests." },
];

const Check = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="m5 13 4 4L19 7" />
  </svg>
);

export default function Outcomes() {
  return (
    <section className="pt-15 pt-md-20 pt-lg-30 position-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-xxl-6 mx-auto text-center" data-ss-reveal-group data-y="50">
            <SectionBadge>What You Will Walk Away With</SectionBadge>
            <div className="mb-6"></div>
            <h2 className="ss-text-reveal-blur mb-0">By the end, you will have</h2>
          </div>
        </div>

        <div className="mb-10 mb-lg-15"></div>

        <div className="row g-4 g-lg-5" data-ss-reveal-group data-y="50">
          {OUTCOMES.map((o) => (
            <div className="col-md-6 col-lg-4" key={o.title}>
              <div className="bg-white rounded-5 shadow-sm p-4 p-lg-5 h-100">
                <div className="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-circle mb-4" style={{ width: "2.75rem", height: "2.75rem" }}>
                  <Check />
                </div>
                <h5 className="mb-2">{o.title}</h5>
                <p className="fs-md text-muted mb-0">{o.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

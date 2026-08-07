import Link from "next/link";
import SectionBadge from "@/components/SectionBadge";

const CANDIDATES = [
  { title: "University students", desc: "Studying now and want real AI engineering skills alongside your degree." },
  { title: "Recent graduates", desc: "Finished school and ready to break into AI software engineering." },
  { title: "Career changers", desc: "Switching into tech and want a clear, guided path." },
  { title: "Self-taught developers", desc: "Learning on your own and ready to go deeper with mentors." },
  { title: "Anyone interested in AI", desc: "Curious about building AI apps, whatever your background." },
];

const Check = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="m5 13 4 4L19 7" />
  </svg>
);

export default function IdealCandidate() {
  return (
    <section className="pt-15 pt-md-20 pt-lg-30 position-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-xxl-6 mx-auto text-center" data-ss-reveal-group data-y="50">
            <SectionBadge>Who Should Apply</SectionBadge>
            <div className="mb-6"></div>
            <h2 className="ss-text-reveal-blur mb-0">Is this fellowship right for you?</h2>
          </div>
        </div>

        <div className="mb-10 mb-lg-15"></div>

        <div className="row g-4 g-lg-5 justify-content-center" data-ss-reveal-group data-y="50">
          {CANDIDATES.map((c) => (
            <div className="col-md-6 col-lg-4" key={c.title}>
              <div className="bg-white rounded-5 shadow-sm p-4 p-lg-5 h-100">
                <div className="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-circle mb-4" style={{ width: "2.75rem", height: "2.75rem" }}>
                  <Check />
                </div>
                <h5 className="mb-2">{c.title}</h5>
                <p className="fs-md text-muted mb-0">{c.desc}</p>
              </div>
            </div>
          ))}
          <div className="col-md-6 col-lg-4">
            <Link href="/apply" className="btn btn-primary d-flex flex-column align-items-start justify-content-center text-start h-100 p-4 p-lg-5 rounded-5">
              <span className="fs-4 fw-bold mb-1 lh-1">Not sure? Apply anyway.</span>
              <span className="opacity-75 mt-2">We read every application. Spots are limited.</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Programmatic SEO content for /study/[slug] pages (subjects + North American exams).
// One optimized page is generated per entry. Edit content here — the route and
// sitemap both read from this file so they stay in sync.

export const STUDY_PAGES = {
  // ───────────────────────── Subjects ─────────────────────────
  math: {
    name: "Math",
    type: "subject",
    blurb:
      "From arithmetic to calculus, Learnrithm's AI math tutor walks you through every problem step by step — so you learn how to solve it, not just copy an answer.",
    points: ["Step-by-step workings for every problem", "Word problems explained simply", "Algebra, geometry, trig & calculus", "Scan or type your question"],
    faqs: [
      { q: "Can Learnrithm do my math homework?", a: "Yes. Type or upload the problem and the AI tutor shows every step, then checks your work." },
      { q: "What math levels does it cover?", a: "From elementary math through algebra, geometry, trigonometry, calculus, and statistics." },
      { q: "Does it just give answers?", a: "No. Learnrithm explains each step so you actually learn how to solve it yourself." },
    ],
  },
  algebra: {
    name: "Algebra",
    type: "subject",
    blurb:
      "Solve equations, factor expressions, and graph functions with an AI algebra tutor that breaks every step down.",
    points: ["Linear & quadratic equations", "Factoring & simplifying", "Graphing & functions", "Word problems"],
    faqs: [
      { q: "Can it solve algebra equations step by step?", a: "Yes — linear, quadratic, and systems of equations, all shown step by step." },
      { q: "Does it help with graphing?", a: "Yes, it explains functions and helps you understand and sketch graphs." },
    ],
  },
  geometry: {
    name: "Geometry",
    type: "subject",
    blurb:
      "Get help with angles, proofs, area, volume, and triangles from an AI geometry tutor.",
    points: ["Proofs explained", "Area, perimeter & volume", "Triangles & circles", "Step-by-step solutions"],
    faqs: [
      { q: "Can it help with geometry proofs?", a: "Yes — the AI walks you through the statements and reasons so proofs make sense." },
    ],
  },
  calculus: {
    name: "Calculus",
    type: "subject",
    blurb:
      "Master limits, derivatives, and integrals with a calculus AI tutor that shows every step.",
    points: ["Limits & continuity", "Derivatives", "Integrals", "Step-by-step workings"],
    faqs: [
      { q: "Can it solve calculus problems step by step?", a: "Yes — derivatives, integrals, and limits, all broken down step by step." },
    ],
  },
  statistics: {
    name: "Statistics",
    type: "subject",
    blurb:
      "Understand probability, distributions, and data with a statistics AI tutor.",
    points: ["Probability", "Distributions", "Hypothesis testing", "Data & graphs"],
    faqs: [
      { q: "Can it help with statistics problems?", a: "Yes — probability, distributions, and interpreting data, explained clearly." },
    ],
  },
  biology: {
    name: "Biology",
    type: "subject",
    blurb:
      "From cells to genetics, get clear explanations for biology homework and lab reports.",
    points: ["Cells & genetics", "Human body & ecology", "Lab reports", "Diagrams explained"],
    faqs: [
      { q: "Can it help with biology homework?", a: "Yes — cells, genetics, evolution, ecology, and more, explained simply." },
    ],
  },
  chemistry: {
    name: "Chemistry",
    type: "subject",
    blurb:
      "Balance equations, learn the periodic table, and master moles with a chemistry AI tutor.",
    points: ["Balancing equations", "Periodic table", "Stoichiometry", "Organic basics"],
    faqs: [
      { q: "Can it balance chemical equations?", a: "Yes — and it explains the steps so you can do it yourself." },
    ],
  },
  physics: {
    name: "Physics",
    type: "subject",
    blurb:
      "Work through motion, forces, energy, and electricity with a physics AI tutor.",
    points: ["Kinematics & forces", "Energy & momentum", "Electricity & magnetism", "Step-by-step"],
    faqs: [
      { q: "Can it solve physics problems?", a: "Yes — it sets up the equations and walks through each step." },
    ],
  },
  english: {
    name: "English",
    type: "subject",
    blurb:
      "Get help with essays, grammar, reading, and literature analysis.",
    points: ["Essay writing & editing", "Grammar & style", "Reading comprehension", "Literature analysis"],
    faqs: [
      { q: "Can it help me write an essay?", a: "Yes — it helps you plan, draft, and polish essays, and explains grammar and style." },
    ],
  },
  history: {
    name: "History",
    type: "subject",
    blurb:
      "Understand events, timelines, and source analysis for history homework and AP prep.",
    points: ["Events & timelines", "Source analysis", "Essays", "AP History themes"],
    faqs: [
      { q: "Can it help with history essays?", a: "Yes — it helps you build arguments, analyze sources, and structure your essays." },
    ],
  },
  economics: {
    name: "Economics",
    type: "subject",
    blurb:
      "Master micro and macroeconomics — supply, demand, GDP, and more.",
    points: ["Supply & demand", "GDP & inflation", "Markets", "Graphs explained"],
    faqs: [
      { q: "Can it help with economics homework?", a: "Yes — micro and macro topics, with graphs explained." },
    ],
  },
  "computer-science": {
    name: "Computer Science",
    type: "subject",
    blurb:
      "Learn to code and understand algorithms with a computer science AI tutor.",
    points: ["Python & JavaScript", "Data structures", "Algorithms", "Debugging help"],
    faqs: [
      { q: "Can it help me learn to code?", a: "Yes — it explains code, helps debug, and teaches concepts step by step." },
    ],
  },

  // ───────────────────────── North American Exams ─────────────────────────
  sat: {
    name: "SAT",
    type: "exam",
    blurb:
      "Train for the Digital SAT with adaptive practice in Math and Reading & Writing, plus full explanations for every question.",
    points: ["Digital SAT practice", "Math + Reading & Writing", "Step-by-step explanations", "Score tracking"],
    faqs: [
      { q: "Is Learnrithm good for SAT prep?", a: "Yes — it drills you on SAT-style questions and explains every answer so you improve fast." },
      { q: "Does it cover the Digital SAT?", a: "Yes, the practice matches the current Digital SAT format." },
    ],
  },
  act: {
    name: "ACT",
    type: "exam",
    blurb:
      "Prep for the ACT with practice across English, Math, Reading, and Science.",
    points: ["All ACT sections", "Timed practice", "Step-by-step explanations", "Score tracking"],
    faqs: [
      { q: "Can Learnrithm help with ACT prep?", a: "Yes — practice for every ACT section with explanations for each question." },
    ],
  },
  ap: {
    name: "AP Exams",
    type: "exam",
    blurb:
      "Study for AP exams — AP Calc, AP Bio, AP Chem, AP US History, and more — with an AI tutor aligned to each course.",
    points: ["AP Calculus, Bio, Chem, Physics", "APUSH, AP World, AP Lang", "Practice free-response", "Step-by-step"],
    faqs: [
      { q: "Which AP exams does Learnrithm cover?", a: "Popular ones including AP Calculus, Biology, Chemistry, Physics, US History, World History, and English." },
    ],
  },
  gre: {
    name: "GRE",
    type: "exam",
    blurb:
      "Prep for the GRE with quantitative, verbal, and analytical writing practice.",
    points: ["Quant practice", "Verbal reasoning", "AWA essays", "Step-by-step"],
    faqs: [
      { q: "Can it help with GRE prep?", a: "Yes — math, verbal, and essay practice with explanations." },
    ],
  },
  gmat: {
    name: "GMAT",
    type: "exam",
    blurb:
      "Get ready for the GMAT Focus with quant, verbal, and Data Insights practice.",
    points: ["Quant", "Verbal", "Data Insights", "Step-by-step"],
    faqs: [
      { q: "Can it help with GMAT prep?", a: "Yes — practice for the GMAT Focus sections with full explanations." },
    ],
  },
  mcat: {
    name: "MCAT",
    type: "exam",
    blurb:
      "Review MCAT science and critical analysis with an AI tutor built for pre-meds.",
    points: ["Biology & biochemistry", "Chemistry & physics", "Psychology", "Critical analysis"],
    faqs: [
      { q: "Can it help with MCAT prep?", a: "Yes — science content review and passage practice with explanations." },
    ],
  },
  lsat: {
    name: "LSAT",
    type: "exam",
    blurb:
      "Build logic games, logical reasoning, and reading comprehension skills for the LSAT.",
    points: ["Logical reasoning", "Logic games", "Reading comprehension", "Step-by-step"],
    faqs: [
      { q: "Can it help with LSAT prep?", a: "Yes — practice logical reasoning and reading comprehension with explanations." },
    ],
  },
};

export const STUDY_SLUGS = Object.keys(STUDY_PAGES);

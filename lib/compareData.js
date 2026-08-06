// Comparison-page content: Learnrithm vs the highest-traffic competitors
// in North America and Europe. One SEO page is generated per entry.

// Questions almost every student asks, regardless of competitor.
function commonFaqs(name) {
    return [
        {
            q: "Is Learnrithm free to try?",
            a: "Yes — Learnrithm starts with a free trial, no credit card needed. Test it on your own homework before you pay a thing.",
        },
        {
            q: "Will Learnrithm actually help me understand, or just give answers?",
            a: "It explains every step so you understand the why, then quizzes you to make sure it stuck. You learn it — not just copy it.",
        },
        {
            q: "Is using Learnrithm cheating?",
            a: "No. Learnrithm is built to teach you, like a tutor walking you through the work so you can do it yourself on test day.",
        },
        {
            q: "What subjects does Learnrithm cover?",
            a: "Math, science, English, history, languages, economics, computer science and more — across every level, from school to university.",
        },
        {
            q: "Can Learnrithm help me prepare for my exams?",
            a: "Yes — SAT, ACT, AP, GCSE, A-levels, JAMB, WAEC and more, with practice tests and a study plan built around you.",
        },
        {
            q: "How much does Learnrithm cost?",
            a: "Under $2 a week after your free trial — far less than most paid study tools or a private tutor.",
        },
        {
            q: "Does Learnrithm work on my phone?",
            a: "Yes — phone, tablet and computer. Get help anywhere, any time, even at midnight before a test.",
        },
        {
            q: `Why choose Learnrithm over ${name}?`,
            a: `Because Learnrithm is built to help you understand your work and walk into exams confident — not just hand you an answer.`,
        },
    ];
}

export const COMPARE_PAGES = {
  // ───────────────────────── NORTH AMERICA ─────────────────────────
  chatgpt: {
    name: "ChatGPT",
    region: "North America",
    tagline: "A general chatbot — not built for studying.",
    heroSubtitle: "ChatGPT is smart. But it wasn't made to help you pass your class.",
    intro:
      "ChatGPT can answer a question, but it's a general chatbot — it can get things wrong, it doesn't follow your curriculum, and it won't build you practice tests or flashcards. Learnrithm is built for one job: helping you actually understand your work and walk into every exam knowing you'll pass.",
    rows: [
      { feature: "Built for students & exams", lr: { t: "Made for your classes", win: true }, cp: { t: "Generic chatbot — not a study tool", win: false } },
      { feature: "Practice tests & quizzes", lr: { t: "Included", win: true }, cp: { t: "None", win: false } },
      { feature: "Flashcards & study tools", lr: { t: "Included", win: true }, cp: { t: "None", win: false } },
      { feature: "Explains until you get it", lr: { t: "Step-by-step, every time", win: true }, cp: { t: "Skips steps, can be wrong", win: false } },
      { feature: "Follows your curriculum", lr: { t: "Yes", win: true }, cp: { t: "No — sometimes makes things up", win: false } },
      { feature: "Free trial", lr: { t: "Yes, no card needed", win: true }, cp: { t: "Best version is paywalled", win: false } },
    ],
    whyCards: [
      { title: "Actually made for learning", text: "Learnrithm is designed around how students study — not just chatting." },
      { title: "Real study tools", text: "Quizzes, flashcards, and practice tests built in, in one place." },
      { title: "Walk in confident", text: "Understand the why behind every answer before your test." },
    ],
    faqs: [
      { q: "Is Learnrithm better than ChatGPT for homework?", a: "For schoolwork, yes. ChatGPT is a general chatbot; Learnrithm is a study tool with quizzes, flashcards, and step-by-step explanations built for your classes." },
      { q: "Does Learnrithm use AI like ChatGPT?", a: "Yes, but it's tuned for learning — with practice tests, flashcards and step-by-step teaching that ChatGPT doesn't have." },
      { q: "Can ChatGPT replace a tutor?", a: "It can help, but it's a general chatbot that can be wrong and isn't built for studying. Learnrithm is a dedicated study tutor." },
      ...commonFaqs("ChatGPT"),
    ],
  },
  photomath: {
    name: "Photomath",
    region: "North America",
    tagline: "Great for math answers — but only math.",
    heroSubtitle: "Photomath solves math. Learnrithm helps you ace every subject.",
    intro:
      "Photomath is handy for snapping a math problem, but it only does math — and it often hides the steps behind a paywall. Learnrithm covers every subject, shows you every step for free, and teaches you to understand your textbook, not just copy answers.",
    rows: [
      { feature: "Subjects covered", lr: { t: "All subjects", win: true }, cp: { t: "Math only — dead end for the rest", win: false } },
      { feature: "Step-by-step free", lr: { t: "Always free", win: true }, cp: { t: "Locked behind a paywall", win: false } },
      { feature: "Science, English, History", lr: { t: "Yes", win: true }, cp: { t: "No", win: false } },
      { feature: "Practice quizzes", lr: { t: "Included", win: true }, cp: { t: "None", win: false } },
      { feature: "Teaches understanding", lr: { t: "Yes — shows the why", win: true }, cp: { t: "Just hands you the answer", win: false } },
      { feature: "Free trial", lr: { t: "Yes", win: true }, cp: { t: "Limited", win: false } },
    ],
    whyCards: [
      { title: "Every subject, not just math", text: "Math, science, English, history and more — all in one place." },
      { title: "Steps that are actually free", text: "See every step without a paywall, every time." },
      { title: "Learn it, don't copy it", text: "Understand your textbook so you can solve it yourself in the exam." },
    ],
    faqs: [
      { q: "Does Learnrithm scan math problems like Photomath?", a: "Yes — and it goes further by explaining every step for free and covering every other subject too." },
      { q: "Is Learnrithm good for non-math subjects?", a: "Yes — science, English, history and more, unlike math-only tools." },
      { q: "Why are the steps free on Learnrithm?", a: "Because seeing how to solve it is the whole point. Learnrithm shows every step so you learn, instead of hiding them behind a paywall." },
      ...commonFaqs("Photomath"),
    ],
  },
  chegg: {
    name: "Chegg",
    region: "North America",
    tagline: "Expensive textbook answers — and you can get flagged.",
    heroSubtitle: "Chegg costs more. Learnrithm helps you actually learn — for less.",
    intro:
      "Chegg is famous for textbook answers, but it's pricey and many schools now flag Chegg use as cheating. Learnrithm is affordable, starts with a free trial, and is built to help you understand your work so you pass on your own — no stress, no risk.",
    rows: [
      { feature: "Price", lr: { t: "Under $2/week + free trial", win: true }, cp: { t: "Pricey — $15+/month", win: false } },
      { feature: "Teaches understanding", lr: { t: "Yes — explains the why", win: true }, cp: { t: "Mostly hands you answers", win: false } },
      { feature: "Academic-honesty friendly", lr: { t: "Built to help you learn", win: true }, cp: { t: "Often flagged as cheating", win: false } },
      { feature: "Practice tests & flashcards", lr: { t: "Included", win: true }, cp: { t: "Limited", win: false } },
      { feature: "Works your own homework", lr: { t: "Any question", win: true }, cp: { t: "Only matching textbook editions", win: false } },
      { feature: "Kept up to date", lr: { t: "Live help, always current", win: true }, cp: { t: "Stale textbook solutions", win: false } },
    ],
    whyCards: [
      { title: "A fraction of the price", text: "Get a real tutor for less than $2 a week, with a free trial first." },
      { title: "Learn, don't just look up", text: "Understand the steps so you can pass the test by yourself." },
      { title: "No cheating worries", text: "Built to help you genuinely understand your work." },
    ],
    faqs: [
      { q: "Is Learnrithm cheaper than Chegg?", a: "Yes — Learnrithm is under $2 a week and starts with a free trial, while Chegg is around $15+ a month." },
      { q: "Will my school flag Learnrithm like Chegg?", a: "Learnrithm is built to teach you, not hand you copied answers, so you understand the material and can explain it yourself." },
      { q: "Does Learnrithm have textbook solutions like Chegg?", a: "Better — Learnrithm works on your exact problem and explains it, instead of only matching a textbook edition." },
      ...commonFaqs("Chegg"),
    ],
  },
  quizlet: {
    name: "Quizlet",
    region: "North America",
    tagline: "Flashcards for memorizing — not a tutor.",
    heroSubtitle: "Quizlet helps you memorize. Learnrithm helps you understand.",
    intro:
      "Quizlet is great for flashcards, but memorizing isn't the same as understanding. Learnrithm explains your homework step by step, works across every subject, and builds the study tools for you — so the material actually sticks and you're ready for the test.",
    rows: [
      { feature: "Explains your homework", lr: { t: "Step by step", win: true }, cp: { t: "No — just flashcards", win: false } },
      { feature: "AI tutor", lr: { t: "Yes", win: true }, cp: { t: "Bare-bones", win: false } },
      { feature: "Helps you understand", lr: { t: "Yes", win: true }, cp: { t: "Mostly rote memorizing", win: false } },
      { feature: "Practice tests", lr: { t: "Included", win: true }, cp: { t: "Paywalled", win: false } },
      { feature: "Works your actual problems", lr: { t: "Yes", win: true }, cp: { t: "No", win: false } },
      { feature: "Free trial", lr: { t: "Yes", win: true }, cp: { t: "Limited free", win: false } },
    ],
    whyCards: [
      { title: "Understand, don't just memorize", text: "Learnrithm explains the why, so you can handle any question on the test." },
      { title: "A tutor, not just cards", text: "Ask any question and get a real explanation instantly." },
      { title: "Tools built for you", text: "Quizzes and flashcards generated from your own work." },
    ],
    faqs: [
      { q: "Does Learnrithm have flashcards like Quizlet?", a: "Yes — plus it explains your homework step by step, which flashcards alone can't do." },
      { q: "Is Learnrithm good for understanding, not just memorizing?", a: "That's the whole point — Learnrithm teaches the why behind each answer." },
      { q: "Can Learnrithm make quizzes from my notes?", a: "Yes — turn your class notes or homework into practice quizzes and flashcards in seconds." },
      ...commonFaqs("Quizlet"),
    ],
  },
  "khan-academy": {
    name: "Khan Academy",
    region: "North America",
    tagline: "Wonderful free videos — but you watch, not interact.",
    heroSubtitle: "Khan Academy is videos. Learnrithm works on your actual homework.",
    intro:
      "Khan Academy is an amazing free resource for watching lessons, but it's passive — you can't ask it your specific homework question. Learnrithm is an interactive tutor that works on your exact problem and explains it step by step until it clicks.",
    rows: [
      { feature: "Works your own homework", lr: { t: "Yes", win: true }, cp: { t: "No — just videos", win: false } },
      { feature: "Answers your exact question", lr: { t: "Instant", win: true }, cp: { t: "Can't", win: false } },
      { feature: "Interactive tutor", lr: { t: "Yes", win: true }, cp: { t: "Passive — you just watch", win: false } },
      { feature: "On-demand help", lr: { t: "24/7", win: true }, cp: { t: "Hunt for the right video", win: false } },
      { feature: "Practice from your work", lr: { t: "Included", win: true }, cp: { t: "Generic topic quizzes", win: false } },
      { feature: "Personal explanations", lr: { t: "For your problem", win: true }, cp: { t: "One-size-fits-all lessons", win: false } },
    ],
    whyCards: [
      { title: "Help with YOUR problem", text: "Don't hunt for the right video — get an instant answer to your exact question." },
      { title: "Interactive, not passive", text: "Ask, follow up, and practice until you truly get it." },
      { title: "Built for exams", text: "Turn your homework into quizzes so you're test-ready." },
    ],
    faqs: [
      { q: "Is Learnrithm free like Khan Academy?", a: "Khan Academy is free; Learnrithm has a free trial and a personal AI tutor that works on your specific homework." },
      { q: "Can Learnrithm answer my specific homework question?", a: "Yes — unlike videos, it works the exact problem in front of you and explains each step." },
      { q: "Does Learnrithm replace watching lessons?", a: "It complements them — when a video isn't enough, Learnrithm works your actual problem until you get it." },
      ...commonFaqs("Khan Academy"),
    ],
  },
  mathway: {
    name: "Mathway",
    region: "North America",
    tagline: "Math answers — steps often cost extra.",
    heroSubtitle: "Mathway does math. Learnrithm does every subject — steps free.",
    intro:
      "Mathway solves math problems, but like most math-only tools it often charges to show the steps and doesn't touch your other subjects. Learnrithm shows every step for free and covers your whole timetable.",
    rows: [
      { feature: "Subjects covered", lr: { t: "All subjects", win: true }, cp: { t: "Math only", win: false } },
      { feature: "Free step-by-step", lr: { t: "Yes", win: true }, cp: { t: "Paywalled", win: false } },
      { feature: "Science, English & more", lr: { t: "Yes", win: true }, cp: { t: "No", win: false } },
      { feature: "Practice quizzes", lr: { t: "Included", win: true }, cp: { t: "None", win: false } },
      { feature: "Teaches understanding", lr: { t: "Yes", win: true }, cp: { t: "Just the final answer", win: false } },
      { feature: "Free trial", lr: { t: "Yes", win: true }, cp: { t: "Limited", win: false } },
    ],
    whyCards: [
      { title: "Beyond math", text: "Every subject in one tool, not just equations." },
      { title: "Free steps always", text: "No paywall between you and the explanation." },
      { title: "Exam-ready", text: "Practice quizzes turn revision into results." },
    ],
    faqs: [
      { q: "Is Learnrithm like Mathway?", a: "Similar idea, but Learnrithm covers every subject and shows all steps for free, while Mathway focuses on math and often charges for steps." },
      { q: "Does Learnrithm show steps for free?", a: "Yes — every step, every time, no paywall." },
      { q: "Can Learnrithm help with science and English too?", a: "Yes — unlike math-only solvers, Learnrithm covers your whole timetable." },
      ...commonFaqs("Mathway"),
    ],
  },
  brainly: {
    name: "Brainly",
    region: "North America",
    tagline: "Crowdsourced answers — you wait, and they can be wrong.",
    heroSubtitle: "Brainly makes you wait. Learnrithm answers instantly.",
    intro:
      "Brainly relies on other students answering your question, so you wait — and the answers aren't always right. Learnrithm's AI tutor answers instantly, shows every step, and is built to help you actually understand and pass.",
    rows: [
      { feature: "Speed", lr: { t: "Instant", win: true }, cp: { t: "Wait hours for strangers", win: false } },
      { feature: "Answer accuracy", lr: { t: "Consistent & reliable", win: true }, cp: { t: "Hit or miss", win: false } },
      { feature: "Step-by-step", lr: { t: "Always", win: true }, cp: { t: "Sometimes, if at all", win: false } },
      { feature: "Practice tools", lr: { t: "Included", win: true }, cp: { t: "Bare-bones", win: false } },
      { feature: "Depth of help", lr: { t: "Real teaching", win: true }, cp: { t: "Surface-level replies", win: false } },
      { feature: "Free trial", lr: { t: "Yes", win: true }, cp: { t: "Limited free", win: false } },
    ],
    whyCards: [
      { title: "No waiting", text: "Get a full explanation the second you need it — even at midnight." },
      { title: "Answers you can trust", text: "Consistent, step-by-step help instead of guesswork." },
      { title: "Built to teach", text: "Understand the method so you pass the real test." },
    ],
    faqs: [
      { q: "Is Learnrithm faster than Brainly?", a: "Yes — Learnrithm answers instantly with a step-by-step explanation, while Brainly waits for other users to reply." },
      { q: "Are Learnrithm's answers reliable?", a: "Yes — consistent, step-by-step explanations, not crowdsourced guesses that may be wrong." },
      { q: "Do I have to wait for people to answer?", a: "Never. Learnrithm's AI tutor replies the moment you ask, any time of day." },
      ...commonFaqs("Brainly"),
    ],
  },
  "course-hero": {
    name: "Course Hero",
    region: "North America",
    tagline: "A library of old notes behind a paywall.",
    heroSubtitle: "Course Hero is a document dump. Learnrithm is a tutor that works with you.",
    intro:
      "Course Hero is mostly a library of uploaded class notes and old exams, locked behind a subscription. Learnrithm is an active AI tutor that works on your actual homework and explains it until you understand.",
    rows: [
      { feature: "Works your homework", lr: { t: "Yes", win: true }, cp: { t: "No — just old uploaded docs", win: false } },
      { feature: "Active AI tutor", lr: { t: "Yes", win: true }, cp: { t: "Barely", win: false } },
      { feature: "Step-by-step", lr: { t: "Always", win: true }, cp: { t: "Rarely", win: false } },
      { feature: "Price", lr: { t: "Under $2/week + free trial", win: true }, cp: { t: "Pricey subscription", win: false } },
      { feature: "Practice tools", lr: { t: "Included", win: true }, cp: { t: "Limited", win: false } },
      { feature: "Kept current", lr: { t: "Live help", win: true }, cp: { t: "Stale, years-old uploads", win: false } },
    ],
    whyCards: [
      { title: "A tutor, not a filing cabinet", text: "Get help with the problem in front of you — not someone's old notes." },
      { title: "Explains everything", text: "Step-by-step, every time, so it actually makes sense." },
      { title: "Gentle on your budget", text: "Real tutoring for under $2 a week, with a free trial." },
    ],
    faqs: [
      { q: "Is Learnrithm cheaper than Course Hero?", a: "Yes — and instead of old documents, you get a live AI tutor that works on your actual homework." },
      { q: "Does Learnrithm have class notes like Course Hero?", a: "Better — Learnrithm works on your exact problem and explains it, instead of relying on someone's uploaded notes." },
      { q: "Can Learnrithm help with my specific assignment?", a: "Yes — bring your assignment and Learnrithm walks you through it step by step." },
      ...commonFaqs("Course Hero"),
    ],
  },

  // ───────────────────────── EUROPE (UK GCSE / A-level) ─────────────────────────
  "bbc-bitesize": {
    name: "BBC Bitesize",
    region: "Europe",
    tagline: "Excellent free revision notes — but passive.",
    heroSubtitle: "BBC Bitesize is revision notes. Learnrithm is a tutor that works your homework.",
    intro:
      "BBC Bitesize is a brilliant free resource for GCSE and National revision, but you read and watch — you can't ask it your specific homework question. Learnrithm is an interactive tutor that works on your exact problem, explains it step by step, and turns it into practice so you're ready for the exam.",
    rows: [
      { feature: "Works your own homework", lr: { t: "Yes", win: true }, cp: { t: "No — just revision notes", win: false } },
      { feature: "Answers your exact question", lr: { t: "Instant", win: true }, cp: { t: "Can't", win: false } },
      { feature: "Interactive tutor", lr: { t: "Yes", win: true }, cp: { t: "Passive — you just read", win: false } },
      { feature: "Countries & exams", lr: { t: "Worldwide, every exam", win: true }, cp: { t: "UK only", win: false } },
      { feature: "Practice from your work", lr: { t: "Included", win: true }, cp: { t: "Generic topic quizzes", win: false } },
      { feature: "Personal explanations", lr: { t: "For your problem", win: true }, cp: { t: "One-size-fits-all notes", win: false } },
    ],
    whyCards: [
      { title: "Help with YOUR question", text: "Don't just revise a topic — get your exact problem solved and explained." },
      { title: "Works for any country", text: "GCSEs, A-levels, AP, SAT, JAMB and more — not just the UK." },
      { title: "Test-ready", text: "Turn your work into quizzes so the exam feels easy." },
    ],
    faqs: [
      { q: "Is Learnrithm free like BBC Bitesize?", a: "BBC Bitesize is free; Learnrithm has a free trial and gives you an interactive tutor that works on your specific homework, for any country." },
      { q: "Does Learnrithm cover GCSEs?", a: "Yes — GCSEs, A-levels, National 5s and exams worldwide, with practice built around you." },
      { q: "Can Learnrithm answer my specific homework?", a: "Yes — unlike revision notes, it works the exact problem in front of you and explains each step." },
      ...commonFaqs("BBC Bitesize"),
    ],
  },
  "save-my-exams": {
    name: "Save My Exams",
    region: "Europe",
    tagline: "Exam-board notes & past papers — mostly behind a paywall.",
    heroSubtitle: "Save My Exams gives you notes. Learnrithm explains your work — for less.",
    intro:
      "Save My Exams is popular for exam-board-specific GCSE and A-level notes, questions and worked solutions — but much of it sits behind a subscription. Learnrithm is an interactive AI tutor that explains your actual homework across every subject, with a free trial and a low price.",
    rows: [
      { feature: "Works your own homework", lr: { t: "Yes", win: true }, cp: { t: "No — just notes", win: false } },
      { feature: "Interactive AI tutor", lr: { t: "Yes", win: true }, cp: { t: "No", win: false } },
      { feature: "Subjects covered", lr: { t: "Every subject", win: true }, cp: { t: "Mainly sciences & maths", win: false } },
      { feature: "Price", lr: { t: "Under $2/week + free trial", win: true }, cp: { t: "Paywalled subscription", win: false } },
      { feature: "Countries & exams", lr: { t: "Worldwide", win: true }, cp: { t: "UK exam boards only", win: false } },
      { feature: "On-demand help", lr: { t: "Step-by-step, anytime", win: true }, cp: { t: "Static worked examples", win: false } },
    ],
    whyCards: [
      { title: "A tutor, not just notes", text: "Get your homework explained live, not just a worked example to puzzle out." },
      { title: "Every subject, every country", text: "Beyond UK sciences — English, history, languages, and global exams too." },
      { title: "Easy on the wallet", text: "Under $2 a week after a free trial, instead of another subscription." },
    ],
    faqs: [
      { q: "Is Learnrithm cheaper than Save My Exams?", a: "Often yes — and instead of static notes, you get an interactive tutor that works on your actual homework." },
      { q: "Does Learnrithm cover A-levels?", a: "Yes — A-levels, GCSEs and exams from other countries too." },
      { q: "Does Learnrithm have past-paper style practice?", a: "Yes — Learnrithm generates exam-style practice questions and explains every answer." },
      ...commonFaqs("Save My Exams"),
    ],
  },
  "physics-maths-tutor": {
    name: "Physics & Maths Tutor",
    region: "Europe",
    tagline: "Free notes & past papers — but mostly maths and science.",
    heroSubtitle: "PMT is past papers. Learnrithm is a tutor for every subject.",
    intro:
      "Physics & Maths Tutor is a beloved free resource for notes and past papers, but it leans heavily on maths and the sciences, and it's static — you can't ask it your question. Learnrithm is an interactive tutor that covers every subject and explains your work step by step.",
    rows: [
      { feature: "Subjects covered", lr: { t: "All subjects", win: true }, cp: { t: "Mostly maths & science", win: false } },
      { feature: "Works your own homework", lr: { t: "Yes", win: true }, cp: { t: "No — just resources", win: false } },
      { feature: "Interactive tutor", lr: { t: "Yes", win: true }, cp: { t: "No", win: false } },
      { feature: "English, history, languages", lr: { t: "Yes", win: true }, cp: { t: "Barely covered", win: false } },
      { feature: "Personal explanations", lr: { t: "For your problem", win: true }, cp: { t: "Generic notes", win: false } },
      { feature: "Countries & exams", lr: { t: "Worldwide", win: true }, cp: { t: "UK focus", win: false } },
    ],
    whyCards: [
      { title: "Every subject covered", text: "Not just maths and physics — English, history, economics and more." },
      { title: "Answers your question", text: "Interactive help with the exact problem in front of you." },
      { title: "Works worldwide", text: "Built for students in any country, on any exam." },
    ],
    faqs: [
      { q: "Is Learnrithm free like Physics & Maths Tutor?", a: "PMT is free; Learnrithm has a free trial and adds an interactive tutor across every subject, not just maths and science." },
      { q: "Does Learnrithm cover English and humanities?", a: "Yes — unlike PMT's maths/science focus, Learnrithm helps with English, history, languages and more." },
      { q: "Can Learnrithm use PMT past papers with me?", a: "Bring any question from your past papers and Learnrithm will work through it with you step by step." },
      ...commonFaqs("Physics & Maths Tutor"),
    ],
  },
  seneca: {
    name: "Seneca Learning",
    region: "Europe",
    tagline: "Smart interactive revision — GCSE/A-level focused.",
    heroSubtitle: "Seneca is great for GCSE revision. Learnrithm works your actual homework.",
    intro:
      "Seneca is a clever free platform for interactive GCSE and A-level revision. But it revises topics — it doesn't solve your specific homework. Learnrithm is an AI tutor that works on your exact problem across every subject and country, and explains it until you understand.",
    rows: [
      { feature: "Works your own homework", lr: { t: "Yes", win: true }, cp: { t: "No — set revision only", win: false } },
      { feature: "Answers your exact question", lr: { t: "Instant", win: true }, cp: { t: "Can't", win: false } },
      { feature: "Subjects covered", lr: { t: "Every subject", win: true }, cp: { t: "Fixed GCSE/A-level lists", win: false } },
      { feature: "Countries & exams", lr: { t: "Worldwide", win: true }, cp: { t: "UK focus", win: false } },
      { feature: "Practice from your work", lr: { t: "Included", win: true }, cp: { t: "Generic topic practice", win: false } },
      { feature: "Personal explanations", lr: { t: "For your problem", win: true }, cp: { t: "Fixed course flow", win: false } },
    ],
    whyCards: [
      { title: "Your homework, solved", text: "Bring the question you're stuck on — Learnrithm works it out with you." },
      { title: "Beyond GCSE", text: "A-levels, university, AP, SAT and more — not just UK school years." },
      { title: "Understand, then practice", text: "Get the explanation, then quiz yourself until it sticks." },
    ],
    faqs: [
      { q: "Is Learnrithm better than Seneca?", a: "For revising set UK courses, Seneca is great. For help with your specific homework across every subject and country, Learnrithm goes further." },
      { q: "Does Learnrithm work outside the UK?", a: "Yes — any country and any exam, not just UK school years." },
      { q: "Can Learnrithm help with my actual assignment?", a: "Yes — it works the exact problem in front of you, which set revision courses can't." },
      ...commonFaqs("Seneca Learning"),
    ],
  },
  "the-student-room": {
    name: "The Student Room",
    region: "Europe",
    tagline: "A busy forum — you wait, and answers vary.",
    heroSubtitle: "The Student Room makes you wait. Learnrithm answers instantly.",
    intro:
      "The Student Room is a huge, helpful community — but it's a forum, so you post and wait, and the quality depends on who replies. Learnrithm answers your question instantly with a clear, step-by-step explanation, any time of day.",
    rows: [
      { feature: "Speed", lr: { t: "Instant", win: true }, cp: { t: "Wait for strangers to reply", win: false } },
      { feature: "Answer quality", lr: { t: "Consistent", win: true }, cp: { t: "Whoever bothers to answer", win: false } },
      { feature: "Step-by-step", lr: { t: "Always", win: true }, cp: { t: "Sometimes, if at all", win: false } },
      { feature: "Practice tools", lr: { t: "Included", win: true }, cp: { t: "None", win: false } },
      { feature: "Depth of help", lr: { t: "Real teaching", win: true }, cp: { t: "Quick forum replies", win: false } },
      { feature: "Available 24/7", lr: { t: "Yes", win: true }, cp: { t: "Depends who's online", win: false } },
    ],
    whyCards: [
      { title: "Instant answers", text: "No posting and waiting — get help the moment you're stuck." },
      { title: "Reliable explanations", text: "Clear steps every time, not a best-guess from a stranger." },
      { title: "Built to help you pass", text: "Tools that turn understanding into exam results." },
    ],
    faqs: [
      { q: "Is Learnrithm faster than The Student Room?", a: "Yes — Learnrithm answers instantly with a step-by-step explanation, instead of waiting for forum replies." },
      { q: "Can I trust Learnrithm's answers?", a: "Yes — consistent explanations every time, not best-guesses from strangers." },
      { q: "Is Learnrithm available at night before a test?", a: "Yes — 24/7, so you're never stuck waiting when it matters most." },
      ...commonFaqs("The Student Room"),
    ],
  },
};

export const COMPARE_SLUGS = Object.keys(COMPARE_PAGES);

/**
 * Hand-authored, factual markdown summaries of key Learnrithm pages.
 *
 * Served to AI agents that send `Accept: text/markdown` (see middleware.js and
 * app/_agent_md/[slug]/route.js). Browsers keep getting HTML.
 *
 * Keep this content in sync with the live pages when copy changes. Only include
 * facts that are true on the public site — do not invent features or prices.
 *
 * Keys map to URL slugs via lib/agentMarkdown's MARKDOWN_SLUGS:
 *   ""        -> "/"          (home)
 *   "features"-> "/features"
 *   "pricing" -> "/pricing"
 *   "faq"     -> "/faq"
 *   "about-us"-> "/about-us"
 */

const HOME = `# Learnrithm AI

Learnrithm AI is a smart AI tutor that helps students with homework, studying, and exam preparation. Ask any question, get clear step-by-step answers, take practice quizzes, and learn in your own language. Available 24/7.

Website: https://learnrithm.com

## What it does

- AI homework help — step-by-step solutions across math, science, English, history, languages, and more.
- Exam preparation — personalized study plans and practice tests for SAT, ACT, GRE, GMAT, MCAT, IELTS, TOEFL, JAMB, WAEC, NECO, A-levels, GCSE, IB, and AP.
- Personalized learning — adaptive paths that adjust to each student's pace, level, and goals.
- Study tools — AI flashcards with spaced repetition, unlimited quiz generation, a study planner, and learning analytics.
- Multi-language — learn in your own language.
- Accessible — supports diverse learning needs, including dyslexia and ADHD (text-to-speech, adjustable reading speed, distraction-free mode).

## Key facts

- Pricing: $9.99/month or $99.99/year (USD), with a 14-day free trial (no credit card required). Cancel anytime.
- Rated 4.8/5 across approximately 2,500 ratings.
- Works on desktop, tablet, and smartphone.

## Popular pages

- Features: https://learnrithm.com/features
- Pricing: https://learnrithm.com/pricing
- FAQ: https://learnrithm.com/faq
- About: https://learnrithm.com/about-us
- Contact: https://learnrithm.com/contact

This markdown is served to AI agents via content negotiation; the same URL returns HTML in a browser.
`

const FEATURES = `# Learnrithm AI — Features

Learnrithm is an AI learning platform that combines an AI tutor with adaptive study tools for K-12, college, and professional learners.

URL: https://learnrithm.com/features

## Core features

- AI tutor and smart tutoring — step-by-step explanations that teach concepts, not just answers.
- AI homework help — upload a question or problem and get worked, step-by-step solutions. Supports mathematics, science, English, history, languages, and more.
- Exam preparation — personalized study plans, realistic practice tests, and AI-generated questions for SAT, ACT, GRE, GMAT, MCAT, IELTS, TOEFL, JAMB, WAEC, NECO, A-levels, GCSE, IB, and AP.
- Adaptive learning paths — content difficulty and pacing adjust in real time to the learner's level and goals.
- AI flashcards — spaced-repetition flashcards for long-term retention.
- Unlimited quiz and question generation — customized practice problems that target each learner's weak areas.
- Study planner — an optimized study schedule.
- Learning analytics — progress tracking for students, teachers, and parents.
- Multi-language learning — study in your preferred language.
- Accessibility and inclusion — supports learners with dyslexia, ADHD, and other differences via text-to-speech, adjustable reading speed, multi-sensory content, and a distraction-free mode.

## Device support

Works on desktop, tablet, and smartphone — no technical expertise required.

See pricing at https://learnrithm.com/pricing.
`

const PRICING = `# Learnrithm AI — Pricing

URL: https://learnrithm.com/pricing
Subscribe: https://app.learnrithm.com/dashboard/pricing

## Plans

| Plan | Price (USD) | Billing |
|---|---|---|
| Monthly | $9.99 | per month |
| Yearly | $99.99 | per year (about 10% saving vs monthly) |

- 14-day free trial — no credit card required.
- Cancel anytime.
- Switch plans at any time: upgrades take effect immediately, downgrades take effect at the next billing cycle.

## What is included in paid plans

- Unlimited AI Teacher courses
- Unlimited quiz generation
- Unlimited chatbot modes
- Multi-language learning support
- Ad-free experience
- Priority customer support

## Payment methods

Visa, Mastercard, American Express, Discover, PayPal, and various local payment methods (region-dependent).

## Institutional pricing

Special pricing is available for schools, districts, and educational institutions, with volume discounts. Contact the team via https://learnrithm.com/contact.

## Offered in

US, GB, CA, AU, IN, NG, KE, ZA.

See features at https://learnrithm.com/features.
`

const FAQ = `# Learnrithm AI — FAQ

URL: https://learnrithm.com/faq

### What makes Learnrithm AI different?

Learnrithm combines an AI tutor with personalized learning pathways that adapt to each student's learning style, pace, and goals — providing tailored study plans, smart tutoring, and real-time feedback. It supports K-12, college, and professional exams and is trusted by thousands of students, teachers, and schools.

### How does AI homework help work?

Upload a homework question or problem and the AI tutor analyzes the context, identifies the key concepts, and walks through a step-by-step solution so you understand the principles — not just the final answer. It supports mathematics, science, English, history, languages, and more, and is available 24/7.

### Can Learnrithm help with standardized exams such as SAT, ACT, GRE, and GMAT?

Yes. Learnrithm offers personalized study plans, realistic practice tests, and AI-generated questions for SAT, ACT, GRE, GMAT, MCAT, IELTS, TOEFL, JAMB, WAEC, NECO, A-levels, GCSE, IB, and AP. AI diagnostics identify strengths and weaknesses, and progress is tracked with analytics.

### Is it suitable for students with learning differences such as dyslexia or ADHD?

Yes. The platform adapts content presentation, pacing, and difficulty to individual needs, with features such as text-to-speech, adjustable reading speed, multi-sensory content, and a distraction-free study mode.

### How much does Learnrithm cost and what is included?

There is a free trial (no credit card required). Paid plans ($9.99/month or $99.99/year) unlock AI tutoring, homework help, exam preparation, personalized study plans, AI flashcards, question generators, a study planner, and learning analytics. Individual, family, classroom, and school plans are available, with volume discounts for institutions. See https://learnrithm.com/pricing.

### Do I need technical skills to use it?

No. The interface is designed to be intuitive for students of all ages, teachers, and parents, and works on desktop, tablet, and smartphone.

### How does personalized learning work?

The AI assesses current knowledge, learning style, and goals through diagnostics, then continuously adapts content difficulty, presentation, and practice as you learn. AI flashcards use spaced repetition for retention, the study planner optimizes your schedule, and analytics track your progress.

### What makes it different from other tutoring platforms?

24/7 instant access, teaching of underlying concepts (not just answers), unlimited AI-generated practice tailored to your needs, learning analytics, broad exam and subject coverage, dedicated support for learning differences, and affordable pricing.

Still have questions? Contact support at https://learnrithm.com/contact.
`

const ABOUT_US = `# About Learnrithm AI

URL: https://learnrithm.com/about-us

Learnrithm AI is an AI-powered learning platform built to make personalized tutoring accessible to every student. It helps with homework, studying, and exam preparation — delivering step-by-step answers, practice quizzes, and lessons in the learner's own language.

## Mission

To make world-class, AI-powered education affordable and accessible to everyone, adapting to each learner's pace, level, and goals.

## Who it is for

K-12 students, college students, and adult or professional learners, plus the teachers, parents, and schools who support them — including learners with differences such as dyslexia and ADHD.

## Reach

Trusted by thousands of students, teachers, and schools worldwide.

## Links

- Website: https://learnrithm.com
- Features: https://learnrithm.com/features
- Pricing: https://learnrithm.com/pricing
- Contact: https://learnrithm.com/contact
- X (Twitter): https://twitter.com/learnrithmai
- Instagram: https://instagram.com/learnrithm
- Facebook: https://web.facebook.com/61566708602101/
`

const MARKDOWN = {
  home: HOME,
  features: FEATURES,
  pricing: PRICING,
  faq: FAQ,
  'about-us': ABOUT_US,
}

/** Slugs that have a markdown representation. Single source of truth for middleware + route. */
export const MARKDOWN_SLUGS = Object.keys(MARKDOWN)

/** Map a URL pathname to a markdown slug key, or null if none. */
export function slugForPath(pathname) {
  const normalized = String(pathname)
    .replace(/^\/+/, '')
    .replace(/\/+$/, '')
  if (normalized === '') return 'home'
  return MARKDOWN_SLUGS.includes(normalized) ? normalized : null
}

/** Return the markdown body for a slug key, or null. */
export function getMarkdown(slug) {
  return MARKDOWN[slug] || null
}

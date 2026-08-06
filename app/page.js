import Hero from '@/components/Hero'
import Feature from '@/components/Feature'
import Pricing from '@/components/Pricing'
import Reviews from '@/components/Reviews'
import Faq from '@/components/Faq'
import BrandSlider from '@/components/BrandSlider'
import KnowUs from '@/components/KnowUs'
import FeatureFour from '@/components/FeatureFour'
import DecisionIntelligence from '@/components/DecisionIntelligence'
import UseStape from '@/components/UseStape'
import AiAgents from '@/components/AiAgents'
import FeatureSix from '@/components/FeatureSix'

export const metadata = {
  title: "Learnrithm | AI Homework Help, Study Tools & Test Prep",
  description: "Get 24/7 AI homework help and step-by-step answers for every subject. Learnrithm's AI tutor helps students with homework, practice tests, flashcards, and SAT, ACT, and AP prep. Try it free.",
  openGraph: {
    title: "Learnrithm AI — AI Tutor & Study Helper for Students",
    description: "An AI tutor that helps students with homework, studying, and exam prep. Get step-by-step answers, practice quizzes, and lessons in your own language. Try Learnrithm AI free.",
    url: "https://learnrithm.com",
    siteName: "Learnrithm AI",
    images: [
      {
        url: "https://learnrithm.com/img/imgs.jpg",
        width: 1200,
        height: 630,
        alt: "Learnrithm AI Social Preview"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    site: "@learnrithmai",
    creator: "@learnrithmai",
    title: "Learnrithm AI — AI Tutor & Study Helper for Students",
    description: "An AI tutor that helps students with homework, studying, and exam prep. Get step-by-step answers, practice quizzes, and lessons in your own language. Try Learnrithm AI free.",
    images: ["https://learnrithm.com/img/imgs.jpg"]
  },
  canonical: "https://learnrithm.com"
}

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Learnrithm",
    url: "https://learnrithm.com",
    description: "Learnrithm is an AI tutor that helps students with homework, study, and exam prep — step-by-step answers, practice tests, and flashcards for every subject.",
    dateModified: "2026-07-17",
    publisher: { "@type": "Organization", name: "Learnrithm", url: "https://learnrithm.com" },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Hero />
      <BrandSlider />
      <Feature />
      <KnowUs />
      <FeatureFour />
      <DecisionIntelligence />
      <UseStape/>
      <AiAgents />
      <FeatureSix />
      <Reviews />
      <Pricing />
      <Faq />
    </main>
  );
}

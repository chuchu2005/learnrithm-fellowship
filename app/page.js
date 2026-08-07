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
import IdealCandidate from '@/components/IdealCandidate'
import Curriculum from '@/components/Curriculum'
import Outcomes from '@/components/Outcomes'

export const metadata = {
  title: "Learnrithm AI Fellowship | Learn to Build Real AI Apps in 12 Weeks",
  description: "The Learnrithm AI Fellowship is a free 12-week program. Learn to build real AI apps with live Zoom classes, real projects, taught by engineers from Google, OpenAI, xAI, and big tech. Beginners welcome.",
  openGraph: {
    title: "Learnrithm AI Fellowship — Build Real AI Apps in 12 Weeks",
    description: "A free 12-week program that teaches you to build real AI apps. Live classes on Zoom, real projects, taught by engineers from Google, OpenAI, xAI, and big tech. No coding experience needed.",
    url: "https://learnrithm.com",
    siteName: "Learnrithm AI Fellowship",
    images: [
      {
        url: "https://learnrithm.com/img/imgs.jpg",
        width: 1200,
        height: 630,
        alt: "Learnrithm AI Fellowship"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    site: "@learnrithmai",
    creator: "@learnrithmai",
    title: "Learnrithm AI Fellowship — Build Real AI Apps in 12 Weeks",
    description: "A free 12-week program that teaches you to build real AI apps. Live classes on Zoom, real projects, taught by engineers from Google, OpenAI, xAI, and big tech. No coding experience needed.",
    images: ["https://learnrithm.com/img/imgs.jpg"]
  },
  canonical: "https://learnrithm.com"
}

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Learnrithm AI Fellowship",
    url: "https://learnrithm.com",
    description: "The Learnrithm AI Fellowship is a free 12-week program that teaches you to build real AI apps, from beginner to job-ready.",
    dateModified: "2026-08-07",
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
      <IdealCandidate />
      <Feature />
      <KnowUs />
      <FeatureFour />
      <DecisionIntelligence />
      <UseStape/>
      <AiAgents />
      <FeatureSix />
      <Curriculum />
      <Reviews />
      <Outcomes />
      <Pricing />
      <Faq />
    </main>
  );
}

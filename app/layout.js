import { Suspense } from "react";
import { Syne, Urbanist } from "next/font/google";

import localFont from "next/font/local";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/public/css/style.css";

import ClientProviders from "@/components/ClientProviders";
import ConditionalHeader from "@/components/ConditionalHeader";
import ConditionalFooter from "@/components/ConditionalFooter";
import PageToTop from '@/components/PageToTop'
import MobileMenu from '@/components/MobileMenu'
import AdminRouteReloader from "@/components/AdminRouteReloader";
import UserDashboardSideBarTwo from "@/components/UserDashboardSideBarTwo";
import { MobileMenuProvider } from "@/context/MobileMenuContext";
import { DashboardSidebarProvider } from "@/context/DashboardSidebarContext";

// Analytics & Tracking
import GoogleAdsTag from "@/components/GoogleAdsTag";
import TwitterPixel from "@/components/TwitterPixel";
import MicrosoftClarity from "@/components/MicrosoftClarity";
import UmamiAnalytics from "@/components/UmamiAnalytics";
import { MetaPixelProvider } from "@/components/MetaPixelProvider";
import { PageViewTracker } from "@/components/tracking/PageViewTracker";
import { Analytics } from '@vercel/analytics/react';

const tropiline = localFont({
  src: [
    {
      path: "../public//fonts/Tropiline-Regular.woff2",
      style: "normal",
    },
    {
      path: "../public//fonts/Tropiline-Italic.woff2",
      style: "italic",
    },
    {
      path: "../public//fonts/Tropiline-SemiBold.woff2",
      style: "normal",
    },
    {
      path: "../public//fonts/Tropiline-SemiBoldItalic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-tropiline",
  display: "swap",
});


const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Organization Schema - JSON-LD Structured Data
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Learnrithm AI",
  "url": "https://learnrithm.com",
  "logo": "https://learnrithm.com/assets/images/logo/Full%20logo.png",
  "sameAs": [
    "https://web.facebook.com/61566708602101/",
    "https://twitter.com/learnrithmai",
    "https://instagram.com/learnrithm"
  ],
  "description": "Learnrithm AI is a smart AI tutor that helps students with homework, studying, and exam prep. Ask any question, get clear step-by-step answers, take practice quizzes, and learn in your own language.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-800-LEARNRITHM",
    "contactType": "customer service",
    "availableLanguage": ["English"]
  }
};

// FAQPage Schema for rich results
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can Learnrithm AI help me with my homework and studying?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learnrithm AI acts as your personal tutor, breaking down complex topics step-by-step, providing instant answers, and generating custom quizzes to help you master any subject. You can upload your notes, ask questions, and get explanations in text, images, and even your local language."
      }
    },
    {
      "@type": "Question",
      "name": "Is Learnrithm AI better than ChatGPT or other AI tools for students?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Learnrithm AI is designed specifically for students and learning. Unlike general AI chatbots, it adapts to your learning style, covers any subject, and provides interactive teaching, quizzes, and homework help—all in one platform."
      }
    },
    {
      "@type": "Question",
      "name": "How can I use Learnrithm AI to improve my grades?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use Learnrithm AI to get step-by-step lessons, practice with quizzes, and receive instant feedback. 94% of users improved their grades within one month, and you can learn 3x faster compared to traditional methods."
      }
    },
    {
      "@type": "Question",
      "name": "What subjects does Learnrithm AI cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learnrithm AI covers all subjects—from math and science to languages and humanities. You can ask about any topic, and the AI will teach you in a way that makes sense to you."
      }
    },
    {
      "@type": "Question",
      "name": "Can Learnrithm AI help me prepare for exams and standardized tests?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! You can generate quizzes based on exam formats, practice with past questions, and get explanations for any question you're stuck on. The AI adapts to your needs to help you feel confident for any test."
      }
    },
    {
      "@type": "Question",
      "name": "How much does Learnrithm AI cost and is there a free trial?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learnrithm AI offers an all-inclusive subscription starting at less than £2/week. There's a 14-day free trial—no credit card required—so you can try all features risk-free."
      }
    }
  ]
};

// SoftwareApplication Schema for the platform
const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Learnrithm AI",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web, iOS, Android",
  "offers": {
    "@type": "Offer",
    "price": "2",
    "priceCurrency": "GBP",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "2500"
  }
};

export const metadata = {
  metadataBase: new URL("https://learnrithm.com"),
  title: {
    default: "Learnrithm | AI Homework Help, Study Tools & Test Prep",
    template: '%s | Learnrithm'
  },
  description: "Get 24/7 AI homework help and step-by-step answers for every subject. Learnrithm's AI tutor helps students with homework, practice tests, flashcards, and SAT, ACT, and AP prep. Try it free.",
  keywords: [
    // What students actually type
    "homework help",
    "help with homework",
    "homework answers",
    "homework helper",
    "homework app",
    "math help",
    "math solver",
    "science help",
    "essay help",
    "study help",
    "study app",
    "study buddy",

    // Tools they look for
    "ai tutor",
    "ai homework help",
    "ai homework solver",
    "ai study tool",
    "ai study buddy",
    "ai teacher",
    "online tutor",
    "flashcards",
    "quiz maker",
    "practice test",
    "study planner",

    // Exams & revision — searched by name
    "exam revision",
    "revision notes",
    "past papers",
    "study for a test",
    "sat prep",
    "act prep",
    "gcse revision",
    "a level revision",
    "jamb prep",
    "jamb past questions",
    "waec past questions",
    "neco past questions",
    "ielts prep",
    "toefl prep",

    // How they learn
    "learn faster",
    "memorize faster",
    "study tips",
    "understand math",
    "learn in my language",

    // Subject help
    "biology help",
    "chemistry help",
    "physics help",
    "history help",

    // High-intent — exact phrases students type (from SEO research)
    "math problem solver",
    "ai math solver",
    "solve math by photo",
    "answer scanner",
    "snap homework",
    "test prep",
    "study aid",
    "free homework help",
    "homework answers free",
    "step by step math solver",
    "gpa calculator",
    "grade calculator",
    "summary generator",
    "study notes",
    "cbt practice",
    "past question app",

    // Brand
    "learnrithm",
    "learnrithm ai"
  ],
  authors: [{ name: "Learnrithm AI" }],
  publisher: "Learnrithm AI",
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
        alt: 'Learnrithm AI - AI Learning Platform',
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: 'summary_large_image',
    site: "@learnrithmai",
    creator: "@learnrithmai",
    title: "Learnrithm AI — AI Tutor & Study Helper for Students",
    description: "An AI tutor that helps students with homework, studying, and exam prep. Get step-by-step answers, practice quizzes, and lessons in your own language. Try Learnrithm AI free.",
    images: ["https://learnrithm.com/img/imgs.jpg"]
  },
  icons: {
    icon: "/Logomark.png",
  },
  // Additional SEO meta tags
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${tropiline.variable} ${syne.className} ${urbanist.className}`}>

      <head>
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </head>

      <body className="main--body">
        {/* Analytics & Tracking */}
        <GoogleAdsTag />
        <TwitterPixel />
        <MicrosoftClarity />
        <UmamiAnalytics />
        <Analytics />
        <Suspense fallback={null}>
          <PageViewTracker />
        </Suspense>

        <AdminRouteReloader />
        <MobileMenuProvider>
          <DashboardSidebarProvider>
            <Suspense fallback={null}>
              <MetaPixelProvider>
                <PageToTop />
                <ConditionalHeader />
                <MobileMenu />
                <UserDashboardSideBarTwo />

                <ClientProviders />
                {children}
                <ConditionalFooter />
              </MetaPixelProvider>
            </Suspense>
          </DashboardSidebarProvider>
        </MobileMenuProvider>
      </body>
    </html>
  );
}

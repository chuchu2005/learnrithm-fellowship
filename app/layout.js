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
  "description": "Learnrithm AI runs a free 12-week Software Engineering Fellowship that teaches people to build real AI apps, from beginner to job-ready.",
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
      "name": "What is the Learnrithm AI Fellowship?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It is a free 12-week program where you learn to build real AI apps. You join live classes on Zoom, build real projects, and learn directly from software engineers at Google, OpenAI, Grok, and other big tech companies."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to know how to code to join?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Beginners are welcome. We start from the basics and teach you step by step, so you do not need any coding experience before you start."
      }
    },
    {
      "@type": "Question",
      "name": "How long is the fellowship and how does it work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The program runs for 12 weeks. You join live classes on Zoom each week with about 25 to 30 other learners, build real projects, and get help whenever you get stuck."
      }
    },
    {
      "@type": "Question",
      "name": "What will I build during the fellowship?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You will build chatbots, AI tools that read files and answer questions, and other apps people really use. By the end, your apps go live on the internet for real people to try."
      }
    },
    {
      "@type": "Question",
      "name": "Is the Learnrithm AI Fellowship really free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The program is free to join, with no hidden fees."
      }
    },
    {
      "@type": "Question",
      "name": "Will the fellowship help me get a job?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. You finish with real projects you built and the skills to apply for tech jobs or start your own thing. Many fellows use their projects to show employers what they can do."
      }
    }
  ]
};

// SoftwareApplication Schema for the platform
const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Learnrithm AI Software Engineering Fellowship",
  "description": "A free 12-week program that teaches you to build real AI apps. Live classes on Zoom, real projects, taught by engineers from Google, OpenAI, Grok, and big tech. Beginners welcome.",
  "provider": {
    "@type": "Organization",
    "name": "Learnrithm AI",
    "sameAs": "https://learnrithm.com"
  }
};

export const metadata = {
  metadataBase: new URL("https://learnrithm.com"),
  title: {
    default: "Learnrithm AI Fellowship | Learn to Build Real AI Apps in 12 Weeks",
    template: '%s | Learnrithm AI Fellowship'
  },
  description: "The Learnrithm AI Fellowship is a free 12-week program. Learn to build real AI apps with live Zoom classes, real projects, taught by engineers from Google, OpenAI, Grok, and big tech. Beginners welcome.",
  keywords: [
    // What people search for
    "ai fellowship",
    "software engineering fellowship",
    "ai engineering fellowship",
    "tech fellowship",
    "coding fellowship",
    "ai bootcamp",
    "ai developer program",
    "learn to build ai apps",
    "build ai applications",
    "ai app development",
    "full stack ai development",
    "learn ai engineering",
    "become an ai engineer",
    "ai engineer training",
    "machine learning fellowship",
    "generative ai course",
    "rag",
    "ai chatbot course",
    "llm application course",
    "ai projects for portfolio",
    "job ready ai skills",
    "learn to code ai",
    "beginner ai coding",
    "ai career program",
    "free ai program",
    "free coding program",
    "12 week ai program",
    "live ai coding classes",
    "online ai engineering program",
    "career switch to ai",

    // Brand
    "learnrithm",
    "learnrithm ai",
    "learnrithm fellowship"
  ],
  authors: [{ name: "Learnrithm AI" }],
  publisher: "Learnrithm AI",
  openGraph: {
    title: "Learnrithm AI Fellowship — Build Real AI Apps in 12 Weeks",
    description: "A free 12-week program that teaches you to build real AI apps. Live classes on Zoom, real projects, taught by engineers from Google, OpenAI, Grok, and big tech. No coding experience needed.",
    url: "https://learnrithm.com",
    siteName: "Learnrithm AI Fellowship",
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
    title: "Learnrithm AI Fellowship — Build Real AI Apps in 12 Weeks",
    description: "A free 12-week program that teaches you to build real AI apps. Live classes on Zoom, real projects, taught by engineers from Google, OpenAI, Grok, and big tech. No coding experience needed.",
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

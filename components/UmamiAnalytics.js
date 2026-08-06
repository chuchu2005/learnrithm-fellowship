"use client";

import Script from 'next/script';

// Umami Analytics Configuration
const UMAMI_SCRIPT_URL = 'https://analytics.learnrithm.com/script.js';
const UMAMI_WEBSITE_ID = '44e06cf0-95e3-4b82-9232-2850e86212c9';

export default function UmamiAnalytics() {
  return (
    <Script
      src={UMAMI_SCRIPT_URL}
      data-website-id={UMAMI_WEBSITE_ID}
      strategy="afterInteractive"
    />
  );
}

'use client';

import Script from 'next/script';
import { useEffect } from 'react';

// Google Analytics and Google Ads IDs
const GA_MEASUREMENT_ID = 'G-9YT0CNK5CR';
const GA_SECONDARY_ID = 'G-DKC92NQNY4';
const GOOGLE_ADS_ID = 'AW-11484520472';

export default function GoogleAdsTag() {
  useEffect(() => {
    // Initialize dataLayer if it doesn't exist
    window.dataLayer = window.dataLayer || [];

    // Define gtag function
    window.gtag = function(...args) {
      window.dataLayer.push(args);
    };

    // Initial configuration
    window.gtag('js', new Date());
    window.gtag('config', 'G-9YT0CNK5CR');
    window.gtag('config', 'G-DKC92NQNY4');
    window.gtag('config', 'AW-11484520472');

    // Log initialization for debugging
    if (process.env.NODE_ENV === 'development') {
      console.log('Google Ads Tag initialized');
    }
  }, []);

  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-9YT0CNK5CR"
        strategy="afterInteractive"
      />
      <Script id="google-ads-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9YT0CNK5CR');
          gtag('config', 'G-DKC92NQNY4');
          gtag('config', 'AW-11484520472');
        `}
      </Script>
    </>
  );
}

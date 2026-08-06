// Utility functions for tracking events with Google Ads and Analytics

// Google Ads Conversion ID
const GOOGLE_ADS_ID = 'AW-11484520472';
const GA_MEASUREMENT_ID = 'G-9YT0CNK5CR';

// Track a page view
export const trackPageView = (url) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('config', GOOGLE_ADS_ID, {
    page_path: url,
  });
};

// Track a conversion event
export const trackConversion = (options) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  const {
    eventName = 'conversion',
    eventCategory = 'engagement',
    eventLabel = 'interaction',
    eventValue,
    conversionId = GOOGLE_ADS_ID,
    conversionLabel = 'tSKKCIX-wMoZEJjAn-Qq',
  } = options;

  // Standard event tracking
  window.gtag('event', eventName, {
    event_category: eventCategory,
    event_label: eventLabel,
    ...(eventValue !== undefined && { value: eventValue }),
  });

  // Google Ads conversion tracking
  window.gtag('event', 'conversion', {
    send_to: `${conversionId}/${conversionLabel}`,
    ...(eventValue !== undefined && { value: eventValue, currency: 'USD' }),
  });
};

// Track form submission
export const trackFormSubmission = (formId, value) => {
  trackConversion({
    eventName: 'form_submission',
    eventCategory: 'form',
    eventLabel: `form_${formId}_submitted`,
    eventValue: value,
  });
};

// Track button click
export const trackButtonClick = (buttonId, value) => {
  trackConversion({
    eventName: 'button_click',
    eventCategory: 'engagement',
    eventLabel: `button_${buttonId}_clicked`,
    eventValue: value,
  });
};

// Track scroll depth
export const trackScrollDepth = (threshold) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  const handleScroll = () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercent >= threshold) {
      trackConversion({
        eventName: 'scroll',
        eventCategory: 'engagement',
        eventLabel: `scrolled_${threshold}%`,
        eventValue: threshold,
      });
      window.removeEventListener('scroll', handleScroll);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
};

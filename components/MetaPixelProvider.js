'use client';

import { useEffect, useCallback } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { initFacebookPixel, trackPageView, trackEvent } from '@/lib/facebook-pixel';

export const MetaPixelProvider = ({ children }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initialize Facebook Pixel and track page views
  useEffect(() => {
    if (typeof window !== 'undefined') {
      initFacebookPixel();
      trackPageView();
    }
  }, [pathname, searchParams]);

  return <>{children}</>;
};

// Hook to track button clicks
export const useTrackButtonClick = (buttonId, eventName, customData = {}) => {
  const handleClick = useCallback(async (e) => {
    // Prevent default to avoid any default button behavior
    e.preventDefault();

    // Call the original onClick handler if it exists
    const target = e.currentTarget;
    const clickEvent = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
    });

    // Dispatch the click event
    target.dispatchEvent(clickEvent);

    // Track the button click
    try {
      const { sendMetaEvent } = await import('@/lib/meta-conversion');
      await sendMetaEvent({
        eventName,
        eventId: `${buttonId}_${Date.now()}`,
        customData: {
          button_id: buttonId,
          ...customData,
        },
      });

      // Track with Facebook Pixel directly
      trackEvent(eventName, {
        content_name: buttonId,
        ...customData,
      });
    } catch (error) {
      console.error('Error tracking button click:', error);
    }
  }, [buttonId, eventName, customData]);

  return handleClick;
};

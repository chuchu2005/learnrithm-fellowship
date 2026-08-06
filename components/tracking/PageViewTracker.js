'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackPageView } from '@/lib/analytics';

export function PageViewTracker({ scrollThresholds = [25, 50, 75, 90] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const trackedThresholds = useRef(new Set());

  // Track page view on route change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = `${pathname}${searchParams?.toString() ? `?${searchParams.toString()}` : ''}`;
      trackPageView(url);

      // Reset tracked thresholds on page change
      trackedThresholds.current.clear();
    }
  }, [pathname, searchParams]);

  // Track scroll depth
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round((scrollPosition / pageHeight) * 100);

      // Check each threshold
      scrollThresholds.forEach((threshold) => {
        if (scrollPercentage >= threshold && !trackedThresholds.current.has(threshold)) {
          trackPageView(`${pathname}#scrolled-${threshold}%`);
          trackedThresholds.current.add(threshold);
        }
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname, scrollThresholds]);

  return null;
}

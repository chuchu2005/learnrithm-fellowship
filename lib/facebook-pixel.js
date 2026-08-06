// Facebook Pixel helper functions
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '3422125667938466';
const META_ACCESS_TOKEN = process.env.META_CONVERSION_API_ACCESS_TOKEN;

// Check if we're in development mode
const isDevelopment = process.env.NODE_ENV === 'development';

// Type declaration for the Facebook Pixel function
// Initialize the Facebook Pixel
export const initFacebookPixel = () => {
  // Don't initialize in development mode
  if (isDevelopment) {
    return;
  }

  if (!FB_PIXEL_ID) {
    console.warn('Facebook Pixel ID is not set');
    return;
  }

  if (typeof window === 'undefined') {
    return;
  }

  // Initialize the Facebook Pixel if it doesn't exist
  if (typeof window.fbq !== 'undefined' && window.fbq !== null) {
    return;
  }

  const n = function(...args) {
    if (n.queue) {
      n.queue.push(args);
    }
  };

  n.push = n;
  n.loaded = true;
  n.version = '2.0';
  n.queue = [];

  window.fbq = n;
  window._fbq = n;

  // Create and inject the script
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';

  const firstScript = document.getElementsByTagName('script')[0];
  if (firstScript && firstScript.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript);
  } else {
    document.head.appendChild(script);
  }

  // Initialize the pixel
  window.fbq('init', FB_PIXEL_ID);
  window.fbq('track', 'PageView');
};

// Track page view
export const trackPageView = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
  }
};

// Track custom event
export const trackEvent = (
  eventName,
  eventData = {}
) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, eventData);
  }
};

// Send event to Meta Conversion API
export const sendMetaEvent = async (event) => {
  if (!META_ACCESS_TOKEN) {
    console.warn('Meta Conversion API access token is not set');
    return;
  }

  try {
    const payload = {
      data: [{
        event_name: event.eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: event.eventId,
        event_source_url: event.eventSourceUrl || (typeof window !== 'undefined' ? window.location.href : ''),
        action_source: event.actionSource || 'website',
        user_data: {
          ...(event.userData || {}),
          client_ip_address: event.userData?.client_ip_address || '',
          client_user_agent: event.userData?.client_user_agent || (typeof window !== 'undefined' ? window.navigator.userAgent : ''),
        },
        custom_data: event.customData || {}
      }],
      access_token: META_ACCESS_TOKEN,
      pixel_id: FB_PIXEL_ID
    };

    const response = await fetch(`https://graph.facebook.com/v16.0/${FB_PIXEL_ID}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Meta Conversion API error:', error);
      return { success: false, error };
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending event to Meta Conversion API:', error);
    return { success: false, error };
  }
};

// Track complete registration (for signup/login)
export const trackCompleteRegistration = (userData) => {
  trackEvent('CompleteRegistration', {
    content_name: 'User Registration',
    status: 'success',
    ...userData,
  });
};

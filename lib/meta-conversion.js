const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const META_ACCESS_TOKEN = process.env.META_CONVERSION_API_ACCESS_TOKEN;

// Client-side cookie handling
const getCookie = (name) => {
  if (typeof document === 'undefined') return undefined;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
};

const setCookie = (name, value, options = { maxAge: 60 * 60 * 24 * 365 }) => {
  if (typeof document === 'undefined') return;
  document.cookie = `${name}=${value}; path=/; max-age=${options.maxAge}; samesite=lax`;
};

// Helper function to get or create fbp cookie
export const getOrCreateFbp = () => {
  // Client-side only implementation
  if (typeof document === 'undefined') return '';

  const fbp = getCookie('_fbp');
  if (fbp) return fbp;

  const newFbp = `fb.1.${Date.now()}.${Math.random().toString(16).substr(2, 12)}`;
  setCookie('_fbp', newFbp);
  return newFbp;
};

// Helper function to get or create fbc cookie
export const getOrCreateFbc = () => {
  if (typeof window === 'undefined') return null;

  const urlParams = new URLSearchParams(window.location.search);
  const fbc = urlParams.get('fbclid')
    ? `fb.1.${Date.now()}.${urlParams.get('fbclid')}`
    : getCookie('_fbc') || null;

  if (fbc && !getCookie('_fbc')) {
    setCookie('_fbc', fbc);
  }

  return fbc;
};

// Main function to send events to Meta Conversion API
export const sendMetaEvent = async ({
  eventName,
  eventId,
  userData,
  customData = {},
}) => {
  if (!META_PIXEL_ID || !META_ACCESS_TOKEN) {
    console.warn('Meta Pixel ID or Access Token not configured');
    return;
  }

  const fbp = getOrCreateFbp();
  const fbc = getOrCreateFbc();
  const eventTime = Math.floor(Date.now() / 1000);

  const eventData = {
    event_name: eventName,
    event_time: eventTime,
    event_source_url: typeof window !== 'undefined' ? window.location.href : '',
    action_source: 'website',
    event_id: eventId,
    user_data: {
      ...userData,
      fbp,
      ...(fbc && { fbc }),
      client_user_agent: typeof window !== 'undefined' ? window.navigator.userAgent : '',
      client_ip_address: '0.0.0.0', // Will be populated by the server
    },
    custom_data: customData,
  };

  try {
    const response = await fetch(`/api/meta/conversion`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: [eventData],
        accessToken: META_ACCESS_TOKEN,
        pixelId: META_PIXEL_ID,
      }),
    });

    if (!response.ok) {
      console.error('Failed to send Meta event:', await response.text());
    }
  } catch (error) {
    console.error('Error sending Meta event:', error);
  }
};

// Track page view
export const trackPageView = () => {
  const eventId = `pageview_${Date.now()}`;
  sendMetaEvent({
    eventName: 'PageView',
    eventId,
  });
};

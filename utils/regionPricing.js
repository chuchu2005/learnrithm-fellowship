// Import the comprehensive country currency map
import { getCurrencyForCountry } from './countryCurrencyMap.js';

// Regional pricing configuration
const REGIONAL_PRICING = {
  africa: {
    region: 'africa',
    currency: 'USD',
    locale: 'en-US',
    tiers: {
      free: { id: 'free', name: 'Free Plan', monthly: 0, yearly: 0 },
      monthly: { id: 'monthly', name: 'Monthly Plan', monthly: 1.99, yearly: 1.99 * 12 },
      yearly: { id: 'yearly', name: 'Yearly Plan', monthly: 19.99 / 12, yearly: 19.99 }
    }
  },
  europe: {
    region: 'europe',
    currency: 'GBP',
    locale: 'en-GB',
    tiers: {
      free: { id: 'free', name: 'Free Plan', monthly: 0, yearly: 0 },
      monthly: { id: 'monthly', name: 'Monthly Plan', monthly: 9.99, yearly: 9.99 * 12 },
      yearly: { id: 'yearly', name: 'Yearly Plan', monthly: 99.99, yearly: 99.99 }
    }
  },
  northAmerica: {
    region: 'northAmerica',
    currency: 'USD',
    locale: 'en-US',
    tiers: {
      free: { id: 'free', name: 'Free Plan', monthly: 0, yearly: 0 },
      monthly: { id: 'monthly', name: 'Monthly Plan', monthly: 9.99, yearly: 9.99 * 12 },
      yearly: { id: 'yearly', name: 'Yearly Plan', monthly: 99.99, yearly: 99.99 }
    }
  },
  australia: {
    region: 'australia',
    currency: 'AUD',
    locale: 'en-AU',
    tiers: {
      free: { id: 'free', name: 'Free Plan', monthly: 0, yearly: 0 },
      monthly: { id: 'monthly', name: 'Monthly Plan', monthly: 14.99, yearly: 14.99 * 12 },
      yearly: { id: 'yearly', name: 'Yearly Plan', monthly: 149.99, yearly: 149.99 }
    }
  },
  asia: {
    region: 'asia',
    currency: 'USD',
    locale: 'en-US',
    tiers: {
      free: { id: 'free', name: 'Free Plan', monthly: 0, yearly: 0 },
      monthly: { id: 'monthly', name: 'Monthly Plan', monthly: 4.99, yearly: 4.99 * 12 },
      yearly: { id: 'yearly', name: 'Yearly Plan', monthly: 59.99, yearly: 59.99 }
    }
  },
  southAmerica: {
    region: 'southAmerica',
    currency: 'USD',
    locale: 'en-US',
    tiers: {
      free: { id: 'free', name: 'Free Plan', monthly: 0, yearly: 0 },
      monthly: { id: 'monthly', name: 'Monthly Plan', monthly: 4.99, yearly: 4.99 * 12 },
      yearly: { id: 'yearly', name: 'Yearly Plan', monthly: 59.99, yearly: 59.99 }
    }
  }
};

/**
 * Maps country codes to regions
 */
function getRegionForCountry(countryCode) {
  const upperCode = countryCode ? countryCode.toUpperCase() : 'US';

  // Africa
  const africaCountries = ['NG', 'ZA', 'KE', 'GH', 'EG', 'MA', 'TN', 'DZ', 'LY', 'AO', 'BW', 'CV', 'CM', 'TD', 'CF', 'CG', 'CD', 'DJ', 'GQ', 'ER', 'SZ', 'ET', 'GA', 'GM', 'GN', 'GW', 'CI', 'LS', 'LR', 'MG', 'MW', 'ML', 'MR', 'MU', 'MZ', 'NA', 'NE', 'RW', 'ST', 'SN', 'SC', 'SL', 'SO', 'SS', 'SD', 'TZ', 'TG', 'UG', 'ZM', 'ZW', 'BI', 'BJ', 'BF'];
  if (africaCountries.includes(upperCode)) return 'africa';

  // Europe
  const europeCountries = ['GB', 'DE', 'FR', 'IT', 'ES', 'NL', 'BE', 'CH', 'AT', 'SE', 'NO', 'DK', 'FI', 'IE', 'PT', 'PL', 'CZ', 'HU', 'RO', 'BG', 'GR', 'HR', 'SI', 'SK', 'EE', 'LV', 'LT', 'LU', 'MT', 'CY', 'AD', 'AL', 'AM', 'AZ', 'BY', 'BA', 'GE', 'IS', 'LI', 'MC', 'MD', 'ME', 'MK', 'RS', 'SM', 'UA', 'VA', 'XK'];
  if (europeCountries.includes(upperCode)) return 'europe';

  // North America
  const northAmericaCountries = ['US', 'CA', 'MX', 'GT', 'BZ', 'SV', 'HN', 'NI', 'CR', 'PA', 'CU', 'DO', 'HT', 'JM', 'TT', 'BS', 'BB', 'LC', 'VC', 'AG', 'KN', 'DM', 'GD'];
  if (northAmericaCountries.includes(upperCode)) return 'northAmerica';

  // Australia
  const australiaCountries = ['AU', 'NZ', 'FJ', 'PG', 'SB', 'VU', 'WS', 'TO', 'TV', 'KI', 'MH', 'FM', 'PW', 'NR', 'NU', 'CK'];
  if (australiaCountries.includes(upperCode)) return 'australia';

  // Asia
  const asiaCountries = ['IN', 'JP', 'CN', 'KR', 'SG', 'TH', 'MY', 'ID', 'PH', 'VN', 'TW', 'HK', 'BD', 'PK', 'LK', 'NP', 'MM', 'KH', 'LA', 'MN', 'BN', 'TL', 'BT', 'MV', 'AF', 'KP', 'KZ', 'KG', 'TJ', 'TM', 'UZ', 'MO'];
  if (asiaCountries.includes(upperCode)) return 'asia';

  // South America
  const southAmericaCountries = ['BR', 'AR', 'CO', 'PE', 'VE', 'CL', 'EC', 'BO', 'UY', 'GY', 'SR', 'PY', 'FK'];
  if (southAmericaCountries.includes(upperCode)) return 'southAmerica';

  // Default to North America
  return 'northAmerica';
}

/**
 * Detects user's region based on IP geolocation
 * Uses ip-api.com (free, no API key required, 45 req/min limit)
 */
export async function detectUserRegion() {
  try {
    const response = await fetch('http://ip-api.com/json/', {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
    });

    const data = await response.json();

    // Check if API request was successful
    if (data.status !== 'success') {
      throw new Error(`IP API request failed: ${data.message}`);
    }

    const countryCode = data.countryCode || 'US';

    // Get currency info using comprehensive country map
    const currencyInfo = getCurrencyForCountry(countryCode);
    const region = getRegionForCountry(countryCode);
    const regionalPricing = getRegionalPricing(region);

    console.log('🌍 Geolocation:', {
      countryCode,
      countryName: data.country,
      region,
      currency: currencyInfo.code,
      symbol: currencyInfo.symbol,
      pricing: regionalPricing
    });

    return {
      country: data.country || 'Unknown',
      countryCode: countryCode,
      currency: currencyInfo.code,
      locale: currencyInfo.locale,
      region: region,
      pricing: regionalPricing
    };
  } catch (error) {
    console.warn('Region detection failed, using default:', error);
    return {
      country: 'United States',
      countryCode: 'US',
      currency: 'USD',
      locale: 'en-US',
      region: 'northAmerica',
      pricing: REGIONAL_PRICING.northAmerica
    };
  }
}

/**
 * Gets pricing configuration for a specific region
 */
export function getRegionalPricing(region) {
  return REGIONAL_PRICING[region] || REGIONAL_PRICING.europe;
}

/**
 * Gets cached region info from session storage
 */
export function getCachedRegion() {
  if (typeof window === 'undefined') return null;

  try {
    const cached = sessionStorage.getItem('userRegion');
    return cached ? JSON.parse(cached) : null;
  } catch (error) {
    return null;
  }
}

/**
 * Caches region info in session storage
 */
export function cacheRegion(regionInfo) {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.setItem('userRegion', JSON.stringify(regionInfo));
  } catch (error) {
    console.warn('Failed to cache region:', error);
  }
}

/**
 * Gets base USD pricing (used for currency conversion)
 */
export function getBaseUSDPricing() {
  return {
    tiers: {
      free: { id: 'free', name: 'Free Plan', monthly: 0, yearly: 0 },
      monthly: { id: 'monthly', name: 'Monthly Plan', monthly: 9.99, yearly: 9.99 * 12 },
      yearly: { id: 'yearly', name: 'Yearly Plan', monthly: 8.33, yearly: 99.99 }
    }
  };
}

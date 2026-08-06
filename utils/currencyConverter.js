// Currency symbols mapping for display
const CURRENCY_SYMBOLS = {
  USD: '$',
  GBP: '£',
  EUR: '€',
  AUD: 'A$',
  CAD: 'C$',
  JPY: '¥',
  CNY: '¥',
  INR: '₹',
  BRL: 'R$',
  ZAR: 'R',
  NGN: '₦',
  EGP: 'E£',
  KES: 'KSh',
  GHS: '₵',
  MAD: 'د.م.',
  TND: 'د.ت',
  DZD: 'د.ج',
  LYD: 'ل.د',
  AOA: 'Kz',
  CHF: 'Fr',
  SEK: 'kr',
  NOK: 'kr',
  DKK: 'kr',
  PLN: 'zł',
  CZK: 'Kč',
  HUF: 'Ft',
  RON: 'lei',
  BGN: 'лв',
  HRK: 'kn',
  MXN: '$',
  NZD: 'NZ$',
  KRW: '₩',
  SGD: 'S$',
  THB: '฿',
  MYR: 'RM',
  IDR: 'Rp',
  PHP: '₱',
  VND: '₫',
  TWD: 'NT$',
  HKD: 'HK$',
  BDT: '৳',
  PKR: '₨',
  LKR: 'රු',
  NPR: 'रू',
  MMK: 'K',
  KHR: '៛',
  LAK: '₭',
  MNT: '₮',
  ARS: '$',
  COP: '$',
  PEN: 'S/',
  VES: 'Bs.',
  CLP: '$',
  BOB: 'Bs.',
  UYU: '$',
  GYD: 'G$',
  SRD: '$',
  PYG: '₲',
  ALL: 'L',
  AMD: '֏',
  AZN: '₼',
  BYN: 'Br',
  BAM: 'KM',
  GEL: '₾',
  ISK: 'kr',
  RSD: 'дин',
  MKD: 'ден',
};

/**
 * Fetches exchange rates from exchangerate-api.com
 * Uses caching to avoid excessive API calls (1 hour cache)
 */
export async function fetchExchangeRates() {
  const CACHE_KEY = 'fx_rates_usd';
  const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

  // Check cache first
  if (typeof window !== 'undefined') {
    try {
      const cached = sessionStorage.getItem(CACHE_KEY);
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        const isExpired = Date.now() - timestamp > CACHE_DURATION;

        if (!isExpired) {
          console.log('Using cached exchange rates');
          return data;
        }
      }
    } catch (error) {
      console.warn('Failed to parse cached exchange rates:', error);
    }
  }

  try {
    console.log('Fetching fresh exchange rates...');
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Exchange rate API request failed: ${response.status}`);
    }

    const data = await response.json();
    console.log('Exchange rates fetched:', { base: data.base, ratesCount: Object.keys(data.rates).length });

    // Cache the rates
    if (typeof window !== 'undefined') {
      try {
        const cacheData = {
          data,
          timestamp: Date.now()
        };
        sessionStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
      } catch (error) {
        console.warn('Failed to cache exchange rates:', error);
      }
    }

    return data;
  } catch (error) {
    console.error('Failed to fetch exchange rates:', error);
    throw new Error('Unable to fetch current exchange rates');
  }
}

/**
 * Converts USD amount to target currency using exchange rates
 */
export function convertCurrency(usdAmount, targetCurrency, rates) {
  if (targetCurrency === 'USD') {
    return usdAmount;
  }

  const rate = rates?.rates[targetCurrency];
  if (!rate) {
    console.warn(`Exchange rate not found for currency: ${targetCurrency}, using USD`);
    return usdAmount;
  }

  return usdAmount * rate;
}

/**
 * Formats price with currency symbol
 */
export function formatPrice(amount, currencyCode) {
  const symbol = CURRENCY_SYMBOLS[currencyCode] || currencyCode || '$';
  return `${symbol}${amount.toFixed(2)}`;
}

/**
 * Gets currency symbol for a currency code
 */
export function getCurrencySymbol(currencyCode) {
  return CURRENCY_SYMBOLS[currencyCode] || currencyCode || '$';
}

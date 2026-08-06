"use client";
import { useState, useEffect } from 'react';
import { detectUserRegion, getCachedRegion, cacheRegion, getBaseUSDPricing, REGIONAL_PRICING } from '@/utils/regionPricing';
import { fetchExchangeRates, convertCurrency, getCurrencySymbol } from '@/utils/currencyConverter';

export function usePricingByRegion() {
  const [pricing, setPricing] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [exchangeRates, setExchangeRates] = useState(null);

  useEffect(() => {
    let mounted = true;

    const loadPricing = async () => {
      // Try to get cached region first
      const cached = getCachedRegion();

      // Fetch exchange rates (cached automatically for 1 hour)
      let rates = null;
      try {
        rates = await fetchExchangeRates();
        if (mounted) setExchangeRates(rates);
      } catch (error) {
        console.warn('Failed to fetch exchange rates, using base prices:', error);
      }

      if (cached && mounted) {
        // Use cached region with real-time conversion
        // Use regional pricing if available, otherwise fall back to base USD pricing
        const basePricing = cached.pricing || getBaseUSDPricing();
        const convertedPricing = convertPricingWithRates(basePricing, cached.currency, rates);

        setPricing({
          region: cached,
          pricing: convertedPricing,
          exchangeRates: rates,
          formattedPrices: {
            free: { formatted: 'Free', currency: cached.currency },
            monthly: {
              formatted: formatConvertedPrice(convertedPricing.tiers.monthly.monthly, cached.currency),
              currency: cached.currency
            },
            yearly: {
              formatted: formatConvertedPrice(convertedPricing.tiers.yearly.yearly, cached.currency),
              currency: cached.currency
            }
          }
        });
        setIsLoading(false);
        return;
      }

      // Detect user's region
      setIsLoading(true);
      try {
        const regionInfo = await detectUserRegion();
        if (!mounted) return;

        cacheRegion(regionInfo);
        // Use regional pricing if available, otherwise fall back to base USD pricing
        const basePricing = regionInfo.pricing || getBaseUSDPricing();
        const convertedPricing = convertPricingWithRates(basePricing, regionInfo.currency, rates);

        setPricing({
          region: regionInfo,
          pricing: convertedPricing,
          exchangeRates: rates,
          formattedPrices: {
            free: { formatted: 'Free', currency: regionInfo.currency },
            monthly: {
              formatted: formatConvertedPrice(convertedPricing.tiers.monthly.monthly, regionInfo.currency),
              currency: regionInfo.currency
            },
            yearly: {
              formatted: formatConvertedPrice(convertedPricing.tiers.yearly.yearly, regionInfo.currency),
              currency: regionInfo.currency
            }
          }
        });
      } catch (error) {
        console.error('Failed to load pricing:', error);
        if (mounted) {
          // Default to Europe pricing
          const defaultPricing = getBaseUSDPricing();
          setPricing({
            region: { region: 'europe', currency: 'GBP', locale: 'en-GB' },
            pricing: defaultPricing,
            exchangeRates: null,
            formattedPrices: {
              free: { formatted: 'Free', currency: 'GBP' },
              monthly: { formatted: '$9.99 USD', currency: 'USD' },
              yearly: { formatted: '$99.99 USD', currency: 'USD' }
            }
          });
        }
      } finally {
        if (mounted) setIsLoading(false);
      }
    };

    loadPricing();

    return () => { mounted = false; };
  }, []);

  return { pricing, isLoading, exchangeRates };
}

/**
 * Converts pricing from USD to target currency using exchange rates
 */
function convertPricingWithRates(basePricing, targetCurrency, rates) {
  // Guard against undefined basePricing or missing tiers
  if (!basePricing || !basePricing.tiers) {
    console.warn('Invalid base pricing structure:', basePricing);
    return basePricing;
  }

  // If no rates or USD target, return base pricing
  if (!rates || targetCurrency === 'USD') {
    return basePricing;
  }

  try {
    return {
      ...basePricing,
      tiers: {
        free: { ...basePricing.tiers.free },
        monthly: {
          ...basePricing.tiers.monthly,
          monthly: convertCurrency(basePricing.tiers.monthly.monthly, targetCurrency, rates),
          yearly: convertCurrency(basePricing.tiers.monthly.yearly, targetCurrency, rates)
        },
        yearly: {
          ...basePricing.tiers.yearly,
          monthly: convertCurrency(basePricing.tiers.yearly.monthly, targetCurrency, rates),
          yearly: convertCurrency(basePricing.tiers.yearly.yearly, targetCurrency, rates)
        }
      }
    };
  } catch (error) {
    console.error('Error converting pricing:', error);
    return basePricing;
  }
}

/**
 * Formats converted price with currency symbol
 */
function formatConvertedPrice(amount, currencyCode) {
  const symbol = getCurrencySymbol(currencyCode);
  return `${symbol}${amount.toFixed(2)}`;
}

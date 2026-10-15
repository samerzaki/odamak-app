// Formatting utilities

import { format, formatDistance, formatDistanceToNow } from 'date-fns';
import { ar, enUS } from 'date-fns/locale';
import type { Language } from './translations';

/**
 * Format price with specific currency
 */
export function formatPriceWithCurrency(
  price: number | string | null | undefined,
  currency: string = 'EGP',
  locale: string = 'ar-EG'
): string {
  // Handle null, undefined, or empty values
  if (price === null || price === undefined || price === '') {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: currency === 'USD' ? 2 : 0,
      maximumFractionDigits: currency === 'USD' ? 2 : 0,
      currencyDisplay: 'symbol', // Show $ or EGP symbol
      numberingSystem: 'latn',
    }).format(0);
  }

  // Convert string to number if needed
  const numPrice = typeof price === 'string' ? parseFloat(price) : price;

  // Handle NaN or invalid numbers
  if (isNaN(numPrice)) {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: currency === 'USD' ? 2 : 0,
      maximumFractionDigits: currency === 'USD' ? 2 : 0,
      currencyDisplay: 'symbol', // Show $ or EGP symbol
      numberingSystem: 'latn',
    }).format(0);
  }

  // Force English locale for USD to show "$ 99.29" consistently.
  const effectiveLocale = currency === 'USD' ? 'en-US' : locale;

  return new Intl.NumberFormat(effectiveLocale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: currency === 'USD' ? 2 : 0,
    maximumFractionDigits: currency === 'USD' ? 2 : 0,
    currencyDisplay: 'symbol',
    numberingSystem: 'latn',
  }).format(numPrice);
}

/**
 * Format price with Egyptian pound currency (legacy, uses formatPriceWithCurrency)
 */
export function formatPrice(price: number | string | null | undefined): string {
  return formatPriceWithCurrency(price, 'EGP');
}

/**
 * Format price change with sign
 */
export function formatPriceChange(change: number | string | null | undefined): string {
  // Handle null, undefined, or empty values
  if (change === null || change === undefined || change === '') {
    return '+0';
  }
  
  // Convert string to number if needed
  const numChange = typeof change === 'string' ? parseFloat(change) : change;
  
  // Handle NaN or invalid numbers
  if (isNaN(numChange)) {
    return '+0';
  }
  
  const sign = numChange >= 0 ? '+' : '';
  return `${sign}${formatPrice(numChange)}`;
}

/**
 * Format percentage change
 */
export function formatPercent(percent: number | string | null | undefined): string {
  // Handle null, undefined, or empty values
  if (percent === null || percent === undefined || percent === '') {
    return '+0.00%';
  }
  
  // Convert string to number if needed
  const numPercent = typeof percent === 'string' ? parseFloat(percent) : percent;
  
  // Handle NaN or invalid numbers
  if (isNaN(numPercent)) {
    return '+0.00%';
  }
  
  const sign = numPercent >= 0 ? '+' : '';
  return `${sign}${numPercent.toFixed(2)}%`;
}

/**
 * Format date to Arabic locale
 */
export function formatDate(date: string | Date, formatStr: string = 'PPP'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, formatStr, { locale: ar });
}

/**
 * Format relative time (e.g., "منذ 5 دقائق" / "5 minutes ago")
 */
export function formatRelativeTime(date: string | Date, lang?: Language): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const locale = lang === 'en' ? enUS : ar;
  return formatDistanceToNow(dateObj, { addSuffix: true, locale });
}

/**
 * Format a number with Latin (English) digits.
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US', { numberingSystem: 'latn' }).format(num);
}

/**
 * Format a signed number with a leading +/- sign and fixed decimals.
 */
export function formatSigned(value: number, digits: number = 2): string {
  const sign = value >= 0 ? '+' : '−';
  return `${sign}${Math.abs(value).toFixed(digits)}`;
}

/**
 * Current time in Cairo with an English AM/PM marker for the live-market clock.
 */
export function cairoClock(date: Date = new Date()): string {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Africa/Cairo',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    numberingSystem: 'latn',
  }).formatToParts(date);
  const value = (type: Intl.DateTimeFormatPartTypes) => parts.find((part) => part.type === type)?.value ?? '00';
  const hour24 = Number(value('hour'));
  const hour12 = hour24 % 12 || 12;
  const period = hour24 < 12 ? 'AM' : 'PM';

  return `${String(hour12).padStart(2, '0')}:${value('minute')}:${value('second')} ${period}`;
}

/**
 * Check if a price update is "live" (within last 5 minutes)
 * @param recordedAt - ISO timestamp of when the price was recorded
 * @returns true if the price is less than 5 minutes old
 */
export function isPriceLive(
  recordedAt: string | Date | null | undefined,
  referenceTime: string | Date = new Date()
): boolean {
  if (!recordedAt) return false;

  const dateObj = typeof recordedAt === 'string' ? new Date(recordedAt) : recordedAt;

  // Check for invalid date
  if (isNaN(dateObj.getTime())) return false;

  const now = typeof referenceTime === 'string' ? new Date(referenceTime) : referenceTime;
  const diffInMinutes = (now.getTime() - dateObj.getTime()) / (1000 * 60);
  return diffInMinutes < 5;
}

/**
 * Format last update time for display
 * Shows "مباشر"/"Live" if within 5 minutes, otherwise shows relative time
 * @param recordedAt - ISO timestamp of when the price was recorded
 * @param lang - Language for formatting ('ar' or 'en')
 * @returns Formatted string for display
 */
export function formatLastUpdate(
  recordedAt: string | Date | null | undefined,
  lang?: Language,
  referenceTime?: string | Date
): string {
  if (!recordedAt) return lang === 'en' ? 'N/A' : 'غير متوفر';

  if (isPriceLive(recordedAt, referenceTime)) {
    return lang === 'en' ? 'Live' : 'مباشر';
  }
  if (referenceTime) {
    const dateObj = typeof recordedAt === 'string' ? new Date(recordedAt) : recordedAt;
    const referenceDate = typeof referenceTime === 'string' ? new Date(referenceTime) : referenceTime;
    return formatDistance(dateObj, referenceDate, { addSuffix: true, locale: lang === 'en' ? enUS : ar });
  }

  return formatRelativeTime(recordedAt, lang);
}

/**
 * Format date and time
 * @param date - Date to format
 * @param lang - Language for formatting ('ar' or 'en')
 * @returns Formatted date and time string
 */
export function formatDateTime(date: string | Date | null | undefined, lang?: Language): string {
  if (!date) return lang === 'en' ? 'N/A' : 'غير متوفر';

  const dateObj = typeof date === 'string' ? new Date(date) : date;

  // Check for invalid date
  if (isNaN(dateObj.getTime())) return lang === 'en' ? 'N/A' : 'غير متوفر';

  const locale = lang === 'en' ? enUS : ar;
  return format(dateObj, 'PPp', { locale });
}

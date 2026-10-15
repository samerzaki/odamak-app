'use client';

import { SectionCard } from '@/components/ui/section-card';
import { useLanguage } from '@/contexts/language-context';
import { useCurrencyAverages } from '@/hooks/use-currency-prices';
import type { CurrencyCode } from '@/lib/mock-currency-data';

const QUICK_AMOUNTS = [1, 5, 10, 25, 50, 100, 500, 1000, 5000, 10000];

const CURRENCY_NAMES: Record<CurrencyCode, { ar: string; en: string }> = {
  USD: { ar: 'دولار أمريكي', en: 'US Dollar' },
  EUR: { ar: 'يورو', en: 'Euro' },
  SAR: { ar: 'ريال سعودي', en: 'Saudi Riyal' },
  AED: { ar: 'درهم إماراتي', en: 'UAE Dirham' },
  KWD: { ar: 'دينار كويتي', en: 'Kuwaiti Dinar' },
  GBP: { ar: 'جنيه إسترليني', en: 'British Pound' },
};

interface ReadyConvertedAmountsCardProps {
  currency: CurrencyCode;
}

export function ReadyConvertedAmountsCard({ currency }: ReadyConvertedAmountsCardProps) {
  const { language } = useLanguage();
  const { data, isLoading } = useCurrencyAverages(currency, 'EGP');
  const rate = data?.data?.banks?.avg_sell_rate ?? null;
  const currencyName = CURRENCY_NAMES[currency][language];
  const numberFormat = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
  const egpLabel = language === 'ar' ? 'جنيه' : 'EGP';

  return (
    <SectionCard>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[280px] border-collapse text-[13px]" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          <thead className="bg-panel2 text-[11.5px] text-dim">
            <tr>
              <th className="border-b border-line px-4 py-3 text-start font-medium">
                {currencyName}
              </th>
              <th className="border-s border-b border-line px-4 py-3 text-start font-medium">
                {egpLabel}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {QUICK_AMOUNTS.map((amount) => (
              <tr key={amount} className="transition-colors hover:bg-hover">
                <td className="px-4 py-3.5 font-semibold text-text">
                  <span className="num" dir="ltr">{amount.toLocaleString('en-US')}</span>{' '}
                  <span className="text-muted">{currencyName}</span>
                </td>
                <td className="border-s border-line px-4 py-3.5 font-semibold text-text">
                  {isLoading || rate === null ? (
                    <span className="text-dim">—</span>
                  ) : (
                    <>
                      <span className="num" dir="ltr">{numberFormat.format(amount * rate)}</span>{' '}
                      <span className="text-muted">{egpLabel}</span>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionCard>
  );
}

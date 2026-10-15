'use client';

import { Sparkline } from '@/components/ui/sparkline';
import { ChangeChip } from '@/components/ui/change-badge';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useLanguage } from '@/contexts/language-context';
import { translations, type Language } from '@/lib/translations';
import { Calculator } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { ModernGoldDataItem } from '@/components/dashboard/modern-gold-prices-server';

const ROW_ORDER: ModernGoldDataItem['nameKey'][] = ['karat21', 'karat24', 'karat18', 'karat14', 'pound'];

function getName(nameKey: string, t: any) {
  const names: Record<string, string> = {
    karat24: t.gold.karat24,
    karat22: 'Gold 22K',
    karat21: t.gold.karat21,
    karat18: t.gold.karat18,
    karat14: 'Gold 14K',
    pound: t.gold.pound,
    ounce: t.gold.ounce,
  };
  return names[nameKey] || nameKey;
}

function formatCardPrice(price: number, currency: string, locale: string) {
  const fractionDigits = currency === 'USD' ? 2 : 0;
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
    numberingSystem: 'latn',
  }).format(price);
}

function getChangeTooltip(language: Language) {
  return language === 'ar'
    ? 'نسبة تغيّر السعر منذ بداية اليوم'
    : 'Price change since the start of today';
}

interface GoldPriceCardsProps {
  goldData: ModernGoldDataItem[];
}

export function GoldPriceCards({ goldData }: GoldPriceCardsProps) {
  const { language } = useLanguage();
  const [displayLanguage, setDisplayLanguage] = useState<Language>('ar');

  useEffect(() => {
    setDisplayLanguage(language);
  }, [language]);

  const t = translations[displayLanguage];
  const locale = displayLanguage === 'en' ? 'en-US' : 'ar-EG';
  const direction = displayLanguage === 'ar' ? 'rtl' : 'ltr';
  const textAlign = displayLanguage === 'ar' ? 'right' : 'left';
  const currencyLabel = (currency: string) => currency === 'EGP'
    ? (displayLanguage === 'ar' ? t.common.egp : 'EGP')
    : currency;
  const rows = ROW_ORDER.map((key) => goldData.find((item) => item.nameKey === key)).filter(
    (item): item is ModernGoldDataItem => Boolean(item)
  );

  return (
    <section aria-labelledby="gold-prices-title" dir={direction}>
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 id="gold-prices-title" className="font-heading text-[18px] font-semibold text-text md:text-[20px]">
          {t.gold.tableTitle}
        </h2>
        <Button size="sm" asChild>
          <Link href="/gold/calculator">
            <Calculator className="h-4 w-4" />
            {t.sidebar.goldCalculator}
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {rows.map((item) => {
          const isOunce = item.nameKey === 'ounce';
          const cardTone = item.trend === 'down' ? 'down' : item.trend === 'up' ? 'up' : 'gold';

          return (
            <article key={item.id} className="card-surface min-w-0 p-5">
              <div className="flex w-full items-start justify-between gap-3" dir={direction}>
                <div className="min-w-0" style={{ textAlign }}>
                  <h3 className="font-heading text-[14px] font-semibold text-text">{getName(item.nameKey, t)}</h3>
                  <TooltipProvider delayDuration={150}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="mt-1.5 inline-flex cursor-help">
                          <ChangeChip
                            value={item.changePercent}
                            tone={item.trend === 'neutral' ? undefined : item.trend}
                            className="!gap-0.5 !rounded-md !px-2 !py-1 !text-[10px] !leading-none"
                          />
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>{getChangeTooltip(displayLanguage)}</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>

              <div className="mt-6" style={{ textAlign }}>
                <p className="text-[12px] text-muted">{t.home2026.consumerSell}</p>
                <p className="num mt-0.5 text-[25px] font-medium leading-tight tracking-[-0.04em] text-text" dir="ltr" style={{ textAlign }}>
                  {formatCardPrice(item.sellPrice, item.currency, locale)}
                  <span className="ms-1.5 font-sans text-[11px] font-normal tracking-normal text-dim">{currencyLabel(item.currency)}</span>
                </p>
              </div>

              <div className="mt-5 border-t border-line2 pt-4">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="text-[11px] text-muted">{t.home2026.goldsmithBuy}</p>
                    {isOunce ? (
                      <p className="num mt-0.5 text-[14px] leading-tight text-dim">—</p>
                    ) : (
                      <p className="num mt-0.5 text-[14px] leading-tight text-text" dir="ltr">
                        {formatCardPrice(item.buyPrice, item.currency, locale)}
                        <span className="ms-1 font-sans text-[10px] font-normal text-dim">{currencyLabel(item.currency)}</span>
                      </p>
                    )}
                  </div>
                  <div className="min-w-[72px] text-end">
                    <p className="mb-1 text-[10px] text-muted">{t.gold.days30Column}</p>
                    <Sparkline data={item.history} width={84} height={28} tone={cardTone} className="ms-auto" />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bell, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionCard } from '@/components/ui/section-card';
import { StatTile } from '@/components/ui/stat-tile';
import { LiveDot } from '@/components/ui/live-dot';
import { Sparkline } from '@/components/ui/sparkline';
import { ChangeChip, ChangeText } from '@/components/ui/change-badge';
import { formatNumber, formatSigned, cairoClock } from '@/lib/format';
import { useLanguage } from '@/contexts/language-context';
import { PriceAlertModal } from '@/components/dashboard/price-alert-modal';
import type { GoldOverviewItem } from '@/types';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export type GoldItemType = '24' | '21' | '18' | 'gold_pound' | 'ounce';

const GOLD_ITEM_IMAGES: Record<GoldItemType, string> = {
  '24': '/gold-items/bar2.webp',
  '21': '/gold-items/ring.webp',
  '18': '/gold-items/necklace.webp',
  gold_pound: '/gold-items/coin.webp',
  ounce: '/gold-items/ounce.webp',
};

function GoldItemIcon({ type }: { type: GoldItemType }) {
  return (
    <span className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#fff8e7] ring-1 ring-amber-900/5 dark:bg-[#2b210e] dark:ring-amber-200/10 sm:size-11">
      <Image
        src={GOLD_ITEM_IMAGES[type]}
        alt=""
        width={144}
        height={144}
        unoptimized
        className="size-full object-contain"
      />
    </span>
  );
}

export interface HeroKaratRow {
  id: GoldItemType;
  name: string;
  sellPrice: number;
  currency: string;
  changePercent: number | null;
  changeColor?: 'red' | 'green';
  chartPoints: number[];
  lastCheckedAtForHuman?: string;
  live?: boolean;
}

interface HeroProps {
  karat21: GoldOverviewItem | null;
  history7d: number[];
  rows: HeroKaratRow[];
}

function getChangeTooltip(
  value: number | null,
  color: 'red' | 'green' | undefined,
  language: string
): string | undefined {
  if (value === null || !Number.isFinite(value)) return undefined;

  const increased = color ? color === 'green' : value >= 0;
  const percentage = Math.abs(value).toFixed(2);

  return language === 'ar'
    ? `${increased ? 'ارتفع' : 'انخفض'} ${percentage}% منذ بداية اليوم`
    : `${increased ? 'Up' : 'Down'} ${percentage}% since the start of day`;
}

function LiveClock() {
  const { language } = useLanguage();
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(cairoClock());
    const id = setInterval(() => setTime(cairoClock()), 1000);
    return () => clearInterval(id);
  }, []);

  const [digits, period] = (time ?? '--:--:--').split(' ');
  const periodLabel = language === 'ar'
    ? period === 'AM' ? 'صباحًا' : period === 'PM' ? 'مساءً' : ''
    : period;

  return (
    <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-[13px] text-text" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <span className="num" dir="ltr">{digits}</span>
      {periodLabel && <span className="font-sans" dir={language === 'ar' ? 'rtl' : 'ltr'}>{periodLabel}</span>}
    </span>
  );
}

export function Hero({ karat21, history7d, rows }: HeroProps) {
  const { language, t } = useLanguage();
  const [alertOpen, setAlertOpen] = useState(false);

  const sellPrice = karat21?.price.sell ?? 0;
  const buyPrice = karat21?.price.buy ?? 0;
  const currency = karat21?.currency ?? 'EGP';
  const changeValue = karat21?.change.value ?? 0;
  const changePercent = karat21?.change.percent ?? null;
  const changeColor = karat21?.change.color === 'green' || karat21?.change.color === 'red'
    ? karat21.change.color
    : undefined;
  const heroChangeTooltip = getChangeTooltip(changePercent, changeColor, language);
  const validHistory = history7d.filter(Number.isFinite);
  const move7d =
    validHistory.length >= 2 && validHistory[0] !== 0
      ? ((validHistory[validHistory.length - 1] - validHistory[0]) / validHistory[0]) * 100
      : null;

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-11 py-7 md:py-10">
      {/* Left */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <LiveDot tone={karat21?.last_checked.live ? 'up' : 'down'} size={7} />
          <span className="text-[13px] text-muted">{t.home2026.liveCairo}</span>
          <LiveClock />
        </div>

        <h1 className="font-heading text-[17px] md:text-[18px] font-semibold text-muted mb-2">
          {t.home2026.gold21Title}
        </h1>

        <div className="flex items-end gap-3 flex-wrap mb-3">
          <span className="num font-medium leading-[0.84] tracking-[-3px] md:tracking-[-5px] text-gold text-[56px] md:text-[106px]">
            {formatNumber(Math.round(sellPrice))}
          </span>
          <span className="text-muted text-[16px] md:text-[19px] mb-1 md:mb-3">{t.common.egp}</span>
          <TooltipProvider delayDuration={150}>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="mb-1 md:mb-3 inline-flex cursor-help">
                  <ChangeChip
                    value={changePercent}
                    tone={changeColor === 'green' ? 'up' : changeColor === 'red' ? 'down' : undefined}
                  />
                </span>
              </TooltipTrigger>
              {heroChangeTooltip && (
                <TooltipContent className="!bg-black !text-white">{heroChangeTooltip}</TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        </div>

        <p className="text-[13px] text-muted mb-7">
          <span className="num">{formatSigned(changeValue, 0)}</span> {t.common.egp} {t.home2026.vsYesterday}
        </p>

        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-7">
          <StatTile
            label={t.home2026.consumerSell}
            value={
              <span className="flex items-baseline gap-1.5" dir={language === 'ar' ? 'rtl' : 'ltr'} style={{ unicodeBidi: 'isolate' }}>
                {formatNumber(Math.round(sellPrice))}
                <span className="font-sans text-[11px] font-normal text-dim">{t.home2026.egyptianPound}</span>
              </span>
            }
            compact
            valueDirection={language === 'ar' ? 'rtl' : 'ltr'}
          />
          <StatTile
            label={t.home2026.goldsmithBuy}
            value={
              <span className="flex items-baseline gap-1.5" dir={language === 'ar' ? 'rtl' : 'ltr'} style={{ unicodeBidi: 'isolate' }}>
                {formatNumber(Math.round(buyPrice))}
                <span className="font-sans text-[11px] font-normal text-dim">{t.home2026.egyptianPound}</span>
              </span>
            }
            compact
            valueDirection={language === 'ar' ? 'rtl' : 'ltr'}
          />
          <div className="stat-tile flex-1 flex flex-col justify-between">
            <div className="text-[11.5px] text-dim">{language === 'ar' ? '7 أيام' : '7 Days'}</div>
            <div className="flex items-center gap-2 mt-2">
              {validHistory.length >= 2 && <Sparkline data={validHistory} tone="auto" width={50} height={18} />}
              {move7d !== null ? (
                <ChangeText value={move7d} withArrow={false} className="text-[14px]" />
              ) : (
                <span className="num text-[14px] text-dim">—</span>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button asChild variant="inverse" size="lg">
            <Link href="/gold/calculator">
              <Calculator className="size-4" />
              {t.home2026.calculatePurchase}
            </Link>
          </Button>
          <Button variant="outline" size="lg" onClick={() => setAlertOpen(true)}>
            <Bell className="size-4" />
            {t.home2026.notifyPriceChange}
          </Button>
        </div>
      </div>

      {/* Right */}
      <SectionCard
        title={<Link href="/gold" className="hover:text-gold transition-colors">{t.home2026.allKaratsNow}</Link>}
        action={
          <Link href="/gold" className="text-[13px] text-gold hover:opacity-75 transition-opacity">
            {t.home2026.details}
          </Link>
        }
      >
        <TooltipProvider delayDuration={150}>
          <div className="p-2.5">
            {rows.map((row) => (
            <div
              key={row.id}
              className="grid grid-cols-[auto_auto_minmax(0,1fr)_auto_auto] items-center gap-3 px-4 py-[18px] rounded-xl hover:bg-hover transition-colors"
            >
              <GoldItemIcon type={row.id} />
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="inline-flex cursor-help" aria-label={row.lastCheckedAtForHuman}>
                    <LiveDot tone={row.live ? 'up' : 'down'} size={7} />
                  </span>
                </TooltipTrigger>
                {row.lastCheckedAtForHuman && (
                  <TooltipContent className="!bg-black !text-white">{row.lastCheckedAtForHuman}</TooltipContent>
                )}
              </Tooltip>
              <span className="font-heading text-[15px] text-text min-w-0 truncate">{row.name}</span>
              <span className="flex items-baseline gap-3 justify-end">
                <span
                  className="flex items-baseline gap-1"
                  dir={language === 'ar' ? 'rtl' : 'ltr'}
                  style={{ direction: language === 'ar' ? 'rtl' : 'ltr', unicodeBidi: 'isolate' }}
                >
                  <span className="num text-[20px] md:text-[22px] font-medium text-text whitespace-nowrap">
                    {formatNumber(row.sellPrice)}
                  </span>
                  <span className="text-[11px] text-dim whitespace-nowrap">
                    {row.currency === 'USD' ? 'USD' : language === 'en' ? 'EGP' : t.home2026.egyptianPound}
                  </span>
                </span>
                <span className="w-[58px] text-end shrink-0">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="inline-flex cursor-help">
                        <ChangeText
                          value={row.changePercent}
                          withArrow={false}
                          tone={row.changeColor === 'green' ? 'up' : row.changeColor === 'red' ? 'down' : undefined}
                          className="text-[12.5px]"
                        />
                      </span>
                    </TooltipTrigger>
                    {getChangeTooltip(row.changePercent, row.changeColor, language) && (
                      <TooltipContent className="!bg-black !text-white">
                        {getChangeTooltip(row.changePercent, row.changeColor, language)}
                      </TooltipContent>
                    )}
                  </Tooltip>
                </span>
              </span>
              {row.chartPoints.length >= 2 ? (
                <Sparkline data={row.chartPoints} width={60} height={18} tone="auto" />
              ) : (
                <span className="w-[60px]" />
              )}
            </div>
            ))}
          </div>
        </TooltipProvider>
      </SectionCard>

      <PriceAlertModal
        isOpen={alertOpen}
        onClose={() => setAlertOpen(false)}
        goldType={t.home2026.gold21Title}
        currentPrice={sellPrice}
        currency={currency}
      />
    </section>
  );
}

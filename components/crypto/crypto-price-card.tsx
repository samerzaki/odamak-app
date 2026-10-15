'use client';

import { formatPriceWithCurrency } from '@/lib/format';
import { cn } from '@/lib/utils';
import type { CryptoPrice } from '@/types';
import { useLanguage } from '@/contexts/language-context';
import { Sparkline } from '@/components/ui/sparkline';
import { ChangeText } from '@/components/ui/change-badge';

interface CryptoPriceCardProps {
  crypto: CryptoPrice;
  wideAtTablet?: boolean;
}

function formatCompactUsd(value: number): string {
  if (!Number.isFinite(value)) return '—';

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    maximumFractionDigits: 2,
  }).format(value);
}

export function CryptoPriceCard({ crypto, wideAtTablet = false }: CryptoPriceCardProps) {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const hasChart = crypto.chart_points?.length > 1;
  const coinName = isRTL ? crypto.nameAr || crypto.name : crypto.name;

  return (
    <article
      dir={isRTL ? 'rtl' : 'ltr'}
      className={cn(
        'card-surface flex min-w-0 flex-col p-5 transition-shadow hover:shadow-gold',
        wideAtTablet && 'md:col-span-2 xl:col-span-1'
      )}
    >
      <div className="flex min-w-0 items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          {crypto.image ? (
            <img
              src={crypto.image}
              alt=""
              className="size-10 shrink-0 rounded-full object-cover"
              loading="lazy"
            />
          ) : (
            <div aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gold-soft font-bold text-gold">
              {(crypto.symbol || crypto.name || '?').slice(0, 1)}
            </div>
          )}
          <div className="min-w-0">
            <h3 className="font-heading text-base font-semibold text-text">
              <bdi dir="ltr">{crypto.symbol}</bdi>
            </h3>
            <p className="truncate text-xs text-muted" title={coinName}>{coinName}</p>
          </div>
        </div>
        {Number.isFinite(crypto.rank) && crypto.rank > 0 && (
          <span
            dir="ltr"
            aria-label={isRTL ? `الترتيب ${crypto.rank}` : `Rank ${crypto.rank}`}
            className="num chip shrink-0"
          >
            #{crypto.rank}
          </span>
        )}
      </div>

      <div className={cn('mt-5 flex flex-1 flex-col', wideAtTablet && 'md:grid md:grid-cols-2 md:gap-6 xl:flex xl:flex-col xl:gap-0')}>
        <div className="min-w-0 pb-5">
          <p className="mb-1 text-xs font-medium text-muted">{isRTL ? 'السعر بالدولار' : 'Price in USD'}</p>
          <p className="min-w-0 text-text">
            <bdi dir="ltr" className="num inline-block max-w-full text-[clamp(1.5rem,2.5vw,2rem)] font-semibold leading-tight tracking-tight">
              {formatPriceWithCurrency(crypto.price_usd, 'USD', 'en-US')}
            </bdi>
          </p>
          {crypto.price_egp !== undefined && crypto.price_egp !== null && (
            <div className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-0.5 text-xs text-muted">
              <span>{isRTL ? 'بالجنيه المصري' : 'In EGP'}</span>
              <bdi className="num" dir="ltr">
                {formatPriceWithCurrency(crypto.price_egp, 'EGP', isRTL ? 'ar-EG' : 'en-US')}
              </bdi>
            </div>
          )}
          <div className="mt-4 flex min-w-0 items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2">
              <span dir="ltr" className="shrink-0 text-xs text-muted">24h</span>
              <ChangeText value={crypto.change_24h} direction="ltr" className="text-sm" />
            </div>
            {hasChart && (
              <Sparkline
                data={crypto.chart_points}
                width={88}
                height={28}
                tone={crypto.change_24h >= 0 ? 'up' : 'down'}
              />
            )}
          </div>
        </div>

        <div className={cn(
          'mt-auto grid grid-cols-2 gap-3 border-t border-line pt-4',
          wideAtTablet && 'md:mt-0 md:content-center md:border-s md:border-t-0 md:ps-6 md:pt-0 xl:mt-auto xl:border-s-0 xl:border-t xl:ps-0 xl:pt-4'
        )}>
          <div className="min-w-0">
            <p className="text-xs text-muted">{isRTL ? 'القيمة السوقية' : 'Market cap'}</p>
            <p className="mt-1 text-sm font-semibold text-text"><bdi className="num" dir="ltr">{formatCompactUsd(crypto.market_cap)}</bdi></p>
          </div>
          <div className="min-w-0">
            <p className="text-xs text-muted">{isRTL ? <>حجم التداول <bdi dir="ltr">24h</bdi></> : '24h volume'}</p>
            <p className="mt-1 text-sm font-semibold text-text"><bdi className="num" dir="ltr">{formatCompactUsd(crypto.volume_24h)}</bdi></p>
          </div>
        </div>
      </div>
    </article>
  );
}

export function CryptoPriceCardSkeleton({ wideAtTablet = false }: { wideAtTablet?: boolean }) {
  return (
    <div className={cn('card-surface min-w-0 p-5 animate-pulse', wideAtTablet && 'md:col-span-2 xl:col-span-1')}>
      <div className="flex items-center gap-3">
        <div className="size-10 shrink-0 rounded-full bg-panel2" />
        <div className="space-y-2">
          <div className="h-4 w-16 rounded bg-panel2" />
          <div className="h-3 w-24 rounded bg-panel2" />
        </div>
      </div>
      <div className={cn('mt-5', wideAtTablet && 'md:grid md:grid-cols-2 md:gap-6 xl:block')}>
        <div>
          <div className="h-3 w-24 rounded bg-panel2" />
          <div className="mt-2 h-9 w-44 max-w-full rounded bg-panel2" />
          <div className="mt-4 h-5 w-20 rounded bg-panel2" />
        </div>
        <div className={cn('mt-5 grid grid-cols-2 gap-3 border-t border-line pt-4', wideAtTablet && 'md:mt-0 md:border-s md:border-t-0 md:ps-6 md:pt-0 xl:mt-5 xl:border-s-0 xl:border-t xl:ps-0 xl:pt-4')}>
          <div className="h-9 rounded bg-panel2" />
          <div className="h-9 rounded bg-panel2" />
        </div>
      </div>
    </div>
  );
}

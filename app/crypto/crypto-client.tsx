'use client';

import { useState } from 'react';
import { CryptoPriceCard, CryptoPriceCardSkeleton } from '@/components/crypto/crypto-price-card';
import { CryptoMarketTable, CryptoMarketTableSkeleton } from '@/components/crypto/crypto-market-table';
import { useCryptoPrices, useCryptoTop } from '@/hooks/use-crypto-prices';
import { useLanguage } from '@/contexts/language-context';
import { AlertCircle, Calculator } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { CryptoInitialData } from './crypto-featured-server';

interface CryptoPageClientProps {
  initialData: CryptoInitialData | null;
}

export function CryptoPageClient({ initialData }: CryptoPageClientProps) {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const [page, setPage] = useState(1);

  const hasInitialData = !!initialData;
  const isFirstPage = page === 1;

  // React Query hooks always run — they'll fill the cache for refresh
  const { data: listData, isLoading: listLoading, error: listError } = useCryptoPrices(page);
  const { data: topCryptos, isLoading: topLoading, error: topError } = useCryptoTop();

  // Use initial data as fallback until client hooks resolve
  const effectiveTopCryptos = topCryptos ?? (hasInitialData ? initialData.topCryptos : undefined);
  const effectiveListData = listData ?? (hasInitialData && isFirstPage ? initialData.initialList : undefined);
  const effectiveListLoading = effectiveListData ? false : listLoading;
  const effectiveTopLoading = effectiveTopCryptos ? false : topLoading;

  const isInitialLoading = effectiveListLoading && effectiveTopLoading;
  const error = listError || topError;

  if (isInitialLoading) {
    return <LoadingState />;
  }

  if (error && !effectiveListData && !effectiveTopCryptos?.length) {
    return <ErrorState message={error instanceof Error ? error.message : 'Failed to load crypto data'} isRTL={isRTL} />;
  }

  return (
    <div className="space-y-8">
      {/* Featured Cryptos (Top 3) */}
      {effectiveTopCryptos && effectiveTopCryptos.length > 0 && (
        <section>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-heading text-xl font-bold text-text">
              {isRTL ? 'العملات المميزة' : 'Featured Cryptocurrencies'}
            </h2>
            <Button size="sm" asChild>
              <Link href="/crypto/calculator">
                <Calculator className="h-4 w-4" />
                {isRTL ? 'حاسبة العملات الرقمية' : 'Crypto Calculator'}
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {effectiveTopCryptos.map((crypto, index) => (
              <CryptoPriceCard key={crypto.id} crypto={crypto} wideAtTablet={index === 2} />
            ))}
          </div>
        </section>
      )}

      {/* Market Overview Table */}
      <section>
        {effectiveListLoading && !effectiveListData ? (
          <CryptoMarketTableSkeleton />
        ) : (
          <CryptoMarketTable
            cryptos={effectiveListData?.cryptos ?? []}
            pagination={effectiveListData?.pagination}
            onPageChange={setPage}
            isLoading={listLoading}
          />
        )}
      </section>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="space-y-8">
      <div>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="h-7 w-48 rounded bg-panel2 animate-pulse" />
          <div className="h-9 w-40 rounded bg-panel2 animate-pulse" />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <CryptoPriceCardSkeleton key={i} wideAtTablet={i === 3} />
          ))}
        </div>
      </div>
      <CryptoMarketTableSkeleton />
    </div>
  );
}

function ErrorState({ message, isRTL }: { message: string; isRTL: boolean }) {
  return (
    <div className="card-surface p-6 border border-down/20">
      <div className="flex items-center gap-3">
        <AlertCircle className="h-6 w-6 text-down" />
        <div>
          <h3 className="font-semibold text-text">
            {isRTL ? 'خطأ في تحميل البيانات' : 'Error loading data'}
          </h3>
          <p className="text-sm text-muted">{message}</p>
        </div>
      </div>
    </div>
  );
}

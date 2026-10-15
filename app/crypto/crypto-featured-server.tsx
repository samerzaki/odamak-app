import { fetchCryptoTop, fetchCryptoList } from '@/lib/api';
import { adaptCryptoTopItem, adaptCryptoApiItem, adaptCryptoPagination } from '@/lib/crypto-adapters';
import { CryptoPageClient } from './crypto-client';
import { Skeleton } from '@/components/ui/skeleton';
import { CryptoMarketTableSkeleton } from '@/components/crypto/crypto-market-table';
import { CryptoPriceCardSkeleton } from '@/components/crypto/crypto-price-card';
import type { CryptoPrice, CryptoPaginatedResult } from '@/types';

export interface CryptoInitialData {
  topCryptos: CryptoPrice[];
  initialList: CryptoPaginatedResult;
}

export async function CryptoPageServer() {
  try {
    const [topRes, listRes] = await Promise.all([
      fetchCryptoTop(),
      fetchCryptoList(1, 20),
    ]);

    const initialData: CryptoInitialData = {
      topCryptos: topRes.data.map(adaptCryptoTopItem),
      initialList: {
        cryptos: listRes.data.map(adaptCryptoApiItem),
        pagination: adaptCryptoPagination(listRes.pagination),
      },
    };

    return <CryptoPageClient initialData={initialData} />;
  } catch {
    // Fall back to client-side fetching on error
    return <CryptoPageClient initialData={null} />;
  }
}

export function CryptoPageSkeleton() {
  return (
    <div className="space-y-8">
      <div>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <Skeleton className="h-7 w-48" />
          <Skeleton className="h-9 w-40" />
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

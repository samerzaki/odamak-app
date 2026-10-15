import { ModernGoldPricesServer, ModernGoldPricesSkeleton } from '@/components/dashboard/modern-gold-prices-server';
import { UnifiedGoldChartServer } from '@/components/charts/unified-gold-chart-server';
import { GlobalGoldHistory } from '@/components/charts/global-gold-history';
import { AutoRefreshWrapper } from '@/components/dashboard/auto-refresh-wrapper';
import { Suspense } from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo-config';

export const metadata: Metadata = buildMetadata('gold', { canonicalPath: '/gold' });
export const revalidate = 60;

export default function GoldPricesPage() {
  return (
    <AutoRefreshWrapper>
      <div className="space-y-8">
        <Suspense fallback={<ModernGoldPricesSkeleton />}>
          <ModernGoldPricesServer />
        </Suspense>

        <div className="grid grid-cols-1 items-start gap-5 xl:grid-cols-2">
          <UnifiedGoldChartServer />
          <GlobalGoldHistory />
        </div>
      </div>
    </AutoRefreshWrapper>
  );
}

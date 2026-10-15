import { Suspense } from 'react';
import { CryptoPageServer, CryptoPageSkeleton } from './crypto-featured-server';
import { AutoRefreshWrapper } from '@/components/dashboard/auto-refresh-wrapper';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo-config';

export const metadata: Metadata = buildMetadata('crypto', { canonicalPath: '/crypto' });
export const revalidate = 60;

export default function CryptoPage() {
  return (
    <AutoRefreshWrapper>
      <Suspense fallback={<CryptoPageSkeleton />}>
        <CryptoPageServer />
      </Suspense>
    </AutoRefreshWrapper>
  );
}

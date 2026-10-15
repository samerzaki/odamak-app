import React, { Suspense } from "react";
import { UnifiedDashboardServer, UnifiedDashboardSkeleton } from "@/components/currency/unified-dashboard-server";
import { AutoRefreshWrapper } from "@/components/dashboard/auto-refresh-wrapper";
import { CurrenciesPageHeader } from "./currencies-page-header";
import type { Metadata } from "next";
import { buildMetadata } from '@/lib/seo-config';

export const metadata: Metadata = buildMetadata('currencies', { canonicalPath: '/currencies' });
export const revalidate = 60;

export default function CurrenciesPage() {
  return (
    <AutoRefreshWrapper>
      <div className="space-y-8">
        <CurrenciesPageHeader />

        <Suspense fallback={<UnifiedDashboardSkeleton />}>
          <UnifiedDashboardServer />
        </Suspense>

        {/* <MarketGuidance
          title="قبل تحويل العملات"
          intro="قارن بين أكثر من سعر عند توفره، وراجع وقت التحديث وشروط البنك أو مزود الخدمة قبل تنفيذ التحويل."
          points={[
            'فرق الشراء والبيع قد يختلف بين البنوك والفروع.',
            'الأسعار المعروضة مرجعية ولا تغني عن التأكيد من الجهة المنفذة.',
            'استخدم الحاسبة لتقدير المبلغ قبل الذهاب إلى البنك أو شركة الصرافة.',
          ]}
          questions={[
            { question: 'هل سعر التحويل في الحاسبة ملزم؟', answer: 'لا، هو تقدير مبني على البيانات المتاحة؛ السعر النهائي تحدده الجهة المنفذة.' },
            { question: 'ما الفرق بين سعر الشراء وسعر البيع؟', answer: 'سعر الشراء هو ما تدفعه الجهة لشراء العملة، وسعر البيع هو ما تطلبه لبيعها لك.' },
          ]}
        /> */}
      </div>
    </AutoRefreshWrapper>
  );
}

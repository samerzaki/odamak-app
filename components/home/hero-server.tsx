import { fetchGoldOverview } from '@/lib/api';
import { Hero, type HeroKaratRow } from './hero';
import type { GoldOverviewItem } from '@/types';

type GoldKey = '24' | '21' | '18' | 'gold_pound' | 'ounce';

const ROW_META: { dataKey: GoldKey; name: string }[] = [
  { dataKey: '21', name: 'عيار 21' },
  { dataKey: '24', name: 'عيار 24' },
  { dataKey: '18', name: 'عيار 18' },
  { dataKey: 'gold_pound', name: 'جنيه ذهب' },
  { dataKey: 'ounce', name: 'أونصة $' },
];

export async function HeroServer() {
  try {
    const overview = await fetchGoldOverview();
    const goldData = overview.data?.gold;
    const karat21 = goldData?.['21'] ?? null;

    const rows: HeroKaratRow[] = ROW_META.map((meta) => {
      const item = goldData?.[meta.dataKey] as GoldOverviewItem | null | undefined;
      if (!item) return null;
      const row: HeroKaratRow = {
        id: meta.dataKey,
        name: meta.name,
        sellPrice: item.price.sell,
        currency: item.currency,
        changePercent: item.change.percent,
        changeColor: item.change.color === 'green' || item.change.color === 'red' ? item.change.color : undefined,
        chartPoints: item.chart_points_7d ?? [],
        lastCheckedAtForHuman: item.last_checked.last_checked_at_for_human,
        live: item.last_checked.live,
      };
      return row;
    }).filter((row): row is HeroKaratRow => row !== null);

    return (
      <Hero
        karat21={karat21}
        history7d={karat21?.chart_points_7d ?? []}
        rows={rows}
      />
    );
  } catch (error) {
    return (
      <section className="py-10">
        <div className="card-surface p-6">
          <p className="text-[13px] text-down">
            {error instanceof Error ? error.message : 'فشل في تحميل أسعار الذهب'}
          </p>
        </div>
      </section>
    );
  }
}

export function HeroSkeleton() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-11 py-7 md:py-10 animate-pulse">
      <div>
        <div className="h-4 w-40 bg-panel2 rounded mb-6" />
        <div className="h-5 w-44 bg-panel2 rounded mb-4" />
        <div className="h-20 md:h-28 w-64 bg-panel2 rounded mb-4" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-7">
          <div className="h-20 bg-panel2 rounded-xl" />
          <div className="h-20 bg-panel2 rounded-xl" />
          <div className="h-20 bg-panel2 rounded-xl" />
        </div>
        <div className="flex gap-3">
          <div className="h-12 w-44 bg-panel2 rounded-xl" />
          <div className="h-12 w-52 bg-panel2 rounded-xl" />
        </div>
      </div>
      <div className="h-80 bg-panel2 rounded-2xl" />
    </section>
  );
}

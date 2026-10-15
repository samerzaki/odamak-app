'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bell, Calculator, Smartphone, Wallet } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { useGoldOverview } from '@/hooks/use-gold-prices';
import { cn } from '@/lib/utils';
import { formatPriceWithCurrency } from '@/lib/format';
import { Logo } from '@/components/layout/logo';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { LanguageSwitcher } from '@/components/layout/language-switcher';
import { LiveDot } from '@/components/ui/live-dot';
import { ChangeText } from '@/components/ui/change-badge';

interface AuthShellProps {
  /** Drives the aside copy. Defaults to 'login' for the OTP/forgot/reset flows. */
  variant?: 'login' | 'register';
  showTabs?: boolean;
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
}

const BENEFIT_ICONS = [Wallet, Bell, Calculator, Smartphone];

/**
 * Full-screen split shell for /auth/*: a centered form column and a navy
 * benefits aside. Replaces the app's global header/ticker/footer/bottom-nav
 * on these routes (see lib/navigation.ts#isChromelessPath).
 */
export function AuthShell({ variant = 'login', showTabs = true, title, subtitle, className, children }: AuthShellProps) {
  const pathname = usePathname();
  const { t } = useLanguage();
  const goldOverview = useGoldOverview();
  const gold = goldOverview.data?.data.gold;

  const tabs = [
    { href: '/auth/login', label: t.pages.login.title },
    { href: '/auth/register', label: t.pages.register.title },
  ];

  const benefits = [
    { title: t.pages.authAside.benefitPortfolioTitle, desc: t.pages.authAside.benefitPortfolioDesc },
    { title: t.pages.authAside.benefitAlertsTitle, desc: t.pages.authAside.benefitAlertsDesc },
    { title: t.pages.authAside.benefitCalculatorsTitle, desc: t.pages.authAside.benefitCalculatorsDesc },
    { title: t.pages.authAside.benefitSyncTitle, desc: t.pages.authAside.benefitSyncDesc },
  ];

  const referencePrices = [
    { label: t.gold.karat21, item: gold?.['21'] },
    { label: t.gold.karat24, item: gold?.['24'] },
    { label: t.gold.ounce, item: gold?.ounce },
  ];

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-bg">
      <div className="flex-1 min-w-0 flex flex-col px-5 md:px-10 py-6 md:py-8">
        <div className="flex items-center gap-3">
          <Logo />
          <div className="flex-1" />
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        <div className="flex-1 flex items-center justify-center py-8">
          <div className="w-full max-w-[420px]">
            {showTabs && (
              <div className="flex items-center gap-1.5 p-1 mb-6 bg-panel-2 border border-line rounded-xl">
                {tabs.map((tab) => {
                  const active = pathname === tab.href;
                  return (
                    <Link
                      key={tab.href}
                      href={tab.href}
                      className={cn(
                        'flex-1 text-center px-3.5 py-2.5 rounded-lg text-[14px] font-semibold transition-colors',
                        active ? 'bg-panel text-text shadow-card' : 'text-muted hover:text-text'
                      )}
                    >
                      {tab.label}
                    </Link>
                  );
                })}
              </div>
            )}

            {(title || subtitle) && (
              <div className="mb-6">
                {title && <h1 className="font-heading text-[24px] md:text-[27px] font-bold text-text tracking-tight">{title}</h1>}
                {subtitle && <p className="mt-2 text-[14px] text-muted leading-relaxed [text-wrap:pretty]">{subtitle}</p>}
              </div>
            )}

            <div className={cn(className)}>{children}</div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex lg:w-[520px] shrink-0 relative overflow-hidden bg-gold text-on-gold px-11 py-10 flex-col">
        <div className="absolute -top-[70px] end-[-90px] w-[300px] h-[300px] rounded-full bg-warn/[0.18]" />
        <div className="absolute -bottom-[120px] start-[-110px] w-[320px] h-[320px] rounded-full bg-white/[0.09]" />

        <div className="relative inline-flex items-center gap-2 bg-white/10 rounded-full px-3.5 py-1.5 text-[12.5px] w-fit">
          <LiveDot tone="up" size={7} />
          {t.pages.authAside.livePrices}
        </div>

        <h2 className="relative mt-6 mb-2.5 font-heading text-[27px] font-bold leading-snug tracking-tight [text-wrap:pretty]">
          {variant === 'register' ? t.pages.authAside.registerTitle : t.pages.authAside.loginTitle}
        </h2>
        <p className="relative text-[14px] text-on-gold/75 leading-[1.8] [text-wrap:pretty]">
          {variant === 'register' ? t.pages.authAside.registerSubtitle : t.pages.authAside.loginSubtitle}
        </p>

        <div className="relative flex flex-col gap-2.5 mt-6">
          {benefits.map((benefit, i) => {
            const Icon = BENEFIT_ICONS[i];
            return (
              <div key={benefit.title} className="flex items-start gap-3 bg-white/[0.08] rounded-[14px] px-4 py-3.5">
                <span className="w-8 h-8 rounded-[10px] bg-white/[0.14] flex items-center justify-center shrink-0">
                  <Icon className="h-[17px] w-[17px]" strokeWidth={1.7} />
                </span>
                <div>
                  <div className="text-[14px] font-semibold">{benefit.title}</div>
                  <div className="text-[12.5px] text-on-gold/70 mt-0.5 leading-relaxed">{benefit.desc}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative mt-auto pt-6">
          <div className="text-[12.5px] text-on-gold/60 mb-2.5">{t.pages.authAside.referencePrices}</div>
          <div className="grid grid-cols-3 gap-2.5">
            {referencePrices.map((p) => (
              <div key={p.label} className="bg-white/10 rounded-[13px] p-3">
                <div className="text-[11.5px] text-on-gold/70">{p.label}</div>
                <div className="num text-[18px] font-medium mt-0.5">
                  {p.item ? formatPriceWithCurrency(p.item.price.sell, p.item.currency) : '—'}
                </div>
                <ChangeText value={p.item?.change.percent} className="text-[11.5px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

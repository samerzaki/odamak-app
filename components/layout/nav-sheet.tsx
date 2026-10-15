'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/language-context';
import { navigation } from '@/lib/navigation';
import { ThemeToggle } from './theme-toggle';
import { LanguageSwitcher } from './language-switcher';

type NavSheetProps = {
  open: boolean;
  onClose: () => void;
};

/**
 * Full navigation drawer shared by the mobile header hamburger and the
 * BottomNav "More" button. Renders every group from lib/navigation.ts.
 */
export function NavSheet({ open, onClose }: NavSheetProps) {
  const pathname = usePathname();
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  React.useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  React.useEffect(() => {
    const root = document.documentElement;
    const previousOverflowY = root.style.overflowY;

    // Lock the element that owns the page scrollbar. Together with the stable
    // gutter in globals.css, this keeps the header and page container in place.
    root.style.overflowY = open ? 'hidden' : previousOverflowY;

    return () => {
      root.style.overflowY = previousOverflowY;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close menu"
      />
      <div
        className={cn(
          'absolute top-0 h-full w-72 max-w-[80%] bg-panel shadow-card flex flex-col',
          isRTL ? 'right-0' : 'left-0'
        )}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-line shrink-0">
          <div className="flex flex-col">
            <span className="text-[11px] font-semibold tracking-[0.18em] text-dim uppercase">
              {isRTL ? 'القائمة' : 'MENU'}
            </span>
            <span className="text-sm font-semibold text-text">
              {isRTL ? 'جميع الصفحات' : 'All Pages'}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-[10px] border border-line bg-panel px-2.5 h-10 text-muted hover:border-gold hover:text-gold transition"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-5">
          <div className="flex items-center justify-between rounded-xl border border-line bg-panel2 p-3">
            <span className="text-sm font-medium text-text">
              {isRTL ? 'الإعدادات السريعة' : 'Quick settings'}
            </span>
            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>
          {navigation.reduce<React.JSX.Element[]>((acc, group, index, arr) => {
            const prev = index > 0 ? arr[index - 1] : null;
            const showSectionHeader = !prev || prev.sectionLabel !== group.sectionLabel;

            acc.push(
              <div key={group.id} className="space-y-2">
                {showSectionHeader && (
                  <p className="text-[11px] font-semibold tracking-[0.18em] text-dim uppercase mb-1 px-1">
                    {group.sectionLabel}
                  </p>
                )}

                <div className="text-xs font-medium text-muted flex items-center justify-between mb-2 px-1">
                  <span className="text-text font-semibold">
                    {isRTL ? group.groupTitleAr : group.groupTitleEn}
                  </span>
                </div>

                <nav className="space-y-1">
                  {group.items.map((item) => {
                    const active = pathname === item.href || (pathname.startsWith(item.href + '/') && item.href !== '/');
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          'flex items-center gap-3 rounded-[9px] px-3 min-h-[44px] text-sm transition-colors',
                          active ? 'bg-panel2 text-gold' : 'text-text hover:bg-hover'
                        )}
                      >
                        <Icon className={cn('h-5 w-5 flex-none', active ? 'text-gold' : 'text-dim')} />
                        <span className="font-medium">{isRTL ? item.titleAr : item.titleEn}</span>
                      </Link>
                    );
                  })}
                </nav>
              </div>
            );

            return acc;
          }, [])}
        </div>
      </div>
    </div>
  );
}

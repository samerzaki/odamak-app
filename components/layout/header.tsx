'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogOut, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { ThemeToggle } from './theme-toggle';
import { LanguageSwitcher } from './language-switcher';
import { NavSheet } from './nav-sheet';
import { Logo } from './logo';
import { useLanguage } from '@/contexts/language-context';
import { useAuth } from '@/contexts/auth-context';
import { primaryNav, isPrimaryNavActive, isChromelessPath } from '@/lib/navigation';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Header() {
  const { language } = useLanguage();
  const { user, isAuthenticated, logout } = useAuth();
  const pathname = usePathname();
  const isRTL = language === 'ar';
  const [navOpen, setNavOpen] = useState(false);
  const chromeless = isChromelessPath(pathname);

  // Auth pages render their own header inside components/auth/auth-shell.tsx.
  if (chromeless) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 h-[66px] bg-bg border-b border-line">
      <div className="h-full px-4 md:px-0">
        <div className="mx-auto flex h-full max-w-[1300px] items-center gap-3 md:gap-6">
      <Logo />

      <nav className="hidden lg:flex items-center gap-0.5">
        {primaryNav.map((item) => {
          const Icon = item.icon;
          const active = isPrimaryNavActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-1.5 px-[13px] py-[9px] rounded-[9px] text-sm transition-colors',
                active ? 'bg-panel2 text-text' : 'text-muted hover:bg-hover'
              )}
            >
              <Icon className="w-[15px] h-[15px] shrink-0" />
              <span>{isRTL ? item.titleAr : item.titleEn}</span>
            </Link>
          );
        })}
      </nav>

      <div className="flex-1" />

      <div className="hidden md:flex items-center gap-2">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>

      {isAuthenticated ? (
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <button className="rounded-full focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2" type="button">
              <Avatar src={user?.avatar} alt={user?.name} fallback={user?.name?.charAt(0).toUpperCase() || 'U'} size="default" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align={isRTL ? 'start' : 'end'} className="w-56">
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium capitalize">{user?.name}</p>
                <p className="text-xs text-muted-foreground">{user?.email}</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/me/settings" className="cursor-pointer">
                الإعدادات
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onSelect={(e) => {
                e.preventDefault();
                logout();
              }}
              className="cursor-pointer text-down"
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>تسجيل الخروج</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" asChild>
            <Link href="/auth/login">{isRTL ? 'دخول' : 'Login'}</Link>
          </Button>
          <Button size="sm" variant="inverse" asChild className="hidden md:inline-flex">
            <Link href="/auth/register">{isRTL ? 'إنشاء حساب' : 'Sign up'}</Link>
          </Button>
        </div>
      )}

      <button
        type="button"
        onClick={() => setNavOpen(true)}
        className="lg:hidden flex items-center justify-center w-[38px] h-[38px] rounded-[10px] border border-line text-muted hover:border-gold hover:text-gold transition-colors"
        aria-label={isRTL ? 'فتح القائمة' : 'Open menu'}
      >
        <Menu className="h-5 w-5" />
      </button>

      <NavSheet open={navOpen} onClose={() => setNavOpen(false)} />
      </div>
      </div>
    </header>
  );
}

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  href?: string;
  className?: string;
  iconClassName?: string;
  wordmarkClassName?: string;
}

/** Odamak lockup (icon + wordmark), theme-aware. Shared by the header and the auth shell. */
export function Logo({ href = '/', className, iconClassName, wordmarkClassName }: LogoProps) {
  return (
    <Link href={href} className={cn('flex shrink-0 items-center gap-2.5', className)} aria-label="Odamak home">
      <img
        src="https://cdn.odamak.com/assets/images/brand/logo-square-primary.svg"
        alt="Odamak"
        className={cn('h-9 w-9 dark:hidden', iconClassName)}
      />
      <img
        src="https://cdn.odamak.com/assets/images/brand/logo-square-light.svg"
        alt=""
        aria-hidden="true"
        className={cn('hidden h-9 w-9 dark:block', iconClassName)}
      />
      <img
        src="https://cdn.odamak.com/assets/images/brand/logo-primary.svg"
        alt=""
        aria-hidden="true"
        className={cn('h-7 w-auto dark:hidden', wordmarkClassName)}
      />
      <img
        src="https://cdn.odamak.com/assets/images/brand/logo-light.svg"
        alt=""
        aria-hidden="true"
        className={cn('hidden h-7 w-auto dark:block', wordmarkClassName)}
      />
    </Link>
  );
}

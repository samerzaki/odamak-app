'use client';

import { PageHeader } from '@/components/ui/page-header';
import { useLanguage } from '@/contexts/language-context';

export function CurrenciesPageHeader() {
  const { language } = useLanguage();

  return <PageHeader title={language === 'ar' ? 'العملات في البنوك' : 'Currencies in Banks'} />;
}

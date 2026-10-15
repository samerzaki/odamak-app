import type { Metadata, Viewport } from 'next';
import { Noto_Kufi_Arabic, IBM_Plex_Sans_Arabic, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { AppShell } from '@/components/layout/app-shell';
import { Header } from '@/components/layout/header';
import { absoluteUrl, SEO_CONFIG, SITE_URL } from '@/lib/seo-config';

const ICONS_BASE_URL = 'https://cdn.odamak.com/assets/images/icons';

const kufi = Noto_Kufi_Arabic({
  variable: '--font-kufi',
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
});
const plexArabic = IBM_Plex_Sans_Arabic({
  variable: '--font-plex-arabic',
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600'],
});
const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const THEME_INIT_SCRIPT = `
try {
  var t = localStorage.getItem('theme') || 'dark';
  document.documentElement.classList.toggle('dark', t === 'dark');
  document.documentElement.style.colorScheme = t;
} catch (e) {}
`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO_CONFIG.pages.home.title,
    template: '%s | قدامك',
  },
  description: SEO_CONFIG.site.description,
  applicationName: SEO_CONFIG.site.nameAr,
  authors: [{ name: SEO_CONFIG.site.nameAr }],
  creator: SEO_CONFIG.site.nameAr,
  publisher: SEO_CONFIG.site.nameAr,
  manifest: '/manifest.json',
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ar_EG',
    url: SITE_URL,
    siteName: SEO_CONFIG.site.nameAr,
    title: SEO_CONFIG.pages.home.title,
    description: SEO_CONFIG.pages.home.description,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: SEO_CONFIG.site.nameAr }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_CONFIG.pages.home.title,
    description: SEO_CONFIG.pages.home.description,
    images: ['/opengraph-image'],
  },
  icons: {
    icon: [
      { url: `${ICONS_BASE_URL}/favicon.svg`, sizes: 'any', type: 'image/svg+xml' },
      { url: `${ICONS_BASE_URL}/favicon-16x16.png`, sizes: '16x16', type: 'image/png' },
      { url: `${ICONS_BASE_URL}/favicon-32x32.png`, sizes: '32x32', type: 'image/png' },
      { url: `${ICONS_BASE_URL}/favicon-48x48.png`, sizes: '48x48', type: 'image/png' },
    ],
    shortcut: `${ICONS_BASE_URL}/favicon.ico`,
    apple: [{ url: `${ICONS_BASE_URL}/apple-touch-icon.png`, sizes: '180x180', type: 'image/png' }],
  },
  appleWebApp: { capable: true, statusBarStyle: 'default', title: SEO_CONFIG.site.nameAr },
  verification: {
    ...(SEO_CONFIG.verification.google ? { google: SEO_CONFIG.verification.google } : {}),
    ...(SEO_CONFIG.verification.bing ? { other: { 'msvalidate.01': SEO_CONFIG.verification.bing } } : {}),
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0B33A7',
  colorScheme: 'light dark',
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SEO_CONFIG.site.nameAr,
      alternateName: SEO_CONFIG.site.name,
      url: SITE_URL,
      logo: `${ICONS_BASE_URL}/pwa-512x512.png`,
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: SEO_CONFIG.site.nameAr,
      url: SITE_URL,
      inLanguage: 'ar-EG',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${kufi.variable} ${plexArabic.variable} ${plexMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body suppressHydrationWarning className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <AppShell>{children}</AppShell>
          </div>
        </Providers>
      </body>
    </html>
  );
}

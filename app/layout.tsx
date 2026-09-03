import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { REFERRAL_CODE } from '@/lib/referral'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tibberbonus.nl'),
  title: `Tibber Code 2026 | €50 Bonus met Uitnodigingscode: ${REFERRAL_CODE}`,
  description: `Tibber code gezocht? Gebruik code ${REFERRAL_CODE} en ontvang €50 bonus tegoed voor de Tibber Store. Bekijk hoe je de actieve Tibber uitnodigingscode gebruikt.`,
  keywords: [
    'Tibber code',
    'Tibber bonus',
    'Tibber referral code',
    'Tibber uitnodigingscode',
    'Tibber invite code',
    'Tibber kortingscode',
    'Tibber korting',
    'Tibber referral',
    'Tibber €50 tegoed',
    'Tibber aanmelden',
    'dynamische energie',
    'Tibber overstappen',
  ],
  authors: [{ name: 'Tibber Bonus' }],
  generator: 'v0.app',
  alternates: {
    canonical: '/',
    languages: { 'nl-NL': '/', en: '/en', 'x-default': '/' },
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://www.tibberbonus.nl',
    siteName: 'Tibber Bonus',
    title: 'Tibber Code 2026 – €50 Bonus & Tegoed',
    description: `Gebruik Tibber referral code ${REFERRAL_CODE} en ontvang €50 bonus tegoed voor de Tibber Store. Stap over naar dynamische energie en bespaar.`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tibber Code 2026 – €50 Bonus & Tegoed',
    description: `Gebruik Tibber referral code ${REFERRAL_CODE} en ontvang €50 bonus tegoed voor de Tibber Store.`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className="bg-background">
      <body className={`${_geist.className} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

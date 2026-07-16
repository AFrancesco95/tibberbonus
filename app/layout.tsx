import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Tibber Uitnodigingscode 2026 - Ontvang €50 Tegoed | Referral Code',
  description: 'Gebruik mijn Tibber uitnodigingscode (referral code / invite code) en ontvang €50 tegoed voor de Tibber Store. Stap over naar dynamische energie, bespaar op je energierekening en beheer je verbruik met de Tibber app. Uitnodigingscode geldig in 2026.',
  keywords: [
    'Tibber uitnodigingscode',
    'Tibber referral code',
    'Tibber invite code',
    'Tibber code',
    'Tibber €50 tegoed',
    'Tibber aanmelden',
    'Tibber korting',
    'dynamische energie',
    'Tibber overstappen',
  ],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

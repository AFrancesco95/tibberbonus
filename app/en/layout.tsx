import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tibber Code 2026 | €50 Bonus & Store Credit",
  description: "Looking for a Tibber code? Use our active invitation code and receive €50 bonus credit for the Tibber Store. See how to use the Tibber referral code.",
  alternates: {
    canonical: "/en",
    languages: { "nl-NL": "/", en: "/en", "x-default": "/" },
  },
  openGraph: { locale: "en_GB", url: "https://www.tibberbonus.nl/en", title: "Tibber Code 2026 | €50 Bonus & Store Credit", description: "Use the active Tibber invitation code and receive €50 credit for the Tibber Store." },
}

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div lang="en">{children}</div>
}

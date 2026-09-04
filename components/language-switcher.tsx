import Link from "next/link"
import type { Locale } from "@/lib/i18n/translations"

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-card/80 p-1 text-xs" aria-label="Language selection">
      <Link className={`rounded-full px-2 py-1 ${locale === "nl" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`} href="/">NL</Link>
      <Link className={`rounded-full px-2 py-1 ${locale === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`} href="/en">EN</Link>
    </div>
  )
}

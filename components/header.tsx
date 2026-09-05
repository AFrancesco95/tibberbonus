import { Sparkles } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { getTranslations, type Locale } from "@/lib/i18n/translations"

export function Header({ locale = "nl" }: { locale?: Locale }) {
  const t = getTranslations(locale)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-to-br from-teal-600 to-sky-600 text-white">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="font-semibold text-lg">Tibber Bonus</span>
        </div>
        <nav className="hidden items-center gap-1 rounded-full border border-border/60 bg-muted/50 p-1 text-sm md:flex" aria-label="Hoofdnavigatie">
          <a
            href="#hoe-werkt-het"
            className="rounded-full px-4 py-2 text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
          >
            {t.nav.how}
          </a>
          <a
            href="#voordelen"
            className="rounded-full px-4 py-2 text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
          >
            {t.nav.benefits}
          </a>
          <a
            href="#faq"
            className="rounded-full px-4 py-2 text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
          >
            {t.nav.faq}
          </a>
        </nav>
        <LanguageSwitcher locale={locale} />
      </div>
    </header>
  )
}

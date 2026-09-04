import { Info } from "lucide-react"
import { CurrentYear } from "@/components/current-period"
import { getTranslations, type Locale } from "@/lib/i18n/translations"

export function Footer({ locale = "nl" }: { locale?: Locale }) {
  const isEnglish = locale === "en"
  return (
    <footer className="border-t border-border/50 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Disclaimer */}
        <div className="mb-6 p-4 rounded-lg bg-muted/50 border border-border flex items-start gap-3">
          <Info className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">{isEnglish ? "Note:" : "Let op:"}</strong> {isEnglish ? "This website is not officially affiliated with Tibber. This is a personal page with a Tibber invitation code (referral code) that gives you €50 credit when signing up." : "Deze website is niet officieel verbonden aan Tibber. Dit is een persoonlijke pagina met een Tibber uitnodigingscode (referral code) waarmee je €50 tegoed ontvangt bij aanmelding."}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Tibber Bonus · Persoonlijke referral pagina
          </p>
          <p className="text-sm text-muted-foreground">
            <CurrentYear /> Tibber Bonus
          </p>
        </div>
      </div>
    </footer>
  )
}

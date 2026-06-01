import { Info } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Disclaimer */}
        <div className="mb-6 p-4 rounded-lg bg-muted/50 border border-border flex items-start gap-3">
          <Info className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Let op:</strong> Deze website is
            niet officieel verbonden aan Tibber. Dit is een persoonlijke
            referral pagina waarmee je €50 tegoed ontvangt bij aanmelding.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Tibber Bonus · Persoonlijke referral pagina
          </p>
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Tibber Bonus
          </p>
        </div>
      </div>
    </footer>
  )
}

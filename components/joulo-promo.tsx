import Image from "next/image"
import { ArrowRight, BadgeCheck, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { REFERRAL_CODE, REFERRAL_URL } from "@/lib/referral"

export function JouloPromo() {
  return (
    <section className="border-y border-border/60 bg-secondary/30 py-10 md:py-12" aria-labelledby="joulo-promo-title">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 md:grid-cols-[1fr_320px] md:gap-12 lg:grid-cols-[1fr_380px]">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-primary">
            <Zap className="h-4 w-4" aria-hidden="true" />
            Tibber × Joulo
          </div>
          <h2 id="joulo-promo-title" className="mb-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Laad slim en verdien extra
          </h2>
          <p className="mb-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Met Tibber en Joulo kan thuisladen extra voordeel opleveren. Met een geschikte MID-gecertificeerde laadpaal, zoals de Easee Charge Max, kunnen geladen kWh worden geregistreerd voor ERE-certificaten.
          </p>
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-lg bg-primary/10 px-3 py-2 text-lg font-bold text-primary">€50 Tibber-tegoed</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-background px-3 py-1.5 text-sm font-medium text-foreground">
              <BadgeCheck className="h-4 w-4 text-primary" aria-hidden="true" />
              Geschikt voor ERE
            </span>
          </div>
          <p className="mb-5 text-sm text-muted-foreground">
            Gebruik code <strong className="font-semibold text-foreground">{REFERRAL_CODE}</strong> bij het aanmelden als nieuwe Tibber-klant.
          </p>
          <Button asChild className="h-auto rounded-xl px-5 py-3">
            <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer">
              Gebruik de Tibber code
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
          <p className="mt-4 text-xs text-muted-foreground">
            Joulo rekent 10% servicekosten over de ERE-uitbetaling.
          </p>
        </div>
        <div className="relative order-first overflow-hidden rounded-2xl border border-border/60 bg-card md:order-none">
          <Image
            src="/easee-charge-max.png"
            alt="Easee Charge Max laadpaal"
            width={760}
            height={520}
            className="h-auto w-full object-cover"
            sizes="(max-width: 768px) 100vw, 380px"
          />
        </div>
      </div>
    </section>
  )
}

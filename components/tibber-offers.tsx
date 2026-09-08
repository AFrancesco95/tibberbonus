import { ExternalLink, Tag } from "lucide-react"
import { ReferralCode } from "@/components/referral-code"
import { REFERRAL_CODE } from "@/lib/referral"

type Offer = {
  title: string
  description: string
  href: string
  badge?: string
}

const OFFERS_URL = "https://tibber.com/nl/store/aanbiedingen"

const fallbackOffers: Offer[] = [
  {
    title: "Zaptec Go 2",
    description: "Bespaar €120 en ontvang gratis Chill. Bekijk de actuele voorwaarden.",
    href: OFFERS_URL,
    badge: "€120 korting",
  },
  {
    title: "Zaptec Go",
    description: "Profiteer van €60 korting op deze slimme laadpaal.",
    href: OFFERS_URL,
    badge: "€60 korting",
  },
  {
    title: "Charge Amps laadpunten",
    description: "Actuele aanbiedingen op Luna, Halo, Dawn en Aura.",
    href: OFFERS_URL,
    badge: "Aanbieding",
  },
]

function parseOffers(html: string): Offer[] {
  const headingMatches = [...html.matchAll(/<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/gi)]
  const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ")
  const headings = headingMatches
    .map((match) => match[1].replace(/&[^;]+;/g, "").trim())
    .filter((heading) => /Zaptec|Charge Amps/i.test(heading))

  if (headings.length === 0) return fallbackOffers

  return headings.slice(0, 3).map((title, index) => ({
    title,
    description:
      index === 0
        ? text.match(/Bespaar €[^.]+\./i)?.[0] ?? "Bekijk de actuele Tibber-aanbieding."
        : index === 1
          ? "Bekijk de actuele korting en voorwaarden in de Tibber Store."
          : "Ontdek de actuele aanbiedingen en voorwaarden in de Tibber Store.",
    href: OFFERS_URL,
    badge: index === 0 ? "Actuele aanbieding" : "Tibber Store",
  }))
}

async function getOffers(): Promise<Offer[]> {
  try {
    const response = await fetch(OFFERS_URL, { next: { revalidate: 3600 } })
    if (!response.ok) return fallbackOffers
    return parseOffers(await response.text())
  } catch {
    return fallbackOffers
  }
}

export async function TibberOffers() {
  const offers = await getOffers()

  return (
    <section className="border-y border-border/60 bg-background py-12 md:py-16" aria-labelledby="offers-title">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary">Tibber Store</p>
          <h2 id="offers-title" className="mb-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">Actuele aanbiedingen</h2>
          <p className="text-muted-foreground">Bekijk de actuele Tibber Store-aanbiedingen en gebruik je €50 tegoed voor slimme energieproducten.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {offers.map((offer) => (
            <a key={offer.title} href={offer.href} target="_blank" rel="noopener noreferrer" className="group flex h-full flex-col rounded-2xl border border-border/70 bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md">
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-sm font-semibold text-primary"><Tag className="h-4 w-4" aria-hidden="true" />{offer.badge}</span>
                <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{offer.title}</h3>
              <p className="mt-auto text-sm leading-relaxed text-muted-foreground">{offer.description}</p>
            </a>
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-xl rounded-2xl bg-primary px-5 py-5 text-center text-primary-foreground shadow-sm">
          <p className="mb-3 font-semibold">Ontvang €50 Tibber Store-tegoed</p>
          <ReferralCode code={REFERRAL_CODE} />
          <p className="mt-3 text-xs text-primary-foreground/80">Gebruik de code bij je aanmelding als nieuwe Tibber-klant.</p>
        </div>
      </div>
    </section>
  )
}

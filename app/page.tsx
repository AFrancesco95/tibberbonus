import { Button } from "@/components/ui/button"
import { ArrowRight, Gift, Clock } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ReferralCode } from "@/components/referral-code"
import { FeatureCards } from "@/components/feature-cards"
import { FAQ } from "@/components/faq"
import { REFERRAL_CODE, REFERRAL_URL } from "@/lib/referral"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-700 via-teal-600 to-sky-600" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/15 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-sky-400/10 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-primary-foreground/20">
            <Gift className="h-4 w-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">
              Persoonlijke aanbieding
            </span>
          </div>
          
          <p className="text-sm text-primary-foreground/70 mb-6">
            Tibber referral code · geldig in{" "}
            {new Date().toLocaleDateString("nl-NL", { month: "long", year: "numeric" })}
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 tracking-tight text-balance">
            Ontvang{" "}
            <span className="relative">
              <span className="relative z-10">{"€50"}</span>
              <span className="absolute -bottom-1 left-0 right-0 h-3 bg-primary-foreground/20 -rotate-1" />
            </span>{" "}
            Tibber tegoed
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
            Stap over naar Tibber en ontvang direct{" "}
            <strong>€50 tegoed</strong> voor de Tibber Store. Dynamisch energiecontract 
            met realtime inzicht in stroomprijs en verbruik via de Tibber app.
          </p>

          <ReferralCode code={REFERRAL_CODE} />

          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer">
                Claim {"€50"} korting
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Aanmelden in 5 minuten</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="voordelen" className="py-20 md:py-28 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Waarom Tibber?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Tibber is geen gewone energieleverancier. Met dynamische uurtarieven 
              betaal je de echte inkoopprijs en bespaar je door slim te verbruiken.
            </p>
          </div>
          <FeatureCards />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-28 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Veelgestelde vragen
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Heb je nog vragen? Hier vind je antwoorden op de meest gestelde
              vragen over Tibber.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-teal-700 via-teal-600 to-sky-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
            Klaar om te besparen?
          </h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto text-lg mb-8">
            Stap vandaag nog over naar Tibber en ontvang €50 tegoed. Overstappen 
            kan binnen 5 minuten en Tibber regelt de rest.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer">
              Start nu met besparen
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

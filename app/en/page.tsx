import { ArrowRight, Clock, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ReferralCode } from "@/components/referral-code"
import { FeatureCards } from "@/components/feature-cards"
import { HowItWorks } from "@/components/how-it-works"
import { CurrentPeriod } from "@/components/current-period"
import { REFERRAL_CODE, REFERRAL_URL } from "@/lib/referral"

const faqs = [
  ["How does the Tibber code work?", "Use the code during registration in the Tibber app. Once your energy contract starts, you receive €50 credit for the Tibber Store."],
  ["Where can I use the credit?", "You can spend the €50 credit in the Tibber Store on smart energy products, such as an Easee charger or Tibber Pulse."],
  ["Is this Tibber code still valid?", `Yes. Code ${REFERRAL_CODE} is currently active. Use it during your Tibber registration and receive the credit according to Tibber's current terms.`],
]

export default function EnglishHome() {
  return <div className="min-h-screen flex flex-col">
    <Header locale="en" />
    <main>
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-600 to-sky-600 px-4 pb-20 pt-32 text-center text-primary-foreground md:pb-28 md:pt-40">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2"><Gift className="h-4 w-4" /><span className="text-sm font-medium">Personal offer</span></div>
          <p className="mb-6 text-sm text-primary-foreground/70">Working Tibber code – valid in <CurrentPeriod /></p>
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">Tibber Code: <span className="relative"><span className="relative z-10">€50</span></span> Bonus &amp; Credit</h1>
          <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/90 md:text-xl">Use this <strong>Tibber code</strong> and receive <strong>€50 bonus credit</strong> for the Tibber Store once your Tibber energy contract starts. Easily activate your welcome bonus.</p>
          <ReferralCode code={REFERRAL_CODE} />
          <div className="mt-8"><Button asChild size="lg" className="bg-primary-foreground text-lg text-primary hover:bg-primary-foreground/90 hover:text-primary"><a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer">Get €50 Tibber Store credit <ArrowRight className="ml-2 h-5 w-5" /></a></Button></div>
          <div className="mt-12 flex items-center justify-center gap-2 text-sm text-primary-foreground/80"><Clock className="h-4 w-4" />Sign up in 5 minutes</div>
        </div>
      </section>
      <section id="how-it-works" className="scroll-mt-20 bg-secondary/30 px-4 py-20 md:py-28"><div className="mx-auto max-w-6xl text-center"><h2 className="mb-4 text-3xl font-bold md:text-4xl">How does it work?</h2><p className="mx-auto mb-16 max-w-2xl text-lg text-muted-foreground">Activate your €50 bonus credit with the Tibber code in three simple steps.</p><HowItWorks locale="en" /></div></section>
      <section id="faq" className="scroll-mt-20 bg-card px-4 py-20 text-card-foreground md:py-28"><div className="mx-auto max-w-3xl"><div className="mb-12 text-center"><h2 className="mb-4 text-3xl font-bold md:text-4xl">Frequently asked questions</h2><p className="text-lg text-muted-foreground">Answers to common questions about the Tibber code and €50 credit.</p></div><div className="space-y-4">{faqs.map(([question, answer]) => <details key={question} className="rounded-lg border border-border p-5"><summary className="cursor-pointer font-semibold">{question}</summary><p className="mt-3 leading-relaxed text-muted-foreground">{answer}</p></details>)}</div></div></section>
      <section id="benefits" className="scroll-mt-20 bg-secondary/30 px-4 py-20 md:py-28"><div className="mx-auto max-w-6xl"><div className="mb-12 text-center"><h2 className="mb-4 text-3xl font-bold md:text-4xl">Why Tibber?</h2><p className="mx-auto max-w-2xl text-lg text-muted-foreground">Smart tools and dynamic rates help you understand and manage your energy use.</p></div><FeatureCards locale="en" /></div></section>
    </main>
    <Footer locale="en" />
  </div>
}

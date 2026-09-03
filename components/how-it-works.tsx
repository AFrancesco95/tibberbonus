import { REFERRAL_CODE } from "@/lib/referral"
import { ReferralCode } from "@/components/referral-code"
import { Download, UserPlus, Ticket } from "lucide-react"
import { getTranslations, type Locale } from "@/lib/i18n/translations"

const steps = [
  {
    icon: Download,
    title: "Download de Tibber app",
    description:
      "Installeer de Tibber app op je telefoon en maak een account aan om te registreren.",
  },
  {
    icon: UserPlus,
    title: 'Ga naar "Tegoed" in het menu',
    description:
      'Open na de registratie het menu en klik op "Tegoed". Kies daar de optie "Ik ben uitgenodigd".',
  },
  {
    icon: Ticket,
    title: "Voer de Tibber code in",
    description: "Vul deze Tibber uitnodigingscode in om je €50 tegoed te activeren:",
    code: REFERRAL_CODE,
  },
]

export function HowItWorks({ locale = "nl" }: { locale?: Locale }) {
  const copy = getTranslations(locale)
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {steps.map((step, index) => {
        const localizedStep = { ...step, title: copy.steps[index], description: copy.stepDescriptions[index] }
        const Icon = step.icon
        return (
          <div
            key={localizedStep.title}
            className="relative flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border shadow-sm"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-teal-600 to-sky-600 text-sm font-bold text-white">
              {index + 1}
            </div>
            <div className="mb-5 mt-2 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {localizedStep.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              {localizedStep.description}
            </p>
            {step.code && (
              <div className="mt-4">
                <ReferralCode code={step.code} variant="light" />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

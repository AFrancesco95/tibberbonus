import { REFERRAL_CODE } from "@/lib/referral"
import { Download, UserPlus, Ticket } from "lucide-react"

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
    title: "Voer de kortingscode in",
    description: "Vul deze Tibber uitnodigingscode in om je €50 tegoed te activeren:",
    code: REFERRAL_CODE,
  },
]

export function HowItWorks() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {steps.map((step, index) => {
        const Icon = step.icon
        return (
          <div
            key={step.title}
            className="relative flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border shadow-sm"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-teal-600 to-sky-600 text-sm font-bold text-white">
              {index + 1}
            </div>
            <div className="mb-5 mt-2 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {step.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              {step.description}
            </p>
            {step.code && (
              <div className="mt-4 rounded-lg bg-secondary px-4 py-2 font-mono text-lg font-bold tracking-wider text-foreground">
                {step.code}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

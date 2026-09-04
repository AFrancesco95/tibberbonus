import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ReferralCode } from "@/components/referral-code"
import { REFERRAL_CODE, REFERRAL_URL } from "@/lib/referral"

type FaqItem = {
  question: string
  answer: string
  hasLink?: boolean
  storeLink?: boolean
  code?: string
}

export const faqs: FaqItem[] = [
  {
    question: "Hoe werkt de Tibber uitnodigingscode?",
    answer: `Gebruik mijn Tibber uitnodigingscode (referral code) via de link om je aan te melden bij Tibber. Zodra je contract actief is, ontvang je automatisch €50 tegoed in de Tibber Store. Dit kun je gebruiken voor slimme producten zoals de Tibber Pulse of andere smart home apparaten.`,
    hasLink: true,
  },
  {
    question: "Waar vul ik de Tibber uitnodigingscode in?",
    answer: `De eenvoudigste manier is via mijn uitnodigingslink: de referral code wordt dan automatisch gekoppeld aan je aanmelding. Meld je je los aan? Dan kun je de Tibber invite code handmatig invullen tijdens het aanmeldproces in de Tibber app.`,
    hasLink: true,
  },
  {
    question: "Hoe lang is de Tibber uitnodigingscode geldig?",
    answer: `De uitnodigingscode blijft actief zolang deze pagina online is. Je kunt de referral code op elk moment gebruiken. Het tegoed wordt automatisch toegevoegd aan je Tibber account zodra je contract actief is.`,
    hasLink: true,
  },
  {
    question: "Wanneer ontvang ik mijn €50 tegoed?",
    answer: `Je ontvangt het tegoed zodra je Tibber-contract officieel actief is. Dit duurt meestal 1-2 weken na je aanmelding met de uitnodigingscode, afhankelijk van de overstapprocedure. Het tegoed verschijnt automatisch in je Tibber Store account.`,
    hasLink: true,
  },
  {
    question: "Waar kan ik het tegoed voor gebruiken?",
    answer: `Het €50 tegoed kun je besteden in de Tibber Store. Hier vind je slimme producten zoals een Easee laadpaal, de Tibber Pulse (voor realtime verbruiksinzicht), smart plugs en andere energie-gerelateerde apparaten.`,
    storeLink: true,
  },
  {
    question: "Kan ik de Tibber uitnodigingscode combineren met andere acties?",
    answer: `De bonus van de uitnodigingscode staat los van andere Tibber-acties. Je ontvangt sowieso €50 tegoed via mijn referral link. Check de Tibber website voor eventuele lopende promoties die je kunt combineren.`,
    hasLink: true,
  },
  {
    question: "Is deze Tibber code nog geldig?",
    answer: `Ja. De Tibber code ${REFERRAL_CODE} wordt regelmatig gecontroleerd en is momenteel geldig. Gebruik deze Tibber uitnodigingscode tijdens je aanmelding bij Tibber. Zodra je Tibber energiecontract actief is, ontvang je automatisch €50 tegoed voor de Tibber Store volgens de actuele actievoorwaarden van Tibber.`,
    code: REFERRAL_CODE,
  },
]

function renderAnswer(answer: string, code?: string) {
  if (!code) return answer
  const parts = answer.split(code)
  return parts.map((part, index) => (
    <span key={index}>
      {part}
      {index < parts.length - 1 && (
        <strong className="font-semibold text-foreground">{code}</strong>
      )}
    </span>
  ))
}

export function FAQ() {
  return (
    <div className="space-y-6">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left hover:text-primary transition-colors">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {renderAnswer(faq.answer, faq.code)}
              {faq.code && (
                <div className="mt-4">
                  <ReferralCode code={faq.code} variant="light" />
                </div>
              )}
              {(faq.hasLink || faq.storeLink) && (
                <>{" "}<a
                  href={faq.storeLink ? "https://tibber.com/nl/store" : REFERRAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-primary hover:underline font-medium"
                >
                  {faq.storeLink ? "Bekijk de Tibber Store →" : "Meld je aan met €50 tegoed →"}
                </a></>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

    </div>
  )
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ExternalLink } from "lucide-react"
import { REFERRAL_URL } from "@/lib/referral"

const faqs = [
  {
    question: "Hoe werkt de referral code?",
    answer: `Gebruik mijn referral link om je aan te melden bij Tibber. Zodra je contract actief is, ontvang je automatisch €50 tegoed in de Tibber Store. Dit kun je gebruiken voor slimme producten zoals de Tibber Pulse of andere smart home apparaten.`,
    hasLink: true,
  },
  {
    question: "Hoe lang is de referral code geldig?",
    answer: `De referral code blijft actief zolang deze pagina online is. Je kunt de code op elk moment gebruiken. Het tegoed wordt automatisch toegevoegd aan je Tibber account zodra je contract actief is.`,
    hasLink: true,
  },
  {
    question: "Wanneer ontvang ik mijn €50 tegoed?",
    answer: `Je ontvangt het tegoed zodra je Tibber-contract officieel actief is. Dit duurt meestal 1-2 weken na je aanmelding, afhankelijk van de overstapprocedure. Het tegoed verschijnt automatisch in je Tibber Store account.`,
    hasLink: true,
  },
  {
    question: "Waar kan ik het tegoed voor gebruiken?",
    answer: `Het €50 tegoed kun je besteden in de Tibber Store. Hier vind je slimme producten zoals de Tibber Pulse (voor realtime verbruiksinzicht), smart plugs, en andere energie-gerelateerde apparaten die je helpen nog slimmer te verbruiken.`,
    hasLink: true,
  },
  {
    question: "Kan ik de referral code combineren met andere acties?",
    answer: `De referral bonus staat los van andere Tibber-acties. Je ontvangt sowieso €50 tegoed via mijn link. Check de Tibber website voor eventuele lopende promoties die je kunt combineren.`,
    hasLink: true,
  },
]

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
              {faq.answer}
              {faq.hasLink && (
                <a
                  href={REFERRAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-primary hover:underline font-medium"
                >
                  Meld je aan met €50 tegoed →
                </a>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      
      <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-border">
        <p className="text-sm text-muted-foreground">
          Heb je vragen over Tibber, dynamische energie, of je contract? Bekijk de{" "}
          <a
            href="https://tibber.com/nl/support"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium inline-flex items-center gap-1"
          >
            officiële Tibber FAQ
            <ExternalLink className="h-3 w-3" />
          </a>
        </p>
      </div>
    </div>
  )
}

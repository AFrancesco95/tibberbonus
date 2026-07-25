import { faqs } from "@/components/faq"
import { REFERRAL_CODE, REFERRAL_URL } from "@/lib/referral"

const SITE_URL = "https://www.tibberbonus.nl"

export function StructuredData() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tibber Bonus",
    url: SITE_URL,
    description: `Gebruik Tibber code ${REFERRAL_CODE} en ontvang €50 bonus tegoed voor de Tibber Store.`,
    inLanguage: "nl-NL",
  }

  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: "Tibber €50 bonus tegoed via referral code",
    description: `Meld je aan met Tibber referral code ${REFERRAL_CODE} en ontvang €50 bonus tegoed voor de Tibber Store.`,
    url: REFERRAL_URL,
    price: "0",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    category: "Energie",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />
    </>
  )
}

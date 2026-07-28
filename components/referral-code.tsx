"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ReferralCodeProps {
  code: string
  variant?: "hero" | "light"
}

export function ReferralCode({ code, variant = "hero" }: ReferralCodeProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea")
      textArea.value = code
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (variant === "light") {
    return (
      <div className="inline-flex flex-col items-start gap-2">
        <div className="flex items-center gap-2 bg-secondary rounded-lg px-4 py-2 border border-border">
          <code className="text-lg font-bold tracking-wider text-foreground font-mono">
            {code}
          </code>
          <Button
            variant="ghost"
            size="icon"
            onClick={copyToClipboard}
            className="text-foreground hover:bg-foreground/10 h-8 w-8"
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
            <span className="sr-only">Kopieer code</span>
          </Button>
        </div>
        {copied && (
          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary animate-in fade-in-0 slide-in-from-bottom-2">
            <Check className="h-3.5 w-3.5" />
            Gekopieerd!
          </span>
        )}
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-2 bg-foreground/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-primary/20">
        <code className="text-2xl md:text-3xl font-bold tracking-widest text-primary-foreground font-mono">
          {code}
        </code>
        <Button
          variant="ghost"
          size="icon"
          onClick={copyToClipboard}
          className="text-primary-foreground hover:bg-primary/20 h-10 w-10"
        >
          {copied ? (
            <Check className="h-5 w-5" />
          ) : (
            <Copy className="h-5 w-5" />
          )}
          <span className="sr-only">Kopieer code</span>
        </Button>
      </div>
      {copied && (
        <span className="text-sm text-primary-foreground/80 animate-in fade-in-0 slide-in-from-bottom-2">
          Gekopieerd!
        </span>
      )}
    </div>
  )
}

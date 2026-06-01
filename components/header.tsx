import { Sparkles } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-to-br from-teal-600 to-sky-600 text-white">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="font-semibold text-lg">Tibber Bonus</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a
            href="#voordelen"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Voordelen
          </a>
          <a
            href="#faq"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            FAQ
          </a>
        </nav>
      </div>
    </header>
  )
}

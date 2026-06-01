import { TrendingDown, Car, Smartphone, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: TrendingDown,
    title: "Dynamische tarieven",
    description:
      "Betaal realtime stroomprijzen en profiteer automatisch van goedkope uren. Gemiddeld 20% goedkoper dan vast tarief.",
  },
  {
    icon: Car,
    title: "Slim laden",
    description:
      "Laad je elektrische auto automatisch op de goedkoopste momenten. De app plant het laden voor je.",
  },
  {
    icon: Smartphone,
    title: "Slimme app",
    description:
      "Realtime inzicht in verbruik, zonnepanelen, laadpaal en smart home. Alles in een overzichtelijke app.",
  },
  {
    icon: Zap,
    title: "Groene energie",
    description:
      "100% groene stroom uit Scandinavie. Tibber investeert in duurzame energiebronnen.",
  },
]

export function FeatureCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {features.map((feature) => (
        <Card
          key={feature.title}
          className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30"
        >
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <feature.icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface DevStat {
  icon: LucideIcon
  label: string
  value: number
  color: string
}

interface DevStatsProps {
  stats: DevStat[]
  counters: number[]
}

export default function DevStats({ stats, counters }: DevStatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {stats.map((stat, index) => (
        <Card key={stat.label} className="bg-card/80 backdrop-blur-sm border-border hover:border-primary transition-all group">
          <CardContent className="p-6 text-center">
            <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
            <div className="text-2xl font-bold font-mono neon-text-green mb-1">
              {counters[index].toLocaleString()}
            </div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">
              {stat.label}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

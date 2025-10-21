"use client"

import { useEffect, useState } from "react"

export default function ContributionGraph() {
  const [hoveredCell, setHoveredCell] = useState<{ week: number; day: number } | null>(null)

  // Generate random contribution data for the last 52 weeks
  const generateContributions = () => {
    const weeks = 52
    const daysPerWeek = 7
    const contributions: number[][] = []

    for (let week = 0; week < weeks; week++) {
      const weekData: number[] = []
      for (let day = 0; day < daysPerWeek; day++) {
        // Random contribution count (0-10)
        weekData.push(Math.floor(Math.random() * 11))
      }
      contributions.push(weekData)
    }
    return contributions
  }

  const [contributions] = useState(generateContributions())

  const getColor = (count: number) => {
    if (count === 0) return "bg-muted/30"
    if (count <= 2) return "bg-primary/20"
    if (count <= 5) return "bg-primary/40"
    if (count <= 8) return "bg-primary/60"
    return "bg-primary"
  }

  const getDayName = (dayIndex: number) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    return days[dayIndex]
  }

  const totalContributions = contributions.flat().reduce((sum, count) => sum + count, 0)

  return (
    <div>
      <div className="mb-4 flex items-center justify-between text-sm">
        <span className="text-muted-foreground font-mono">
          {totalContributions} contributions in the last year
        </span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Less</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-sm bg-muted/30"></div>
            <div className="w-3 h-3 rounded-sm bg-primary/20"></div>
            <div className="w-3 h-3 rounded-sm bg-primary/40"></div>
            <div className="w-3 h-3 rounded-sm bg-primary/60"></div>
            <div className="w-3 h-3 rounded-sm bg-primary"></div>
          </div>
          <span className="text-xs text-muted-foreground">More</span>
        </div>
      </div>

      <div className="overflow-x-auto pb-4">
        <div className="inline-flex gap-1">
          <div className="flex flex-col justify-around text-xs text-muted-foreground pr-2">
            <span>Mon</span>
            <span>Wed</span>
            <span>Fri</span>
          </div>
          
          <div className="flex gap-1">
            {contributions.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {week.map((count, dayIndex) => (
                  <div
                    key={`${weekIndex}-${dayIndex}`}
                    className={`w-3 h-3 rounded-sm ${getColor(count)} hover:ring-2 hover:ring-primary transition-all cursor-pointer`}
                    onMouseEnter={() => setHoveredCell({ week: weekIndex, day: dayIndex })}
                    onMouseLeave={() => setHoveredCell(null)}
                    title={`${count} contributions on ${getDayName(dayIndex)}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {hoveredCell && (
        <div className="mt-4 text-xs text-muted-foreground font-mono">
          <span className="neon-text-green">
            {contributions[hoveredCell.week][hoveredCell.day]} contributions
          </span>
          {" on "}
          {getDayName(hoveredCell.day)}
        </div>
      )}
    </div>
  )
}

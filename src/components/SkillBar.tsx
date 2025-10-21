"use client"

import { useEffect, useState } from "react"
import { Progress } from "@/components/ui/progress"

interface Skill {
  name: string
  level: number
  color: string
}

interface SkillBarProps {
  skill: Skill
}

export default function SkillBar({ skill }: SkillBarProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(skill.level)
    }, 200)
    return () => clearTimeout(timer)
  }, [skill.level])

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-xs md:text-sm font-medium">{skill.name}</span>
        <span className={`text-xs md:text-sm font-mono neon-text-${skill.color}`}>{skill.level}%</span>
      </div>
      <div className="relative">
        <Progress value={progress} className="h-1.5 md:h-2" />
        <div 
          className="absolute top-0 left-0 h-1.5 md:h-2 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${progress}%`,
            background: `var(--${skill.color})`,
            boxShadow: `0 0 10px var(--${skill.color})`,
          }}
        />
      </div>
    </div>
  )
}

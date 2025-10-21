"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/Navigation"
import AnimatedBackground from "@/components/AnimatedBackground"
import SkillBar from "@/components/SkillBar"
import DevStats from "@/components/DevStats"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Coffee, Bug, GitCommit, Clock, Zap, Award } from "lucide-react"

const skills = [
  { name: "JavaScript", level: 90, color: "neon-cyan" },
  { name: "Python", level: 90, color: "neon-yellow" },
  { name: "React", level: 85, color: "neon-green" },
  { name: "Node.js", level: 80, color: "neon-green" },
  { name: "Express.js", level: 75, color: "neon-purple" },
  { name: "PostgreSQL", level: 80, color: "neon-cyan" },
  { name: "MySQL", level: 80, color: "neon-pink" },
  { name: "API Integration", level: 85, color: "neon-cyan" },
]

const devStats = [
  { icon: Coffee, label: "Coffees", value: 324, color: "text-amber-500" },
  { icon: Bug, label: "Bugs Fixed", value: 127, color: "text-red-500" },
  { icon: GitCommit, label: "Commits", value: 100, color: "text-green-500" },
  { icon: Clock, label: "Hours Coded", value: 6000, color: "text-blue-500" },
  { icon: Zap, label: "Lines of Code", value: 8000, color: "text-purple-500" },
  { icon: Award, label: "Projects", value: 20, color: "text-pink-500" },
]

export default function AboutPage() {
  const [counters, setCounters] = useState(devStats.map(() => 0))

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    devStats.forEach((stat, index) => {
      let current = 0
      const increment = stat.value / steps

      const timer = setInterval(() => {
        current += increment
        if (current >= stat.value) {
          setCounters(prev => {
            const newCounters = [...prev]
            newCounters[index] = stat.value
            return newCounters
          })
          clearInterval(timer)
        } else {
          setCounters(prev => {
            const newCounters = [...prev]
            newCounters[index] = Math.floor(current)
            return newCounters
          })
        }
      }, interval)
    })
  }, [])

  return (
    <div className="dark min-h-screen">
      <AnimatedBackground />
      <Navigation />
      
      <main className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 px-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="neon-text-purple">$ cat about.md</span>
            </h1>
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg font-mono max-w-2xl mx-auto">
              &gt; Full-stack developer passionate about building scalable applications
              and solving complex problems with elegant code
            </p>
          </div>

          {/* Dev Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-12 md:mb-16 px-4">
            {devStats.map((stat, index) => (
              <Card key={stat.label} className="bg-card/80 backdrop-blur-sm border-border hover:border-primary transition-all group">
                <CardContent className="p-3 md:p-4 lg:p-6 text-center">
                  <stat.icon className={`w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 mx-auto mb-1 md:mb-2 ${stat.color}`} />
                  <div className="text-lg md:text-xl lg:text-2xl font-bold font-mono neon-text-green mb-1">
                    {counters[index].toLocaleString()}
                  </div>
                  <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider leading-tight">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* About Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16 px-4">
            <Card className="bg-card/80 backdrop-blur-sm border-border">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 font-mono text-lg md:text-xl">
                  <span className="neon-text-cyan">&gt;</span> Who Am I?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 md:space-y-4 text-muted-foreground text-sm md:text-base">
                <p>
                  I'm a software engineer with a passion for creating efficient, scalable, 
                  and user-friendly applications. My journey in tech started with a curiosity 
                  about how things work under the hood.
                </p>
                <p>
                  With expertise spanning frontend frameworks to backend infrastructure, 
                  I thrive on building complete solutions from concept to deployment. 
                  I believe in writing clean, maintainable code and following best practices.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, 
                  attending tech meetups, or making some great UIs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 font-mono text-lg md:text-xl">
                  <span className="neon-text-cyan">&gt;</span> My Approach
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 md:space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm md:text-base">Problem-First Thinking</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Understanding the problem deeply before jumping to solutions
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm md:text-base">Iterative Development</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Building MVPs, gathering feedback, and continuously improving
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-chart-3 mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm md:text-base">Collaboration</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Working with teams to deliver exceptional results
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-chart-4 mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm md:text-base">Continuous Learning</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Staying updated with industry trends and best practices
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills Section */}
          <Card className="bg-card/80 backdrop-blur-sm border-border mb-12 md:mb-16 mx-4">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 font-mono text-lg md:text-xl">
                <span className="neon-text-cyan">$</span> Skills & Technologies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 md:space-y-6">
                {skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </CardContent>
          </Card>

        </div>
      </main>
    </div>
  )
}

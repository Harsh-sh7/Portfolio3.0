"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Twitter, ExternalLink, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TerminalHero() {
  const [displayedText, setDisplayedText] = useState("")
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  const terminalLines = [
    "$ whoami",
    "> Harshit Shakya - Full Stack Developer",
    "$ cat skills.txt",
    "> JavaScript • Python • React • Node.js",
    "> Express.js • PostgreSQL • MySQL • API Integration",
    "$ echo $LOCATION",
    "> Delhi, India 🇮🇳",
    "$ echo $PASSION",
    "> Building efficient, scalable, and user-friendly applications",
    "$ ./deploy_awesome.sh",
    "> ✓ Ready to collaborate on your next project!",
  ]

  useEffect(() => {
    if (currentLineIndex >= terminalLines.length) return

    const currentLine = terminalLines[currentLineIndex]
    const isCommand = currentLine.startsWith("$")
    const typingSpeed = isCommand ? 50 : 30

    if (displayedText.length < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentLine.slice(0, displayedText.length + 1))
      }, typingSpeed)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText("")
        setCurrentLineIndex(currentLineIndex + 1)
      }, 1000)
      return () => clearTimeout(timeout)
    }
  }, [displayedText, currentLineIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        <div className="border border-border rounded-lg overflow-hidden neon-border bg-card/50 backdrop-blur-sm">
          {/* Terminal Header */}
          <div className="bg-secondary border-b border-border px-3 md:px-4 py-2 flex items-center gap-2">
            <div className="flex gap-1.5 md:gap-2">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-xs md:text-sm text-muted-foreground ml-2 md:ml-4 font-mono">terminal@portfolio:~</span>
          </div>

          {/* Terminal Content */}
          <div className="p-4 md:p-6 lg:p-8 font-mono text-xs md:text-sm lg:text-base space-y-1 md:space-y-2 min-h-[300px] md:min-h-[400px]">
            {terminalLines.slice(0, currentLineIndex).map((line, index) => (
              <div
                key={index}
                className={
                  line.startsWith("$")
                    ? "neon-text-cyan break-all"
                    : line.startsWith(">")
                    ? "text-foreground pl-2 md:pl-4 break-words"
                    : ""
                }
              >
                {line}
              </div>
            ))}
            <div
              className={
                displayedText.startsWith("$")
                  ? "neon-text-cyan break-all"
                  : "text-foreground pl-2 md:pl-4 break-words"
              }
            >
              {displayedText}
              {showCursor && currentLineIndex < terminalLines.length && (
                <span className="inline-block w-1.5 h-4 md:w-2 md:h-5 bg-primary ml-1 animate-pulse"></span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="border-t border-border p-4 md:p-6 bg-secondary/30">
            <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
              <Button className="gap-1.5 md:gap-2 neon-border text-xs md:text-sm px-3 md:px-4" asChild>
                <a href="https://github.com/Harsh-sh7" target="_blank" rel="noopener noreferrer">
                  <Github className="w-3 h-3 md:w-4 md:h-4" />
                  GitHub
                </a>
              </Button>
              <Button className="gap-1.5 md:gap-2 neon-border text-xs md:text-sm px-3 md:px-4" asChild>
                <a href="https://linkedin.com/in/harshit-shakya" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-3 h-3 md:w-4 md:h-4" />
                  LinkedIn
                </a>
              </Button>
              <Button className="gap-1.5 md:gap-2 neon-border text-xs md:text-sm px-3 md:px-4" asChild>
                <a href="mailto:harshakya56@gmail.com">
                  <Mail className="w-3 h-3 md:w-4 md:h-4" />
                  Email
                </a>
              </Button>
              <Button variant="outline" className="gap-1.5 md:gap-2 text-xs md:text-sm px-3 md:px-4">
                <a href="https://drive.google.com/file/d/14iKE6Kk0MrBBds1uPWlCP_JBbdbjCTlO/view?usp=drive_link">
                Resume
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-8 md:mt-12 text-center">
          <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4">TECH STACK</p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {[
              "JavaScript",
              "Python",
              "React",
              "Node.js",
              "Express.js",
              "PostgreSQL",
              "MySQL",
              "API Integration",
              "Tailwind CSS",
              "Git",
            ].map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 md:px-4 md:py-2 border border-border rounded-md text-xs md:text-sm hover:border-primary hover:neon-text-green transition-all cursor-default whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

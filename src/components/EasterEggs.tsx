"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export default function EasterEggs() {
  const [konamiActivated, setKonamiActivated] = useState(false)
  const [matrixMode, setMatrixMode] = useState(false)
  const [showSecret, setShowSecret] = useState(false)
  const [keys, setKeys] = useState<string[]>([])

  // Konami code: ↑ ↑ ↓ ↓ ← → ← → B A
  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ]

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeys((prevKeys) => {
        const newKeys = [...prevKeys, e.key].slice(-10)
        
        // Check Konami code
        if (konamiCode.every((key, index) => key === newKeys[index])) {
          setKonamiActivated(true)
          setShowSecret(true)
          return []
        }

        // Check for "matrix" command
        const command = newKeys.join("")
        if (command.includes("matrix")) {
          setMatrixMode(true)
          setTimeout(() => setMatrixMode(false), 5000)
          return []
        }

        // Check for "hack" command
        if (command.includes("hack")) {
          hackEffect()
          return []
        }

        return newKeys
      })
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const hackEffect = () => {
    const body = document.body
    body.style.transform = "rotate(180deg)"
    setTimeout(() => {
      body.style.transform = "rotate(0deg)"
    }, 1000)
  }

  return (
    <>
      {/* Konami Code Secret Dialog */}
      <Dialog open={showSecret} onOpenChange={setShowSecret}>
        <DialogContent className="bg-card border-primary neon-border">
          <DialogHeader>
            <DialogTitle className="text-2xl font-mono neon-text-green">
              🎮 Achievement Unlocked!
            </DialogTitle>
            <DialogDescription className="space-y-4">
              <p className="text-base">
                Congratulations! You've discovered the Konami Code easter egg!
              </p>
              <div className="bg-background/50 rounded-md p-4 font-mono text-sm">
                <div className="neon-text-cyan">$ cat secret.txt</div>
                <div className="mt-2 text-muted-foreground">
                  <div>&gt; You're clearly a person of culture.</div>
                  <div>&gt; Fellow gamer or retro enthusiast?</div>
                  <div>&gt; Either way, I like your style! 😎</div>
                  <div className="mt-4">&gt; Pro tip: Try typing "matrix" or "hack"...</div>
                </div>
              </div>
              <div className="text-sm text-center text-muted-foreground">
                Easter egg {konamiActivated ? "1" : "?"} of 3 found
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Matrix Mode Overlay */}
      {matrixMode && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-6xl font-mono neon-text-green animate-pulse mb-4">
              MATRIX MODE
            </div>
            <div className="text-2xl font-mono neon-text-cyan">
              Wake up, Neo...
            </div>
          </div>
        </div>
      )}
    </>
  )
}

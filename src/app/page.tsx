import Navigation from "@/components/Navigation"
import AnimatedBackground from "@/components/AnimatedBackground"
import TerminalHero from "@/components/TerminalHero"
import EasterEggs from "@/components/EasterEggs"

export default function Home() {
  return (
    <div className="dark">
      <AnimatedBackground />
      <Navigation />
      <main className="relative z-10">
        <TerminalHero />
      </main>
      <EasterEggs />
    </div>
  )
}
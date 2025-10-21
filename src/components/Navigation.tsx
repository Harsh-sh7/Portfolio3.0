"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Code2, FolderGit2, User, Mail, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home", icon: Terminal },
    { href: "/projects", label: "Projects", icon: FolderGit2 },
    { href: "/about", label: "About", icon: User },
    { href: "/contact", label: "Contact", icon: Mail },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-3 md:px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          <Link href="/" className="flex items-center gap-1.5 md:gap-2">
            <Code2 className="w-5 h-5 md:w-6 md:h-6 neon-text-green" />
            <span className="font-bold text-base md:text-lg neon-text-green">&lt;Harsh/&gt;</span>
          </Link>

          <div className="flex items-center gap-0.5 md:gap-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    className={`gap-1 md:gap-2 px-2 md:px-3 py-1.5 md:py-2 text-xs md:text-sm ${isActive ? "neon-border" : ""}`}
                  >
                    <Icon className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="hidden sm:inline">{item.label}</span>
                  </Button>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}

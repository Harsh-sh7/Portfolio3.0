"use client"

import { useState } from "react"
import Navigation from "@/components/Navigation"
import AnimatedBackground from "@/components/AnimatedBackground"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail, Send, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    "$ initialize_contact_form",
    "> Contact form initialized successfully",
    "> Awaiting user input..."
  ])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const newOutput = [
      ...terminalOutput,
      `$ send_message --from="${formData.name}" --email="${formData.email}"`,
      "> Validating input...",
      "> ✓ Name validated",
      "> ✓ Email validated",
      "> ✓ Message validated",
      "> Establishing connection...",
      "> Message sent successfully!",
      "> Thank you for reaching out. I'll get back to you soon!",
      ""
    ]
    
    setTerminalOutput(newOutput)
    setFormData({ name: "", email: "", message: "" })
  }

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Harsh-sh7",
      handle: "@Harsh-sh7",
      color: "neon-text-green"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/harshit-shakya",
      handle: "/in/harshit-shakya",
      color: "neon-text-cyan"
    },
    {
      name: "Location",
      icon: MessageSquare,
      url: "#",
      handle: "Delhi, India",
      color: "neon-text-purple"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:harshakya56@gmail.com",
      handle: "harshakya56@gmail.com",
      color: "neon-text-pink"
    }
  ]

  const asciiArt = `
   _   _                 _     _ _   
  | | | | __ _ _ __ ___  | |__ (_) |_ 
  | |_| |/ _\` | '__/ __| | '_ \\| | __|
  |  _  | (_| | |  \\__ \\ | | | | | |_ 
  |_| |_|\\__,_|_|  |___/ |_| |_|_|\\__|
  `

  return (
    <div className="dark min-h-screen">
      <AnimatedBackground />
      <Navigation />
      
      <main className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="neon-text-pink">$ ./contact.sh</span>
            </h1>
            <p className="text-muted-foreground text-lg font-mono">
              &gt; Let's build something amazing together
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Contact Form */}
            <Card className="bg-card/80 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-mono">
                  <MessageSquare className="w-5 h-5 neon-text-cyan" />
                  <span className="neon-text-cyan">$</span> Send Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-mono mb-2 block">
                      <span className="neon-text-green">$</span> Name
                    </label>
                    <Input
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="font-mono"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-mono mb-2 block">
                      <span className="neon-text-green">$</span> Email
                    </label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="font-mono"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-mono mb-2 block">
                      <span className="neon-text-green">$</span> Message
                    </label>
                    <Textarea
                      placeholder="Type your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="font-mono min-h-[150px]"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full gap-2 neon-border">
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Terminal Output & ASCII Art */}
            <div className="space-y-6">
              {/* ASCII Art */}
              <Card className="bg-card/80 backdrop-blur-sm border-border">
                <CardContent className="p-3 md:p-6">
                  <pre className="text-[10px] xs:text-xs md:text-sm neon-text-green font-mono overflow-x-auto whitespace-pre">
                    {asciiArt}
                  </pre>
                </CardContent>
              </Card>

              {/* Terminal Output */}
              <Card className="bg-card/80 backdrop-blur-sm border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-xs md:text-sm text-muted-foreground ml-2 md:ml-4 font-mono">output.log</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="bg-background/50 rounded-md p-3 md:p-4 font-mono text-xs md:text-sm max-h-[250px] md:max-h-[300px] overflow-y-auto">
                    {terminalOutput.map((line, index) => (
                      <div
                        key={index}
                        className={
                          line.startsWith("$")
                            ? "neon-text-cyan mb-1 break-all"
                            : line.startsWith(">")
                            ? "text-foreground/80 mb-1 break-words"
                            : "mb-1"
                        }
                      >
                        {line || "\u00A0"}
                      </div>
                    ))}
                    <span className="inline-block w-1.5 h-3 md:w-2 md:h-4 bg-primary animate-pulse"></span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8 font-mono">
              <span className="neon-text-cyan">$</span> Connect With Me
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="bg-card/80 backdrop-blur-sm border-border hover:border-primary transition-all">
                      <CardContent className="p-4 md:p-6 text-center">
                        <Icon className={`w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 md:mb-3 ${social.color} group-hover:scale-110 transition-transform`} />
                        <h3 className="font-semibold mb-1 text-sm md:text-base">{social.name}</h3>
                        <p className="text-xs text-muted-foreground font-mono break-all">
                          {social.handle}
                        </p>
                      </CardContent>
                    </Card>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <Card className="bg-card/80 backdrop-blur-sm border-border">
              <CardContent className="p-4 md:p-8">
                <p className="text-muted-foreground font-mono mb-4 text-sm md:text-base text-center">
                  <span className="neon-text-green">&gt;</span> Open to collaborations, freelance work, and exploring new opportunities
                </p>
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm">
                  <span className="px-2 py-1 md:px-4 md:py-2 border border-border rounded-md whitespace-nowrap">
                    🌍 Remote
                  </span>
                  <span className="px-2 py-1 md:px-4 md:py-2 border border-border rounded-md whitespace-nowrap">
                    ⏰ Available
                  </span>
                  <span className="px-2 py-1 md:px-4 md:py-2 border border-border rounded-md whitespace-nowrap">
                    💼 Freelance
                  </span>
                  <span className="px-2 py-1 md:px-4 md:py-2 border border-border rounded-md whitespace-nowrap">
                    📍 Delhi, India
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

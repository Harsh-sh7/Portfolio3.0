"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Star, GitFork, Code2 } from "lucide-react"
import Image from "next/image"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  github: string
  demo: string
  stars: number
  forks: number
  codePreview: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [showCode, setShowCode] = useState(false)

  return (
    <Card className="group relative overflow-hidden border-border hover:border-primary transition-all duration-300 bg-card/80 backdrop-blur-sm">
      {/* Image Container */}
      <div className="relative h-40 md:h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
        
        {/* Code Preview Overlay */}
        <div 
          className={`absolute inset-0 bg-background/95 backdrop-blur-sm transition-all duration-300 ${
            showCode ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="p-2 md:p-4 h-full overflow-auto">
            <div className="flex items-center gap-2 mb-2">
              <Code2 className="w-3 h-3 md:w-4 md:h-4 neon-text-green" />
              <span className="text-[10px] md:text-xs font-mono neon-text-green">code_preview.ts</span>
            </div>
            <pre className="text-[10px] md:text-xs font-mono text-foreground whitespace-pre-wrap overflow-x-auto">
              {project.codePreview}
            </pre>
          </div>
        </div>

        {/* Hover Button */}
        <button
          onMouseEnter={() => setShowCode(true)}
          onMouseLeave={() => setShowCode(false)}
          onClick={() => setShowCode(!showCode)}
          className="absolute top-2 right-2 p-1.5 md:p-2 bg-background/80 backdrop-blur-sm rounded-md border border-border hover:border-primary transition-all"
        >
          <Code2 className="w-3 h-3 md:w-4 md:h-4" />
        </button>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-lg md:text-xl group-hover:neon-text-green transition-all leading-tight">
          {project.title}
        </CardTitle>
        <CardDescription className="text-xs md:text-sm line-clamp-3">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pb-3">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
          {project.tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="outline" 
              className="text-[10px] md:text-xs border-border hover:border-primary hover:neon-text-cyan transition-all cursor-default px-2 py-0.5"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Star className="w-3 h-3 md:w-4 md:h-4" />
            {project.stars}
          </span>
          <span className="flex items-center gap-1">
            <GitFork className="w-3 h-3 md:w-4 md:h-4" />
            {project.forks}
          </span>
        </div>
      </CardContent>

      <CardFooter className="flex gap-2 pt-3">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex-1 gap-1.5 md:gap-2 text-xs md:text-sm px-2 md:px-3"
          asChild
        >
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="w-3 h-3 md:w-4 md:h-4" />
            Code
          </a>
        </Button>
        <Button 
          size="sm" 
          className="flex-1 gap-1.5 md:gap-2 neon-border text-xs md:text-sm px-2 md:px-3"
          asChild
        >
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
            Demo
          </a>
        </Button>
      </CardFooter>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      </div>
    </Card>
  )
}

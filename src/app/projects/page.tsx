"use client"

import Navigation from "@/components/Navigation"
import AnimatedBackground from "@/components/AnimatedBackground"
import ProjectCard from "@/components/ProjectCard"
import { Github, ExternalLink, Star, GitFork } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "NotAI",
    description: "NotAI is a full-stack platform that combines AI chat with real-time code execution. It lets users talk to Gemini and instantly run JavaScript, Python, Java, or C++ in the same interface.",
    image: "/assets/projects/NotAI.png",
    tags: ["TypeScript", "JavaScript", "MongoDB", "Gemini API"],
    github: "https://github.com/Harsh-sh7/NotAI",
    demo: "https://not-ai-pro.vercel.app/",
    stars: 15,
    forks: 4,
    codePreview: `// NotAI: AI chat + code execution
  app.post('/assist', async (req, res) => {
  const { prompt, code, lang } = req.body;
  const reply = await gemini.generate({ prompt });
  const exec = code
    ? await judge0.run({ source_code: code, language_id: getId(lang) })
    : null;
  res.json({ reply: reply.text, output: exec?.stdout });
});`
  },
  {
    id: 2,
    title: "FriendAI - AI Companion",
    description: "A comprehensive personal AI companion for daily wellness tracking, mood monitoring, and life guidance with voice integration.",
    image: "/assets/projects/friendai.jpg",
    tags: ["React", "Node.js", "Gemini API", "PostgreSQL", "ElevenLabs"],
    github: "https://github.com/Harsh-sh7/FriendAI",
    demo: "https://friend-ai-liard.vercel.app",
    stars: 12,
    forks: 3,
    codePreview: `// AI Mood Analysis
const analyzeMood = async (text) => {
  const response = await gemini.generateContent({
    prompt: \`Analyze mood from: \${text}\`,
    temperature: 0.7
  });
  return response.mood_score;
};`
  },
  {
    id: 3,
    title: "Vehicle Tracker",
    description: "A dynamic React app that tracks and animates vehicles in real time with route mapping and ride date selection using Leaflet.",
    image: "/assets/projects/vehicle-tracker.jpg",
    tags: ["React", "Leaflet", "OpenRouteService", "Tailwind CSS", "Vite"],
    github: "https://github.com/Harsh-sh7/vehicle-tracker",
    demo: "https://blockly-seven.vercel.app",
    stars: 8,
    forks: 2,
    codePreview: `// Vehicle Animation
const animateVehicle = (route) => {
  route.coordinates.forEach((coord, index) => {
    setTimeout(() => {
      setVehiclePosition(coord);
      map.flyTo(coord, 15);
    }, index * 1000);
  });
};`
  },
  {
    id: 4,
    title: "Flash Quiz",
    description: "An interactive quiz platform with a sleek UI that tracks and visualizes your knowledge across multiple sectors with real-time scoring.",
    image: "/assets/projects/flash-quiz.jpg",
    tags: ["React", "Tailwind CSS", "API Integration", "Chart.js", "Local Storage"],
    github: "https://github.com/Harsh-sh7/FlashQuiz",
    demo: "https://capstone2-0-iota.vercel.app",
    stars: 6,
    forks: 1,
    codePreview: `// Quiz Logic
const calculateScore = (answers, questions) => {
  let correct = 0;
  answers.forEach((answer, index) => {
    if (answer === questions[index].correct) {
      correct++;
    }
  });
  return (correct / questions.length) * 100;
};`
  }
]

export default function ProjectsPage() {
  return (
    <div className="dark min-h-screen">
      <AnimatedBackground />
      <Navigation />
      
      <main className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 px-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="neon-text-green">$ ls projects/</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg font-mono">
              &gt; Showcasing my latest work in software engineering
            </p>
            <div className="mt-4 md:mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
              <span className="flex items-center gap-2">
                <Star className="w-3 h-3 md:w-4 md:h-4 neon-text-yellow" />
                <span className="text-muted-foreground">{projects.reduce((acc, p) => acc + p.stars, 0)} total stars</span>
              </span>
              <span className="flex items-center gap-2">
                <GitFork className="w-3 h-3 md:w-4 md:h-4 neon-text-cyan" />
                <span className="text-muted-foreground">{projects.reduce((acc, p) => acc + p.forks, 0)} forks</span>
              </span>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto px-4">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Footer CTA */}
          <div className="mt-12 md:mt-16 text-center px-4">
            <div className="border border-border rounded-lg p-4 md:p-6 bg-card/50 backdrop-blur-sm max-w-md mx-auto">
              <p className="text-muted-foreground mb-4 font-mono text-sm md:text-base">
                &gt; Want to see more? Check out my GitHub profile
              </p>
              <a
                href="https://github.com/Harsh-sh7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-primary text-primary-foreground rounded-md hover:neon-border transition-all text-sm md:text-base"
              >
                <Github className="w-4 h-4 md:w-5 md:h-5" />
                View All Repositories
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

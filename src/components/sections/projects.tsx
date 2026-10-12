import { useState } from "react"
import { ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa6"

import { BlurFade } from "@/components/magicui/blur-fade"
import { Button } from "@/components/ui/button"
import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/ui/terminal"
import { projects, type Project, type Screenshot } from "@/data/projects"
import { cn } from "@/lib/utils"

function BrowserFrame({ project, shot }: { project: Project; shot: Screenshot }) {
  return (
    <a
      href={project.projectLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Abrir ${project.title}`}
      className="group bg-card hover:border-foreground/25 focus-visible:ring-ring/50 block overflow-hidden rounded-lg border transition-colors outline-none focus-visible:ring-[3px]"
    >
      <div className="flex items-center gap-3 border-b px-3 py-2">
        <div className="flex gap-1.5" aria-hidden>
          <span className="bg-muted-foreground/30 size-2 rounded-full" />
          <span className="bg-muted-foreground/30 size-2 rounded-full" />
          <span className="bg-muted-foreground/30 size-2 rounded-full" />
        </div>
        <span className="text-muted-foreground bg-muted/50 mx-auto max-w-[70%] truncate rounded px-3 py-0.5 text-[10px]">
          {project.url}
        </span>
        <span className="w-9" aria-hidden />
      </div>
      <div className="overflow-hidden">
        <img
          src={shot.image}
          alt={`Prévia do projeto ${project.title}: ${shot.label}`}
          width={shot.size[0]}
          height={shot.size[1]}
          loading="lazy"
          decoding="async"
          className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
    </a>
  )
}

function TerminalFrame({ project }: { project: Project }) {
  return (
    <Terminal className="bg-card h-auto max-h-none max-w-none rounded-lg text-sm">
      {(project.terminal ?? []).map((line, i) =>
        line.type === "cmd" ? (
          <TypingAnimation key={i} className="text-green-500">
            {`$ ${line.text}`}
          </TypingAnimation>
        ) : (
          <AnimatedSpan key={i} className="text-muted-foreground">
            {line.text}
          </AnimatedSpan>
        ),
      )}
    </Terminal>
  )
}

function ScreenshotSwitcher({ project }: { project: Project }) {
  const shots: Screenshot[] = [
    { label: project.imageLabel ?? "Principal", image: project.image!, size: project.size! },
    ...(project.more ?? []),
  ]
  const [index, setIndex] = useState(0)

  return (
    <div className="space-y-2">
      <BrowserFrame project={project} shot={shots[index]} />
      {shots.length > 1 && (
        <div className="flex gap-1" role="group" aria-label={`Telas de ${project.title}`}>
          {shots.map((shot, i) => (
            <button
              key={shot.label}
              type="button"
              aria-pressed={i === index}
              onClick={() => setIndex(i)}
              className={cn(
                "focus-visible:ring-ring/50 cursor-pointer rounded px-2 py-1 text-xs transition-colors outline-none focus-visible:ring-[3px]",
                i === index ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {shot.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function ProjectItem({ project }: { project: Project }) {
  return (
    <BlurFade inView offset={12} className="space-y-4">
      <div className="space-y-1">
        <h3 className="text-base font-semibold tracking-tight">{project.title}</h3>
        <p className="text-muted-foreground text-sm">{project.description}</p>
      </div>

      {project.terminal ? <TerminalFrame project={project} /> : <ScreenshotSwitcher project={project} />}

      <div className="flex gap-2">
        <Button asChild size="sm">
          <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink />
            Ver projeto
          </a>
        </Button>
        {project.repoLink ? (
          <Button asChild variant="outline" size="sm">
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
              <FaGithub />
              Repositório
            </a>
          </Button>
        ) : (
          <Button variant="outline" size="sm" disabled>
            <FaGithub />
            Privado
          </Button>
        )}
      </div>
    </BlurFade>
  )
}

export function Projects() {
  return (
    <div className="space-y-12">
      {projects.map((project) => (
        <ProjectItem key={project.title} project={project} />
      ))}
    </div>
  )
}

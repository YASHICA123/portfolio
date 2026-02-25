'use client'

import { ProjectCard } from './project-card'
import { useEffect, useRef } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const projects = [
  {
    title: 'Ressurrection MR',
    description: 'Live website project.',
    tags: ['Website', 'Live Demo'],
    techStack: ['React', 'Three.js', 'TypeScript'],
    link: 'https://ressurrectionmr.netlify.app/',
  },
  {
    title: 'Kanban 6',
    description: 'Live website project.',
    tags: ['Website', 'Live Demo'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://kanban6.netlify.app/',
  },
]

export function Projects() {
  const { ref: sectionRef, isVisible } = useScrollAnimation()
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (titleRef.current && isVisible) {
      titleRef.current.classList.add('animate-slide-in-left')
    }
  }, [isVisible])

  return (
    <section
      ref={sectionRef}
      id="work"
      className="py-20 md:py-32 px-6 md:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          ref={titleRef}
          className={`text-4xl md:text-6xl font-bold text-foreground mb-4 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}
        >
          Selected Work
        </h2>
        <p className={`text-lg text-muted-foreground mb-16 max-w-2xl transition-all duration-700 ${
          isVisible
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 -translate-x-8'
        }`}>
          Projects that showcase my expertise in building scalable systems, AI integration, and modern web experiences.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

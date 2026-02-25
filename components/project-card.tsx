'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  techStack?: string[]
  link?: string
  index?: number
}

export function ProjectCard({
  title,
  description,
  tags,
  techStack,
  link,
  index = 0,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null)
  const { ref: scrollRef, isVisible } = useScrollAnimation()
  const [isHovered, setIsHovered] = useState(false)
  const setCardRefs = useCallback(
    (node: HTMLAnchorElement | null) => {
      cardRef.current = node
      scrollRef.current = node
    },
    [scrollRef]
  )

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovered) return

      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = (y - centerY) * 0.02
      const rotateY = (centerX - x) * 0.02

      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }

    const handleMouseEnter = () => {
      setIsHovered(true)
    }

    const handleMouseLeave = () => {
      setIsHovered(false)
      card.style.transform = 'perspective(1200px) rotateX(0) rotateY(0)'
    }

    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseenter', handleMouseEnter)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseenter', handleMouseEnter)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isHovered])

  return (
    <a
      href={link || '#'}
      ref={setCardRefs}
      className="group relative block h-full rounded-3xl overflow-hidden bg-secondary p-8 md:p-10 transition-all duration-500 cursor-pointer"
      data-project="true"
      style={{
        boxShadow: isHovered ? '0 16px 48px rgba(0, 0, 0, 0.12)' : '0 4px 20px rgba(0, 0, 0, 0.08)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? `translateY(0) translateX(0)`
          : `translateY(${40 + index * 10}px) translateX(0)`,
        animation: isVisible ? `fadeUp 0.8s var(--ease-smooth) forwards` : 'none',
        animationDelay: `${0.2 + index * 0.15}s`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10 h-full flex flex-col justify-between gap-6">
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-foreground transition-colors duration-300">
            {title}
          </h3>
          <p
            className="text-muted-foreground text-base leading-relaxed max-w-sm transition-all duration-300"
            style={{
              transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
            }}
          >
            {description}
          </p>
        </div>

        {techStack && techStack.length > 0 && (
          <div className="mt-6 pt-4 border-t border-foreground/10">
            <p
              className="text-sm font-normal transition-all duration-300"
              style={{
                letterSpacing: '0.3px',
                color: isHovered ? 'rgba(122, 122, 117, 0.95)' : 'rgba(122, 122, 117, 0.7)',
              }}
            >
              {techStack.map((tech, idx) => (
                <span
                  key={tech}
                  style={{
                    animation: isVisible ? `fadeUp 0.5s var(--ease-smooth)` : 'none',
                    animationDelay: `${0.2 + idx * 0.08}s`,
                    animationFillMode: 'forwards',
                    opacity: isVisible ? 1 : 0,
                  }}
                >
                  {tech}
                  {idx < techStack.length - 1 && ' • '}
                </span>
              ))}
            </p>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mt-6">
          {tags.map((tag, idx) => (
            <span
              key={tag}
              className="text-xs md:text-sm px-3 py-1.5 rounded-full bg-foreground/5 text-foreground font-medium transition-all duration-300"
              style={{
                animation: isHovered ? `fadeUp 0.5s var(--ease-smooth)` : 'none',
                animationDelay: `${idx * 0.05}s`,
                animationFillMode: 'forwards',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Hover arrow indicator */}
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-400 transform group-hover:translate-x-1 group-hover:-translate-y-1">
          <svg
            className="w-6 h-6 text-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 7h10v10M7 17L17 7"
            />
          </svg>
        </div>
      </div>

      {/* Background gradient on hover */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-foreground/0 via-foreground/0 to-foreground/5 transition-opacity duration-400"
        style={{
          opacity: isHovered ? 1 : 0,
        }}
      />
    </a>
  )
}

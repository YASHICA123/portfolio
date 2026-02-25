'use client'

import { useRef, useEffect } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export function About() {
  const { ref: sectionRef, isVisible } = useScrollAnimation()
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isVisible) return

    if (titleRef.current) {
      titleRef.current.classList.add('animate-slide-in-right')
    }
    if (contentRef.current) {
      contentRef.current.classList.add('animate-fade-up')
    }
  }, [isVisible])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 md:py-32 px-6 md:px-8 bg-secondary"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          ref={titleRef}
          className={`text-4xl md:text-6xl font-bold text-foreground mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          About
        </h2>

        <div
          ref={contentRef}
          className={`grid md:grid-cols-3 gap-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className={`space-y-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <h3 className="text-xl font-semibold text-foreground">Background</h3>
            <p className="text-muted-foreground leading-relaxed">
              With 5+ years of experience at the intersection of software development and artificial intelligence, I've helped startups and enterprises build innovative solutions that scale. My journey spans from early-stage hackathons to architecting systems serving millions of users.
            </p>
          </div>

          <div className={`space-y-6 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <h3 className="text-xl font-semibold text-foreground">Philosophy</h3>
            <p className="text-muted-foreground leading-relaxed">
              I believe in writing clean, maintainable code that tells a story. Every line serves a purpose. Every feature delights users. Technology should be elegant, not complex. I combine technical excellence with thoughtful design to create experiences that matter.
            </p>
          </div>

          <div className={`space-y-6 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <h3 className="text-xl font-semibold text-foreground">Expertise</h3>
            <p className="text-muted-foreground leading-relaxed">
              Full-stack development, AI/ML integration, system design, performance optimization, and team leadership. I excel at translating complex problems into elegant solutions and mentoring developers to achieve their best work.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-16 border-t border-muted">
          <div className="grid md:grid-cols-2 gap-12">
            <div
              className={`space-y-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h3 className="text-lg font-semibold text-foreground">Currently</h3>
              <p className="text-muted-foreground leading-relaxed">
                Building AI-powered tools at a venture-backed startup, focusing on developer experience and enterprise adoption. Leading a team of 8 engineers and collaborating across product and design.
              </p>
            </div>

            <div
              className={`space-y-4 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h3 className="text-lg font-semibold text-foreground">Outside Work</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about open-source contributions, technical writing, and sharing knowledge with the community. You'll often find me speaking at conferences, mentoring junior developers, or experimenting with new technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

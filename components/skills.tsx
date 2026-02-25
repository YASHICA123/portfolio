'use client'

import { useRef, useEffect } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Web Performance', 'Accessibility'],
  },
  {
    category: 'Backend & Infrastructure',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'GraphQL', 'Docker', 'AWS', 'Kubernetes'],
  },
  {
    category: 'AI & Machine Learning',
    skills: ['LLMs', 'RAG', 'Fine-tuning', 'TensorFlow', 'PyTorch', 'Prompt Engineering'],
  },
  {
    category: 'Tools & Practices',
    skills: ['Git', 'CI/CD', 'Testing', 'System Design', 'Agile', 'Technical Leadership'],
  },
]

export function Skills() {
  const { ref: sectionRef, isVisible } = useScrollAnimation()
  const titleRef = useRef<HTMLHeadingElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isVisible) return

    if (titleRef.current) {
      titleRef.current.classList.add('animate-slide-in-left')
    }
  }, [isVisible])

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 md:py-32 px-6 md:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          ref={titleRef}
          className={`text-4xl md:text-6xl font-bold text-foreground mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Skills & Expertise
        </h2>

        <div
          ref={gridRef}
          className={`grid md:grid-cols-2 gap-12 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {skillCategories.map((category, index) => (
            <div
              key={category.category}
              className={`space-y-6 p-8 md:p-10 rounded-3xl bg-secondary hover:bg-muted transition-all duration-500 group cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 0.1}s` : '0s',
              }}
            >
              <h3 className="text-2xl font-bold text-foreground">
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-foreground/8 text-foreground font-medium text-sm hover:bg-foreground/12 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 pt-16 border-t border-muted transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: isVisible ? '0.4s' : '0s',
          }}
        >
          <p className="text-lg text-muted-foreground max-w-3xl">
            I'm constantly learning and staying updated with emerging technologies. I believe in the power of continuous improvement and actively contribute to the developer community through open-source projects and technical content.
          </p>
        </div>
      </div>
    </section>
  )
}

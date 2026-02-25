'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useMousePosition } from '@/hooks/useMousePosition'

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const mousePosition = useMousePosition()
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 })

  // Text reveal animation
  useEffect(() => {
    if (!titleRef.current) return

    const words = titleRef.current.textContent?.split(' ') || []
    titleRef.current.innerHTML = words
      .map((word) => `<span class="inline-block" style="display: inline-block;">${word}&nbsp;</span>`)
      .join('')

    const spans = titleRef.current.querySelectorAll('span')
    spans.forEach((span, index) => {
      span.style.animation = `textReveal 0.8s var(--ease-smooth) forwards`
      span.style.animationDelay = `${index * 0.1}s`
      span.style.opacity = '0'
    })
  }, [])

  // Parallax effect on mouse move
  useEffect(() => {
    if (!imageContainerRef.current) return

    const rect = imageContainerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distX = (mousePosition.x - centerX) * 0.02
    const distY = (mousePosition.y - centerY) * 0.02

    setParallaxOffset({ x: distX, y: distY })
  }, [mousePosition])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === subtitleRef.current) {
              entry.target.classList.add('animate-fade-up')
            }
            if (entry.target === imageRef.current) {
              entry.target.classList.add('animate-blur-to-focus')
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    if (subtitleRef.current) observer.observe(subtitleRef.current)
    if (imageRef.current) observer.observe(imageRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="min-h-screen pt-32 md:pt-40 pb-20 px-6 md:px-8 flex items-center overflow-hidden relative">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div
          className="absolute inset-0 animate-float-gradient"
          style={{
            backgroundImage: 'linear-gradient(-45deg, #1a1a18 0%, #f0f0ed 25%, #e8e8e4 50%, #f0f0ed 75%, #1a1a18 100%)',
            backgroundSize: '400% 400%',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 order-2 md:order-1">
          <h1
            ref={titleRef}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-foreground"
          >
            Developer & AI Engineer
          </h1>

          <p
            ref={subtitleRef}
            className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed opacity-0 stagger-item"
            style={{
              animation: 'fadeUp 0.8s var(--ease-smooth)',
              animationDelay: '0.6s',
              animationFillMode: 'forwards',
            }}
          >
            Crafting elegant digital experiences with AI at the intersection of design and technology. Building the future, one line of code at a time.
          </p>

          <div
            className="flex gap-4 opacity-0"
            style={{
              animation: 'fadeUp 0.8s var(--ease-smooth)',
              animationDelay: '0.8s',
              animationFillMode: 'forwards',
            }}
          >
            <a
              href="#work"
              className="group px-6 py-3 md:px-8 md:py-4 bg-foreground text-background font-semibold rounded-full relative overflow-hidden transition-all hover:shadow-lg inline-block"
              style={{
                backgroundImage: 'linear-gradient(90deg, transparent 0%, transparent 50%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.1) 100%)',
                backgroundSize: '200% 100%',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.animation = 'fillWipe 0.6s var(--ease-smooth) forwards'
              }}
            >
              View My Work
            </a>
          </div>
        </div>

        <div
          ref={imageContainerRef}
          className="relative h-80 md:h-full md:min-h-96 order-1 md:order-2"
        >
          <div
            ref={imageRef}
            className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background rounded-3xl overflow-hidden opacity-0"
            style={{
              transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`,
              transition: 'transform 0.3s ease-out',
              filter: 'blur(20px)',
            }}
          >
            <Image
              src="/images/portrait.jpg"
              alt="Professional portrait"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Decorative shadow layer */}
          <div className="absolute -inset-4 bg-gradient-to-br from-foreground/5 to-transparent rounded-3xl -z-10 blur-md" />
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-fade-in" style={{ animation: 'fadeIn 1s var(--ease-smooth) 1.5s forwards', opacity: 0 }}>
          <svg
            className="w-6 h-6 text-muted-foreground/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

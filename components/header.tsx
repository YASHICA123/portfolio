'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-muted'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-8 py-4 md:py-6 flex items-center justify-between">
        <Link
          href="#"
          className="text-sm md:text-base font-semibold text-foreground hover:text-muted-foreground transition-colors"
        >
          YASHICA MITTAL
        </Link>

        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground group-hover:w-full transition-all duration-300 ease-out" />
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="text-sm font-medium px-4 py-2 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:shadow-lg relative overflow-hidden"
          style={{
            backgroundImage: 'linear-gradient(90deg, transparent 0%, transparent 50%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.1) 100%)',
            backgroundSize: '200% 100%',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.animation = 'fillWipe 0.5s var(--ease-hover) forwards'
          }}
        >
          Get in Touch
        </a>
      </nav>
    </header>
  )
}

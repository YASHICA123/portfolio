'use client'

import { useRef, useEffect } from 'react'

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (contentRef.current) observer.observe(contentRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 md:py-32 px-6 md:px-8 bg-secondary"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-5xl md:text-7xl font-bold text-foreground mb-6 opacity-0"
          style={{
            animation: 'fadeUp 0.6s ease-out',
            animationDelay: '0.1s',
            animationFillMode: 'forwards',
          }}
        >
          Let's Work Together
        </h2>

        <p
          className="text-lg md:text-xl text-muted-foreground mb-12 opacity-0"
          style={{
            animation: 'fadeUp 0.6s ease-out',
            animationDelay: '0.2s',
            animationFillMode: 'forwards',
          }}
        >
          I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out.
        </p>

        <div
          ref={contentRef}
          className="flex flex-col md:flex-row items-center justify-center gap-8 opacity-0"
          style={{
            animation: 'fadeUp 0.6s ease-out',
            animationDelay: '0.3s',
            animationFillMode: 'forwards',
          }}
        >
          <a
            href="mailto:hello@example.com"
            className="px-8 md:px-12 py-4 md:py-6 bg-foreground text-background font-semibold text-lg rounded-full hover:bg-foreground/90 transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </a>

          <div className="flex gap-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-foreground/10 text-foreground hover:bg-foreground/20 transition-all"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-foreground/10 text-foreground hover:bg-foreground/20 transition-all"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.186.092-.923.35-1.555.636-1.912-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.270.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.138 18.194 20 14.440 20 10.017 20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-foreground/10 text-foreground hover:bg-foreground/20 transition-all"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.338 16.338H13.669V12.16c0-.995-.017-2.292-1.194-2.292-1.195 0-1.38.932-1.38 1.891v4.579H8.265V9.359h2.527v1.017h.036c.36-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.658zM5.337 8.257a1.47 1.47 0 01-1.466-1.478c0-.816.663-1.478 1.466-1.478.804 0 1.466.662 1.466 1.478 0 .816-.662 1.478-1.466 1.478zm1.266 7.582H4.071V9.359h2.532v6.48zM17.715 0H2.285A2.283 2.283 0 000 2.298v15.403A2.283 2.283 0 002.285 20h15.43a2.285 2.285 0 002.289-2.297V2.298A2.286 2.286 0 0017.715 0z" />
              </svg>
            </a>
          </div>
        </div>

        <div
          className="mt-16 pt-16 border-t border-muted opacity-0"
          style={{
            animation: 'fadeUp 0.6s ease-out',
            animationDelay: '0.4s',
            animationFillMode: 'forwards',
          }}
        >
          <p className="text-sm text-muted-foreground">
            Based in San Francisco • Open to remote work worldwide
          </p>
        </div>
      </div>
    </section>
  )
}

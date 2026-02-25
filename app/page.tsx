import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { Cursor } from '@/components/cursor'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Cursor />
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-sm font-medium mb-2">YASHICA MITTAL</p>
            <p className="text-xs opacity-75">
              Developer & AI Engineer
            </p>
          </div>

          <div className="text-center text-xs opacity-75">
            <p>© {currentYear} All rights reserved. Built with modern web technologies.</p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/YASHICA123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:opacity-75 transition-opacity"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yashica-mittal-876230302"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:opacity-75 transition-opacity"
            >
              LinkedIn
            </a>
            <a
              href="mailto:yashicamittal12@gmail.com"
              className="text-sm hover:opacity-75 transition-opacity"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

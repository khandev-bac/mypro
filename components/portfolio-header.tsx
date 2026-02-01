import { ArrowUpRight } from 'lucide-react'

export function PortfolioHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto max-w-4xl px-6 py-8 sm:px-8 sm:py-12">
        <nav className="mb-12 flex items-center justify-between">
          <div className="font-semibold text-foreground">FK</div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#work" className="hover:text-foreground transition-colors">Work</a>
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </nav>

        <div className="space-y-6">
          <div>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground tracking-tight">
              <span className="text-balance">Farhan Khan</span>
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Backend engineer building scalable systems and robust APIs. Passionate about clean code, 
            system design, and solving complex problems with elegant solutions.
          </p>
          <div className="flex gap-3 pt-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              View My Work
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

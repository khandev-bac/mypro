import { Mail, Github, Linkedin, Twitter } from 'lucide-react'

export function PortfolioFooter() {
  return (
    <footer id="contact" className="py-16 sm:py-24 border-t border-border">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Have an interesting project or just want to chat about backend systems? I'd love to hear from you.
            </p>
          </div>

          <div className="flex gap-4 flex-wrap">
            <a
              href="mailto:farhan@example.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              <Mail size={18} />
              Get In Touch
            </a>
          </div>

          <div className="border-t border-border pt-12">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                © 2026 Farhan Khan. All rights reserved.
              </div>
              
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

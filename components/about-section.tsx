export function AboutSection() {
  return (
    <section id="about" className="border-b border-border py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">About</h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I'm a backend engineer with over 5 years of experience building systems that scale. 
              My passion lies in designing robust, efficient architectures that can handle real-world challenges.
            </p>
            
            <p>
              I specialize in distributed systems, database optimization, and API design. I've worked with 
              various technologies and believe the right tool matters less than understanding fundamental principles.
            </p>
            
            <p>
              When I'm not coding, I enjoy diving into system design problems, contributing to open source, 
              and writing about backend engineering on my blog.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Skills</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Backend Development</p>
                <p>System Design</p>
                <p>Database Optimization</p>
                <p>Cloud Infrastructure</p>
                <p>Microservices</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Go", "Python", "PostgreSQL", "Redis", "Docker", "AWS"].map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

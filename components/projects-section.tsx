import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: "Distributed Cache System",
    description: "Built a highly performant distributed cache layer handling 100k+ requests per second with automatic failover and data replication across multiple nodes.",
    tech: ["Go", "Redis", "PostgreSQL"],
    link: "#"
  },
  {
    title: "Real-time Analytics Platform",
    description: "Engineered a real-time data processing pipeline ingesting terabytes of data daily. Implemented custom time-series database optimizations for sub-second query responses.",
    tech: ["Python", "Apache Kafka", "TimescaleDB"],
    link: "#"
  },
  {
    title: "Microservices Framework",
    description: "Designed and implemented a production-grade microservices framework used across 15+ internal services. Features include service discovery, load balancing, and distributed tracing.",
    tech: ["Node.js", "Docker", "gRPC"],
    link: "#"
  },
  {
    title: "API Gateway",
    description: "Created a high-performance API gateway with rate limiting, request authentication, and intelligent routing. Handles 1M+ requests daily with 99.99% uptime.",
    tech: ["Rust", "Tokio", "Prometheus"],
    link: "#"
  }
]

export function ProjectsSection() {
  return (
    <section id="work" className="border-b border-border py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Selected Work</h2>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="group block p-6 border border-border rounded-lg hover:border-primary/50 hover:bg-accent/5 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex gap-2 flex-wrap">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

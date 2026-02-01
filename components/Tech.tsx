'use client'

import { useState } from 'react'

const techLogos: Record<string, string> = {
    'Go': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    'FastAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
    'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    'Linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
    'Nginx': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg',
    'Vercel': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg',
    'AWS': 'data:image/png;base64,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',
    'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    'Shadcn UI': 'https://ui.shadcn.com/favicon.ico',
    'NativeWind': 'data:image/png;base64,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',
    'OpenAI': 'https://openai.com/favicon.ico',
    'Anthropic': 'https://www.anthropic.com/favicon.ico',
    'Groq': 'https://groq.com/favicon.ico',
}


interface TechStackSliderProps {
    techs: string[]
    label: string
}

export default function TechStackSlider({ techs, label }: TechStackSliderProps) {
    const [hoveredTech, setHoveredTech] = useState<string | null>(null)
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    // Triple the array for seamless infinite loop
    const tribledTechs = [...techs, ...techs, ...techs]

    return (
        <div className="mb-12">
            <p className="text-xs text-white mb-6 tracking-widest font-semibold uppercase">{label}</p>

            <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        .slider-container {
          position: relative;
          overflow: hidden;
          background: #000000;
          border-radius: 8px;
          padding: 2rem 0;
        }

        .slider-container::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 120px;
          background: linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
          z-index: 10;
          pointer-events: none;
        }

        .slider-container::after {
          content: '';
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 120px;
          background: linear-gradient(270deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
          z-index: 10;
          pointer-events: none;
        }

        .slider-track {
          display: flex;
          gap: 2.5rem;
          animation: slide 40s linear infinite;
          width: fit-content;
          padding: 0 2rem;
        }

        .slider-track:hover {
          animation-play-state: paused;
        }

        .tech-item {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
        }

        .tech-logo {
          width: 4.5rem;
          height: 4.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          padding: 0.875rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          backdrop-filter: blur(10px);
        }

        .tech-item:hover .tech-logo {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 12px 32px rgba(255, 255, 255, 0.15);
          transform: scale(1.15);
        }

        .tech-logo img {
          max-width: 85%;
          max-height: 85%;
          object-fit: contain;
        }
      `}</style>

            <div className="slider-container">
                <div className="slider-track">
                    {tribledTechs.map((tech, index) => (
                        <div
                            key={`${tech}-${index}`}
                            className="tech-item"
                            onMouseEnter={() => {
                                setHoveredTech(tech)
                                setHoveredIndex(index)
                            }}
                            onMouseLeave={() => {
                                setHoveredTech(null)
                                setHoveredIndex(null)
                            }}
                        >
                            <div className="tech-logo">
                                <img
                                    src={techLogos[tech] || 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'}
                                    alt={tech}
                                    title={tech}
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%23ffffff"/%3E%3C/svg%3E'
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
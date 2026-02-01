'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, GithubIcon, LinkedinIcon } from 'lucide-react'
import Image from 'next/image'
import { Linkedin, Github, Mail } from 'lucide-react'
import TechStackWithHover from '@/components/Tech'
import TechStackSlider from '@/components/Tech'

export default function Home() {
  const [expandedSection, setExpandedSection] = useState<string | null>('experience')
  const [time, setTime] = useState<string>('00:00:00')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const istTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }))
      const hours = String(istTime.getHours()).padStart(2, '0')
      const minutes = String(istTime.getMinutes()).padStart(2, '0')
      const seconds = String(istTime.getSeconds()).padStart(2, '0')
      setTime(`${hours}:${minutes}:${seconds}`)
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-2xl mx-auto px-6 py-16 sm:py-24">
        {/* Header Navigation */}
        <div className="mb-20">
          <nav className="flex gap-8 mb-12 text-xs tracking-widest uppercase font-light">
            <button
              onClick={() => toggleSection('about')}
              className={`hover:opacity-70 transition ${expandedSection === 'about' ? 'opacity-100' : 'opacity-50'}`}
            >
              About
            </button>
            <button
              onClick={() => toggleSection('experience')}
              className={`hover:opacity-70 transition ${expandedSection === 'experience' ? 'opacity-100' : 'opacity-50'}`}
            >
              Experience
            </button>
            <button
              onClick={() => toggleSection('stack')}
              className={`hover:opacity-70 transition ${expandedSection === 'stack' ? 'opacity-100' : 'opacity-50'}`}
            >
              Stack
            </button>
          </nav>

          {/* Hero Section */}
          <div className="mb-16">
            {/* Logo */}
            <div className="mb-8">
              <Image
                src="/MYFACE.jpeg"
                alt="notesUp"
                width={72}
                height={72}
                className="w-56 h-56 rounded-full"
              />
            </div>

            {/* Name and Title */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-2">Farhan Khan</h1>
            <p className="text-xs text-muted-foreground mb-1">/fɑːr.hɑːn kɑːn/ • noun •</p>
            <p className="text-xs text-muted-foreground mb-8 flex items-center gap-2">
              <span className="font-mono">{time}</span>
              <span>IST</span>
              <span>•</span>
              <span>fk 😎</span>
            </p>

            {/* Description */}
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                Building @ <span className="font-semibold text-foreground">notesUp</span>.
              </p>
              <p>
                Full-stack developer and generalist using AI to super-power my work. I'm deeply interested in agentic systems and autonomous AI, and I love building consumer apps that make life easier and more enjoyable. Right now, I'm learning and building toward my dream of creating a personal agentic AI for everyone, so boring tasks can be handled by agents instead of humans.
              </p>
            </div>
          </div>
        </div>

        {/* About Section */}
        {expandedSection === 'about' && (
          <section className="mb-16 pb-12 border-b border-muted">
            <h2 className="text-xs tracking-widest uppercase font-light mb-6">About</h2>
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                I’m a quirky developer who never gives up on trying new things. I dream of changing users’ lives with tools that work effortlessly, right at their fingertips.

                I focus on building products and exploring ideas through real apps.
                I’ve built a developer-only app for sharing code and collaborating on ideas.
                I explored a cloud app for saving personal memories.
                I built a swipe-based app for deleting photos and cleaning up storage.
                Some projects failed. Some taught me a lot. All of them pushed me forward.
                Right now, I’m building NotesUp, an AI-powered note-taking app.
              </p>
            </div>
          </section>
        )}

        {/* Experience Section */}
        {expandedSection === 'experience' && (
          <section className="mb-16 pb-12 border-b border-muted">
            <h2 className="text-xs tracking-widest uppercase font-light mb-8">Experience</h2>

            <div>
              <div className="flex items-baseline justify-between mb-3">
                <div>
                  <h3 className="text-base font-medium">Founder, notesUp</h3>
                  <p className="text-xs text-muted-foreground mt-1">Made notes simple</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground space-y-3">
                <span className="block">
                  A simple clean note taking app which turns your voice into clean, organized notes instantly
                </span>
                <span className="block">
                  Instead of typing, you just speak, and the app turns your voice into clear, structured note with a title and content. It is built or designed for brainstorming, quick ideas, and deep thinking sessions, so you never lose a greate thought.
                  Just fast,minimal, and efforless
                </span>
              </p>
            </div>
          </section>
        )}

        {/* Tech Stack Section */}
        {expandedSection === 'stack' && (

          <TechStackSlider techs={[
            "Go",
            "Python",
            "TypeScript",
            "Node.js",
            "FastAPI",
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "Docker",
            "Linux",
            "Nginx",
            "Vercel",
            "AWS",
            "React Native",
            "Next.js",
            "Tailwind CSS",
            "Shadcn UI",
            "NativeWind",
            "OpenAI",
            "Anthropic",
            "Groq"
          ]
          } label={''} />
        )}
        {/* Footer */}
        <footer className="pt-12 border-t border-muted">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 text-xs text-muted-foreground">
            <div>
              <p>Built with Next.js, React, and Tailwind CSS and with fun</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition"><LinkedinIcon /></a>
              <a href="#" className="hover:text-foreground transition"><GithubIcon /></a>
              <a href="#" className="hover:text-foreground transition"><Mail /></a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}

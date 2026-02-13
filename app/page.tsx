'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, GithubIcon, LinkedinIcon } from 'lucide-react'
import Image from 'next/image'
import { Linkedin, Github, Mail, Copy, X } from 'lucide-react'
import TechStackWithHover from '@/components/Tech'
import TechStackSlider from '@/components/Tech'
import Link from 'next/link'

export default function Home() {
  const [expandedSection, setExpandedSection] = useState<string | null>('experience')
  const [time, setTime] = useState<string>('00:00:00')
  const [emailPopupOpen, setEmailPopupOpen] = useState(false)
  const [copied, setCopied] = useState(false)

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

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
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

            {/* Name and Title with Email Icon */}
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">Farhan Khan</h1>
              <button
                onClick={() => setEmailPopupOpen(true)}
                className="hover:opacity-70 transition p-1"
                title="Email"
              >
                <Mail size={28} className="text-[#b281fc] hover:text-foreground transition" />
              </button>
            </div>

            <p className="text-xs text-muted-foreground mb-1">/fɑːr.hɑːn kɑːn/ • noun •</p>
            <p className="text-xs text-muted-foreground mb-8 flex items-center gap-2">
              <span className="font-mono">{time}</span>
              <span>IST</span>
              <span>•</span>
              <span>fk 😎</span>
            </p>

            {/* Description */}
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <Link href={"https://web.noteup.space/"} className=''>
                <p className='bg-[#b281fc] w-fit px-3  text-white rounded-full font-bold'>Click</p>
                <p>
                  Building @ <span className="font-black text-[#b281fc] text-lg">NoteUp
                    <span className='text-gray-600 text-sm'>(webapp is live, app will be live soon after google play review)</span>
                  </span>.
                </p>
              </Link>
              <p>
                Full-stack developer and generalist using AI to super-power my work. I'm deeply interested in agentic systems and autonomous AI, and I love building consumer apps that make life easier and more enjoyable. Right now, I'm learning and building toward my dream of creating a personal agentic AI for everyone, so boring tasks can be handled by agents instead of humans.
              </p>
            </div>
          </div>
        </div>

        {/* Email Popup Modal */}
        {emailPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-background border border-muted rounded-lg p-6 max-w-sm mx-4 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Contact</h3>
                <button
                  onClick={() => setEmailPopupOpen(false)}
                  className="hover:opacity-70 transition"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex items-center justify-between bg-muted rounded-lg p-4 mb-4">
                <span className="text-sm font-mono">khanfkhan446@gmail.com</span>
                <button
                  onClick={() => copyToClipboard('khanfkhan446@gmail.com')}
                  className="hover:opacity-70 transition ml-2"
                  title="Copy email"
                >
                  <Copy size={18} />
                </button>
              </div>

              <p className="text-xs text-muted-foreground mb-4">
                {copied ? '✓ Copied to clipboard!' : 'Click the icon to copy'}
              </p>

              <button
                onClick={() => setEmailPopupOpen(false)}
                className="w-full px-4 py-2 text-sm font-medium bg-[#b281fc] text-white rounded-lg hover:opacity-90 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* About Section */}
        {expandedSection === 'about' && (
          <section className="mb-16 pb-12 border-b border-muted">
            <h2 className="text-xs tracking-widest uppercase font-light mb-6">About</h2>
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                I'm a quirky developer who never gives up on trying new things. I dream of changing users' lives with tools that work effortlessly, right at their fingertips.

                I focus on building products and exploring ideas through real apps.
                I've built a developer-only app for sharing code and collaborating on ideas.
                I explored a cloud app for saving personal memories.
                I built a swipe-based app for deleting photos and cleaning up storage.
                Some projects failed. Some taught me a lot. All of them pushed me forward.
                Right now, I'm building NotesUp, an AI-powered note-taking app.
              </p>
            </div>
          </section>
        )}

        {/* Experience Section */}
        {expandedSection === 'experience' && (
          <section className="mb-16 pb-12 border-b border-muted">
            <h2 className="text-xs tracking-widest uppercase font-light mb-8">Experience</h2>

            <div className="space-y-8">
              <div>
                <div className="flex items-baseline justify-between mb-3">
                  <div>
                    <h3 className="text-base font-medium">Founder, NoteUp</h3>
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

              <div>
                <div className="flex items-baseline justify-between mb-3">
                  <div>
                    <h3 className="text-base font-medium">Founder, Russai</h3>
                    <p className="text-xs text-muted-foreground mt-1">Human connection, redefined</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground space-y-3">
                  <span className="block">
                    This AI app is designed to feel like a real human connection. Whether you need a friend to talk to, a loving partner to share your feelings with, or a caring mom or dad figure for comfort and advice, the app adapts to your emotional needs.
                  </span>
                  <span className="block">
                    It listens, responds naturally, and creates meaningful conversations that feel personal and supportive anytime, anywhere. The AI learns your preferences and meets you where you are emotionally, providing genuine support when you need it most.
                  </span>
                  <span className="block">
                    <Link href="https://russai.farhankhan.fun/" className="text-[#b281fc] hover:opacity-70 transition font-medium">
                      Visit Russai →
                    </Link>
                  </span>
                </p>
              </div>
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
              <Link href={"https://www.linkedin.com/in/fkhan-dev/"}>
                <LinkedinIcon />
              </Link>
              <Link href={"https://github.com/khandev-bac"}>
                <GithubIcon />
              </Link>

              <button
                onClick={() => setEmailPopupOpen(true)}
                className="hover:text-foreground transition"
                title="Email"
              >
                <Mail />
              </button>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
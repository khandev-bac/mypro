'use client'

import { useState, useEffect } from 'react'
import { Copy, X, ExternalLink, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import TechStackSlider from '@/components/Tech'

const experiences = [
  {
    company: 'NoteUp',
    role: 'Full Stack Engineer',
    period: '',
    location: 'Remote',
    link: 'https://web.noteup.space/',
    tag: 'Current',
    bullets: [
      'Two-microservice event-driven architecture: Golang orchestration + Python AI worker via Apache Kafka',
      'Golang backend: auth, audio lifecycle, coin-based usage limits (1 coin = 30s), note persistence',
      'Python AI worker: OpenAI Whisper STT, LLaMA summarization, Kafka event pipeline with retry-safe handling',
      'Redis cache + Firebase Auth + custom JWT tokens across Expo React Native mobile & React web',
      'Submitted to Apple App Store & Google Play Store — awaiting review',
      'Deployed on Excloud, fully containerized with Docker',
    ],
  },
  {
    company: 'BedenAI',
    role: 'Full Stack Engineer / Founder',
    period: '',
    location: 'Remote',
    link: 'https://bedenai.farhankhan.fun/',
    tag: 'Current',
    bullets: [
      'AI workspace and second brain — built for indie hackers across India',
      'Centralise thinking, writing, and research with AI that works alongside you',
      'Full-stack architecture with real-time AI processing and knowledge graph',
    ],
  },
  {
    company: 'Russai',
    role: 'Founder',
    period: '',
    location: 'Remote',
    link: 'https://russai.farhankhan.fun/',
    tag: 'Live',
    bullets: [
      'AI emotional support companion — friend, partner, parent figure modes using Claude API',
      'Golang REST backend, PostgreSQL + Redis for storage and context caching',
      'Firebase Auth with OAuth 2.0, JWT-based API security, Docker deployment with CI/CD',
    ],
  },
]

const projects = [
  {
    name: 'BedenAI',
    stack: ['AI Workspace', 'Second Brain', 'Startup'],
    desc: 'AI workspace and second brain — built for indie hackers. Centralise your thinking, writing, and research with AI working alongside you.',
    link: 'https://bedenai.farhankhan.fun/',
    live: true,
    startup: true,
  },
  {
    name: 'NoteUp',
    stack: ['Golang', 'Kafka', 'Whisper', 'LLaMA', 'React Native'],
    desc: 'Voice-to-structured-notes app. Speak your thoughts, get clean organized notes instantly. Built with event-driven microservices.',
    link: 'https://web.noteup.space/',
    live: true,
    startup: false,
  },
  {
    name: 'Russai',
    stack: ['Golang', 'Claude API', 'PostgreSQL', 'Redis', 'Firebase'],
    desc: 'AI emotional support companion with adaptive multi-role conversations — friend, partner, parent — using Claude API.',
    link: 'https://russai.farhankhan.fun/',
    live: true,
    startup: false,
  },
]

const TABS = ['about', 'experience', 'projects', 'stack'] as const
type Tab = typeof TABS[number]

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('experience')
  const [time, setTime] = useState('00:00:00')
  const [emailOpen, setEmailOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [expandedExp, setExpandedExp] = useState<string | null>('NoteUp')
  const [displayName, setDisplayName] = useState('')
  const [nameComplete, setNameComplete] = useState(false)
  const [booted, setBooted] = useState(false)
  const [tabFlash, setTabFlash] = useState(false)

  useEffect(() => {
    setBooted(true)
    // Typewriter — cleaned up properly on unmount so StrictMode double-fire is safe
    const name = 'Farhan Khan'
    let i = 0
    const tw = setInterval(() => {
      i++
      setDisplayName(name.slice(0, i))
      if (i >= name.length) { setNameComplete(true); clearInterval(tw) }
    }, 75)

    // Clock
    const tick = () => {
      const ist = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }))
      setTime([ist.getHours(), ist.getMinutes(), ist.getSeconds()].map(n => String(n).padStart(2, '0')).join(':'))
    }
    tick()
    const cl = setInterval(tick, 1000)
    return () => { clearInterval(tw); clearInterval(cl) }
  }, [])

  const switchTab = (tab: Tab) => {
    setTabFlash(true)
    setTimeout(() => { setActiveTab(tab); setTabFlash(false) }, 80)
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('khandevichi@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <style>{`
        :root {
          --pk: #ff2d78;
          --cy: #00d4ff;
          --gr: #00ff88;
          --pu: #b281fc;
          --te: #00d4b4;
          --bg: #05050d;
          --fg: #d8d8e8;
        }

        /* ── Boot screen ── */
        @keyframes bootFade { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0)} }
        .boot-line { animation: bootFade 0.2s ease forwards; }

        /* ── Typewriter cursor ── */
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .cursor { animation: blink 0.9s step-end infinite; }

        /* ── RGB-split glitch on name ── */
        @keyframes rgbGlitch {
          0%   { text-shadow: none; transform: translate(0); }
          10%  { text-shadow: -3px 0 var(--pk), 3px 0 var(--cy); transform: translate(2px, 0); }
          20%  { text-shadow: 3px 0 var(--pk), -3px 0 var(--cy); transform: translate(-2px, 0); }
          30%  { text-shadow: -3px 0 var(--cy), 3px 0 var(--pk); transform: translate(1px, -1px); }
          40%  { text-shadow: none; transform: translate(0); }
          100% { text-shadow: none; transform: translate(0); }
        }
        .name-glitch:hover {
          animation: rgbGlitch 0.5s linear;
          cursor: crosshair;
        }

        /* ── Page entrance ── */
        @keyframes fadeUp   { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn   { from{opacity:0} to{opacity:1} }
        .hero-enter { animation: fadeUp 0.7s cubic-bezier(.16,1,.3,1) forwards; }
        .tab-enter  { animation: fadeUp 0.32s cubic-bezier(.16,1,.3,1) forwards; }

        /* ── Tab flash ── */
        @keyframes flashWhite { 0%{opacity:1} 50%{opacity:0.4} 100%{opacity:1} }
        .tab-flash { animation: flashWhite 0.08s ease; }

        /* ── Neon glow pulse ── */
        @keyframes neonPulse {
          0%,100% { box-shadow: 0 0 8px rgba(255,45,120,0.3), 0 0 20px rgba(255,45,120,0.1); border-color: rgba(255,45,120,0.4); }
          50%     { box-shadow: 0 0 16px rgba(255,45,120,0.6), 0 0 40px rgba(255,45,120,0.2); border-color: rgba(255,45,120,0.7); }
        }
        @keyframes neonPulseCy {
          0%,100% { box-shadow: 0 0 8px rgba(0,212,255,0.3), 0 0 20px rgba(0,212,255,0.1); border-color: rgba(0,212,255,0.35); }
          50%     { box-shadow: 0 0 16px rgba(0,212,255,0.5), 0 0 40px rgba(0,212,255,0.2); border-color: rgba(0,212,255,0.6); }
        }
        .neon-pk { animation: neonPulse 3s ease-in-out infinite; }
        .neon-cy { animation: neonPulseCy 3s ease-in-out infinite; }

        /* ── Scanlines ── */
        .scanlines {
          position: fixed; inset: 0; pointer-events: none; z-index: 9990;
          background: repeating-linear-gradient(
            to bottom,
            transparent 0px, transparent 2px,
            rgba(0,0,0,0.09) 2px, rgba(0,0,0,0.09) 4px
          );
        }

        /* ── Sweep line ── */
        @keyframes sweep { from{top:-5%} to{top:105%} }
        .sweep-line {
          position: fixed; left:0; right:0; height:60px; pointer-events:none; z-index:9989;
          background: linear-gradient(to bottom, transparent, rgba(0,212,255,0.025), transparent);
          animation: sweep 7s linear infinite;
        }

        /* ── Vignette ── */
        .vignette {
          position: fixed; inset:0; pointer-events:none; z-index:9988;
          background: radial-gradient(ellipse 80% 80% at 50% 50%, transparent 55%, rgba(0,0,0,0.65) 100%);
        }

        /* ── Screen flicker ── */
        @keyframes flicker { 0%,100%{opacity:1} 93%{opacity:1} 93.5%{opacity:.85} 94%{opacity:1} 97%{opacity:1} 97.3%{opacity:.9} 97.6%{opacity:1} }
        .screen { animation: flicker 9s infinite; }

        /* ── Nav ── */
        .nav-item {
          position: relative;
          transition: color 0.2s, opacity 0.2s;
          font-family: var(--font-dm-mono), monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        .nav-item::before {
          content: '';
          position: absolute; bottom: -5px; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, var(--pk), var(--cy));
          transform: scaleX(0);
          transition: transform 0.25s cubic-bezier(.16,1,.3,1);
          transform-origin: left;
        }
        .nav-item.active { color: #fff !important; opacity: 1 !important; }
        .nav-item.active::before { transform: scaleX(1); }

        /* ── Live dot ── */
        @keyframes livePulse {
          0%,100% { transform:scale(1); opacity:1; box-shadow:0 0 0 0 rgba(0,255,136,0.6); }
          50%     { transform:scale(1.1); opacity:0.9; box-shadow:0 0 0 5px rgba(0,255,136,0); }
        }
        .live-dot { animation: livePulse 2s ease-in-out infinite; }

        /* ── Speed lines on hover ── */
        .card-hover {
          position: relative;
          transition: background 0.2s, transform 0.2s;
        }
        .card-hover::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(0,212,255,0.03) 100%);
          opacity: 0; transition: opacity 0.3s;
          pointer-events: none;
        }
        .card-hover:hover { transform: translateX(3px); }
        .card-hover:hover::before { opacity: 1; }

        /* ── Retro corner decoration ── */
        .corner-box {
          position: relative;
          border: 1px solid rgba(255,45,120,0.15);
        }
        .corner-box::before, .corner-box::after {
          content: '';
          position: absolute;
          width: 10px; height: 10px;
        }
        .corner-box::before {
          top: -1px; left: -1px;
          border-top: 2px solid var(--pk);
          border-left: 2px solid var(--pk);
        }
        .corner-box::after {
          bottom: -1px; right: -1px;
          border-bottom: 2px solid var(--cy);
          border-right: 2px solid var(--cy);
        }

        /* ── Accordion ── */
        @keyframes slideDown { from{opacity:0;transform:translateY(-8px)} to{opacity:1;transform:translateY(0)} }
        .acc-open { animation: slideDown 0.22s cubic-bezier(.16,1,.3,1) forwards; }

        /* ── Katakana deco ── */
        @keyframes kataScroll {
          0%   { transform: translateY(0); opacity: 0.06; }
          50%  { opacity: 0.12; }
          100% { transform: translateY(-20px); opacity: 0.06; }
        }
        .kata-deco {
          position: fixed; right: 24px; top: 20%; pointer-events: none; z-index: 1;
          font-size: 11px; line-height: 1.8; writing-mode: vertical-rl;
          color: var(--pk); opacity: 0.07;
          font-family: var(--font-dm-mono), monospace;
          animation: kataScroll 12s ease-in-out infinite;
          user-select: none;
        }

        /* ── Status bar ── */
        .status-bar {
          font-family: var(--font-dm-mono), monospace;
          font-size: 9px;
          letter-spacing: 0.15em;
        }

        .tag { font-family: var(--font-dm-mono), monospace; font-size: 9px; letter-spacing: 0.1em; padding: 2px 7px; border-radius: 3px; font-weight: 600; text-transform: uppercase; }
        .tag-gr  { background: rgba(0,255,136,0.1);  color: var(--gr); border: 1px solid rgba(0,255,136,0.25); }
        .tag-pk  { background: rgba(255,45,120,0.1); color: var(--pk); border: 1px solid rgba(255,45,120,0.25); }
        .tag-cy  { background: rgba(0,212,255,0.1);  color: var(--cy); border: 1px solid rgba(0,212,255,0.25); }
        .tag-pu  { background: rgba(178,129,252,0.1);color: var(--pu); border: 1px solid rgba(178,129,252,0.25); }
        .tag-dim { background: rgba(255,255,255,0.04);color:rgba(255,255,255,0.3);border:1px solid rgba(255,255,255,0.07); }

        .divider-anime {
          display: flex; align-items: center; gap: 12px;
          margin: 10px 0;
        }
        .divider-anime span { font-family: var(--font-dm-mono),monospace; font-size:9px; letter-spacing:0.2em; }
        .divider-line-pk { flex:1; height:1px; background:linear-gradient(90deg,rgba(255,45,120,0.5),transparent); }
        .divider-line-cy { flex:1; height:1px; background:linear-gradient(270deg,rgba(0,212,255,0.5),transparent); }
      `}</style>

      {/* Overlays */}
      <div className="scanlines" />
      <div className="sweep-line" />
      <div className="vignette" />

      {/* Katakana side decoration */}
      <div className="kata-deco">
        フ ァ ル ハ ン<br />エ ン ジ ニ ア<br />バ ッ ク エ ン ド<br />A I シ ス テ ム<br />ビ ル ド ・ 壊 す<br />学 ぶ ・ 繰 り 返 す
      </div>

      {/* Main */}
      <main
        className="screen min-h-screen"
        style={{ background: 'var(--bg)', color: 'var(--fg)', opacity: booted ? 1 : 0, transition: 'opacity 0.4s' }}
      >
        <div className="max-w-2xl mx-auto px-6 py-16 sm:py-24">

          {/* ── NAV ── */}
          <nav className="flex items-center gap-8 mb-14">
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => switchTab(tab)}
                className={`nav-item ${activeTab === tab ? 'active' : ''}`}
                style={{ color: activeTab === tab ? '#fff' : 'rgba(255,255,255,0.28)', opacity: 1 }}
              >
                {activeTab === tab ? `❯ ${tab}` : tab}
              </button>
            ))}
            <div className="ml-auto status-bar flex items-center gap-2" style={{ color: 'rgba(0,212,255,0.4)' }}>
              <span
                className="live-dot inline-block w-1.5 h-1.5 rounded-full"
                style={{ background: 'var(--gr)' }}
              />
              <span>{time}</span>
            </div>
          </nav>

          {/* ── HERO ── */}
          <div className={`mb-14 ${booted ? 'hero-enter' : ''}`}>

            {/* Avatar + status */}
            <div className="flex items-end gap-4 mb-7">
              <div className="relative">
                <div className="neon-pk rounded-full p-0.5" style={{ background: 'linear-gradient(135deg, rgba(255,45,120,0.3), rgba(0,212,255,0.3))', borderRadius: 9999 }}>
                  <Image
                    src="/MYFACE.jpeg"
                    alt="Farhan Khan"
                    width={72}
                    height={72}
                    className="rounded-full object-cover block"
                    style={{ width: 72, height: 72 }}
                  />
                </div>
                <span
                  className="live-dot absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full border-2"
                  style={{ background: 'var(--gr)', borderColor: 'var(--bg)' }}
                />
              </div>

              <div className="pb-1">
                <p className="status-bar" style={{ color: 'rgba(255,255,255,0.22)' }}>
                  /fɑːr.hɑːn kɑːn/
                </p>
              </div>
            </div>

            {/* Name */}
            <h1
              className="name-glitch mb-2 leading-none"
              style={{
                fontFamily: 'var(--font-syne), sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(2.4rem, 7vw, 3.6rem)',
                color: '#fff',
                letterSpacing: '-0.03em',
              }}
            >
              {displayName}
              {!nameComplete && (
                <span className="cursor" style={{ color: 'var(--pk)', fontWeight: 400 }}>█</span>
              )}
            </h1>

            {/* Sub-title gradient */}
            <p
              className="text-sm font-semibold mb-6"
              style={{
                fontFamily: 'var(--font-syne), sans-serif',
                background: 'linear-gradient(90deg, var(--pk), var(--cy))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Backend Engineer · AI Systems · Full-Stack
            </p>

            {/* Building cards */}
            <div className="flex flex-col gap-2.5 mb-6">
              {/* NoteUp */}
              <Link
                href="https://web.noteup.space/"
                target="_blank"
                rel="noopener noreferrer"
                className="corner-box inline-flex items-center gap-3 px-4 py-2.5 rounded group w-fit"
                style={{ background: 'rgba(0,255,136,0.04)', textDecoration: 'none' }}
              >
                <span className="live-dot w-2 h-2 rounded-full shrink-0" style={{ background: 'var(--gr)' }} />
                <span className="tag tag-gr">live</span>
                <span className="text-sm font-bold" style={{ fontFamily: 'var(--font-syne), sans-serif', color: '#fff' }}>NoteUp</span>
                <span className="status-bar" style={{ color: 'rgba(255,255,255,0.3)' }}>AI voice → notes</span>
                <ExternalLink size={11} style={{ color: 'rgba(0,255,136,0.3)' }} className="group-hover:opacity-80 transition" />
              </Link>

              {/* BedenAI */}
              <Link
                href="https://bedenai.farhankhan.fun/"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-cy inline-flex items-center gap-3 px-4 py-2.5 rounded group w-fit"
                style={{ background: 'rgba(0,212,255,0.04)', border: '1px solid rgba(0,212,255,0.2)', textDecoration: 'none' }}
              >
                <span className="live-dot w-2 h-2 rounded-full shrink-0" style={{ background: 'var(--cy)', boxShadow: '0 0 6px var(--cy)' }} />
                <span className="tag tag-cy">live · startup</span>
                <span className="text-sm font-bold" style={{ fontFamily: 'var(--font-syne), sans-serif', color: '#fff' }}>BedenAI</span>
                <span className="status-bar" style={{ color: 'rgba(255,255,255,0.3)' }}>AI workspace · second brain</span>
                <ExternalLink size={11} style={{ color: 'rgba(0,212,255,0.3)' }} className="group-hover:opacity-80 transition" />
              </Link>
            </div>

            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.4)', maxWidth: '46ch' }}>
              Quirky developer. Build things, break them, learn, repeat. Obsessed with agentic AI — dreaming of personal agents that handle the boring so humans don't have to.
            </p>

            {/* Social links */}
            <div className="flex flex-wrap gap-2">
              <Link
                href="https://github.com/khandev-bac"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200"
                style={{ fontFamily: 'var(--font-dm-mono), monospace', letterSpacing: '0.08em', background: 'rgba(255,45,120,0.08)', border: '1px solid rgba(255,45,120,0.25)', color: 'var(--pk)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,45,120,0.18)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 14px rgba(255,45,120,0.3)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,45,120,0.08)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                GitHub
              </Link>
              <Link
                href="https://x.com/khan210711"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200"
                style={{ fontFamily: 'var(--font-dm-mono), monospace', letterSpacing: '0.08em', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.6)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLElement).style.color = '#fff'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.3)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                X.com
              </Link>
              <Link
                href="https://linkedin.com/in/farhan-khan"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200"
                style={{ fontFamily: 'var(--font-dm-mono), monospace', letterSpacing: '0.08em', background: 'rgba(0,212,255,0.06)', border: '1px solid rgba(0,212,255,0.2)', color: 'var(--cy)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,212,255,0.15)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 14px rgba(0,212,255,0.25)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,212,255,0.06)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                LinkedIn
              </Link>
              <button
                onClick={() => setEmailOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer"
                style={{ fontFamily: 'var(--font-dm-mono), monospace', letterSpacing: '0.08em', background: 'rgba(178,129,252,0.08)', border: '1px solid rgba(178,129,252,0.25)', color: 'var(--pu)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(178,129,252,0.18)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 14px rgba(178,129,252,0.3)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(178,129,252,0.08)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                Email
              </button>
            </div>
          </div>

          {/* Anime divider */}
          <div className="divider-anime mb-10">
            <div className="divider-line-pk" />
            <span style={{ color: 'var(--pk)', opacity: 0.6 }}>◈</span>
            <span style={{ color: 'rgba(255,255,255,0.15)' }}>フ · K</span>
            <span style={{ color: 'var(--cy)', opacity: 0.6 }}>◈</span>
            <div className="divider-line-cy" />
          </div>

          {/* ══ SECTIONS ══ */}
          <div className={tabFlash ? 'tab-flash' : ''}>

            {/* ABOUT */}
            {activeTab === 'about' && (
              <section className="tab-enter space-y-4 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                <p className="status-bar mb-6 flex items-center gap-2" style={{ color: 'var(--pk)' }}>
                  <span style={{ color: 'var(--cy)' }}>❯</span> whoami
                </p>
                <p>Quirky developer who never gives up on trying new things. I dream of changing users' lives with tools that work effortlessly, right at their fingertips.</p>
                <p>I build through real apps. A developer-only app for sharing code. A cloud app for saving memories. A swipe-based app to clean up storage. Some failed. All taught me something. All pushed me forward.</p>
                <p>Right now I'm running two live products:{' '}
                  <Link href="https://web.noteup.space/" style={{ color: 'var(--gr)' }} className="hover:opacity-70 transition">NoteUp</Link>
                  {' '}and{' '}
                  <Link href="https://bedenai.farhankhan.fun/" style={{ color: 'var(--cy)' }} className="hover:opacity-70 transition">BedenAI</Link>.
                </p>
                <p style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Long-term mission: personal agentic AI for everyone. So boring tasks run on autopilot — agents working while humans live.
                </p>
              </section>
            )}

            {/* EXPERIENCE */}
            {activeTab === 'experience' && (
              <section className="tab-enter">
                <p className="status-bar mb-8 flex items-center gap-2" style={{ color: 'var(--pk)' }}>
                  <span style={{ color: 'var(--cy)' }}>❯</span> cat work_history.log
                </p>
                <div>
                  {experiences.map((exp, i) => {
                    const isOpen = expandedExp === exp.company
                    return (
                      <div
                        key={exp.company}
                        className={`card-hover ${i < experiences.length - 1 ? 'border-b' : ''}`}
                        style={{ borderColor: 'rgba(255,255,255,0.05)' }}
                      >
                        <button
                          className="w-full text-left py-5 flex items-start justify-between"
                          onClick={() => setExpandedExp(isOpen ? null : exp.company)}
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                              <span
                                className="text-base font-bold"
                                style={{
                                  fontFamily: 'var(--font-syne), sans-serif',
                                  color: isOpen ? (exp.company === 'BedenAI' ? 'var(--cy)' : 'var(--pk)') : '#fff',
                                  transition: 'color 0.2s',
                                }}
                              >
                                {exp.company}
                              </span>
                              {exp.tag && (
                                <span className={`tag ${exp.tag === 'Current' ? (exp.company === 'BedenAI' ? 'tag-cy' : 'tag-gr') : 'tag-dim'}`}>
                                  {exp.tag === 'Current' ? '◉ ' + exp.tag : exp.tag}
                                </span>
                              )}
                            </div>
                            <p className="status-bar" style={{ color: 'rgba(255,255,255,0.28)' }}>
                              {exp.role} · {exp.location}
                            </p>
                          </div>
                          <div className="flex items-center gap-3 ml-4 shrink-0">
                            <span className="status-bar" style={{ color: 'rgba(255,255,255,0.2)' }}>{exp.period}</span>
                            <ChevronDown
                              size={13}
                              style={{ color: isOpen ? 'var(--pk)' : 'rgba(255,255,255,0.2)', transition: 'transform 0.25s, color 0.2s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}
                            />
                          </div>
                        </button>

                        {isOpen && (
                          <div className="pb-6 space-y-2.5 acc-open">
                            {exp.bullets.map((b, bi) => (
                              <div key={bi} className="flex gap-3">
                                <span className="shrink-0 text-xs mt-0.5" style={{ color: 'var(--pk)', opacity: 0.6 }}>▸</span>
                                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.42)' }}>{b}</p>
                              </div>
                            ))}
                            {exp.link && (
                              <Link
                                href={exp.link}
                                className="inline-flex items-center gap-1.5 mt-1 hover:opacity-70 transition"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: 11, color: exp.company === 'BedenAI' ? 'var(--cy)' : 'var(--gr)' }}
                              >
                                ↗ open {exp.company.toLowerCase()}
                              </Link>
                            )}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </section>
            )}

            {/* PROJECTS */}
            {activeTab === 'projects' && (
              <section className="tab-enter">
                <p className="status-bar mb-8 flex items-center gap-2" style={{ color: 'var(--pk)' }}>
                  <span style={{ color: 'var(--cy)' }}>❯</span> ls ~/projects --live-first
                </p>
                <div>
                  {projects.map((proj, i) => (
                    <div
                      key={proj.name}
                      className={`card-hover py-5 ${i < projects.length - 1 ? 'border-b' : ''}`}
                      style={{ borderColor: 'rgba(255,255,255,0.05)' }}
                    >
                      <div className="flex items-center gap-2 flex-wrap mb-2">
                        {proj.live && (
                          <span className="live-dot inline-block w-1.5 h-1.5 rounded-full" style={{ background: proj.startup ? 'var(--cy)' : 'var(--gr)' }} />
                        )}
                        <span
                          className="text-sm font-bold"
                          style={{ fontFamily: 'var(--font-syne), sans-serif', color: proj.startup ? 'var(--cy)' : proj.live ? '#fff' : 'rgba(255,255,255,0.7)' }}
                        >
                          {proj.name}
                        </span>
                        {proj.startup && <span className="tag tag-cy">startup</span>}
                        {proj.live && !proj.startup && <span className="tag tag-gr">live</span>}
                        {proj.link && (
                          <Link href={proj.link} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition ml-0.5" style={{ color: proj.startup ? 'var(--cy)' : 'var(--pu)' }}>
                            <ExternalLink size={12} />
                          </Link>
                        )}
                      </div>
                      <p className="text-sm leading-relaxed mb-3" style={{ color: 'rgba(255,255,255,0.38)' }}>{proj.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {proj.stack.map(t => (
                          <span key={t} className="tag tag-dim">{t}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* STACK */}
            {activeTab === 'stack' && (
              <section className="tab-enter">
                <p className="status-bar mb-8 flex items-center gap-2" style={{ color: 'var(--pk)' }}>
                  <span style={{ color: 'var(--cy)' }}>❯</span> cat tech_stack.json
                </p>
                <TechStackSlider
                  techs={['Go', 'Python', 'TypeScript', 'Node.js', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Linux', 'Nginx', 'Vercel', 'AWS', 'React Native', 'Next.js', 'Tailwind CSS', 'OpenAI', 'Anthropic', 'Groq']}
                  label=""
                />
                <div className="mt-8 space-y-3">
                  {[
                    { k: 'lang', v: 'TypeScript · Python · Go · JavaScript · SQL' },
                    { k: 'backend', v: 'Express · HonoJS · NodeJS · Bun · REST APIs' },
                    { k: 'frontend', v: 'Next.js · React · React Native · Expo' },
                    { k: 'db', v: 'PostgreSQL · MongoDB · Redis · Supabase · NeonDB · pgvector' },
                    { k: 'cloud', v: 'AWS (Lambda, EC2, ECS, EKS, S3, SQS) · Docker · Kubernetes' },
                    { k: 'ai', v: 'Gemini · Claude · Voyage AI · IBM Docling · LangChain · RAG' },
                    { k: 'arch', v: 'Microservices · Event-Driven · Kafka · OAuth · OpenAPI' },
                  ].map(({ k, v }) => (
                    <div key={k} className="flex gap-4">
                      <span className="status-bar shrink-0 pt-0.5 w-16" style={{ color: 'var(--pk)', opacity: 0.65 }}>{k}</span>
                      <span className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.38)' }}>{v}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
            style={{ borderTop: '1px solid rgba(255,45,120,0.12)' }}
          >
            <p className="status-bar" style={{ color: 'rgba(255,255,255,0.15)' }}>
              <span style={{ color: 'var(--pk)', opacity: 0.5 }}>//</span> built with next.js · tailwind · obsession
            </p>
            <div className="flex items-center gap-5">
              {[
                { l: 'gh', h: 'https://github.com/khandev-bac' },
                { l: 'li', h: 'https://linkedin.com/in/farhan-khan' },
                { l: 'x', h: 'https://x.com/khan210711' },
              ].map(({ l, h }) => (
                <Link key={l} href={h} className="status-bar transition" style={{ color: 'rgba(255,255,255,0.2)' }}
                  target="_blank" rel="noopener noreferrer"
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--pk)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.2)')}
                >{l}</Link>
              ))}
            </div>
          </footer>
        </div>
      </main>

      {/* Email modal */}
      {emailOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-9999"
          style={{ background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(14px)' }}
          onClick={() => setEmailOpen(false)}
        >
          <div
            className="corner-box relative p-6 max-w-sm w-full mx-4 rounded"
            style={{ background: '#08080f', animation: 'fadeUp 0.22s ease forwards' }}
            onClick={e => e.stopPropagation()}
          >
            <button onClick={() => setEmailOpen(false)} className="absolute top-4 right-4 hover:opacity-60 transition">
              <X size={14} style={{ color: 'rgba(255,255,255,0.25)' }} />
            </button>
            <p className="status-bar mb-4" style={{ color: 'var(--pk)' }}>
              <span style={{ color: 'var(--cy)' }}>❯</span> contact --send-mail
            </p>
            <div className="flex items-center justify-between rounded p-3 mb-3"
              style={{ background: 'rgba(255,45,120,0.04)', border: '1px solid rgba(255,45,120,0.12)' }}
            >
              <span className="text-sm" style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'rgba(255,255,255,0.65)' }}>
                khandevichi@gmail.com
              </span>
              <button onClick={copyEmail} className="hover:opacity-60 transition ml-3">
                <Copy size={13} style={{ color: 'rgba(255,45,120,0.5)' }} />
              </button>
            </div>
            <p className="status-bar mb-4" style={{ color: copied ? 'var(--gr)' : 'rgba(255,255,255,0.2)' }}>
              {copied ? '✓ copied to clipboard' : 'click icon to copy'}
            </p>
            <button onClick={() => setEmailOpen(false)}
              className="w-full py-2 text-xs rounded transition hover:opacity-80"
              style={{ fontFamily: 'var(--font-dm-mono), monospace', background: 'rgba(255,45,120,0.08)', border: '1px solid rgba(255,45,120,0.2)', color: 'var(--pk)', letterSpacing: '0.1em' }}
            >
              [ESC] close
            </button>
          </div>
        </div>

      )}
    </>
  )

}



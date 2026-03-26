'use client'
import { useState, useEffect, useCallback, useRef } from 'react'

const SERIF = "'DM Serif Display', serif"
const NAVY = '#0A2342'
const ORANGE = '#E07B39'

const steps = [
  { num: '01', title: 'Submit your work', desc: 'Describe what you need in plain language. No scope doc required. Just share your raw data, goals, or brief — and we handle the rest.', label: 'Submit work', color: '#3b82f6', icon: 'doc' },
  { num: '02', title: 'We scope it instantly', desc: 'AI classifies the work, defines deliverables, and prices it — in minutes. No back-and-forth. You get a clear scope, timeline, and cost before anything starts.', label: 'AI scoping', color: '#a855f7', icon: 'bolt' },
  { num: '03', title: 'Talent matched & onboarded', desc: 'Work is distributed across 1–100 vetted operators (Sprint-Terns™) and we train/manage them. Your Account Manager handles everything.', label: 'Talent match', color: ORANGE, icon: 'people' },
  { num: '04', title: 'AI-powered teams execute', desc: 'Vetted operators + AI tools work together on your project. Real-time quality monitoring, structured milestones, daily progress.', label: 'Execution', color: '#10b981', icon: 'gear' },
  { num: '05', title: 'QA + delivery', desc: 'We review and package up the work. No surprises. Clean deliverables, on time. Insight reports, structured data, and actionable outcomes.', label: 'Delivery', color: '#0ea5e9', icon: 'check' },
]

const icons = {
  doc: (c) => (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>),
  bolt: (c) => (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>),
  people: (c) => (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>),
  gear: (c) => (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>),
  check: (c) => (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>),
}

export default function AnimatedHowItWorks() {
  const [active, setActive] = useState(0)
  const [exiting, setExiting] = useState(false)
  const [playing, setPlaying] = useState(true)
  const timer = useRef(null)
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  const goTo = useCallback((idx) => {
    setExiting(true)
    setTimeout(() => {
      setActive(idx)
      setExiting(false)
    }, 300)
  }, [])

  const next = useCallback(() => {
    goTo((prev) => {
      // We need current active value
      return undefined // handled below
    })
  }, [goTo])

  // Auto-advance
  useEffect(() => {
    if (!playing || !visible) return
    timer.current = setInterval(() => {
      setExiting(true)
      setTimeout(() => {
        setActive(prev => (prev + 1) % 5)
        setExiting(false)
      }, 300)
    }, 4000)
    return () => clearInterval(timer.current)
  }, [playing, visible])

  // Intersection observer
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const handleCircleClick = (i) => {
    if (i === active) return
    goTo(i)
    if (playing) {
      clearInterval(timer.current)
      // restart interval
    }
  }

  const circleSize = 48
  const step = steps[active]

  return (
    <section ref={sectionRef} id="how" style={{ background: NAVY, padding: '96px 24px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: ORANGE, marginBottom: 12, textAlign: 'center' }}>How It Works</div>
        <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(2rem,3.8vw,2.9rem)', color: 'white', marginBottom: 56, lineHeight: 1.2, textAlign: 'center' }}>5 steps to delivered work.</h2>

        {/* Step navigation - circles with line segments between them */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: 680, margin: '0 auto 56px', padding: '0 8px' }}>
          {steps.map((s, i) => (
            <div key={i} style={{ display: 'contents' }}>
              {/* Circle */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, zIndex: 2, flexShrink: 0 }}>
                <div
                  onClick={() => handleCircleClick(i)}
                  style={{
                    width: circleSize, height: circleSize, borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer',
                    transition: 'all 0.5s cubic-bezier(0.4,0,0.2,1)',
                    background: i === active ? ORANGE : i < active ? 'rgba(224,123,57,0.2)' : '#0f1e36',
                    border: i <= active ? '2px solid ' + ORANGE : '2px solid rgba(255,255,255,0.1)',
                    color: i === active ? '#fff' : i < active ? ORANGE : 'rgba(255,255,255,0.3)',
                    boxShadow: i === active ? '0 0 24px rgba(224,123,57,0.4), 0 0 48px rgba(224,123,57,0.15)' : 'none',
                    transform: i === active ? 'scale(1.15)' : 'scale(1)',
                  }}
                >{s.num}</div>
                <div style={{
                  fontSize: '0.68rem', color: i === active ? ORANGE : i < active ? 'rgba(224,123,57,0.6)' : 'rgba(255,255,255,0.25)',
                  textAlign: 'center', maxWidth: 80, lineHeight: 1.3, fontWeight: 500,
                  transition: 'color 0.4s ease',
                }}>{s.label}</div>
              </div>

              {/* Line segment between circles (not through them) */}
              {i < 4 && (
                <div style={{ flex: 1, height: 2, position: 'relative', alignSelf: 'flex-start', marginTop: circleSize / 2, marginLeft: 0, marginRight: 0 }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.08)', borderRadius: 1 }} />
                  <div style={{
                    position: 'absolute', top: 0, left: 0, bottom: 0, borderRadius: 1,
                    background: 'linear-gradient(90deg, ' + ORANGE + ', #F08C4E)',
                    boxShadow: '0 0 8px rgba(224,123,57,0.4)',
                    width: i < active ? '100%' : '0%',
                    transition: 'width 0.6s cubic-bezier(0.4,0,0.2,1)',
                  }} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Content card */}
        <div style={{ position: 'relative', minHeight: 280, marginBottom: 40 }}>
          <div style={{
            background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 24, padding: '48px', display: 'flex', alignItems: 'center', gap: 48,
            opacity: exiting ? 0 : 1,
            transform: exiting ? 'translateY(-20px) scale(0.98)' : 'translateY(0) scale(1)',
            transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
            position: 'relative', overflow: 'hidden',
          }}>
            {/* Top accent line */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 3,
              borderRadius: '24px 24px 0 0',
              background: 'linear-gradient(90deg, ' + step.color + ', ' + step.color + '88)',
            }} />

            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: SERIF, fontSize: '0.9rem', color: ORANGE, marginBottom: 12, letterSpacing: 2 }}>STEP {step.num}</div>
              <h3 style={{ fontFamily: SERIF, fontSize: 'clamp(1.5rem,3vw,2rem)', color: 'white', marginBottom: 16, lineHeight: 1.2 }}>{step.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, fontSize: '0.95rem' }}>{step.desc}</p>
            </div>

            {/* Visual icon */}
            <div style={{
              width: 200, height: 180, borderRadius: 20, flexShrink: 0,
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              justifyContent: 'center', gap: 16, position: 'relative',
            }}>
              <div style={{
                width: 72, height: 72, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: step.color + '22',
              }}>
                {icons[step.icon](step.color)}
              </div>
            </div>
          </div>
        </div>

        {/* Controls + tagline */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => setPlaying(!playing)}
            style={{
              width: 36, height: 36, borderRadius: '50%',
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: 'rgba(255,255,255,0.4)', fontSize: 12,
              marginBottom: 20,
            }}
            aria-label={playing ? 'Pause' : 'Play'}
          >{playing ? '\u23F8' : '\u25B6'}</button>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: 620, margin: '0 auto' }}>
            Whether you need research, analysis, content, or technical builds — Sprint-Terns™ deploy in hours, not weeks. Every sprint is scoped, managed, and delivered with <em style={{ color: ORANGE, fontStyle: 'italic', fontFamily: SERIF }}>AI precision.</em>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #how .step-card-flex { flex-direction: column !important; gap: 24px !important; padding: 32px 24px !important; }
          #how .step-visual { width: 100% !important; height: 120px !important; }
        }
      `}</style>
    </section>
  )
                    }

'use client';
import { useEffect, useState, useRef } from 'react';

const METRICS = [
  { label: 'Hours Back', value: 144, unit: '', color: '#22C55E', icon: '⏱' },
  { label: 'Time Saved', value: 82, unit: '%', color: '#E07B39', icon: '📉' },
  { label: 'Tasks Complete', value: 48, total: 60, color: '#6B8FD4', icon: '✓' },
  { label: 'Active Sprints', value: 3, unit: '', color: '#F08C4E', icon: '⚡' },
];

function AnimatedBar({ pct, color, duration = 1200, delay = 0 }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        setTimeout(() => {
          const steps = 40;
          let i = 0;
          const iv = setInterval(() => {
            i++;
            setWidth(Math.min((i / steps) * pct, pct));
            if (i >= steps) clearInterval(iv);
          }, duration / steps);
        }, delay);
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [pct, duration, delay]);
  return (
    <div ref={ref} style={{ height: 5, background: 'rgba(255,255,255,0.07)', borderRadius: 3, overflow: 'hidden', marginTop: 10 }}>
      <div style={{ height: '100%', width: `${width}%`, background: color, borderRadius: 3, transition: 'width 0.05s linear' }} />
    </div>
  );
}

function CountUp({ target, suffix = '', delay = 0 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        setTimeout(() => {
          const steps = 40;
          let i = 0;
          const iv = setInterval(() => {
            i++;
            setVal(Math.round((i / steps) * target));
            if (i >= steps) clearInterval(iv);
          }, 1400 / steps);
        }, delay);
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, delay]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

export default function AnimatedDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div style={{ maxWidth: 580, margin: '24px auto 0', perspective: '1200px' }}>
      <div style={{ transform: 'rotateX(3deg) rotateY(-2deg)', transformStyle: 'preserve-3d' }}>

        {/* MacBook shell */}
        <div style={{ position: 'relative' }}>
          <svg viewBox="0 0 620 420" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%', filter: 'drop-shadow(0 24px 52px rgba(0,0,0,0.6)) drop-shadow(0 8px 16px rgba(0,0,0,0.4))' }}>
            <rect x="30" y="8" width="560" height="344" rx="14" fill="#b0b0b5" stroke="#c8c8cc" strokeWidth="1.5"/>
            <rect x="36" y="14" width="548" height="332" rx="10" fill="#888890"/>
            <rect x="42" y="20" width="536" height="320" rx="7" fill="#0d1117"/>
            <circle cx="310" cy="15" r="3.5" fill="#7a7a82"/>
            <circle cx="310" cy="15" r="1.5" fill="#555560"/>
            <rect x="20" y="352" width="580" height="10" rx="3" fill="#a0a0a8"/>
            <rect x="0" y="362" width="620" height="24" rx="4" fill="#b8b8be" stroke="#c8c8cc" strokeWidth="1"/>
            <rect x="0" y="362" width="620" height="2" rx="1" fill="rgba(255,255,255,0.35)"/>
            <rect x="232" y="352" width="156" height="10" rx="5" fill="#909098"/>
            <rect x="242" y="370" width="136" height="12" rx="4" fill="#a8a8b0" stroke="#bcbcc4" strokeWidth="0.75"/>
            <rect x="42" y="20" width="536" height="1.5" rx="0.75" fill="rgba(255,255,255,0.18)"/>
          </svg>

          {/* Dashboard overlay */}
          <div style={{ position: 'absolute', top: '4.8%', left: '6.8%', right: '6.8%', bottom: '21.5%', borderRadius: 6, overflow: 'hidden', background: '#0d1117', display: 'flex', flexDirection: 'column' }}>

            {/* Top bar */}
            <div style={{ background: '#161b22', padding: '6px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.07)', flexShrink: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ display: 'flex', gap: 4 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f57' }} />
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#febc2e' }} />
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#28c840' }} />
                </div>
                <span style={{ fontSize: '0.55rem', color: '#E07B39', fontWeight: 700, marginLeft: 8 }}>WorkSimplr — Employer Dashboard</span>
              </div>
              <div style={{ display: 'flex', gap: 4 }}>
                {['overview', 'sprints', 'analytics'].map(t => (
                  <button key={t} onClick={() => setActiveTab(t)} style={{ fontSize: '0.42rem', padding: '2px 7px', borderRadius: 4, border: 'none', cursor: 'pointer', background: activeTab === t ? '#E07B39' : 'rgba(255,255,255,0.06)', color: activeTab === t ? 'white' : 'rgba(255,255,255,0.4)', fontFamily: 'inherit', textTransform: 'capitalize' }}>{t}</button>
                ))}
              </div>
            </div>

            {/* Welcome bar */}
            <div style={{ background: 'rgba(224,123,57,0.08)', borderBottom: '1px solid rgba(224,123,57,0.15)', padding: '5px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
              <span style={{ fontSize: '0.5rem', color: 'rgba(255,255,255,0.6)' }}>Welcome back, <strong style={{ color: 'white' }}>Acme Corp</strong> — Q1 Sprint cycle active</span>
              <span style={{ fontSize: '0.45rem', background: 'rgba(34,197,94,0.15)', color: '#22C55E', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>3 Active Sprints</span>
            </div>

            {/* Main content */}
            <div style={{ flex: 1, padding: '8px 10px', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 7 }}>

              {/* Highlight stat cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 6 }}>
                {[
                  { label: 'Hours Back', val: 144, suffix: '', color: '#22C55E', sub: '↑ vs last quarter' },
                  { label: 'Time Saved', val: 82, suffix: '%', color: '#E07B39', sub: 'vs in-house' },
                  { label: 'Tasks Done', val: 48, suffix: '/60', color: '#6B8FD4', sub: '2 days early' },
                  { label: 'Active Sprints', val: 3, suffix: '', color: '#F08C4E', sub: '12 workers' },
                ].map((s, i) => (
                  <div key={s.label} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 6, padding: '7px 8px', border: `1px solid ${s.color}22`, position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: s.color, opacity: 0.7, borderRadius: '6px 6px 0 0' }} />
                    <div style={{ fontSize: '0.42rem', color: 'rgba(255,255,255,0.4)', marginBottom: 3, textTransform: 'uppercase', letterSpacing: '0.3px' }}>{s.label}</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 800, color: s.color, lineHeight: 1 }}>
                      <CountUp target={s.val} suffix={s.suffix} delay={i * 150} />
                    </div>
                    <div style={{ fontSize: '0.38rem', color: 'rgba(255,255,255,0.3)', marginTop: 3 }}>{s.sub}</div>
                  </div>
                ))}
              </div>

              {/* Active sprint progress */}
              <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 6, padding: '8px 10px', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                  <span style={{ fontSize: '0.5rem', fontWeight: 700, color: 'white' }}>Active Sprint Progress</span>
                  <span style={{ fontSize: '0.42rem', color: '#E07B39', fontWeight: 600 }}>9 days remaining</span>
                </div>
                {[
                  { name: 'Data Structuring', pct: 80, color: '#E07B39', workers: 5 },
                  { name: 'User Research', pct: 62, color: '#22C55E', workers: 4 },
                  { name: 'Market Analysis', pct: 35, color: '#6B8FD4', workers: 3 },
                ].map((s, i) => (
                  <div key={s.name} style={{ marginBottom: i < 2 ? 6 : 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.42rem', color: 'rgba(255,255,255,0.6)' }}>{s.name}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <span style={{ fontSize: '0.38rem', color: 'rgba(255,255,255,0.3)' }}>{s.workers} workers</span>
                        <span style={{ fontSize: '0.45rem', color: s.color, fontWeight: 700 }}>{s.pct}%</span>
                      </div>
                    </div>
                    <AnimatedBar pct={s.pct} color={s.color} delay={i * 200} />
                  </div>
                ))}
              </div>

              {/* Bottom row: deliverables + time saved chart */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 7, flex: 1 }}>

                {/* Deliverables */}
                <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 6, padding: '7px 10px', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div style={{ fontSize: '0.48rem', fontWeight: 700, color: 'white', marginBottom: 6 }}>Deliverables This Quarter</div>
                  {[
                    { label: 'Reports delivered', val: '12', done: true },
                    { label: 'QA passed', val: '98%', done: true },
                    { label: 'In review', val: '3', done: false },
                    { label: 'Pending start', val: '2', done: false },
                  ].map(d => (
                    <div key={d.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '3px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                        <div style={{ width: 5, height: 5, borderRadius: '50%', background: d.done ? '#22C55E' : 'rgba(255,255,255,0.2)' }} />
                        <span style={{ fontSize: '0.42rem', color: 'rgba(255,255,255,0.5)' }}>{d.label}</span>
                      </div>
                      <span style={{ fontSize: '0.48rem', fontWeight: 700, color: d.done ? 'white' : 'rgba(255,255,255,0.4)' }}>{d.val}</span>
                    </div>
                  ))}
                </div>

                {/* Time saved mini chart */}
                <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 6, padding: '7px 10px', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div style={{ fontSize: '0.48rem', fontWeight: 700, color: 'white', marginBottom: 2 }}>Hours Back / Month</div>
                  <div style={{ fontSize: '0.38rem', color: 'rgba(255,255,255,0.3)', marginBottom: 8 }}>vs. in-house equivalent</div>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 38 }}>
                    {[28, 36, 42, 38, 52, 48, 62, 58, 72, 68, 80, 82].map((h, i) => (
                      <div key={i} style={{ flex: 1, background: i >= 9 ? '#E07B39' : 'rgba(224,123,57,0.25)', height: `${(h / 82) * 100}%`, borderRadius: '2px 2px 0 0', minWidth: 3 }} />
                    ))}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
                    {['Jan','','','','','Jun','','','','','','Dec'].map((m, i) => (
                      <div key={i} style={{ flex: 1, fontSize: '0.3rem', color: 'rgba(255,255,255,0.2)', textAlign: 'center' }}>{m}</div>
                    ))}
                  </div>
                  <div style={{ marginTop: 6, display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#E07B39', lineHeight: 1 }}>
                      <CountUp target={144} suffix="" delay={600} />
                    </span>
                    <div>
                      <div style={{ fontSize: '0.38rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}>hours back</div>
                      <div style={{ fontSize: '0.38rem', color: '#22C55E', lineHeight: 1.4 }}>↑ 38% YoY</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

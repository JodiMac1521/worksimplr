import Link from 'next/link';

const SERIF = "'DM Serif Display', serif";

const plans = [
  {
    name: 'Starter',
    tagline: 'Launch your first SprintWork™ experience.',
    price: '$2,500',
    per: 'starting at',
    desc: 'Perfect for validating a single project or workflow with a small team.',
    highlight: false,
    features: [
      '1 project',
      'Up to 5 Sprint-Terns™',
      'Ready-to-use project templates',
      'Core platform access',
      'Basic reporting',
    ],
    cta: 'Start a Sprint',
    href: '/register?role=employer',
  },
  {
    name: 'Growth',
    tagline: 'Scale across programs.',
    price: '$7,500',
    per: 'starting at',
    desc: 'For teams running ongoing work across multiple projects and cohorts.',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Multiple projects + cohorts',
      'Up to 10 Sprint-Terns™ per project',
      'Employer collaboration tools',
      'Custom project support',
      'Outcomes tracking + analytics',
    ],
    cta: 'Start a Sprint',
    href: '/register?role=employer',
  },
  {
    name: 'Enterprise',
    tagline: 'Build workforce infrastructure.',
    price: 'Custom',
    per: 'pricing',
    desc: 'For organizations running multi-program or multi-site workforce pipelines.',
    highlight: false,
    features: [
      'Multi-program or multi-site rollout',
      'Employer network integration',
      'Advanced reporting + integrations',
      'Custom workflows + API access',
      'Dedicated onboarding + support',
    ],
    cta: 'Contact Sales',
    href: 'mailto:hello@worksimplr.com',
  },
];
const faqs = [
  { q: 'What exactly is a "sprint"?', a: 'A sprint is a 28-day structured engagement where a team of vetted Sprint-Terns™ executes a scoped project and delivers a finished output — not a status update.' },
  { q: 'How does AI scoping work?', a: 'When you submit a project, our SprintWork™ AI classifies the work, defines deliverables, estimates team size, and produces a brief — in minutes. You approve it before any work starts.' },
  { q: 'What if I\'m not happy with the output?', a: 'Every deliverable goes through QA before it reaches you. Starter includes 1 revision round, Growth includes 2. Enterprise has SLA-backed guarantees.' },
  { q: 'How are Sprint-Terns™ vetted?', a: 'All Sprint-Terns™ complete a skills assessment, background check, and onboarding through our TalentOS platform. Only the top applicants are matched to client sprints.' },
  { q: 'Can I run multiple sprints at once?', a: 'Yes. Growth and Enterprise plans support concurrent sprints across different workstreams. Talk to us about volume pricing.' },
  { q: 'Is there a setup fee?', a: 'No setup fees. You pay per sprint. Enterprise contracts are quoted annually with volume discounts.' },
];

export default function PricingPage() {
  return (
    <div style={{ fontFamily: 'DM Sans, sans-serif', background: 'linear-gradient(160deg,#0A2342 0%,#081A30 40%,#0A2342 100%)', minHeight: '100vh', color: 'white' }}>

      {/* Nav */}
      <nav style={{ position:'fixed',top:0,left:0,right:0,zIndex:100,background:'rgba(10,35,66,0.95)',backdropFilter:'blur(14px)',borderBottom:'1px solid rgba(224,123,57,0.2)',height:60,display:'flex',alignItems:'center' }}>
        <div style={{ maxWidth:1080,margin:'0 auto',padding:'0 24px',display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%' }}>
          <Link href="/" style={{ textDecoration:'none',display:'flex',alignItems:'center' }}>
            <img src="/logo.png" alt="Work Simplr" style={{ height:52,width:'auto',display:'block' }} />
          </Link>
          <div className="nav-desktop-links" style={{ display:'flex',gap:28,alignItems:'center' }}>
            {[['/#solution','Platform'],['/#how','Process'],['/pricing','Pricing'],['/about','About']].map(([h,l]) => (
              <Link key={h} href={h} style={{ fontSize:'0.88rem',fontWeight:500,color:l==='Pricing'?'#E07B39':'rgba(255,255,255,0.55)',textDecoration:'none' }}>{l}</Link>
            ))}
            {/* Case Studies dropdown */}
            <div style={{ position:'relative' }} className="cs-dropdown">
              <Link href="/case-studies" style={{ fontSize:'0.88rem',fontWeight:500,color:'rgba(255,255,255,0.55)',textDecoration:'none',display:'flex',alignItems:'center',gap:4 }}>
                Case Studies
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 3.5l3 3 3-3"/></svg>
              </Link>
              <div className="cs-dropdown-menu" style={{ position:'absolute',top:'100%',left:'50%',transform:'translateX(-50%)',paddingTop:8,opacity:0,visibility:'hidden',transition:'all 0.2s',pointerEvents:'none' }}>
                <div style={{ background:'rgba(10,35,66,0.98)',border:'1px solid rgba(224,123,57,0.15)',borderRadius:12,padding:8,minWidth:260,boxShadow:'0 20px 40px rgba(0,0,0,0.4)',backdropFilter:'blur(16px)' }}>
                  {[
                    { href:'/case-studies#product-testing', label:'Product Testing', sub:'Alpha/beta with real users',
                      icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="1" width="8" height="16" rx="2" stroke="#E07B39" strokeWidth="1.5"/><circle cx="9" cy="12" r="1.5" fill="#E07B39"/><line x1="7" y1="5" x2="11" y2="5" stroke="#E07B39" strokeWidth="1" opacity="0.5"/><line x1="7" y1="7" x2="11" y2="7" stroke="#E07B39" strokeWidth="1" opacity="0.3"/></svg> },
                    { href:'/case-studies#data-collection', label:'Data & Research', sub:'Large-scale research sprints',
                      icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="10" width="3" height="6" rx="1" fill="#E07B39" opacity="0.4"/><rect x="7.5" y="6" width="3" height="10" rx="1" fill="#E07B39" opacity="0.6"/><rect x="13" y="2" width="3" height="14" rx="1" fill="#E07B39"/></svg> },
                    { href:'/case-studies#campus-marketing', label:'Campus Marketing', sub:'Peer-to-peer outreach',
                      icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 14 L9 4 L16 14" stroke="#E07B39" strokeWidth="1.5" fill="none"/><circle cx="9" cy="2" r="1.5" fill="#E07B39"/><line x1="5" y1="14" x2="13" y2="14" stroke="#E07B39" strokeWidth="1.5"/></svg> },
                    { href:'/case-studies#specialized-research', label:'Specialized Research', sub:'Niche experts & influencers',
                      icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="5" stroke="#E07B39" strokeWidth="1.5"/><line x1="12" y1="12" x2="16" y2="16" stroke="#E07B39" strokeWidth="1.5" strokeLinecap="round"/></svg> },
                    { href:'/case-studies#tech-development', label:'Tech Development', sub:'AI & software prototypes',
                      icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><polyline points="5,5 2,9 5,13" stroke="#E07B39" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/><polyline points="13,5 16,9 13,13" stroke="#E07B39" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/><line x1="10" y1="3" x2="8" y2="15" stroke="#E07B39" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/></svg> },
                  ].map(item => (
                    <Link key={item.label} href={item.href} className="cs-dropdown-item" style={{ display:'flex',alignItems:'center',gap:12,padding:'10px 12px',borderRadius:8,textDecoration:'none',color:'rgba(255,255,255,0.55)',transition:'all 0.15s',fontSize:'0.82rem' }}>
                      <div style={{ width:32,height:32,borderRadius:6,background:'rgba(224,123,57,0.08)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0 }}>{item.icon}</div>
                      <div><div style={{ fontWeight:600,color:'white',fontSize:'0.84rem' }}>{item.label}</div><div style={{ fontSize:'0.72rem',opacity:0.5 }}>{item.sub}</div></div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="nav-desktop-cta" style={{ display:'flex',gap:10 }}>
            <Link href="/login" style={{ padding:'8px 20px',border:'1px solid rgba(255,255,255,0.2)',borderRadius:999,fontSize:'0.875rem',color:'rgba(255,255,255,0.7)',textDecoration:'none' }}>Log in</Link>
            <Link href="/register?role=employer" style={{ padding:'8px 20px',background:'#E07B39',borderRadius:999,fontSize:'0.875rem',color:'white',textDecoration:'none',fontWeight:600 }}>Start a Sprint</Link>
          </div>
          <Link className="mobile-menu-btn" href="/register?role=employer" style={{ padding:'8px 20px',background:'#E07B39',borderRadius:999,fontSize:'0.82rem',fontWeight:600,color:'white',textDecoration:'none' }}>Start a Sprint</Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ paddingTop: 120, paddingBottom: 72, textAlign: 'center', maxWidth: 700, margin: '0 auto', padding: '120px 24px 64px' }}>
        <div style={{ display: 'inline-block', background: 'rgba(224,123,57,0.1)', border: '1px solid rgba(224,123,57,0.25)', borderRadius: 999, padding: '4px 16px', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#E07B39', marginBottom: 24 }}>Simple Pricing</div>
        <h1 style={{ fontFamily: SERIF, fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 400, lineHeight: 1.15, marginBottom: 16 }}>
          Pay per sprint.<br /><em style={{ color: '#F08C4E' }}>Get real deliverables.</em>
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, maxWidth: 520, margin: '0 auto' }}>
          No retainers. No headcount. No surprise invoices. Every sprint is scoped, priced, and delivered in 28 days — or we make it right.
        </p>
      </section>

      {/* Plans */}
      <section style={{ padding: '0 24px 80px', maxWidth: 1040, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20, alignItems: 'start' }}>
          {plans.map(plan => (
            <div key={plan.name} style={{
              background: plan.highlight ? 'rgba(224,123,57,0.06)' : 'rgba(255,255,255,0.03)',
              border: plan.highlight ? '2px solid rgba(224,123,57,0.5)' : '1px solid rgba(255,255,255,0.08)',
              borderRadius: 20,
              padding: '36px 32px',
              position: 'relative',
            }}>
              {plan.badge && (
                <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: '#E07B39', borderRadius: 999, padding: '4px 18px', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'white', whiteSpace: 'nowrap', boxShadow: '0 4px 16px rgba(224,123,57,0.4)' }}>
                  {plan.badge}
                </div>
              )}
              <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: plan.highlight ? '#E07B39' : 'rgba(255,255,255,0.4)', marginBottom: 8 }}>{plan.name}</div>
              <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', marginBottom: 12, lineHeight: 1.4, fontStyle: 'italic' }}>{plan.tagline}</div>
              <div style={{ marginBottom: 6 }}>
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 4 }}>{plan.per}</div>
                <span style={{ fontFamily: SERIF, fontSize: 'clamp(2rem,4vw,2.8rem)', color: 'white', fontWeight: 400 }}>{plan.price}</span>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, marginBottom: 28, minHeight: 48 }}>{plan.desc}</p>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 24, marginBottom: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {plan.features.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 16, height: 16, borderRadius: '50%', background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="8" height="8" viewBox="0 0 8 8"><polyline points="1,4 3,6.5 7,1.5" stroke="#22C55E" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.75)' }}>{f}</span>
                  </div>
                ))}
              </div>

              <Link href={plan.href} style={{
                display: 'block', textAlign: 'center', padding: '13px 24px',
                background: plan.highlight ? '#E07B39' : 'rgba(255,255,255,0.06)',
                border: plan.highlight ? 'none' : '1px solid rgba(255,255,255,0.12)',
                borderRadius: 999, color: 'white', textDecoration: 'none',
                fontWeight: 600, fontSize: '0.95rem',
                boxShadow: plan.highlight ? '0 8px 24px rgba(224,123,57,0.35)' : 'none',
              }}>{plan.cta} →</Link>
            </div>
          ))}
        </div>

        {/* Trust line */}
        <div style={{ textAlign: 'center', marginTop: 40, fontSize: '0.82rem', color: 'rgba(255,255,255,0.3)', display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
          {['No setup fees', '28-day delivery guarantee', 'QA on every deliverable', 'Cancel anytime'].map(t => (
            <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ color: '#22C55E', fontSize: '0.75rem' }}>✓</span> {t}
            </span>
          ))}
        </div>
      </section>

      {/* Compare row */}
      <section style={{ background: '#0A2342', padding: '72px 24px', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#E07B39', marginBottom: 12 }}>Why SprintWork™</div>
            <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 400 }}>Compare the real cost of getting work done</h2>
          </div>
          <div className="pricing-compare-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 0, fontSize: '0.85rem' }}>
            {/* Header */}
            {['', 'Agency / Staffing', 'Freelance', 'SprintWork™'].map((h, i) => (
              <div key={i} style={{ padding: '12px 16px', background: i === 3 ? 'rgba(224,123,57,0.1)' : 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.08)', fontWeight: 700, color: i === 3 ? '#E07B39' : 'rgba(255,255,255,0.5)', fontSize: '0.78rem', letterSpacing: i > 0 ? '0.5px' : 0, textAlign: i > 0 ? 'center' : 'left', border: i === 3 ? '1px solid rgba(224,123,57,0.2)' : undefined, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>{h}</div>
            ))}
            {[
              ['Time to first output', '3–6 months', '2–8 weeks', '28 days'],
              ['Scoping included', '✗', '✗', '✓ AI-powered'],
              ['QA built in', '✗', '✗', '✓ Every sprint'],
              ['Predictable cost', '✗ hourly', '✗ varies', '✓ Fixed price'],
              ['Management overhead', 'High', 'Medium', 'None'],
              ['Talent pipeline', 'Their network', 'Public marketplace', '590+ school partners'],
            ].map((row, ri) => row.map((cell, ci) => (
              <div key={`${ri}-${ci}`} style={{ padding: '11px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', background: ci === 3 ? 'rgba(224,123,57,0.05)' : ri % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent', color: ci === 3 ? 'rgba(255,255,255,0.9)' : ci === 0 ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.4)', textAlign: ci > 0 ? 'center' : 'left', fontSize: '0.83rem', fontWeight: ci === 3 ? 500 : 400 }}>{cell}</div>
            )))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '72px 24px', maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#E07B39', marginBottom: 12 }}>FAQ</div>
          <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 400 }}>Common questions</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {faqs.map(f => (
            <div key={f.q} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '20px 24px', marginBottom: 8 }}>
              <div style={{ fontWeight: 700, color: 'white', marginBottom: 8, fontSize: '0.95rem' }}>{f.q}</div>
              <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: '#0A2342', padding: '72px 24px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 400, marginBottom: 12 }}>Ready to run your first sprint?</h2>
        <p style={{ color: 'rgba(255,255,255,0.45)', marginBottom: 32, fontSize: '0.95rem' }}>Set up takes 10 minutes. First deliverable in 28 days.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/register?role=employer" style={{ padding: '14px 40px', background: '#E07B39', borderRadius: 999, color: 'white', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', boxShadow: '0 8px 24px rgba(224,123,57,0.4)' }}>Start a Sprint →</Link>
          <a href="mailto:hello@worksimplr.com" style={{ padding: '14px 32px', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 999, color: 'rgba(255,255,255,0.65)', textDecoration: 'none', fontSize: '0.95rem' }}>Talk to sales</a>
        </div>
      </section>

      <footer style={{ borderTop:'1px solid rgba(255,255,255,0.06)',padding:'48px 24px 28px' }}>
        <div style={{ maxWidth:1080,margin:'0 auto' }}>
          <div className="cs-footer-grid" style={{ marginBottom:40 }}>
            <div>
              <div style={{ fontFamily:"'DM Serif Display', serif",fontSize:'1.15rem',color:'white',marginBottom:10 }}>Work Simplr</div>
              <p style={{ fontSize:'0.82rem',color:'rgba(255,255,255,0.4)',lineHeight:1.65,maxWidth:240 }}>Structured work, executed in weeks — not months.</p>
            </div>
            <div>
              <div style={{ fontSize:'0.72rem',fontWeight:700,letterSpacing:'2px',textTransform:'uppercase',color:'rgba(255,255,255,0.5)',marginBottom:16 }}>Platform</div>
              <div style={{ display:'flex',flexDirection:'column',gap:10 }}>
                <Link href="/#solution" style={{ fontSize:'0.84rem',color:'rgba(255,255,255,0.4)',textDecoration:'none' }}>How It Works</Link>
                <Link href="/case-studies" style={{ fontSize:'0.84rem',color:'rgba(255,255,255,0.4)',textDecoration:'none' }}>Case Studies</Link>
                <Link href="/pricing" style={{ fontSize:'0.84rem',color:'rgba(255,255,255,0.4)',textDecoration:'none' }}>Pricing</Link>
              </div>
            </div>
            <div>
              <div style={{ fontSize:'0.72rem',fontWeight:700,letterSpacing:'2px',textTransform:'uppercase',color:'rgba(255,255,255,0.5)',marginBottom:16 }}>Company</div>
              <div style={{ display:'flex',flexDirection:'column',gap:10 }}>
                <Link href="/about" style={{ fontSize:'0.84rem',color:'rgba(255,255,255,0.4)',textDecoration:'none' }}>About</Link>
                <Link href="/students" style={{ fontSize:'0.84rem',color:'rgba(255,255,255,0.4)',textDecoration:'none' }}>For Students</Link>
                <Link href="/terms" style={{ fontSize:'0.84rem',color:'rgba(255,255,255,0.4)',textDecoration:'none' }}>Terms of Service</Link>
              </div>
            </div>
            <div>
              <div style={{ fontSize:'0.72rem',fontWeight:700,letterSpacing:'2px',textTransform:'uppercase',color:'rgba(255,255,255,0.5)',marginBottom:16 }}>Connect</div>
              <div style={{ display:'flex',flexDirection:'column',gap:10 }}>
                <a href="https://www.linkedin.com/company/worksimplr/" target="_blank" rel="noopener noreferrer" style={{ fontSize:'0.84rem',color:'rgba(255,255,255,0.4)',textDecoration:'none' }}>LinkedIn</a>
                <a href="https://www.facebook.com/profile.php?id=61575702498652" target="_blank" rel="noopener noreferrer" style={{ fontSize:'0.84rem',color:'rgba(255,255,255,0.4)',textDecoration:'none' }}>Facebook</a>
                <a href="https://www.instagram.com/worksimplr/" target="_blank" rel="noopener noreferrer" style={{ fontSize:'0.84rem',color:'rgba(255,255,255,0.4)',textDecoration:'none' }}>Instagram</a>
                <a href="https://x.com/worksimplr" target="_blank" rel="noopener noreferrer" style={{ fontSize:'0.84rem',color:'rgba(255,255,255,0.4)',textDecoration:'none' }}>X</a>
              </div>
            </div>
          </div>
          <div style={{ borderTop:'1px solid rgba(255,255,255,0.06)',paddingTop:20,textAlign:'center',fontSize:'0.78rem',color:'rgba(255,255,255,0.25)' }}>
            © {new Date().getFullYear()} Work Simplr. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

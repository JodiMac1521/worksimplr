import Link from 'next/link';

const SERIF = "'DM Serif Display', serif";

export default function AboutPage() {
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
              <Link key={h} href={h} style={{ fontSize:'0.88rem',fontWeight:500,color:'rgba(255,255,255,0.55)',textDecoration:'none' }}>{l}</Link>
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
      <section style={{ paddingTop: 140, paddingBottom: 80, textAlign: 'center', maxWidth: 760, margin: '0 auto', padding: '140px 24px 80px' }}>
        <div style={{ display: 'inline-block', background: 'rgba(224,123,57,0.1)', border: '1px solid rgba(224,123,57,0.25)', borderRadius: 999, padding: '4px 16px', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#E07B39', marginBottom: 28 }}>Our Story</div>
        <h1 style={{ fontFamily: SERIF, fontSize: 'clamp(2.2rem,5vw,3.4rem)', fontWeight: 400, lineHeight: 1.15, marginBottom: 24 }}>
          We built the platform we<br />
          <em style={{ color: '#F08C4E' }}>wished had existed.</em>
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, maxWidth: 580, margin: '0 auto' }}>
          Work Simplr started with a simple observation: the gap between "we need help" and "deliverable in hand" is where projects go to die. So we built a system to close it.
        </p>
      </section>

      {/* Divider */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', maxWidth: 860, margin: '0 auto' }} />

      {/* Founding story */}
      <section className="about-founding-grid" style={{ padding: '72px 24px', maxWidth: 860, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#E07B39', marginBottom: 16 }}>Founded 2021</div>
          <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 400, lineHeight: 1.25, marginBottom: 20 }}>From EdTech veteran to workforce innovator</h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: 16 }}>
            After 30+ years scaling products at Pearson and watching organizations struggle to get real work done — not just staffed — our founder Jodi Mac built Work Simplr to solve the root problem.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8 }}>
            The insight: companies don't fail at execution because they lack talent. They fail because the work was never properly defined, scoped, or structured before anyone started.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[
            { num: '5,000+', label: 'Projects delivered' },
            { num: '98%', label: 'Completion rate' },
            { num: '2 weeks', label: 'Average sprint time' },
            { num: '590+', label: 'School partners' },
          ].map(s => (
            <div key={s.label} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '18px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '1.4rem', fontFamily: SERIF, color: '#E07B39', fontWeight: 400 }}>{s.num}</span>
              <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)' }}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section style={{ background: '#0A2342', padding: '72px 24px', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#E07B39', marginBottom: 20 }}>Mission</div>
          <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 400, lineHeight: 1.3, color: 'white' }}>
            "Make it as easy to get structured work done as it is to book a flight."
          </h2>
          <p style={{ marginTop: 24, color: 'rgba(255,255,255,0.45)', fontSize: '0.95rem', lineHeight: 1.7 }}>
            We're building the operating system for distributed knowledge work — where AI handles scoping, college talent handles execution, and employers get deliverables, not status updates.
          </p>
        </div>
      </section>

      {/* How we're different */}
      <section style={{ padding: '72px 24px', maxWidth: 960, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#E07B39', marginBottom: 16 }}>The Difference</div>
          <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 400 }}>SprintWork™ vs. everything else</h2>
        </div>
        <div className="about-diff-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
          {[
            { label: 'Staffing agencies', vs: 'Place people\nYou manage the work', us: 'We scope, structure\n& deliver outcomes' },
            { label: 'Freelance platforms', vs: 'Browse profiles\nHope for the best', us: 'AI-scoped briefs\n28-day sprint delivery' },
            { label: 'AI alone', vs: 'Time training models\nRisk without audit\nNo repeatability', us: 'Workflow documentation\naudit trail + compounding\noperational knowledge' },
          ].map(c => (
            <div key={c.label} style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '12px 20px', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>{c.label}</div>
              <div style={{ padding: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', marginBottom: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Them</div>
                  <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{c.vs}</div>
                </div>
                <div style={{ borderLeft: '1px solid rgba(224,123,57,0.2)', paddingLeft: 16 }}>
                  <div style={{ fontSize: '0.65rem', color: '#E07B39', marginBottom: 8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Us</div>
                  <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{c.us}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section style={{ background: '#0A2342', padding: '56px 24px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 32 }}>Trusted by</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 40 }}>
            {['/logo-gates-white.svg','/logo-electude.png','/logo-vista.png','/logo-edl-new.svg','/logo-cuboulder-white.png'].map(src => (
              <img key={src} src={src} alt="" style={{ height: 32, width: 'auto', opacity: 0.6, filter: 'brightness(1.2)', objectFit: 'contain' }} />
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '72px 24px', maxWidth: 860, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#E07B39', marginBottom: 16 }}>The Team</div>
          <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 400 }}>The people behind SprintWork™</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 32, justifyItems: 'center' }}>
          {[
            {
              img: '/headshot-jodi.jpg',
              name: 'Jodi Mac',
              title: 'Founder & CEO',
              bio: '30+ years in EdTech, including scaling products at Pearson. Jodi built Work Simplr after watching organizations consistently fail at the same place — not execution, but definition. She bootstrapped the company for 3.5 years before raising from Techstars and Gener8tor.',
              linkedin: 'https://linkedin.com/in/jodimac',
            },
            {
              img: '/headshot-eric.png',
              name: 'Eric Severson',
              title: 'Chief Operating Officer',
              bio: '30+ years in EdTech building and managing $1B in sales and revenue operations. Eric brings deep expertise in sales ops, data ops, and scaling go-to-market teams — the operational backbone behind how Work Simplr delivers at scale.',
              isQuote: false,
            },
          ].map(person => (
            <div key={person.name} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: '36px 32px', maxWidth: 400, width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                <img
                  src={person.img}
                  alt={person.name}
                  style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', flexShrink: 0, border: '2px solid rgba(224,123,57,0.4)' }}
                />
                <div>
                  <div style={{ fontWeight: 700, color: 'white', fontSize: '1.05rem', marginBottom: 4 }}>{person.name}</div>
                  <div style={{ fontSize: '0.82rem', color: '#E07B39', fontWeight: 500 }}>{person.title}</div>
                </div>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, fontStyle: person.isQuote ? 'italic' : 'normal', margin: 0 }}>
                {person.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '72px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 400, marginBottom: 16 }}>Ready to run your first sprint?</h2>
        <p style={{ color: 'rgba(255,255,255,0.45)', marginBottom: 32, fontSize: '0.95rem' }}>Join 200+ companies who've stopped managing work and started shipping it.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          <Link href="/register?role=employer" style={{ padding: '14px 36px', background: '#E07B39', borderRadius: 999, color: 'white', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', boxShadow: '0 8px 24px rgba(224,123,57,0.4)' }}>Start a Sprint →</Link>
          <Link href="/students" style={{ padding: '14px 28px', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 999, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.95rem' }}>Join as a Sprint-Tern™</Link>
        </div>
      </section>

      {/* Footer */}
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

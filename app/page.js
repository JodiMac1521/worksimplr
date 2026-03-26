import AnimatedStats from './components/AnimatedStats';
import AnimatedDashboard from './components/AnimatedDashboard';
import AnimatedSteps from './components/AnimatedSteps';

export default function Home() {
  const SERIF = "'DM Serif Display', serif"
  const steps = [
  { num: '01', title: 'Submit your work', desc: 'Describe what you need in plain language. No scope doc required.',
    icon: (<svg width="44" height="44" viewBox="0 0 48 48" fill="none"><rect x="10" y="8" width="28" height="32" rx="3" stroke="rgba(255,255,255,0.7)" strokeWidth="2" fill="none"/><line x1="16" y1="18" x2="32" y2="18" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/><line x1="16" y1="24" x2="28" y2="24" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/><line x1="16" y1="30" x2="25" y2="30" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/><path d="M30 32 L34 36 L40 28" stroke="#E07B39" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>) },
  { num: '02', title: 'We scope it instantly', desc: 'AI classifies the work, defines deliverables, and prices it — in minutes.',
    icon: (<svg width="44" height="44" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="16" stroke="rgba(255,255,255,0.7)" strokeWidth="2" fill="none"/><path d="M16 24 L22 24 L26 16 L30 32 L34 24 L38 24" stroke="#E07B39" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>) },
  { num: '03', title: 'Sprint-Tern™ matched & onboarded', desc: 'Work is distributed across 1-100 Sprint-Terns™ and we train/manage them.',
    icon: (<svg width="44" height="44" viewBox="0 0 48 48" fill="none"><circle cx="10" cy="14" r="4.5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.3" fill="none"/><path d="M4 30 C4 24 7 22 10 22 C13 22 16 24 16 30" stroke="rgba(255,255,255,0.6)" strokeWidth="1.3" fill="none" strokeLinecap="round"/><circle cx="24" cy="12" r="5" stroke="#E07B39" strokeWidth="1.5" fill="none"/><path d="M17 30 C17 23 20 20 24 20 C28 20 31 23 31 30" stroke="#E07B39" strokeWidth="1.5" fill="none" strokeLinecap="round"/><circle cx="38" cy="14" r="4.5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.3" fill="none"/><path d="M32 30 C32 24 35 22 38 22 C41 22 44 24 44 30" stroke="rgba(255,255,255,0.6)" strokeWidth="1.3" fill="none" strokeLinecap="round"/><line x1="14" y1="34" x2="34" y2="34" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="2 2"/><path d="M19 4 L23 8 L30 0" stroke="#E07B39" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>) },
  { num: '04', title: 'AI-powered teams execute', desc: 'Vetted operators + AI tools work together on your project.',
    icon: (<svg width="44" height="44" viewBox="0 0 48 48" fill="none"><circle cx="16" cy="16" r="5" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" fill="none"/><circle cx="32" cy="16" r="5" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" fill="none"/><circle cx="24" cy="32" r="5" stroke="#E07B39" strokeWidth="1.5" fill="none"/><line x1="19" y1="19" x2="22" y2="28" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/><line x1="29" y1="19" x2="26" y2="28" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/><line x1="21" y1="16" x2="27" y2="16" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/></svg>) },
  { num: '05', title: 'QA + delivery', desc: 'We review and package up the work. No surprises.',
    icon: (<svg width="44" height="44" viewBox="0 0 48 48" fill="none"><rect x="10" y="12" width="28" height="22" rx="3" stroke="rgba(255,255,255,0.7)" strokeWidth="2" fill="none"/><polyline points="12,14 24,24 36,14" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none"/><circle cx="36" cy="34" r="7" fill="#E07B39"/><path d="M33 34 L35.5 36.5 L39.5 31.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>) },
];
  return (
    <div style={{ overflowX:'hidden',minHeight:'100vh' }}>
      <nav style={{ position:'fixed',top:0,left:0,right:0,zIndex:100,background:'rgba(10,35,66,0.95)',backdropFilter:'blur(14px)',borderBottom:'1px solid rgba(224,123,57,0.2)',height:60,display:'flex',alignItems:'center' }}>
        <div style={{ maxWidth:1080,margin:'0 auto',padding:'0 24px',display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%' }}>
          <a href="/" style={{ textDecoration:'none',display:'flex',alignItems:'center' }}>
            <img src="/logo.png" alt="Work Simplr" style={{ height:52,width:'auto',display:'block' }} />
          </a>
          <div className="nav-desktop-links" style={{ display:'flex',gap:28,alignItems:'center' }}>
            {[['#solution','Platform'],['#how','Process'],['/pricing','Pricing'],['/about','About']].map(([h,l]) => (
              <a key={h} href={h} style={{ fontSize:'0.88rem',fontWeight:500,color:'rgba(255,255,255,0.55)',textDecoration:'none' }}>{l}</a>
            ))}
            {/* Case Studies dropdown */}
            <div style={{ position:'relative' }} className="cs-dropdown">
              <a href="/case-studies" style={{ fontSize:'0.88rem',fontWeight:500,color:'rgba(255,255,255,0.55)',textDecoration:'none',display:'flex',alignItems:'center',gap:4 }}>
                Case Studies
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 3.5l3 3 3-3"/></svg>
              </a>
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
                    <a key={item.label} href={item.href} className="cs-dropdown-item" style={{ display:'flex',alignItems:'center',gap:12,padding:'10px 12px',borderRadius:8,textDecoration:'none',color:'rgba(255,255,255,0.55)',transition:'all 0.15s',fontSize:'0.82rem' }}>
                      <div style={{ width:32,height:32,borderRadius:6,background:'rgba(224,123,57,0.08)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0 }}>{item.icon}</div>
                      <div><div style={{ fontWeight:600,color:'white',fontSize:'0.84rem' }}>{item.label}</div><div style={{ fontSize:'0.72rem',opacity:0.5 }}>{item.sub}</div></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="nav-desktop-cta" style={{ display:'flex',gap:10 }}>
            <a href="/login" style={{ padding:'8px 20px',border:'1px solid rgba(255,255,255,0.2)',borderRadius:999,fontSize:'0.875rem',color:'rgba(255,255,255,0.7)',textDecoration:'none' }}>Log in</a>
            <a href="/register?role=employer" style={{ padding:'8px 20px',background:'#E07B39',borderRadius:999,fontSize:'0.875rem',color:'white',textDecoration:'none',fontWeight:600 }}>Start a Sprint</a>
          </div>
          <a className="mobile-menu-btn" href="/register?role=employer" style={{ padding:'8px 20px',background:'#E07B39',borderRadius:999,fontSize:'0.82rem',fontWeight:600,color:'white',textDecoration:'none' }}>Start a Sprint</a>
        </div>
      </nav>

      <section style={{ paddingTop:140,paddingBottom:100,background:'linear-gradient(160deg,#081A30 0%,#0A2342 60%,#0D2B50 100%)',position:'relative',overflow:'hidden' }}>
        <div style={{ position:'absolute',top:-150,right:-150,width:500,height:500,background:'radial-gradient(circle,rgba(224,123,57,0.12) 0%,transparent 70%)',pointerEvents:'none' }} />
        {/* Diagonal line texture — repeating CSS gradient */}
        <div style={{ position:'absolute',inset:0,pointerEvents:'none',opacity:1,background:'repeating-linear-gradient(15deg,rgba(255,255,255,0.025) 0px,rgba(255,255,255,0.025) 1px,transparent 1px,transparent 28px)' }} />
        <div style={{ maxWidth:800,margin:'0 auto',padding:'0 24px',textAlign:'center',position:'relative',zIndex:1 }}>
          <div style={{ display:'inline-flex',alignItems:'center',gap:8,background:'rgba(224,123,57,0.12)',border:'1px solid rgba(224,123,57,0.3)',borderRadius:999,padding:'5px 14px',fontSize:'0.75rem',fontWeight:700,letterSpacing:'1.5px',textTransform:'uppercase',color:'#F08C4E',marginBottom:28 }}>SprintWork™ Platform</div>
          <h1 style={{ fontFamily:SERIF,fontSize:'clamp(2.4rem,5vw,3.6rem)',fontWeight:400,color:'white',lineHeight:1.1,marginBottom:20 }}>
            The Future of Work<br /><em style={{ fontStyle:'italic',color:'#F08C4E' }}>Runs on Sprints.</em>
          </h1>
          <p style={{ fontSize:'1.1rem',color:'rgba(255,255,255,0.55)',lineHeight:1.7,marginBottom:12,maxWidth:600,margin:'0 auto 12px' }}>Structured work, executed in weeks — not months.</p>
          <div style={{ display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap' }}>
            <a href="/register?role=employer" style={{ padding:'14px 36px',background:'#E07B39',borderRadius:999,fontSize:'1rem',fontWeight:600,color:'white',textDecoration:'none',boxShadow:'0 4px 24px rgba(224,123,57,0.4)' }}>Start a Sprint →</a>
            <a href="#how" style={{ padding:'14px 28px',border:'1px solid rgba(255,255,255,0.2)',borderRadius:999,fontSize:'1rem',color:'rgba(255,255,255,0.7)',textDecoration:'none' }}>See how it works</a>
          </div>
          <div style={{ display:'flex',justifyContent:'center',gap:40,marginTop:60,paddingTop:40,borderTop:'1px solid rgba(224,123,57,0.2)' }}>
            <AnimatedStats />          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section style={{ background:'#081A30', padding:'72px 24px 80px', borderBottom:'1px solid rgba(255,255,255,0.06)', borderTop:'1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth:1080, margin:'0 auto' }}>

          {/* Heading */}
          <div style={{ textAlign:'center', marginBottom:52 }}>
            <div style={{ fontSize:'0.72rem', fontWeight:700, letterSpacing:'2px', textTransform:'uppercase', color:'#E07B39', marginBottom:12 }}>Client Results</div>
            <h2 style={{ fontFamily:SERIF, fontSize:'clamp(1.6rem,3vw,2.2rem)', color:'white', fontWeight:400, marginBottom:0, lineHeight:1.2 }}>
              Proven Results — <em style={{ color:'#F08C4E', fontStyle:'italic' }}>In Weeks, Not Months</em>
            </h2>
          </div>

          {/* Logo strip */}
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:32, flexWrap:'wrap', marginBottom:56, paddingBottom:40, borderBottom:'1px solid rgba(255,255,255,0.07)' }}>
            {[
              { src:'/logo-usnews.png', alt:'U.S. News & World Report', h:34 },
              { src:'/logo-poolit.jpg', alt:'Poolit', h:34, style:{ borderRadius:6 } },
              { src:'/logo-electude.png', alt:'Electude', h:28 },
              { src:'/logo-vista.png', alt:'Vista Higher Learning', h:40 },
              { src:'/logo-edl-new.svg', alt:'Education Design Lab', h:40 },
              { src:'/logo-gates-white.svg', alt:'Gates Foundation', h:32 },
              { src:'/logo-cuboulder-white.png', alt:'CU Boulder', h:32 },
              { src:'/logo-texastech.svg', alt:'Texas Tech University', h:40 },
              { src:'/logo-ncstate.svg', alt:'NC State University', h:40 },
              { src:'/logo-coloradomesa.svg', alt:'Colorado Mesa University', h:40 },
              { src:'/logo-ivytech.svg', alt:'Ivy Tech Community College', h:40 },
            ].map(logo => (
              <img key={logo.alt} src={logo.src} alt={logo.alt}
                style={{ height:logo.h, width:'auto', opacity:0.75, filter:'brightness(1.1)', objectFit:'contain', ...(logo.style||{}) }} />
            ))}
          </div>

          {/* Case study cards */}
          <div className="hp-results-grid" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:18 }}>
            {[
              {
                stat:'180K Records',
                company:'U.S. News & World Report',
                quote:'Work Simplr successfully processed over 180,000 pieces of data in just three weeks using a coordinated team of 60 students. The work was accurate, well-managed, and delivered on schedule.',
                name:'Eric H.',
                tag:'Data Processing',
                color:'#E07B39',
              },
              {
                stat:'6,000 Leads',
                company:'Poolit',
                quote:'Work Simplr helped us generate qualified leads while reducing the operational lift on our internal team. The quality of leads and the structure behind the work stood out. This wasn\'t busywork — it was real pipeline impact.',
                name:'James L.',
                tag:'Lead Generation',
                color:'#6B8FD4',
              },
              {
                stat:'600 User Tests',
                company:'Wiley',
                quote:'We tested with hundreds of users in a fraction of the time. The quality and consistency of the feedback exceeded expectations. Clean data. Clear decisions.',
                name:'Jason J., VP',
                tag:'User Research',
                color:'#4BBFA0',
              },
              {
                stat:'75% Time Saved',
                company:'Cloverleaf',
                quote:'We saved 75% of the time and 50% off the cost of new lead gen and cleansing our old database.',
                name:'Eric H., COO',
                tag:'Efficiency',
                color:'#E07B39',
              },
              {
                stat:'5,000 Districts',
                company:'CEMD',
                quote:'We can scale up and down as we gather nearly 5,000 districts of information and insight with Work Simplr. Steady and accurate.',
                name:'Shari M., VP',
                tag:'Research',
                color:'#6B8FD4',
              },
              {
                stat:'2-Week Launch',
                company:'Education Design Lab',
                quote:'This unblocked us. We needed product testing fast — in under 3 weeks we had end-to-end user tests completed in just 2 weeks, keeping our launch schedule on time.',
                name:'Tara M., Product Lead',
                tag:'Product Testing',
                color:'#4BBFA0',
              },
            ].map(card => (
              <div key={card.company} style={{
                background:'rgba(255,255,255,0.03)',
                border:'1px solid rgba(255,255,255,0.08)',
                borderRadius:16,
                padding:'28px 24px',
                display:'flex',
                flexDirection:'column',
                gap:16,
                position:'relative',
                overflow:'hidden',
              }}>
                {/* Accent top bar */}
                <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:card.color, borderRadius:'16px 16px 0 0' }} />

                {/* Stat */}
                <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:8 }}>
                  <div style={{ fontFamily:SERIF, fontSize:'2rem', color:card.color, lineHeight:1, fontWeight:400 }}>{card.stat}</div>
                  <div style={{ fontSize:'0.68rem', fontWeight:700, letterSpacing:'1.5px', textTransform:'uppercase', color:card.color, background:`rgba(255,255,255,0.06)`, border:`1px solid ${card.color}30`, borderRadius:999, padding:'4px 10px', whiteSpace:'nowrap', marginTop:4 }}>{card.tag}</div>
                </div>

                {/* Company */}
                <div style={{ fontSize:'0.78rem', fontWeight:700, color:'rgba(255,255,255,0.45)', letterSpacing:'0.5px', textTransform:'uppercase' }}>{card.company}</div>

                {/* Quote */}
                <p style={{ fontSize:'0.88rem', color:'rgba(255,255,255,0.65)', lineHeight:1.7, margin:0, flex:1, fontStyle:'italic' }}>
                  "{card.quote}"
                </p>

                {/* Attribution */}
                <div style={{ fontSize:'0.78rem', color:'rgba(255,255,255,0.35)', fontWeight:500 }}>— {card.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solution" style={{ background:'#0A2342',padding:'96px 24px',borderTop:'1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth:1060,margin:'0 auto' }}>
          <div style={{ display:'flex',alignItems:'center',gap:16,marginBottom:40 }}>
            <div style={{ flex:1,height:'1px',background:'linear-gradient(to right,transparent,rgba(255,255,255,0.08))' }} />
            <span style={{ color:'rgba(224,123,57,0.45)',fontSize:'0.5rem' }}>&#9670;</span>
            <div style={{ flex:1,height:'1px',background:'linear-gradient(to left,transparent,rgba(255,255,255,0.08))' }} />
          </div>
          <div style={{ fontSize:'0.72rem',fontWeight:700,letterSpacing:'2px',textTransform:'uppercase',color:'#E07B39',marginBottom:16,textAlign:'center' }}>The Solution</div>
          <h2 style={{ fontFamily:SERIF,fontSize:'clamp(2rem,3.8vw,2.9rem)',color:'white',marginBottom:16,lineHeight:1.2,textAlign:'center' }}>Welcome to <em style={{ color:'#F08C4E' }}>SprintWork™</em></h2>
          <p style={{ fontSize:'1rem',color:'rgba(255,255,255,0.5)',marginBottom:56,lineHeight:1.7,textAlign:'center' }}>We take messy, undefined work and turn it into real outcomes. In weeks, not months.</p>

          <AnimatedSteps>
          <div className="hp-steps-row" style={{ display:'flex',alignItems:'stretch',gap:0,paddingTop:24,marginBottom:40 }}>
            {[
              { num:'1', icon:(<svg width="120" height="68" viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg" style={{display:'block',margin:'0 auto'}}>
                  <defs>
                    <marker id="wfA" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                      <path d="M1,1 L7,4 L1,7" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2"/>
                    </marker>
                  </defs>
                  {/* Input node */}
                  <rect x="4" y="42" width="38" height="26" rx="5" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.9)" strokeWidth="2"/>
                  <text x="23" y="59" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="10" fontWeight="600" fontFamily="DM Sans, sans-serif">Input</text>
                  {/* Arrows from Input to processes */}
                  <line x1="42" y1="50" x2="68" y2="26" stroke="rgba(255,255,255,0.55)" strokeWidth="1.6" markerEnd="url(#wfA)"/>
                  <line x1="42" y1="55" x2="68" y2="55" stroke="rgba(255,255,255,0.55)" strokeWidth="1.6" markerEnd="url(#wfA)"/>
                  <line x1="42" y1="62" x2="68" y2="88" stroke="rgba(255,255,255,0.55)" strokeWidth="1.6" markerEnd="url(#wfA)"/>
                  {/* Scope node */}
                  <ellipse cx="94" cy="22" rx="24" ry="15" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="2"/>
                  <text x="94" y="26" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="9" fontFamily="DM Sans, sans-serif">Scope</text>
                  {/* Build node */}
                  <ellipse cx="94" cy="56" rx="24" ry="15" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="2"/>
                  <text x="94" y="60" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="9" fontFamily="DM Sans, sans-serif">Build</text>
                  {/* QA node */}
                  <ellipse cx="94" cy="90" rx="24" ry="15" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="2"/>
                  <text x="94" y="94" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="9" fontFamily="DM Sans, sans-serif">QA</text>
                  {/* Arrows to Output */}
                  <line x1="118" y1="26" x2="150" y2="48" stroke="rgba(255,255,255,0.55)" strokeWidth="1.6" markerEnd="url(#wfA)"/>
                  <line x1="118" y1="56" x2="150" y2="56" stroke="rgba(255,255,255,0.55)" strokeWidth="1.6" markerEnd="url(#wfA)"/>
                  <path d="M118 90 Q142 90 148 66" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.6" markerEnd="url(#wfA)"/>
                  {/* Dashed cross-links */}
                  <line x1="94" y1="37" x2="94" y2="41" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="2,2"/>
                  <line x1="94" y1="71" x2="94" y2="75" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="2,2"/>
                  {/* Output node */}
                  <ellipse cx="180" cy="56" rx="30" ry="18" fill="none" stroke="rgba(255,255,255,0.95)" strokeWidth="2.2"/>
                  <text x="180" y="60" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="10" fontWeight="600" fontFamily="DM Sans, sans-serif">Output</text>
                </svg>), title:'Structured Workflow', desc:"Each engagement is 'projectized' with a clear scope, milestones & tasks." },
              { num:'2', icon: (<svg width="140" height="56" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" style={{display:'block',margin:'0 auto'}}>
                  {/* Row 1 - 5 people */}
                  {[0,1,2,3,4].map(i => (
                    <g key={`a-${i}`} transform={`translate(${i*38+8},0)`} fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="10" cy="8" r="6"/>
                      <path d="M0 26 C0 17 20 17 20 26"/>
                    </g>
                  ))}
                  {/* Row 2 - 5 people (slightly lighter) */}
                  {[0,1,2,3,4].map(i => (
                    <g key={`b-${i}`} transform={`translate(${i*38+8},36)`} fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="10" cy="8" r="6"/>
                      <path d="M0 26 C0 17 20 17 20 26"/>
                    </g>
                  ))}
                </svg>), title:'Execution plans', desc:'We onboard and distribute the work across 1–100 workers with QA built in.' },
              { num:'3', icon:(<svg width="52" height="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" style={{display:'block',margin:'0 auto'}}>
                <rect x="6" y="16" width="40" height="30" rx="4" stroke="rgba(255,255,255,0.8)" strokeWidth="2" fill="none"/>
                <polyline points="6,16 26,6 46,16" stroke="rgba(255,255,255,0.8)" strokeWidth="2" fill="none" strokeLinejoin="round"/>
                <line x1="26" y1="6" x2="26" y2="46" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
                <line x1="6" y1="16" x2="46" y2="16" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
                <polyline points="18,28 24,34 36,22" stroke="#22C55E" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>), title:'Delivered outcomes', desc:'You get the thing you asked for — not a status update and an invoice. In 28 days.' },
            ].map((item, i) => (
              <div key={item.num} className="step-card" style={{ display:'flex',alignItems:'stretch',flex:1 }}>
                <div style={{ flex:1,display:'flex',flexDirection:'column',background:i===0?'#E07B39':'rgba(224,123,57,0.05)',border:'1px solid rgba(224,123,57,0.2)',borderRadius:16,padding:'36px 24px 28px',textAlign:'center',position:'relative',boxShadow:i===0?'0 8px 32px rgba(224,123,57,0.3)':'none' }}>
                  <div style={{ position:'absolute',top:-18,left:'50%',transform:'translateX(-50%)',background:i===0?'white':'#E07B39',color:i===0?'#E07B39':'white',width:32,height:32,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'0.78rem',fontWeight:800,boxShadow:'0 4px 12px rgba(224,123,57,0.5)' }}>{item.num}</div>
                  <div style={{ fontSize:'3.4rem',marginBottom:14,marginTop:8,lineHeight:1,height:100,display:'flex',alignItems:'center',justifyContent:'center' }}>{item.icon}</div>
                  <div style={{ fontFamily:SERIF,fontSize:'1.1rem',color:'white',marginBottom:8,fontWeight:400 }}>{item.title}</div>
                  <div style={{ fontSize:'0.875rem',maxWidth:260,color:i===0?'rgba(255,255,255,0.85)':'rgba(255,255,255,0.55)',lineHeight:1.65 }}>{item.desc}</div>
                </div>
                {i < 2 && <div className="step-arrow" style={{ flexShrink:0,width:44,display:'flex',alignItems:'center',justifyContent:'center',color:'#E07B39',fontSize:'1.6rem' }}>→</div>}
              </div>
            ))}
          </div>
          </AnimatedSteps>

        </div>
      </section>

      <section id="problem" style={{ background:'#081A30',padding:'96px 24px',borderTop:'1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth:860,margin:'0 auto' }}>
          <div style={{ display:'flex',alignItems:'center',gap:16,marginBottom:40 }}>
            <div style={{ flex:1,height:'1px',background:'linear-gradient(to right,transparent,rgba(255,255,255,0.08))' }} />
            <span style={{ color:'rgba(224,123,57,0.45)',fontSize:'0.5rem' }}>&#9670;</span>
            <div style={{ flex:1,height:'1px',background:'linear-gradient(to left,transparent,rgba(255,255,255,0.08))' }} />
          </div>
          <div style={{ fontSize:'0.72rem',fontWeight:700,letterSpacing:'2px',textTransform:'uppercase',color:'#E07B39',marginBottom:16,textAlign:'center' }}>The Problem</div>
          <h2 style={{ fontFamily:SERIF,fontSize:'clamp(2rem,3.8vw,2.9rem)',color:'white',marginBottom:20,lineHeight:1.2,textAlign:'center' }}>Most work doesn't fail<br />because of talent.</h2>
          <p style={{ fontSize:'1rem',color:'rgba(255,255,255,0.5)',marginBottom:40,lineHeight:1.7,maxWidth:520,textAlign:'center',margin:'0 auto 40px' }}>It fails because it's poorly defined before anyone starts.</p>
          <div className="hp-problem-grid" style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginBottom:40,maxWidth:780,margin:'0 auto 40px' }}>
            {[
              {
                label:'Unclear', desc:"No one can agree on what done looks like.",
                icon:(<svg width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 22 Q12 10 18 16 Q22 20 16 26 Q10 32 18 34 Q26 36 24 26 Q22 18 28 14 Q34 10 32 20 Q30 28 36 26" stroke="rgba(255,255,255,0.8)" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <path d="M12 14 Q20 8 26 18 Q30 26 22 30 Q14 34 20 38 Q28 42 34 34 Q38 28 32 22 Q26 16 32 10 Q36 6 40 14" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <path d="M6 30 Q14 24 18 32 Q22 38 30 32 Q36 28 28 20 Q22 14 28 8 Q34 4 38 10" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
                </svg>)
              },
              {
                label:'Poorly scoped', desc:'Requirements shift. Time blows out. Budget disappears.',
                icon:(<svg width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="4" width="36" height="36" rx="5" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeDasharray="5,3"/>
                  <line x1="4" y1="22" x2="40" y2="22" stroke="rgba(255,255,255,0.35)" strokeWidth="1.4"/>
                  <line x1="22" y1="4" x2="22" y2="40" stroke="rgba(255,255,255,0.35)" strokeWidth="1.4"/>
                  <circle cx="22" cy="22" r="4" fill="none" stroke="rgba(224,123,57,0.9)" strokeWidth="2"/>
                  <line x1="25" y1="18" x2="36" y2="8" stroke="rgba(224,123,57,0.6)" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>)
              },
              {
                label:'Impossible to execute', desc:'As written, the work cannot actually be completed.',
                icon:(<svg width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="22" cy="22" r="18" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2"/>
                  <line x1="11" y1="11" x2="33" y2="33" stroke="rgba(255,255,255,0.85)" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="33" y1="11" x2="11" y2="33" stroke="rgba(255,255,255,0.85)" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>)
              },
            ].map(item => (
              <div key={item.label} style={{ background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:14,padding:'24px 20px',textAlign:'center' }}>
                <div style={{ display:'flex',justifyContent:'center',marginBottom:12 }}>{item.icon}</div>
                <div style={{ fontWeight:700,color:'white',marginBottom:6,fontSize:'0.95rem' }}>{item.label}</div>
                <div style={{ fontSize:'0.85rem',color:'rgba(255,255,255,0.45)',lineHeight:1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ background:'rgba(224,123,57,0.06)',border:'1px solid rgba(224,123,57,0.25)',borderRadius:14,padding:'28px 40px',textAlign:'center' }}>
            <div style={{ fontFamily:SERIF,fontSize:'clamp(1.4rem,2.5vw,2rem)',color:'white',marginBottom:8,lineHeight:1.3 }}>
              <em style={{ color:'#F08C4E' }}>74%</em> of projects fail at the definition stage —<br />not the execution.
            </div>
            <div style={{ fontSize:'0.82rem',color:'rgba(255,255,255,0.4)',marginTop:8 }}>That's the problem Work Simplr was built to solve.</div>
          </div>
        </div>
      </section>

      <section id="how" style={{ background:'#0A2342',padding:'96px 24px',borderTop:'1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth:1320,margin:'0 auto' }}>
          <div style={{ fontSize:'0.72rem',fontWeight:700,letterSpacing:'2px',textTransform:'uppercase',color:'#E07B39',marginBottom:12,textAlign:'center' }}>How It Works</div>
          <h2 style={{ fontFamily:SERIF,fontSize:'clamp(2rem,3.8vw,2.9rem)',color:'white',marginBottom:64,lineHeight:1.2,textAlign:'center' }}>5 steps to delivered work.</h2>

          <div style={{ display:'flex',gap:48,alignItems:'stretch' }}>
            {/* Left: Vertical timeline */}
            <div style={{ flex:1,position:'relative',paddingLeft:56 }}>
              <div style={{ position:'absolute',left:19,top:16,bottom:16,width:2,background:'rgba(255,255,255,0.1)' }} />
              {steps.map((step, i) => (
                <div key={step.num} style={{ position:'relative',display:'flex',alignItems:'flex-start',gap:32,paddingBottom:i < steps.length - 1 ? 40 : 0 }}>
                  <div style={{ position:'absolute',left:-44,top:2,width:32,height:32,borderRadius:'50%',background:'#E07B39',display:'flex',alignItems:'center',justifyContent:'center',zIndex:2,fontSize:14,fontWeight:700,color:'white' }}>{step.num}</div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontFamily:SERIF,fontSize:'clamp(1.25rem,2.5vw,1.65rem)',color:'white',fontWeight:400,lineHeight:1.3,marginBottom:6 }}>{step.title}</div>
                    <div style={{ fontSize:15,color:'rgba(255,255,255,0.5)',lineHeight:1.6 }}>{step.desc}</div>
                  </div>
                  <div style={{ width:72,height:72,borderRadius:14,background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',boxShadow:'0 4px 20px rgba(0,0,0,0.35),0 1px 4px rgba(0,0,0,0.2)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0 }}>{step.icon}</div>
                </div>
              ))}
            </div>

            {/* Right: Accent panel */}
          <div style={{ width:340,flexShrink:0,borderRadius:20,background:'linear-gradient(135deg,rgba(224,123,57,0.08) 0%,rgba(224,123,57,0.03) 100%)',border:'1px solid rgba(224,123,57,0.15)',padding:'40px 32px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:24,position:'relative',overflow:'hidden' }}>
            <div style={{ position:'absolute',top:-60,right:-60,width:160,height:160,borderRadius:'50%',background:'radial-gradient(circle,rgba(224,123,57,0.15) 0%,transparent 70%)' }} />
            <div style={{ position:'absolute',bottom:-40,left:-40,width:120,height:120,borderRadius:'50%',background:'radial-gradient(circle,rgba(224,123,57,0.1) 0%,transparent 70%)' }} />
            <div style={{ fontFamily:SERIF,fontSize:72,fontWeight:400,color:'#E07B39',lineHeight:1,opacity:0.9 }}>5</div>
            <div style={{ fontFamily:SERIF,fontSize:22,color:'white',textAlign:'center',lineHeight:1.3 }}>Simple steps.<br/>Zero complexity.</div>
            <div style={{ width:48,height:2,background:'#E07B39',borderRadius:1,opacity:0.6 }} />
            <div style={{ fontSize:14,color:'rgba(255,255,255,0.45)',textAlign:'center',lineHeight:1.7 }}>From request to delivery, every sprint is AI-scoped, talent-matched, and quality-checked.</div>
          </div>

          <p style={{ textAlign:'center',color:'rgba(255,255,255,0.5)',fontSize:15,lineHeight:1.7,maxWidth:780,margin:'56px auto 0' }}>Whether you need research, analysis, content, or technical builds — Sprint-Terns™ deploy in hours, not weeks. Every sprint is scoped, managed, and delivered with AI precision.</p>
        </div>
      </section>


      {/* ── WHY NOW ── */}
      <section style={{ background:'#081A30',padding:'96px 24px',position:'relative',overflow:'hidden',borderTop:'1px solid rgba(255,255,255,0.06)' }}>
        {/* subtle bg glow */}
        <div style={{ position:'absolute',top:-120,right:-120,width:480,height:480,background:'radial-gradient(circle,rgba(224,123,57,0.1) 0%,transparent 70%)',pointerEvents:'none' }} />
        <div style={{ maxWidth:1020,margin:'0 auto',position:'relative',zIndex:1 }}>

          {/* Top eyebrow + headline */}
          <div style={{ textAlign:'center',marginBottom:64 }}>
            <div style={{ fontSize:'0.72rem',fontWeight:700,letterSpacing:'2px',textTransform:'uppercase',color:'#E07B39',marginBottom:16 }}>Why Now?</div>
            <h2 style={{ fontFamily:SERIF,fontSize:'clamp(2rem,3.8vw,3rem)',color:'white',marginBottom:20,lineHeight:1.2,fontWeight:400 }}>
              Built for forward-thinking employers<br /><em style={{ color:'#F08C4E' }}>done with broken internships.</em>
            </h2>
            <p style={{ fontSize:'1.05rem',color:'rgba(255,255,255,0.55)',maxWidth:600,margin:'0 auto',lineHeight:1.75 }}>
              No new tools. No added headcount. Scalable decentralized hiring solutions for any company.
            </p>
          </div>

          {/* Two-column: bullets + challenge */}
          <div className="hp-whynow-grid" style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:24,marginBottom:40,alignItems:'start' }}>

            {/* Left — 4 bullets */}
            <div style={{ background:'rgba(224,123,57,0.07)',border:'1px solid rgba(224,123,57,0.25)',borderRadius:18,padding:'36px 32px' }}>
              <div style={{ fontFamily:SERIF,fontSize:'1.2rem',color:'white',marginBottom:24,lineHeight:1.4 }}>For teams who value<br /><em style={{ color:'#F08C4E' }}>output over optics.</em></div>
              <div style={{ display:'flex',flexDirection:'column',gap:14 }}>
                {[
                  'Projects completed in weeks, not semesters',
                  'No HR lift or added headcount',
                  'AI-native talent, structured delivery',
                  'Transparent deliverables — not status updates',
                ].map(item => (
                  <div key={item} style={{ display:'flex',alignItems:'flex-start',gap:12 }}>
                    <div style={{ width:18,height:18,borderRadius:'50%',background:'rgba(224,123,57,0.2)',border:'1px solid rgba(224,123,57,0.5)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,marginTop:2 }}>
                      <span style={{ color:'#E07B39',fontSize:'0.6rem',fontWeight:800 }}>✓</span>
                    </div>
                    <span style={{ fontSize:'0.9rem',color:'rgba(255,255,255,0.8)',lineHeight:1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — challenge question */}
            <div style={{ display:'flex',flexDirection:'column',justifyContent:'center',padding:'36px 32px' }}>
              <h3 style={{ fontFamily:SERIF,fontSize:'clamp(1.4rem,2.5vw,2rem)',color:'white',lineHeight:1.35,marginBottom:24,fontWeight:400 }}>
                Built to handle the part where most work breaks.
              </h3>
              <div style={{ borderRadius:16,overflow:'hidden',border:'1px solid rgba(255,255,255,0.08)',background:'rgba(255,255,255,0.02)',width:'100%' }}>
                <div style={{ display:'flex',alignItems:'center',borderBottom:'1px solid rgba(255,255,255,0.1)',background:'rgba(255,255,255,0.03)' }}>
                  <div style={{ flex:1,padding:'14px 24px',fontSize:11,fontWeight:700,letterSpacing:'0.15em',textTransform:'uppercase',color:'rgba(255,255,255,0.3)' }}>Before</div>
                  <div style={{ width:36 }} />
                  <div style={{ flex:1,padding:'14px 24px',fontSize:11,fontWeight:700,letterSpacing:'0.15em',textTransform:'uppercase',color:'#E07B39',borderLeft:'2px solid #E07B39',background:'rgba(224,123,57,0.06)' }}>After</div>
                </div>
                {[['Messy','Handled'],['Ambiguous','Structured'],['Planned','Done'],['Slow + Chaos','Fast + reliable']].map(([b,a],i) => (
                  <div key={i} style={{ display:'flex',alignItems:'center',borderBottom:i<3?'1px solid rgba(255,255,255,0.06)':'none' }}>
                    <div style={{ flex:1,padding:'18px 24px',fontSize:16,color:'rgba(255,255,255,0.35)',fontWeight:400 }}>{b}</div>
                    <div style={{ width:36,display:'flex',alignItems:'center',justifyContent:'center' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#E07B39" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div style={{ flex:1,padding:'18px 24px',fontSize:16,color:'white',fontWeight:700,background:'rgba(224,123,57,0.06)',borderLeft:'2px solid #E07B39' }}>{a}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* The challenge statement */}
          <div style={{ background:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,255,255,0.07)',borderRadius:16,padding:'32px 40px',textAlign:'center',marginBottom:40 }}>
            <p style={{ fontSize:'1.1rem',color:'rgba(255,255,255,0.7)',lineHeight:1.8,marginBottom:8 }}>
              <em>...the challenge is the same...</em>
            </p>
            <p style={{ fontFamily:SERIF,fontSize:'clamp(1.2rem,2.5vw,1.6rem)',color:'white',lineHeight:1.4,marginBottom:8 }}>
              How do you get quality results from distributed work<br />without adding management overhead?
            </p>
            <p style={{ fontSize:'1rem',color:'#F08C4E',fontWeight:600,marginTop:16 }}>That's what Work Simplr solves.</p>
          </div>

          {/* CTA */}
          <div style={{ textAlign:'center' }}>
            <a href="/register?role=employer" style={{ display:'inline-block',padding:'16px 48px',background:'#E07B39',borderRadius:999,fontSize:'1.05rem',fontWeight:700,color:'white',textDecoration:'none',boxShadow:'0 8px 32px rgba(224,123,57,0.4)',letterSpacing:'0.3px' }}>
              Start a Sprint →
            </a>
          </div>

        </div>
      </section>


      <section style={{ background:'#0A2342',padding:'96px 24px' }}>
        <div style={{ maxWidth:860,margin:'0 auto' }}>
          <div style={{ fontSize:'0.72rem',fontWeight:700,letterSpacing:'2px',textTransform:'uppercase',color:'#E07B39',marginBottom:16,textAlign:'center' }}>Why Work Simplr</div>
          <h2 style={{ fontFamily:SERIF,fontSize:'clamp(2rem,3.8vw,2.9rem)',color:'white',marginBottom:16,lineHeight:1.2,textAlign:'center' }}>This is not staffing.<br /><em style={{ color:'#F08C4E' }}>It is execution.</em></h2>
          <p style={{ textAlign:'center',color:'rgba(255,255,255,0.45)',marginBottom:52,fontSize:'0.95rem' }}>Instead of hoping for the best, you get structured delivery every time.</p>
          <div className="hp-compare-grid" style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:20 }}>
            <div style={{ background:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:14,padding:'28px 24px' }}>
              <div style={{ fontSize:'0.72rem',fontWeight:700,letterSpacing:'1.5px',textTransform:'uppercase',color:'rgba(255,255,255,0.35)',marginBottom:16 }}>The old way</div>
              {['Hiring people','Managing freelancers','Guessing scope'].map(t => (
                <div key={t} style={{ display:'flex',alignItems:'center',gap:10,padding:'10px 0',borderBottom:'1px solid rgba(255,255,255,0.05)',fontSize:'0.875rem',color:'rgba(255,255,255,0.45)' }}>
                  <span style={{ color:'#EF4444' }}>✕</span> {t}
                </div>
              ))}
            </div>
            <div style={{ background:'rgba(224,123,57,0.06)',border:'1px solid rgba(224,123,57,0.2)',borderRadius:14,padding:'28px 24px' }}>
              <div style={{ fontSize:'0.72rem',fontWeight:700,letterSpacing:'1.5px',textTransform:'uppercase',color:'#E07B39',marginBottom:16 }}>The Sprint way</div>
              {['Structured work','Managed delivery','Predictable outcomes'].map(t => (
                <div key={t} style={{ display:'flex',alignItems:'center',gap:10,padding:'10px 0',borderBottom:'1px solid rgba(224,123,57,0.1)',fontSize:'0.875rem',color:'rgba(255,255,255,0.75)' }}>
                  <span style={{ color:'#22C55E' }}>✓</span> {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      <footer style={{ background:'#050F1C',borderTop:'1px solid rgba(255,255,255,0.06)',padding:'48px 24px 32px' }}>
        <div style={{ maxWidth:1080,margin:'0 auto' }}>
          <div className="cs-footer-grid" style={{ display:'grid',gridTemplateColumns:'1.5fr 1fr 1fr 1fr',gap:40,marginBottom:40 }}>
            <div>
              <div style={{ fontFamily:SERIF,fontSize:'1.2rem',color:'white',marginBottom:10 }}>Work<span style={{ color:'#E07B39' }}>Simplr</span></div>
              <p style={{ fontSize:'0.83rem',color:'rgba(255,255,255,0.35)',lineHeight:1.65,maxWidth:220 }}>AI-powered execution platform. We turn undefined work into delivered outcomes.</p>
            </div>
            {[
              { title:'Platform',links:[['#solution','SprintWork™'],['/case-studies','Case Studies'],['#how','How It Works'],['/register','Start a Sprint']] },
              { title:'Company',links:[['/about','About'],['/case-studies','Case Studies'],['/contact','Contact']] },
              { title:'Legal',links:[['/privacy-policy','Privacy Policy'],['/terms','Terms']] },
            ].map(col => (
              <div key={col.title}>
                <div style={{ fontSize:'0.72rem',fontWeight:700,letterSpacing:'1.5px',textTransform:'uppercase',color:'rgba(255,255,255,0.5)',marginBottom:16 }}>{col.title}</div>
                <div style={{ display:'flex',flexDirection:'column',gap:10 }}>
                  {col.links.map(([href,label]) => (
                    <a key={label} href={href} style={{ fontSize:'0.84rem',color:'rgba(255,255,255,0.35)',textDecoration:'none' }}>{label}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ borderTop:'1px solid rgba(255,255,255,0.06)',paddingTop:24,display:'flex',justifyContent:'space-between',alignItems:'center',fontSize:'0.78rem',color:'rgba(255,255,255,0.25)' }}>
            <span>© {new Date().getFullYear()} Work Simplr. All rights reserved.</span>
            <div style={{ display:'flex',gap:20 }}>
              <a href="https://www.linkedin.com/company/68873365/" style={{ color:'inherit',textDecoration:'none' }}>LinkedIn</a>
              <a href="https://www.facebook.com/worksimplrUS/" style={{ color:'inherit',textDecoration:'none' }}>Facebook</a>
              <a href="https://www.instagram.com/worksimplr/" style={{ color:'inherit',textDecoration:'none' }}>Instagram</a>
              <a href="https://x.com/worksimplr" style={{ color:'inherit',textDecoration:'none' }}>X</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

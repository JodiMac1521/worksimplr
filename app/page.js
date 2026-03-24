export default function Home() {
  const SERIF = "'DM Serif Display', serif";
  const useCases = [
    { icon: '🗂️', title: 'Data Cleanup & Structuring', desc: 'Messy databases, spreadsheets, and records — cleaned, labeled, and structured.' },
    { icon: '🧪', title: 'User Testing', desc: '10–200 users recruited and tested in weeks, not months.' },
    { icon: '📊', title: 'Market Research & Intelligence', desc: 'Competitive analysis, pricing research, and market mapping — delivered as a document.' },
    { icon: '🔄', title: 'CRM Cleanup & Enrichment', desc: 'Contacts verified, enriched, and ready to use.' },
    { icon: '🤖', title: 'AI Workflow Setup', desc: 'Prompts built, tools configured, workflows tested and handed off.' },
  ];
  const steps = [
    { num: '01', icon: (<svg width="52" height="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" style={{display:'block',margin:'0 auto'}}>
                  {/* card background */}
                  <rect x="4" y="2" width="44" height="48" rx="5" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="2"/>
                  {/* step lines */}
                  {[10,20,30,40].map((y,i) => (
                    <g key={y}>
                      <circle cx="14" cy={y+2} r="3" fill={i===0?"rgba(224,123,57,0.9)":"none"} stroke={i===0?"rgba(224,123,57,0.9)":"rgba(255,255,255,0.5)"} strokeWidth="1.5"/>
                      <line x1="21" y1={y+2} x2="42" y2={y+2} stroke={i<2?"rgba(255,255,255,0.8)":"rgba(255,255,255,0.35)"} strokeWidth={i===0?2:1.5}/>
                      {i>0&&i<3&&<line x1="21" y1={y+6} x2="36" y2={y+6} stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>}
                    </g>
                  ))}
                </svg>), title: 'Submit your work', desc: 'Describe what you need in plain language. No scope doc required.' },
    { num: '02', icon: '⚡', title: 'We scope it instantly', desc: 'AI classifies the work, defines deliverables, and prices it — in minutes.' },
    { num: '03', icon: (<svg width="60" height="44" viewBox="0 0 120 44" xmlns="http://www.w3.org/2000/svg" style={{display:'block',margin:'0 auto'}}>
                  {[0,1,2,3].map(i => (
                    <g key={i} transform={`translate(${i*28+6},0)`} fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="9" cy="8" r="6"/>
                      <path d="M0 28 C0 18 18 18 18 28"/>
                    </g>
                  ))}
                </svg>), title: 'AI-powered teams execute', desc: 'Vetted operators + AI tools work together on your project.' },
    { num: '04', icon: '✅', title: 'QA + delivery', desc: 'Every deliverable is reviewed before you receive it. No surprises.' },
  ];
  return (
    <>
      <nav style={{ position:'fixed',top:0,left:0,right:0,zIndex:100,background:'rgba(10,35,66,0.95)',backdropFilter:'blur(14px)',borderBottom:'1px solid rgba(224,123,57,0.2)',height:60,display:'flex',alignItems:'center' }}>
        <div style={{ maxWidth:1080,margin:'0 auto',padding:'0 24px',display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%' }}>
          <a href="/" style={{ textDecoration:'none',display:'flex',alignItems:'center' }}>
            <img src="/logo.png" alt="Work Simplr" style={{ height:52,width:'auto',display:'block' }} />
          </a>
          <div style={{ display:'flex',gap:28 }}>
            {[['#problem','Problem'],['#solution','Solution'],['#how','How It Works'],['#use-cases','Use Cases']].map(([h,l]) => (
              <a key={h} href={h} style={{ fontSize:'0.88rem',fontWeight:500,color:'rgba(255,255,255,0.55)',textDecoration:'none' }}>{l}</a>
            ))}
          </div>
          <div style={{ display:'flex',gap:10 }}>
            <a href="/login" style={{ padding:'8px 20px',border:'1px solid rgba(255,255,255,0.2)',borderRadius:999,fontSize:'0.875rem',color:'rgba(255,255,255,0.7)',textDecoration:'none' }}>Log in</a>
            <a href="/register" style={{ padding:'8px 20px',background:'#E07B39',borderRadius:999,fontSize:'0.875rem',color:'white',textDecoration:'none',fontWeight:600 }}>Start a Sprint</a>
          </div>
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
          <p style={{ fontSize:'1rem',color:'rgba(255,255,255,0.45)',lineHeight:1.7,marginBottom:44,maxWidth:560,margin:'0 auto 44px' }}>Work Simplr turns undefined work into clear, executable outcomes using AI + managed teams.</p>
          <div style={{ display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap' }}>
            <a href="/register" style={{ padding:'14px 36px',background:'#E07B39',borderRadius:999,fontSize:'1rem',fontWeight:600,color:'white',textDecoration:'none',boxShadow:'0 4px 24px rgba(224,123,57,0.4)' }}>Start a Sprint →</a>
            <a href="#how" style={{ padding:'14px 28px',border:'1px solid rgba(255,255,255,0.2)',borderRadius:999,fontSize:'1rem',color:'rgba(255,255,255,0.7)',textDecoration:'none' }}>See how it works</a>
          </div>
          <div style={{ display:'flex',justifyContent:'center',gap:40,marginTop:60,paddingTop:40,borderTop:'1px solid rgba(224,123,57,0.2)' }}>
            {[['5,000+','Projects Completed'],['98%','Completion Rate'],['2 weeks','Avg Sprint Time']].map(([n,l]) => (
              <div key={l} style={{ textAlign:'center' }}>
                <div style={{ fontFamily:SERIF,fontSize:'1.8rem',color:'#F08C4E',marginBottom:4 }}>{n}</div>
                <div style={{ fontSize:'0.78rem',color:'rgba(255,255,255,0.4)',letterSpacing:'0.5px' }}>{l}</div>
              </div>
            ))}
          </div>
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
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:18 }}>
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

          <div style={{ display:'flex',alignItems:'stretch',gap:0,paddingTop:24,marginBottom:40 }}>
            {[
              { num:'1', icon:(<svg width="88" height="52" viewBox="0 0 176 72" xmlns="http://www.w3.org/2000/svg" style={{display:'block',margin:'0 auto'}}>
                  {/* Box 1 — orange */}
                  <rect x="2" y="20" width="44" height="32" rx="6" fill="rgba(224,123,57,0.12)" stroke="rgba(224,123,57,0.9)" strokeWidth="2"/>
                  <line x1="11" y1="31" x2="37" y2="31" stroke="rgba(224,123,57,0.6)" strokeWidth="1.5"/>
                  <line x1="11" y1="38" x2="30" y2="38" stroke="rgba(224,123,57,0.35)" strokeWidth="1.2"/>
                  <line x1="11" y1="44" x2="33" y2="44" stroke="rgba(224,123,57,0.2)" strokeWidth="1"/>
                  {/* Arrow 1→2 */}
                  <line x1="46" y1="36" x2="64" y2="36" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8"/>
                  <polygon points="66,36 60,32 60,40" fill="rgba(255,255,255,0.6)"/>
                  {/* Box 2 — white */}
                  <rect x="66" y="20" width="44" height="32" rx="6" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2"/>
                  <line x1="75" y1="31" x2="101" y2="31" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
                  <line x1="75" y1="38" x2="94" y2="38" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2"/>
                  <line x1="75" y1="44" x2="97" y2="44" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                  {/* Arrow 2→3 */}
                  <line x1="110" y1="36" x2="128" y2="36" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8"/>
                  <polygon points="130,36 124,32 124,40" fill="rgba(255,255,255,0.6)"/>
                  {/* Box 3 — white */}
                  <rect x="130" y="20" width="44" height="32" rx="6" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2"/>
                  <line x1="139" y1="31" x2="165" y2="31" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
                  <line x1="139" y1="38" x2="158" y2="38" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2"/>
                  <line x1="139" y1="44" x2="161" y2="44" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                </svg>), title:'Structured Workflow', desc:"Each engagement is 'projectized' with a clear scope, milestones & tasks." },
              { num:'2', icon: (<svg width="60" height="44" viewBox="0 0 120 44" xmlns="http://www.w3.org/2000/svg" style={{display:'block',margin:'0 auto'}}>
                  {[0,1,2,3].map(i => (
                    <g key={i} transform={`translate(${i*28+6},0)`} fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="9" cy="8" r="6"/>
                      <path d="M0 28 C0 18 18 18 18 28"/>
                    </g>
                  ))}
                </svg>), title:'Execution plans', desc:'We onboard and distribute the work across 1–100 workers with QA built in.' },
              { num:'3', icon:'📦', title:'Delivered outcomes', desc:'You get the thing you asked for — not a status update and an invoice. In 28 days.' },
            ].map((item, i) => (
              <div key={item.num} style={{ display:'flex',alignItems:'center',flex:1 }}>
                <div style={{ flex:1,background:i===0?'#E07B39':'rgba(224,123,57,0.05)',border:'1px solid rgba(224,123,57,0.2)',borderRadius:16,padding:'36px 24px 28px',textAlign:'center',position:'relative',boxShadow:i===0?'0 8px 32px rgba(224,123,57,0.3)':'none' }}>
                  <div style={{ position:'absolute',top:-18,left:'50%',transform:'translateX(-50%)',background:i===0?'white':'#E07B39',color:i===0?'#E07B39':'white',width:32,height:32,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'0.78rem',fontWeight:800,boxShadow:'0 4px 12px rgba(224,123,57,0.5)' }}>{item.num}</div>
                  <div style={{ fontSize:'3.4rem',marginBottom:14,marginTop:8,lineHeight:1 }}>{item.icon}</div>
                  <div style={{ fontFamily:SERIF,fontSize:'1.1rem',color:'white',marginBottom:8,fontWeight:400 }}>{item.title}</div>
                  <div style={{ fontSize:'0.875rem',color:i===0?'rgba(255,255,255,0.85)':'rgba(255,255,255,0.55)',lineHeight:1.65 }}>{item.desc}</div>
                </div>
                {i < 2 && <div style={{ flexShrink:0,width:44,display:'flex',alignItems:'center',justifyContent:'center',color:'#E07B39',fontSize:'1.6rem' }}>→</div>}
              </div>
            ))}
          </div>

          <div style={{ display:'flex',alignItems:'center',justifyContent:'center',gap:8,marginBottom:48 }}>
            <div style={{ height:1,flex:1,background:'rgba(224,123,57,0.12)',borderRadius:2 }} />
            <div style={{ fontSize:'0.75rem',fontWeight:700,color:'#E07B39',letterSpacing:'1.5px',textTransform:'uppercase',padding:'6px 18px',border:'1px solid rgba(224,123,57,0.3)',borderRadius:999,background:'rgba(224,123,57,0.06)',whiteSpace:'nowrap' }}>⚡ 28-Day Sprint</div>
            <div style={{ height:1,flex:1,background:'rgba(224,123,57,0.12)',borderRadius:2 }} />
          </div>
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
          <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginBottom:40,maxWidth:780,margin:'0 auto 40px' }}>
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
          <div style={{ background:'rgba(224,123,57,0.06)',border:'1px solid rgba(224,123,57,0.2)',borderRadius:14,padding:'24px 28px' }}>
            <p style={{ fontSize:'1.05rem',color:'rgba(255,255,255,0.75)',lineHeight:1.7,fontStyle:'italic',textAlign:'center' }}>Teams need capacity. And for that, they need the work structured.</p>
          </div>
        </div>
      </section>

      <section id="how" style={{ background:'#0A2342',padding:'96px 24px',borderTop:'1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth:860,margin:'0 auto' }}>
          {/* Left-justified header */}

          {/* diamond divider */}
          <div style={{ display:'flex',alignItems:'center',gap:16,marginBottom:40 }}>
            <div style={{ flex:1,height:'1px',background:'linear-gradient(to right,transparent,rgba(255,255,255,0.08))' }} />
            <span style={{ color:'rgba(224,123,57,0.45)',fontSize:'0.5rem' }}>&#9670;</span>
            <div style={{ flex:1,height:'1px',background:'linear-gradient(to left,transparent,rgba(255,255,255,0.08))' }} />
          </div>
          <div style={{ display:'flex',alignItems:'center',gap:16,marginBottom:40 }}>
            <div style={{ flex:1,height:'1px',background:'linear-gradient(to right,transparent,rgba(255,255,255,0.08))' }} />
            <span style={{ color:'rgba(224,123,57,0.45)',fontSize:'0.5rem' }}>&#9670;</span>
            <div style={{ flex:1,height:'1px',background:'linear-gradient(to left,transparent,rgba(255,255,255,0.08))' }} />
          </div>
          <div style={{ fontSize:'0.72rem',fontWeight:700,letterSpacing:'2px',textTransform:'uppercase',color:'#E07B39',marginBottom:16,textAlign:'center' }}>How It Works</div>
          <h2 style={{ fontFamily:SERIF,fontSize:'clamp(2rem,3.8vw,2.9rem)',color:'white',marginBottom:12,lineHeight:1.2,textAlign:'center' }}>4 steps to delivered work.</h2>
          <p style={{ color:'rgba(255,255,255,0.45)',marginBottom:56,fontSize:'0.95rem',textAlign:'center' }}>Submit. Scope. Execute. Deliver.</p>

          {/* Visual flow diagram — horizontal node chain */}
          <div style={{ overflowX:'auto', paddingBottom:8, paddingTop:24 }}>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 36px 1fr 36px 1fr 36px 1fr', minWidth:600, alignItems:'stretch' }}>

              {steps.map((step, i) => (
                <>
                  {/* Node card */}
                  <div key={step.num} style={{
                    background: i === 0 ? '#E07B39' : i === steps.length-1 ? '#0A2342' : 'rgba(255,255,255,0.04)',
                    border: i === 0 ? '2px solid #E07B39' : i === steps.length-1 ? '2px solid #E07B39' : '1.5px solid rgba(255,255,255,0.12)',
                    borderRadius:14,
                    padding:'36px 20px 28px',
                    textAlign:'center',
                    position:'relative',
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    boxShadow: i === 0 ? '0 8px 32px rgba(224,123,57,0.35)' : i === steps.length-1 ? '0 4px 20px rgba(224,123,57,0.2)' : 'none',
                  }}>
                    {/* Step number */}
                    <div style={{
                      position:'absolute', top:-14, left:'50%', transform:'translateX(-50%)',
                      background: i === 0 ? 'white' : '#E07B39',
                      color: i === 0 ? '#E07B39' : 'white',
                      width:28, height:28, borderRadius:'50%',
                      display:'flex', alignItems:'center', justifyContent:'center',
                      fontSize:'0.72rem', fontWeight:800,
                      boxShadow:'0 2px 8px rgba(0,0,0,0.3)',
                    }}>{i+1}</div>
                    {/* Icon */}
                    <div style={{ fontSize:'2.2rem', marginBottom:12, marginTop:6 }}>{step.icon}</div>
                    {/* Title */}
                    <div style={{ fontWeight:700, color:'white', fontSize:'0.9rem', marginBottom:8, lineHeight:1.3 }}>{step.title}</div>
                    {/* Desc */}
                    <div style={{ fontSize:'0.78rem', color: i === 0 ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.5)', lineHeight:1.6 }}>{step.desc}</div>
                  </div>

                  {/* Arrow — not after last card */}
                  {i < steps.length - 1 && (
                    <div key={`a${i}`} style={{ display:'flex', alignItems:'center', justifyContent:'center', color:'#E07B39', fontSize:'1.4rem' }}>→</div>
                  )}
                </>
              ))}
            </div>
          </div>

          {/* ── HOW THE ENGINE RUNS ── */}
          <div style={{ marginTop:56, background:'rgba(255,255,255,0.02)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:20, padding:'36px 28px' }}>
            <div style={{ fontSize:'0.72rem',fontWeight:700,letterSpacing:'2px',textTransform:'uppercase',color:'rgba(255,255,255,0.35)',marginBottom:32,textAlign:'center' }}>How the engine runs</div>

            {/* SVG flow diagram */}
            <div style={{ overflowX:'auto' }}>
              <svg width="100%" viewBox="0 0 660 240" xmlns="http://www.w3.org/2000/svg" style={{ display:'block', minWidth:520, maxWidth:700, margin:'0 auto' }}>
                <defs>
                  <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L8,3 z" fill="#E07B39"/>
                  </marker>
                </defs>

                {/* ROW 1 */}
                <rect x="20" y="30" width="160" height="52" rx="10" fill="#16a34a" stroke="#22c55e" strokeWidth="1.5"/>
                <text x="100" y="51" textAnchor="middle" fontSize="12" fontWeight="600" fill="rgba(255,255,255,0.9)" fontFamily="DM Sans,sans-serif">📥 Project Intake</text>
                <text x="100" y="68" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.6)" fontFamily="DM Sans,sans-serif">Client submits work</text>

                <path d="M180 56 L225 56" stroke="#E07B39" strokeWidth="2" markerEnd="url(#arr)"/>

                <rect x="225" y="18" width="210" height="76" rx="12" fill="white"/>
                <text x="330" y="52" textAnchor="middle" fontSize="16" fontWeight="800" fill="#0A2342" fontFamily="DM Sans,sans-serif">SprintWork™</text>
                <text x="330" y="70" textAnchor="middle" fontSize="10" fill="#0A2342" fontFamily="DM Sans,sans-serif">AI scoping + project structure</text>

                <path d="M435 56 L480 56" stroke="#E07B39" strokeWidth="2" markerEnd="url(#arr)"/>

                <rect x="480" y="30" width="160" height="52" rx="10" fill="#E07B39"/>
                <text x="560" y="51" textAnchor="middle" fontSize="12" fontWeight="700" fill="white" fontFamily="DM Sans,sans-serif">🎯 TalentOS</text>
                <text x="560" y="68" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.8)" fontFamily="DM Sans,sans-serif">Worker matching</text>

                {/* DOTTED LINES: Row 1 → Row 2 */}
                <path d="M100 82 L100 140" stroke="#E07B39" strokeWidth="1.5" strokeDasharray="5,4" fill="none" opacity="0.6"/>
                <path d="M330 94 L330 140" stroke="#E07B39" strokeWidth="1.5" strokeDasharray="5,4" fill="none" opacity="0.6"/>
                <path d="M560 82 L560 140" stroke="#E07B39" strokeWidth="1.5" strokeDasharray="5,4" fill="none" opacity="0.6"/>

                {/* ROW 2 */}
                <rect x="20" y="140" width="190" height="44" rx="9" fill="rgba(224,123,57,0.08)" stroke="rgba(224,123,57,0.4)" strokeWidth="1.5"/>
                <text x="115" y="162" textAnchor="middle" fontSize="12" fontWeight="600" fill="rgba(255,255,255,0.85)" fontFamily="DM Sans,sans-serif">🧩 Talent Matching</text>

                <rect x="235" y="140" width="190" height="44" rx="9" fill="rgba(224,123,57,0.08)" stroke="rgba(224,123,57,0.4)" strokeWidth="1.5"/>
                <text x="330" y="162" textAnchor="middle" fontSize="12" fontWeight="600" fill="rgba(255,255,255,0.85)" fontFamily="DM Sans,sans-serif">⚙️ Workflow Automation</text>

                <rect x="450" y="140" width="190" height="44" rx="9" fill="rgba(224,123,57,0.08)" stroke="rgba(224,123,57,0.4)" strokeWidth="1.5"/>
                <text x="545" y="162" textAnchor="middle" fontSize="12" fontWeight="600" fill="rgba(255,255,255,0.85)" fontFamily="DM Sans,sans-serif">📊 Performance Analytics</text>

                {/* Arrow down to dashboard */}
                <path d="M330 184 L330 214" stroke="#E07B39" strokeWidth="2" markerEnd="url(#arr)" opacity="0.7"/>
              </svg>
            </div>

            {/* Dashboard in MacBook frame — space gray, slight angle */}
            <div style={{ maxWidth:620,margin:'24px auto 0',position:'relative',perspective:'1200px' }}>
              <div style={{ transform:'rotateX(4deg) rotateY(-3deg)',transformStyle:'preserve-3d',transition:'transform 0.3s ease' }}>
              {/* MacBook SVG shell — space gray palette */}
              <svg viewBox="0 0 620 420" xmlns="http://www.w3.org/2000/svg" style={{ display:'block',width:'100%',filter:'drop-shadow(0 24px 48px rgba(0,0,0,0.55)) drop-shadow(0 8px 16px rgba(0,0,0,0.4))' }}>
                {/* Screen bezel — silver */}
                <rect x="30" y="8" width="560" height="344" rx="14" fill="#b0b0b5" stroke="#c8c8cc" strokeWidth="1.5"/>
                {/* Bezel inner lip */}
                <rect x="36" y="14" width="548" height="332" rx="10" fill="#888890"/>
                {/* Screen display area */}
                <rect x="42" y="20" width="536" height="320" rx="7" fill="#0a0e1a"/>
                {/* Camera notch */}
                <circle cx="310" cy="15" r="3.5" fill="#7a7a82"/>
                <circle cx="310" cy="15" r="1.5" fill="#555560"/>
                {/* Hinge bar */}
                <rect x="20" y="352" width="580" height="10" rx="3" fill="#a0a0a8"/>
                {/* Base — silver */}
                <rect x="0" y="362" width="620" height="24" rx="4" fill="#b8b8be" stroke="#c8c8cc" strokeWidth="1"/>
                {/* Base top edge highlight */}
                <rect x="0" y="362" width="620" height="2" rx="1" fill="rgba(255,255,255,0.35)"/>
                {/* Hinge notch */}
                <rect x="232" y="352" width="156" height="10" rx="5" fill="#909098"/>
                {/* Trackpad */}
                <rect x="242" y="370" width="136" height="12" rx="4" fill="#a8a8b0" stroke="#bcbcc4" strokeWidth="0.75"/>
                {/* Screen top edge glare */}
                <rect x="42" y="20" width="536" height="1.5" rx="0.75" fill="rgba(255,255,255,0.18)"/>
                {/* Left edge subtle light */}
                <rect x="42" y="20" width="1.5" height="320" rx="0.75" fill="rgba(255,255,255,0.1)"/>
                {/* Apple logo hint */}
                <rect x="282" y="383" width="56" height="3" rx="1.5" fill="rgba(255,255,255,0.15)"/>
              </svg>

              {/* Dashboard content overlaid on screen */}
              <div style={{ position:'absolute', top:'5%', left:'7%', right:'7%', bottom:'22%', borderRadius:6, overflow:'hidden', background:'#0A1929' }}>
                {/* Toolbar */}
                <div style={{ background:'rgba(255,255,255,0.04)',padding:'7px 14px',display:'flex',alignItems:'center',gap:6,borderBottom:'1px solid rgba(255,255,255,0.07)' }}>
                  <div style={{ display:'flex',gap:5 }}>
                    <div style={{ width:9,height:9,borderRadius:'50%',background:'#ff5f57' }} />
                    <div style={{ width:9,height:9,borderRadius:'50%',background:'#febc2e' }} />
                    <div style={{ width:9,height:9,borderRadius:'50%',background:'#28c840' }} />
                  </div>
                  <span style={{ fontSize:'0.65rem',color:'rgba(255,255,255,0.35)',fontWeight:600,letterSpacing:'1px',textTransform:'uppercase',marginLeft:8 }}>Dashboard — Sprint Progress</span>
                </div>
                {/* 4 stat cards */}
                <div style={{ padding:'14px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,height:'calc(100% - 32px)',boxSizing:'border-box' }}>
                  {[
                    { label:'Tasks Complete', val:'48 / 60', bar:0.8, color:'#E07B39' },
                    { label:'QA Passed', val:'98%', bar:0.98, color:'#22C55E' },
                    { label:'Days Remaining', val:'9 of 28', bar:0.32, color:'#6B8FD4' },
                    { label:'Team Active', val:'12 workers', bar:1, color:'#E07B39' },
                  ].map(item => (
                    <div key={item.label} style={{ background:'rgba(255,255,255,0.04)',borderRadius:8,padding:'10px 12px',border:'1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ fontSize:'0.6rem',color:'rgba(255,255,255,0.4)',marginBottom:4,letterSpacing:'0.5px',textTransform:'uppercase' }}>{item.label}</div>
                      <div style={{ fontSize:'1rem',fontWeight:700,color:'white',marginBottom:8 }}>{item.val}</div>
                      <div style={{ height:4,background:'rgba(255,255,255,0.07)',borderRadius:2,overflow:'hidden' }}>
                        <div style={{ height:'100%',width:`${item.bar*100}%`,background:item.color,borderRadius:2 }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              </div>
            </div>
          </div>

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

          {/* Two-column: For Employers + The Issue */}
          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:20,marginBottom:40 }}>

            {/* For Forward-Thinking Employers */}
            <div style={{ background:'rgba(224,123,57,0.07)',border:'1px solid rgba(224,123,57,0.25)',borderRadius:18,padding:'36px 32px' }}>
              <div style={{ fontSize:'0.72rem',fontWeight:700,letterSpacing:'2px',textTransform:'uppercase',color:'#E07B39',marginBottom:16 }}>For Forward-Thinking Employers</div>
              <div style={{ fontFamily:SERIF,fontSize:'1.1rem',color:'white',marginBottom:24,lineHeight:1.4 }}>Who Value Output Over Optics</div>
              <div style={{ display:'flex',flexDirection:'column',gap:12 }}>
                {[
                  'Projects completed in weeks, not semesters',
                  'No HR lift',
                  'AI-native talent',
                  'Transparent deliverables',
                ].map(item => (
                  <div key={item} style={{ display:'flex',alignItems:'flex-start',gap:12 }}>
                    <div style={{ width:20,height:20,borderRadius:'50%',background:'rgba(224,123,57,0.2)',border:'1px solid rgba(224,123,57,0.5)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,marginTop:1 }}>
                      <span style={{ color:'#E07B39',fontSize:'0.65rem',fontWeight:800 }}>✓</span>
                    </div>
                    <span style={{ fontSize:'0.925rem',color:'rgba(255,255,255,0.8)',lineHeight:1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* The Overarching Issues */}
            <div style={{ background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:18,padding:'36px 32px' }}>
              <div style={{ fontSize:'0.72rem',fontWeight:700,letterSpacing:'2px',textTransform:'uppercase',color:'rgba(255,255,255,0.4)',marginBottom:16 }}>The Overarching Issue</div>
              <p style={{ fontSize:'0.95rem',color:'rgba(255,255,255,0.75)',lineHeight:1.75,marginBottom:24 }}>
                Companies don't just need "help" — they need work that's been <strong style={{ color:'white' }}>properly scoped, clearly structured, and consistently executed.</strong>
              </p>
              <div style={{ borderTop:'1px solid rgba(255,255,255,0.07)',paddingTop:20 }}>
                <div style={{ fontSize:'0.78rem',fontWeight:700,letterSpacing:'1.5px',textTransform:'uppercase',color:'rgba(255,255,255,0.35)',marginBottom:14 }}>SprintWork™ Services</div>
                <div style={{ fontSize:'0.875rem',color:'rgba(255,255,255,0.5)',marginBottom:12,fontStyle:'italic' }}>Whether you're:</div>
                <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:8 }}>
                  {[
                    'Validating a product concept',
                    'Testing user experience',
                    'Collecting research data',
                    'Building technical prototypes',
                    'Managing campus programs',
                    'Finding specialized talent',
                  ].map(item => (
                    <div key={item} style={{ display:'flex',alignItems:'flex-start',gap:8 }}>
                      <span style={{ color:'#E07B39',fontSize:'0.7rem',marginTop:3,flexShrink:0 }}>▸</span>
                      <span style={{ fontSize:'0.82rem',color:'rgba(255,255,255,0.65)',lineHeight:1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
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
            <a href="/register" style={{ display:'inline-block',padding:'16px 48px',background:'#E07B39',borderRadius:999,fontSize:'1.05rem',fontWeight:700,color:'white',textDecoration:'none',boxShadow:'0 8px 32px rgba(224,123,57,0.4)',letterSpacing:'0.3px' }}>
              Start a Sprint →
            </a>
          </div>

        </div>
      </section>

      <section id="use-cases" style={{ background:'#081A30',padding:'96px 24px',borderTop:'1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth:860,margin:'0 auto' }}>
          <div style={{ fontSize:'0.72rem',fontWeight:700,letterSpacing:'2px',textTransform:'uppercase',color:'#E07B39',marginBottom:16,textAlign:'center' }}>Use Cases</div>
          <h2 style={{ fontFamily:SERIF,fontSize:'clamp(2rem,3.8vw,2.9rem)',color:'white',marginBottom:48,lineHeight:1.2,textAlign:'center' }}>Work we execute every week.</h2>
          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:16 }}>
            {useCases.map(uc => (
              <div key={uc.title} style={{ background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:14,padding:'24px 20px' }}>
                <div style={{ fontSize:'1.8rem',marginBottom:12 }}>{uc.icon}</div>
                <div style={{ fontWeight:700,color:'white',marginBottom:6,fontSize:'0.9rem' }}>{uc.title}</div>
                <div style={{ fontSize:'0.82rem',color:'rgba(255,255,255,0.45)',lineHeight:1.6 }}>{uc.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background:'#0A2342',padding:'96px 24px' }}>
        <div style={{ maxWidth:860,margin:'0 auto' }}>
          <div style={{ fontSize:'0.72rem',fontWeight:700,letterSpacing:'2px',textTransform:'uppercase',color:'#E07B39',marginBottom:16,textAlign:'center' }}>Why Work Simplr</div>
          <h2 style={{ fontFamily:SERIF,fontSize:'clamp(2rem,3.8vw,2.9rem)',color:'white',marginBottom:16,lineHeight:1.2,textAlign:'center' }}>This is not staffing.<br /><em style={{ color:'#F08C4E' }}>It is execution.</em></h2>
          <p style={{ textAlign:'center',color:'rgba(255,255,255,0.45)',marginBottom:52,fontSize:'0.95rem' }}>Instead of hoping for the best, you get structured delivery every time.</p>
          <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:20 }}>
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

      <section style={{ background:'#081A30',padding:'96px 24px' }}>
        <div style={{ maxWidth:860,margin:'0 auto',textAlign:'center' }}>
          <div style={{ fontSize:'0.72rem',fontWeight:700,letterSpacing:'2px',textTransform:'uppercase',color:'#E07B39',marginBottom:16,textAlign:'center' }}>AI + Human</div>
          <h2 style={{ fontFamily:SERIF,fontSize:'clamp(2rem,3.8vw,2.9rem)',color:'white',marginBottom:16,lineHeight:1.2 }}>AI does not execute.<br /><em style={{ color:'#F08C4E' }}>We do.</em></h2>
          <p style={{ color:'rgba(255,255,255,0.5)',maxWidth:520,margin:'0 auto 48px',lineHeight:1.7,fontSize:'0.95rem' }}>We combine AI + human operators + structured workflows so work actually gets done.</p>
          <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16 }}>
            {[
              { icon:'🤖',label:'AI Scoping',desc:'Classifies and prices your work in minutes' },
              { icon:'👥',label:'Human Operators',desc:'Vetted teams who actually execute the work' },
              { icon:'🔁',label:'Structured Workflows',desc:'Every step defined, tracked, and delivered' },
            ].map(item => (
              <div key={item.label} style={{ background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:14,padding:'28px 20px' }}>
                <div style={{ fontSize:'2rem',marginBottom:12 }}>{item.icon}</div>
                <div style={{ fontWeight:700,color:'white',marginBottom:6,fontSize:'0.9rem' }}>{item.label}</div>
                <div style={{ fontSize:'0.82rem',color:'rgba(255,255,255,0.45)',lineHeight:1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background:'linear-gradient(135deg,#0A2342 0%,#1a3560 100%)',padding:'100px 24px',textAlign:'center',position:'relative',overflow:'hidden' }}>
        <div style={{ position:'absolute',inset:0,background:'radial-gradient(ellipse at center,rgba(224,123,57,0.15) 0%,transparent 65%)',pointerEvents:'none' }} />
        <div style={{ position:'relative',zIndex:1,maxWidth:640,margin:'0 auto' }}>
          <h2 style={{ fontFamily:SERIF,fontSize:'clamp(2rem,4vw,3rem)',color:'white',marginBottom:16,lineHeight:1.15 }}>Stop managing work.<br /><em style={{ color:'#F08C4E' }}>Start shipping it.</em></h2>
          <p style={{ color:'rgba(255,255,255,0.5)',marginBottom:36,fontSize:'1rem',lineHeight:1.7 }}>Join the companies already using SprintWork™ to deliver outcomes, not headcount.</p>
          <a href="/register" style={{ display:'inline-block',padding:'16px 44px',background:'#E07B39',borderRadius:999,fontSize:'1.05rem',fontWeight:700,color:'white',textDecoration:'none',boxShadow:'0 8px 32px rgba(224,123,57,0.45)' }}>Start a Sprint →</a>
        </div>
      </section>

      <footer style={{ background:'#050F1C',borderTop:'1px solid rgba(255,255,255,0.06)',padding:'48px 24px 32px' }}>
        <div style={{ maxWidth:1080,margin:'0 auto' }}>
          <div style={{ display:'grid',gridTemplateColumns:'1.5fr 1fr 1fr 1fr',gap:40,marginBottom:40 }}>
            <div>
              <div style={{ fontFamily:SERIF,fontSize:'1.2rem',color:'white',marginBottom:10 }}>Work<span style={{ color:'#E07B39' }}>Simplr</span></div>
              <p style={{ fontSize:'0.83rem',color:'rgba(255,255,255,0.35)',lineHeight:1.65,maxWidth:220 }}>AI-powered execution platform. We turn undefined work into delivered outcomes.</p>
            </div>
            {[
              { title:'Platform',links:[['#solution','SprintWork™'],['#use-cases','Use Cases'],['#how','How It Works'],['/register','Start a Sprint']] },
              { title:'Company',links:[['/about','About'],['/blog','Blog'],['/contact','Contact']] },
              { title:'Legal',links:[['/privacy','Privacy'],['/terms','Terms'],['/cookies','Cookies']] },
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
              <a href="https://twitter.com/worksimplr" style={{ color:'inherit',textDecoration:'none' }}>Twitter</a>
              <a href="https://linkedin.com/company/worksimplr" style={{ color:'inherit',textDecoration:'none' }}>LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

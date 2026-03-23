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
    { num: '01', icon: '📥', title: 'Submit your work', desc: 'Describe what you need in plain language. No scope doc required.' },
    { num: '02', icon: '⚡', title: 'We scope it instantly', desc: 'AI classifies the work, defines deliverables, and prices it — in minutes.' },
    { num: '03', icon: '🤝', title: 'AI-powered teams execute', desc: 'Vetted operators + AI tools work together on your project.' },
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
          <div style={{ display:'flex',justifyContent:'center',gap:40,marginTop:60,paddingTop:40,borderTop:'1px solid rgba(255,255,255,0.08)' }}>
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
      <section style={{ background:'#060F1C', padding:'72px 24px 80px', borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
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

      <section id="solution" style={{ background:'#0A2342',padding:'96px 24px' }}>
        <div style={{ maxWidth:1060,margin:'0 auto' }}>
          <div style={{ fontSize:'0.72rem',fontWeight:700,letterSpacing:'2px',textTransform:'uppercase',color:'#E07B39',marginBottom:16,textAlign:'center' }}>The Solution</div>
          <h2 style={{ fontFamily:SERIF,fontSize:'clamp(1.8rem,3.5vw,2.6rem)',color:'white',marginBottom:16,lineHeight:1.2,textAlign:'center' }}>Welcome to <em style={{ color:'#F08C4E' }}>SprintWork™</em></h2>
          <p style={{ fontSize:'1rem',color:'rgba(255,255,255,0.5)',marginBottom:56,lineHeight:1.7,textAlign:'center' }}>We take messy, undefined work and turn it into real outcomes. In weeks, not months.</p>

          {/* Process steps with numbers + arrows */}
          <div style={{ display:'grid',gridTemplateColumns:'1fr auto 1fr auto 1fr',gap:0,alignItems:'start' }}>
            {[
              {
                num:'01',
                icon:'🗂️',
                title:'Structured Workflow',
                desc:"Each engagement is 'projectized' with a clear scope, milestones & tasks.",
              },
              {
                num:'02',
                icon:'🤝',
                title:'Execution plans',
                desc:'We onboard and distribute the work across 1–100 workers with QA built in.',
              },
              {
                num:'03',
                icon:'📦',
                title:'Delivered outcomes',
                desc:'You get the thing you asked for — not a status update and an invoice. In 28 days.',
              },
            ].reduce((acc, item, i) => {
              // Card
              acc.push(
                <div key={item.num} style={{
                  background:'rgba(224,123,57,0.05)',
                  border:'1px solid rgba(224,123,57,0.2)',
                  borderRadius:16,
                  padding:'32px 28px',
                  position:'relative',
                }}>
                  {/* Step number badge */}
                  <div style={{
                    position:'absolute',top:-16,left:28,
                    width:32,height:32,borderRadius:'50%',
                    background:'#E07B39',
                    display:'flex',alignItems:'center',justifyContent:'center',
                    fontSize:'0.78rem',fontWeight:800,color:'white',
                    boxShadow:'0 4px 12px rgba(224,123,57,0.5)',
                  }}>{item.num}</div>

                  {/* Icon */}
                  <div style={{ fontSize:'3.4rem',marginBottom:20,marginTop:8 }}>{item.icon}</div>

                  {/* Title */}
                  <div style={{ fontFamily:SERIF,fontSize:'1.2rem',color:'white',marginBottom:10,fontWeight:400 }}>{item.title}</div>

                  {/* Description */}
                  <div style={{ fontSize:'0.9rem',color:'rgba(255,255,255,0.55)',lineHeight:1.7 }}>{item.desc}</div>
                </div>
              );
              // Arrow between cards (not after last)
              if (i < 2) {
                acc.push(
                  <div key={`arrow-${i}`} style={{
                    display:'flex',alignItems:'center',justifyContent:'center',
                    paddingTop:60,
                    color:'#E07B39',
                    fontSize:'1.8rem',
                    opacity:0.7,
                  }}>→</div>
                );
              }
              return acc;
            }, [])}
          </div>

          {/* 28-Day Sprint badge below diagram */}
          <div style={{ marginTop:32,display:'flex',alignItems:'center',justifyContent:'center',gap:8 }}>
            <div style={{ height:1,flex:1,background:'rgba(224,123,57,0.12)',borderRadius:2 }} />
            <div style={{ fontSize:'0.75rem',fontWeight:700,color:'#E07B39',letterSpacing:'1.5px',textTransform:'uppercase',padding:'6px 18px',border:'1px solid rgba(224,123,57,0.3)',borderRadius:999,background:'rgba(224,123,57,0.06)',whiteSpace:'nowrap' }}>⚡ 28-Day Sprint</div>
            <div style={{ height:1,flex:1,background:'rgba(224,123,57,0.12)',borderRadius:2 }} />
          </div>

          {/* Flow diagram */}
          <div style={{ marginTop:48,background:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,255,255,0.07)',borderRadius:20,padding:'40px 32px' }}>
            <div style={{ fontSize:'0.72rem',fontWeight:700,letterSpacing:'2px',textTransform:'uppercase',color:'rgba(255,255,255,0.35)',marginBottom:32,textAlign:'center' }}>How the engine runs</div>

            {/* Top row: intake → SprintWork → TalentOS */}
            <div style={{ display:'flex',alignItems:'center',justifyContent:'center',gap:0,marginBottom:24,flexWrap:'wrap' }}>
              {/* Project Intake */}
              <div style={{ background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:10,padding:'12px 22px',fontSize:'0.85rem',fontWeight:600,color:'rgba(255,255,255,0.8)',whiteSpace:'nowrap' }}>
                📥 Project Intake
              </div>
              <div style={{ color:'#E07B39',fontSize:'1.4rem',margin:'0 10px',lineHeight:1 }}>→</div>

              {/* SprintWork center */}
              <div style={{ background:'white',borderRadius:12,padding:'16px 28px',fontSize:'1rem',fontWeight:800,color:'#0A2342',whiteSpace:'nowrap',boxShadow:'0 4px 24px rgba(0,0,0,0.3)' }}>
                SprintWork™
              </div>
              <div style={{ color:'#E07B39',fontSize:'1.4rem',margin:'0 10px',lineHeight:1 }}>→</div>

              {/* TalentOS */}
              <div style={{ background:'#E07B39',borderRadius:10,padding:'12px 22px',fontSize:'0.85rem',fontWeight:700,color:'white',whiteSpace:'nowrap' }}>
                🎯 TalentOS
              </div>
            </div>

            {/* Middle row: 3 engine nodes */}
            <div style={{ display:'flex',justifyContent:'center',gap:12,marginBottom:24,flexWrap:'wrap' }}>
              {[
                { icon:'🧩', label:'Talent Matching' },
                { icon:'⚙️', label:'Workflow Automation' },
                { icon:'📊', label:'Performance Analytics' },
              ].map(node => (
                <div key={node.label} style={{ background:'rgba(224,123,57,0.08)',border:'1px solid rgba(224,123,57,0.3)',borderRadius:10,padding:'10px 20px',fontSize:'0.82rem',fontWeight:600,color:'rgba(255,255,255,0.75)',display:'flex',alignItems:'center',gap:8,whiteSpace:'nowrap' }}>
                  <span>{node.icon}</span>{node.label}
                </div>
              ))}
            </div>

            {/* Arrow down */}
            <div style={{ textAlign:'center',color:'rgba(224,123,57,0.5)',fontSize:'1.4rem',marginBottom:16,lineHeight:1 }}>↓</div>

            {/* Dashboard output */}
            <div style={{ maxWidth:480,margin:'0 auto',background:'#0A1929',border:'1px solid rgba(255,255,255,0.1)',borderRadius:12,overflow:'hidden' }}>
              {/* Mock toolbar */}
              <div style={{ background:'rgba(255,255,255,0.05)',padding:'8px 16px',display:'flex',alignItems:'center',gap:8,borderBottom:'1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ width:8,height:8,borderRadius:'50%',background:'rgba(255,255,255,0.2)' }} />
                <span style={{ fontSize:'0.72rem',color:'rgba(255,255,255,0.4)',fontWeight:600,letterSpacing:'1px',textTransform:'uppercase' }}>Dashboard — Sprint Progress</span>
              </div>
              <div style={{ padding:'20px 16px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:10 }}>
                {[
                  { label:'Tasks Complete', val:'48 / 60', bar:0.8, color:'#E07B39' },
                  { label:'QA Passed', val:'98', bar:0.93, color:'#22C55E' },
                  { label:'Days Remaining', val:'9 of 28', bar:0.32, color:'#6B8FD4' },
                  { label:'Team Active', val:'12 workers', bar:1, color:'#E07B39' },
                ].map(item => (
                  <div key={item.label} style={{ background:'rgba(255,255,255,0.03)',borderRadius:8,padding:'10px 12px' }}>
                    <div style={{ fontSize:'0.68rem',color:'rgba(255,255,255,0.4)',marginBottom:4,letterSpacing:'0.5px',textTransform:'uppercase' }}>{item.label}</div>
                    <div style={{ fontSize:'0.9rem',fontWeight:700,color:'white',marginBottom:6 }}>{item.val}</div>
                    <div style={{ height:4,background:'rgba(255,255,255,0.07)',borderRadius:2,overflow:'hidden' }}>
                      <div style={{ height:'100%',width:`${item.bar*100}%`,background:item.color,borderRadius:2 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" style={{ background:'#081A30',padding:'96px 24px' }}>
        <div style={{ maxWidth:860,margin:'0 auto' }}>
          <div style={{ fontSize:'0.72rem',fontWeight:700,letterSpacing:'2px',textTransform:'uppercase',color:'#E07B39',marginBottom:16,textAlign:'center' }}>The Problem</div>
          <h2 style={{ fontFamily:SERIF,fontSize:'clamp(1.8rem,3.5vw,2.6rem)',color:'white',marginBottom:20,lineHeight:1.2,textAlign:'center' }}>Most work doesn't fail<br />because of talent.</h2>
          <p style={{ fontSize:'1rem',color:'rgba(255,255,255,0.5)',marginBottom:40,lineHeight:1.7,maxWidth:520,textAlign:'center',margin:'0 auto 40px' }}>It fails because it's poorly defined before anyone starts.</p>
          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:16,marginBottom:40 }}>
            {[
              { icon:'🌫️',label:'Unclear',desc:"No one can agree on what done looks like." },
              { icon:'📐',label:'Poorly scoped',desc:'Requirements shift. Time blows out. Budget disappears.' },
              { icon:'🚫',label:'Impossible to execute',desc:'As written, the work cannot actually be completed.' },
            ].map(item => (
              <div key={item.label} style={{ background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:14,padding:'24px 20px' }}>
                <div style={{ fontSize:'1.8rem',marginBottom:12 }}>{item.icon}</div>
                <div style={{ fontWeight:700,color:'white',marginBottom:6,fontSize:'0.95rem' }}>{item.label}</div>
                <div style={{ fontSize:'0.85rem',color:'rgba(255,255,255,0.45)',lineHeight:1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ background:'rgba(224,123,57,0.06)',border:'1px solid rgba(224,123,57,0.2)',borderRadius:14,padding:'24px 28px' }}>
            <p style={{ fontSize:'1.05rem',color:'rgba(255,255,255,0.75)',lineHeight:1.7,fontStyle:'italic' }}>Teams do not need more people. They need better structured work.</p>
          </div>
        </div>
      </section>

      <section id="how" style={{ background:'#081A30',padding:'96px 24px' }}>
        <div style={{ maxWidth:860,margin:'0 auto' }}>
          {/* Left-justified header */}
          <div style={{ fontSize:'0.72rem',fontWeight:700,letterSpacing:'2px',textTransform:'uppercase',color:'#E07B39',marginBottom:16,textAlign:'center' }}>How It Works</div>
          <h2 style={{ fontFamily:SERIF,fontSize:'clamp(1.8rem,3.5vw,2.6rem)',color:'white',marginBottom:12,lineHeight:1.2,textAlign:'center' }}>4 steps to delivered work.</h2>
          <p style={{ color:'rgba(255,255,255,0.45)',marginBottom:56,fontSize:'0.95rem',textAlign:'center' }}>Submit. Scope. Execute. Deliver.</p>

          {/* Visual flow diagram — horizontal node chain */}
          <div style={{ overflowX:'auto', paddingBottom:8 }}>
            <div style={{ display:'flex', alignItems:'stretch', justifyContent:'center', gap:0, minWidth:600, position:'relative' }}>

              {steps.map((step, i) => (
                <div key={step.num} style={{ display:'flex', alignItems:'center', gap:0, flex:1 }}>

                  {/* Node card */}
                  <div style={{
                    flex:1,
                    background: i === 0 ? '#E07B39' : i === steps.length-1 ? '#0A2342' : 'rgba(255,255,255,0.04)',
                    border: i === 0 ? '2px solid #E07B39' : i === steps.length-1 ? '2px solid #E07B39' : '1.5px solid rgba(255,255,255,0.12)',
                    borderRadius:14,
                    padding:'28px 20px',
                    textAlign:'center',
                    position:'relative',
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
                    <div style={{
                      fontWeight:700,
                      color: i === 0 ? 'white' : 'white',
                      fontSize:'0.9rem',
                      marginBottom:8,
                      lineHeight:1.3,
                    }}>{step.title}</div>

                    {/* Desc */}
                    <div style={{
                      fontSize:'0.78rem',
                      color: i === 0 ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.5)',
                      lineHeight:1.6,
                    }}>{step.desc}</div>
                  </div>

                  {/* Arrow connector — not after last */}
                  {i < steps.length - 1 && (
                    <div style={{
                      flexShrink:0, width:36, display:'flex', flexDirection:'column',
                      alignItems:'center', justifyContent:'center', gap:3,
                    }}>
                      <div style={{ color:'#E07B39', fontSize:'1.4rem', lineHeight:1 }}>→</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


<section id="use-cases" style={{ background:'#081A30',padding:'96px 24px' }}>
        <div style={{ maxWidth:860,margin:'0 auto' }}>
          <div style={{ fontSize:'0.72rem',fontWeight:700,letterSpacing:'2px',textTransform:'uppercase',color:'#E07B39',marginBottom:16,textAlign:'center' }}>Use Cases</div>
          <h2 style={{ fontFamily:SERIF,fontSize:'clamp(1.8rem,3.5vw,2.6rem)',color:'white',marginBottom:48,lineHeight:1.2,textAlign:'center' }}>Work we execute every week.</h2>
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
          <h2 style={{ fontFamily:SERIF,fontSize:'clamp(1.8rem,3.5vw,2.6rem)',color:'white',marginBottom:16,lineHeight:1.2,textAlign:'center' }}>This is not staffing.<br /><em style={{ color:'#F08C4E' }}>It is execution.</em></h2>
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
          <h2 style={{ fontFamily:SERIF,fontSize:'clamp(1.8rem,3.5vw,2.6rem)',color:'white',marginBottom:16,lineHeight:1.2 }}>AI does not execute.<br /><em style={{ color:'#F08C4E' }}>We do.</em></h2>
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

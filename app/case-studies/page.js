export default function CaseStudies() {
  const SERIF = "'DM Serif Display', serif";
  const ORANGE = '#E07B39';
  const ORANGE_LIGHT = '#F08C4E';
  const NAVY = '#0A2342';
  const NAVY_DARK = '#081A30';

  const caseStudies = [
    {
      id: 'product-testing',
      tag: 'Product Testing',
      title: 'Alpha Product Testing with Real Users',
      client: 'MacMillan Learning',
      industry: 'EdTech · Product Development',
      desc: 'Recruited 6 nursing students for a "3+1" testing model over 10 weeks — generating 15-20 hours of real behavioral data and accelerating their beta launch by 3 months.',
      chips: ['NCLEX Prep', 'UX Testing', 'Behavioral Data'],
      stats: [
        { num: '10', label: 'Weeks' },
        { num: '6', label: 'Students' },
        { num: '3mo', label: 'Faster' },
      ],
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="14" y="2" width="20" height="44" rx="4" stroke="#E07B39" strokeWidth="2.5" />
          <circle cx="24" cy="34" r="4" fill="#E07B39" opacity="0.3" />
          <circle cx="24" cy="34" r="2" fill="#E07B39" />
          <line x1="18" y1="10" x2="30" y2="10" stroke="#E07B39" strokeWidth="1.5" opacity="0.4" />
          <line x1="18" y1="14" x2="28" y2="14" stroke="#E07B39" strokeWidth="1.5" opacity="0.25" />
          <line x1="18" y1="18" x2="26" y2="18" stroke="#E07B39" strokeWidth="1.5" opacity="0.15" />
          <line x1="18" y1="22" x2="30" y2="22" stroke="#E07B39" strokeWidth="1.5" opacity="0.4" />
          <line x1="18" y1="26" x2="24" y2="26" stroke="#E07B39" strokeWidth="1.5" opacity="0.2" />
        </svg>
      ),
    },
    {
      id: 'demand-validation',
      tag: 'Market Research',
      title: 'Demand Validation Research',
      client: 'MacMillan Learning',
      industry: 'EdTech · Product Validation',
      desc: 'Validated product demand with 10 qualified nursing students in just 2 weeks — delivering enterprise research quality at a total investment of $3,500.',
      chips: ['Interviews', 'Product Validation', 'Hard-to-Reach Audience'],
      stats: [
        { num: '2', label: 'Weeks' },
        { num: '10', label: 'Participants' },
        { num: '$3.5K', label: 'Total Cost' },
      ],
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="16" stroke="#E07B39" strokeWidth="2.5" />
          <circle cx="24" cy="24" r="10" stroke="#E07B39" strokeWidth="1.5" opacity="0.4" />
          <circle cx="24" cy="24" r="4" fill="#E07B39" opacity="0.3" />
          <circle cx="24" cy="24" r="2" fill="#E07B39" />
          <line x1="24" y1="2" x2="24" y2="8" stroke="#E07B39" strokeWidth="1.5" opacity="0.3" />
          <line x1="24" y1="40" x2="24" y2="46" stroke="#E07B39" strokeWidth="1.5" opacity="0.3" />
          <line x1="2" y1="24" x2="8" y2="24" stroke="#E07B39" strokeWidth="1.5" opacity="0.3" />
          <line x1="40" y1="24" x2="46" y2="24" stroke="#E07B39" strokeWidth="1.5" opacity="0.3" />
        </svg>
      ),
    },
    {
      id: 'data-collection',
      tag: 'Data Collection',
      title: 'Large-Scale Data Collection & Research',
      client: 'U.S. News & World Report',
      industry: 'Media · Data Research',
      desc: 'Deployed 60 emerging talent workers using AI + human workflows to collect 200,000 verified data points in 4 weeks for their annual "Best Colleges" report.',
      chips: ['AI + Human', 'Data Validation', 'Publication-Ready'],
      stats: [
        { num: '200K', label: 'Data Points' },
        { num: '4', label: 'Weeks' },
        { num: '60', label: 'Workers' },
      ],
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="28" width="8" height="16" rx="2" fill="#E07B39" opacity="0.3" />
          <rect x="16" y="18" width="8" height="26" rx="2" fill="#E07B39" opacity="0.5" />
          <rect x="28" y="8" width="8" height="36" rx="2" fill="#E07B39" opacity="0.7" />
          <rect x="40" y="2" width="4" height="42" rx="2" fill="#E07B39" />
          <line x1="2" y1="44" x2="46" y2="44" stroke="#E07B39" strokeWidth="1.5" opacity="0.3" />
        </svg>
      ),
    },
    {
      id: 'campus-marketing',
      tag: 'Campus Marketing',
      title: 'Student-to-Student Enrollment Program',
      client: 'Acadeum (College Consortium)',
      industry: 'Higher Ed · Marketing',
      desc: '5 student ambassadors across partner campuses drove peer-to-peer marketing through clubs, social media, and events — hitting the 75% prospect conversion target.',
      chips: ['Peer Outreach', 'Multi-Channel', 'Replicable Model'],
      stats: [
        { num: '75%', label: 'Conversion' },
        { num: '5', label: 'Campuses' },
        { num: '7mo', label: 'Program' },
      ],
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="14" r="6" stroke="#E07B39" strokeWidth="2" />
          <path d="M12 36 C12 26 36 26 36 36" stroke="#E07B39" strokeWidth="2" fill="none" />
          <circle cx="10" cy="18" r="4" stroke="#E07B39" strokeWidth="1.5" opacity="0.4" />
          <path d="M2 34 C2 28 14 28 14 32" stroke="#E07B39" strokeWidth="1.5" fill="none" opacity="0.3" />
          <circle cx="38" cy="18" r="4" stroke="#E07B39" strokeWidth="1.5" opacity="0.4" />
          <path d="M46 34 C46 28 34 28 34 32" stroke="#E07B39" strokeWidth="1.5" fill="none" opacity="0.3" />
        </svg>
      ),
    },
    {
      id: 'tech-development',
      tag: 'Tech Development',
      title: 'AI Product Development with Student Teams',
      client: 'Select Partner (Nonprofit)',
      industry: 'Nonprofit · Financial Services',
      desc: '28-day SprintWork™ model with 6-8 student developers built a working AI website agent — complete with documentation, content model, and product roadmap.',
      chips: ['AI Agent', 'SprintWork™', 'Full Handoff'],
      stats: [
        { num: '4', label: 'Weeks' },
        { num: '6-8', label: 'Devs' },
        { num: '$20-22', label: '/Hour' },
      ],
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polyline points="14,14 6,24 14,34" stroke="#E07B39" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="34,14 42,24 34,34" stroke="#E07B39" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="28" y1="8" x2="20" y2="40" stroke="#E07B39" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        </svg>
      ),
    },
    {
      id: 'specialized-research',
      tag: 'Specialized Research',
      title: 'Influencer & Tutor Identification',
      client: 'The Gates Foundation',
      industry: 'Philanthropy · Education',
      desc: 'Student researchers identified 100+ vetted math tutors and content creators across YouTube, TikTok, Discord, and Reddit — with peer-informed authenticity insights.',
      chips: ['Peer Perspective', 'Multi-Platform', 'Partnership-Ready'],
      stats: [
        { num: '100+', label: 'Creators' },
        { num: '4', label: 'Weeks' },
        { num: '$3.5K', label: 'Fixed Fee' },
      ],
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="12" stroke="#E07B39" strokeWidth="2.5" />
          <line x1="29" y1="29" x2="42" y2="42" stroke="#E07B39" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="20" cy="20" r="5" stroke="#E07B39" strokeWidth="1.5" opacity="0.3" />
          <circle cx="20" cy="20" r="1.5" fill="#E07B39" />
        </svg>
      ),
    },
    {
      id: 'uat',
      tag: 'QA & Program Management',
      title: 'User Acceptance Testing (UAT)',
      client: 'Norton',
      industry: 'EdTech · Quality Assurance',
      desc: 'End-to-end UAT program management — recruiting participants, coordinating synchronous + asynchronous sessions, and delivering weekly progress reporting.',
      chips: ['Sync + Async', 'Risk Tracking', 'Full Coordination'],
      stats: [
        { num: 'Live', label: 'Sync Testing' },
        { num: 'Async', label: 'Independent' },
        { num: 'E2E', label: 'Managed' },
      ],
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="6" width="36" height="36" rx="6" stroke="#E07B39" strokeWidth="2.5" />
          <polyline points="16,24 22,30 34,18" stroke="#E07B39" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* NAV — same as homepage */}
      <nav style={{ position:'fixed',top:0,left:0,right:0,zIndex:100,background:'rgba(10,35,66,0.95)',backdropFilter:'blur(14px)',borderBottom:'1px solid rgba(224,123,57,0.2)',height:60,display:'flex',alignItems:'center' }}>
        <div style={{ maxWidth:1080,margin:'0 auto',padding:'0 24px',display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%' }}>
          <a href="/" style={{ textDecoration:'none',display:'flex',alignItems:'center' }}>
            <img src="/logo.png" alt="Work Simplr" style={{ height:52,width:'auto',display:'block' }} />
          </a>
          <div style={{ display:'flex',gap:28,alignItems:'center' }}>
            {[['/#solution','Platform'],['/#how','Process'],['/#problem','Why It Works'],['/pricing','Pricing']].map(([h,l]) => (
              <a key={h} href={h} style={{ fontSize:'0.88rem',fontWeight:500,color:'rgba(255,255,255,0.55)',textDecoration:'none' }}>{l}</a>
            ))}
            <a href="/case-studies" style={{ fontSize:'0.88rem',fontWeight:600,color:ORANGE_LIGHT,textDecoration:'none' }}>Case Studies</a>
          </div>
          <div style={{ display:'flex',gap:10 }}>
            <a href="/login" style={{ padding:'8px 20px',border:'1px solid rgba(255,255,255,0.2)',borderRadius:999,fontSize:'0.875rem',color:'rgba(255,255,255,0.7)',textDecoration:'none' }}>Log in</a>
            <a href="/register?role=employer" style={{ padding:'8px 20px',background:ORANGE,borderRadius:999,fontSize:'0.875rem',color:'white',textDecoration:'none',fontWeight:600 }}>Start a Sprint</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ paddingTop:120,paddingBottom:80,background:`linear-gradient(160deg,${NAVY_DARK} 0%,${NAVY} 60%,#0D2B50 100%)`,position:'relative',overflow:'hidden' }}>
        <div style={{ position:'absolute',top:-150,right:-150,width:500,height:500,background:`radial-gradient(circle,rgba(224,123,57,0.12) 0%,transparent 70%)`,pointerEvents:'none' }} />
        <div style={{ position:'absolute',inset:0,pointerEvents:'none',opacity:1,background:'repeating-linear-gradient(15deg,rgba(255,255,255,0.025) 0px,rgba(255,255,255,0.025) 1px,transparent 1px,transparent 28px)' }} />
        <div style={{ maxWidth:800,margin:'0 auto',padding:'0 24px',textAlign:'center',position:'relative',zIndex:1 }}>
          <div style={{ fontSize:'0.72rem',fontWeight:700,letterSpacing:'2px',textTransform:'uppercase',color:ORANGE,marginBottom:16 }}>Case Studies</div>
          <h1 style={{ fontFamily:SERIF,fontSize:'clamp(2rem,4.5vw,3.2rem)',fontWeight:400,color:'white',lineHeight:1.15,marginBottom:20 }}>
            Real Results — <em style={{ fontStyle:'italic',color:ORANGE_LIGHT }}>In Weeks, Not Months</em>
          </h1>
          <p style={{ fontSize:'1.05rem',color:'rgba(255,255,255,0.5)',lineHeight:1.7,maxWidth:600,margin:'0 auto' }}>
            Detailed stories of how organizations leverage emerging talent through SprintWork™ to ship real outcomes.
          </p>
        </div>
      </section>

      {/* CHECKERBOARD CASE STUDIES */}
      <section style={{ background:NAVY,padding:'80px 24px' }}>
        <div style={{ maxWidth:1080,margin:'0 auto',display:'flex',flexDirection:'column',gap:48 }}>

          {caseStudies.map((cs, i) => {
            const isEven = i % 2 === 1;
            return (
              <div key={cs.id} id={cs.id} style={{
                display:'grid',
                gridTemplateColumns:'1fr 1fr',
                borderRadius:20,
                overflow:'hidden',
                border:'1px solid rgba(255,255,255,0.06)',
              }}>
                {/* VISUAL side */}
                <div style={{
                  background:NAVY_DARK,
                  padding:'48px 40px',
                  display:'flex',
                  flexDirection:'column',
                  alignItems:'center',
                  justifyContent:'center',
                  position:'relative',
                  overflow:'hidden',
                  minHeight:360,
                  order: isEven ? 2 : 1,
                }}>
                  {/* Subtle gradient glow */}
                  <div style={{ position:'absolute',inset:0,background:`radial-gradient(circle at ${isEven?'70%':'30%'} 40%,rgba(224,123,57,0.06) 0%,transparent 60%)`,pointerEvents:'none' }} />

                  {/* Icon */}
                  <div style={{
                    width:80,height:80,borderRadius:20,
                    background:'rgba(224,123,57,0.08)',
                    border:'1px solid rgba(224,123,57,0.15)',
                    display:'flex',alignItems:'center',justifyContent:'center',
                    marginBottom:20,position:'relative',zIndex:1,
                  }}>
                    {cs.icon}
                  </div>

                  {/* Industry label */}
                  <div style={{ fontSize:'0.78rem',color:'rgba(255,255,255,0.4)',textAlign:'center',position:'relative',zIndex:1,marginBottom:20 }}>{cs.industry}</div>

                  {/* Stats */}
                  <div style={{ display:'flex',gap:16,position:'relative',zIndex:1 }}>
                    {cs.stats.map(s => (
                      <div key={s.label} style={{
                        background:'rgba(255,255,255,0.04)',
                        border:'1px solid rgba(255,255,255,0.06)',
                        borderRadius:10,
                        padding:'14px 18px',
                        textAlign:'center',
                        minWidth:90,
                      }}>
                        <div style={{ fontFamily:SERIF,fontSize:'1.6rem',fontWeight:400,color:ORANGE_LIGHT,lineHeight:1 }}>{s.num}</div>
                        <div style={{ fontSize:'0.68rem',color:'rgba(255,255,255,0.4)',marginTop:4,textTransform:'uppercase',letterSpacing:'0.5px' }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CONTENT side */}
                <div style={{
                  background:'rgba(255,255,255,0.02)',
                  padding:'48px 44px',
                  display:'flex',
                  flexDirection:'column',
                  justifyContent:'center',
                  order: isEven ? 1 : 2,
                }}>
                  <div style={{ fontSize:'0.68rem',letterSpacing:'2px',textTransform:'uppercase',color:ORANGE,marginBottom:12,fontWeight:700 }}>{cs.tag}</div>
                  <h3 style={{ fontFamily:SERIF,fontSize:'1.5rem',color:'white',marginBottom:6,lineHeight:1.3,fontWeight:400 }}>{cs.title}</h3>
                  <div style={{ fontSize:'0.88rem',color:ORANGE_LIGHT,marginBottom:16,fontWeight:500 }}>{cs.client}</div>
                  <p style={{ fontSize:'0.88rem',color:'rgba(255,255,255,0.5)',lineHeight:1.7,marginBottom:24 }}>{cs.desc}</p>
                  <div style={{ display:'flex',gap:8,flexWrap:'wrap',marginBottom:24 }}>
                    {cs.chips.map(chip => (
                      <span key={chip} style={{
                        fontSize:'0.7rem',
                        padding:'4px 10px',
                        borderRadius:12,
                        background:'rgba(255,255,255,0.04)',
                        border:'1px solid rgba(255,255,255,0.06)',
                        color:'rgba(255,255,255,0.45)',
                      }}>{chip}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* CTA */}
      <section style={{ background:`linear-gradient(135deg,${NAVY} 0%,#1a3560 100%)`,padding:'100px 24px',textAlign:'center',position:'relative',overflow:'hidden' }}>
        <div style={{ position:'absolute',inset:0,background:'radial-gradient(ellipse at center,rgba(224,123,57,0.15) 0%,transparent 65%)',pointerEvents:'none' }} />
        <div style={{ position:'relative',zIndex:1,maxWidth:640,margin:'0 auto' }}>
          <h2 style={{ fontFamily:SERIF,fontSize:'clamp(2rem,4vw,3rem)',color:'white',marginBottom:16,lineHeight:1.15 }}>Ready to see results<br /><em style={{ color:ORANGE_LIGHT }}>like these?</em></h2>
          <p style={{ color:'rgba(255,255,255,0.5)',marginBottom:36,fontSize:'1rem',lineHeight:1.7 }}>Join the companies already using SprintWork™ to deliver outcomes, not headcount.</p>
          <a href="/register?role=employer" style={{ display:'inline-block',padding:'16px 44px',background:ORANGE,borderRadius:999,fontSize:'1.05rem',fontWeight:700,color:'white',textDecoration:'none',boxShadow:'0 8px 32px rgba(224,123,57,0.45)' }}>Start a Sprint →</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background:'#050F1C',borderTop:'1px solid rgba(255,255,255,0.06)',padding:'48px 24px 32px' }}>
        <div style={{ maxWidth:1080,margin:'0 auto' }}>
          <div style={{ display:'grid',gridTemplateColumns:'1.5fr 1fr 1fr 1fr',gap:40,marginBottom:40 }}>
            <div>
              <div style={{ fontFamily:SERIF,fontSize:'1.2rem',color:'white',marginBottom:10 }}>Work<span style={{ color:ORANGE }}>Simplr</span></div>
              <p style={{ fontSize:'0.83rem',color:'rgba(255,255,255,0.35)',lineHeight:1.65,maxWidth:220 }}>AI-powered execution platform. We turn undefined work into delivered outcomes.</p>
            </div>
            {[
              { title:'Platform',links:[['/#solution','SprintWork™'],['/#use-cases','Use Cases'],['/#how','How It Works'],['/register','Start a Sprint']] },
              { title:'Company',links:[['/about','About'],['/case-studies','Case Studies'],['/blog','Blog'],['/contact','Contact']] },
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

export const metadata = {
  title: 'Terms of Service — Work Simplr',
  description: 'UPSKLS dba Work Simplr Terms of Use & Student Freelancer Agreement.',
};

export default function Terms() {
  const SERIF = "'DM Serif Display', serif";
  const ORANGE = '#E07B39';
  const ORANGE_LIGHT = '#F08C4E';
  const NAVY = '#0A2342';
  const NAVY_DARK = '#081A30';

  const sections = [
    {
      num: '1',
      title: 'Introduction',
      content: (
        <>
          <p>Welcome to <strong>worksimplr.net</strong> (&quot;Platform&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;). These <strong>Terms of Use</strong> govern your use of the Platform as a <strong>student freelancer</strong>. By registering, accessing, or using any part of the Platform, you agree to comply with these terms, including our <a href="/privacy" style={{ color: ORANGE_LIGHT, textDecoration: 'underline' }}>Privacy Policy</a> and any applicable guidelines.</p>
          <p>If you do not agree, do not use the Platform.</p>
        </>
      ),
    },
    {
      num: '2',
      title: 'Eligibility',
      content: (
        <>
          <p>To participate as a student freelancer, you must:</p>
          <ul>
            <li>Be 16 years or older (or have verified parental/guardian consent).</li>
            <li>Be enrolled at an accredited educational institution.</li>
            <li>Provide accurate and current information about your identity and qualifications.</li>
          </ul>
          <p>We reserve the right to verify your status and suspend accounts that do not comply.</p>
        </>
      ),
    },
    {
      num: '3',
      title: 'Independent Contractor Status',
      content: (
        <>
          <p>You understand and agree:</p>
          <ul>
            <li>You are an <strong>independent contractor</strong>, not an employee of worksimplr.net or its clients.</li>
            <li>You are solely responsible for determining your working hours, tools, and deliverables.</li>
            <li>You are not entitled to benefits such as insurance, tax withholding, or employment protections.</li>
            <li>You are responsible for complying with local tax laws.</li>
          </ul>
        </>
      ),
    },
    {
      num: '4',
      title: 'Code of Conduct & Responsibilities',
      content: (
        <>
          <p>You agree to:</p>
          <ul>
            <li>Deliver work in a timely, professional, and ethical manner.</li>
            <li>Avoid academic dishonesty or contract cheating.</li>
            <li>Not misrepresent your skills, experience, or education.</li>
            <li>Communicate respectfully with clients and platform users.</li>
            <li>Refrain from plagiarism or unapproved use of AI tools unless disclosed.</li>
            <li>Keep client and platform information confidential.</li>
          </ul>
        </>
      ),
    },
    {
      num: '5',
      title: 'Payment & Fees',
      content: (
        <ul>
          <li>Payment will be issued upon client approval and successful completion of projects, less platform fees.</li>
          <li>Payments are processed via a third-party provider and subject to their terms.</li>
          <li>You are solely responsible for reporting income and paying taxes and will issue 1099 tax forms in accordance with IRS.gov.</li>
          <li>We reserve the right to withhold payment for incomplete or disputed work.</li>
        </ul>
      ),
    },
    {
      num: '6',
      title: 'Confidentiality & Non-Disclosure Agreement (NDA)',
      content: (
        <>
          <p><strong>Confidentiality Obligations:</strong> You acknowledge that during the course of using the Platform, you may have access to confidential information, including but not limited to client materials, business plans, academic data, intellectual property, and proprietary workflows (&quot;Confidential Information&quot;). You agree to:</p>
          <ul>
            <li>Keep such information strictly confidential,</li>
            <li>Use it solely for the purpose of performing your contracted services, and</li>
            <li>Not disclose it to any third party without express written permission.</li>
          </ul>
          <p>These obligations survive termination of this agreement.</p>
        </>
      ),
    },
    {
      num: '7',
      title: 'Intellectual Property',
      content: (
        <ul>
          <li>Clients retain full rights to deliverables upon final payment.</li>
          <li>You may showcase non-confidential portions of completed work in a portfolio, unless the client requests otherwise.</li>
          <li>You may not reuse, resell, or republish client work without permission.</li>
          <li>worksimplr.net may retain anonymized data for quality assurance, marketing, or platform improvement.</li>
        </ul>
      ),
    },
    {
      num: '8',
      title: 'Data Privacy & Security',
      content: (
        <>
          <p>We are committed to compliance with data protection regulations:</p>
          <ul>
            <li><strong>GDPR</strong> (EU/EEA users) and <strong>CCPA</strong> (California residents).</li>
            <li>We collect only necessary data and store it securely.</li>
            <li>You may request access, deletion, or correction of your data.</li>
            <li>You must protect any data accessed through your use of the Platform.</li>
          </ul>
          <p>See our full <a href="/privacy" style={{ color: ORANGE_LIGHT, textDecoration: 'underline' }}>Privacy Policy</a> for more.</p>
        </>
      ),
    },
    {
      num: '9',
      title: 'Prohibited Activities',
      content: (
        <>
          <p>You may not:</p>
          <ul>
            <li>Misrepresent your identity, credentials, or eligibility.</li>
            <li>Circumvent the platform to transact with clients off-site.</li>
            <li>Engage in academic dishonesty or plagiarism.</li>
            <li>Share, sell, or misuse confidential or proprietary content.</li>
            <li>Post or deliver unlawful, offensive, or fraudulent material.</li>
          </ul>
          <p>Violations may result in immediate suspension, legal action, and forfeiture of unpaid earnings.</p>
        </>
      ),
    },
    {
      num: '10',
      title: 'Limitation of Liability',
      content: (
        <>
          <p>worksimplr.net provides the Platform &quot;as-is&quot; without warranties of any kind. We are not liable for:</p>
          <ul>
            <li>Loss of income or business,</li>
            <li>Platform downtime or technical issues,</li>
            <li>Disputes between freelancers and clients,</li>
            <li>Indirect or consequential damages.</li>
          </ul>
          <p>Maximum liability under this Agreement is limited to fees paid by you to us (if any) in the last 6 months.</p>
        </>
      ),
    },
    {
      num: '11',
      title: 'Indemnification',
      content: (
        <>
          <p>You agree to indemnify and hold harmless worksimplr.net, its officers, employees, and partners from any claims or losses resulting from:</p>
          <ul>
            <li>Your breach of this Agreement,</li>
            <li>Your use of the Platform, or</li>
            <li>Any violation of law or third-party rights.</li>
          </ul>
        </>
      ),
    },
    {
      num: '12',
      title: 'Termination',
      content: (
        <>
          <p>Either party may terminate this Agreement at any time. Upon termination:</p>
          <ul>
            <li>Your right to use the Platform ends,</li>
            <li>Confidentiality obligations and rights to work already delivered remain in effect,</li>
            <li>Any earned but unpaid fees may be subject to verification before disbursement.</li>
          </ul>
        </>
      ),
    },
    {
      num: '13',
      title: 'Changes to Terms',
      content: (
        <>
          <p>We may modify this Agreement at any time.</p>
          <ul>
            <li>If we make material changes, we will notify you via email or dashboard notice.</li>
            <li>Continued use of the Platform after notice constitutes your acceptance.</li>
          </ul>
        </>
      ),
    },
    {
      num: '14',
      title: 'Contact Us',
      content: (
        <>
          <p>If you have any questions about this Agreement or your rights, please reach out:</p>
          <p><strong>Email:</strong> <a href="mailto:support@worksimplr.net" style={{ color: ORANGE_LIGHT }}>support@worksimplr.net</a></p>
          <p><strong>Website:</strong> <a href="https://worksimplr.net" style={{ color: ORANGE_LIGHT }}>https://worksimplr.net</a></p>
          <p><strong>Address:</strong> UPSKLS dba Work Simplr, Inc. — 2318 Fairway Wood Circle, Castle Rock, CO 80109</p>
        </>
      ),
    },
  ];

  return (
    <>
      {/* NAV */}
      <nav style={{ position:'fixed',top:0,left:0,right:0,zIndex:100,background:'rgba(10,35,66,0.95)',backdropFilter:'blur(14px)',borderBottom:'1px solid rgba(224,123,57,0.2)',height:60,display:'flex',alignItems:'center' }}>
        <div style={{ maxWidth:1080,margin:'0 auto',padding:'0 24px',display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%' }}>
          <a href="/" style={{ textDecoration:'none',display:'flex',alignItems:'center' }}>
            <img src="/logo.png" alt="Work Simplr" style={{ height:52,width:'auto',display:'block' }} />
          </a>
          <div className="nav-desktop-links" style={{ display:'flex',gap:28,alignItems:'center' }}>
            {[['/#solution','Platform'],['/#how','Process'],['/pricing','Pricing'],['/about','About'],['/case-studies','Case Studies']].map(([h,l]) => (
              <a key={h} href={h} style={{ fontSize:'0.88rem',fontWeight:500,color:'rgba(255,255,255,0.55)',textDecoration:'none' }}>{l}</a>
            ))}
          </div>
          <div className="nav-desktop-cta" style={{ display:'flex',gap:10 }}>
            <a href="/login" style={{ padding:'8px 20px',border:'1px solid rgba(255,255,255,0.2)',borderRadius:999,fontSize:'0.875rem',color:'rgba(255,255,255,0.7)',textDecoration:'none' }}>Log in</a>
            <a href="/register?role=employer" style={{ padding:'8px 20px',background:ORANGE,borderRadius:999,fontSize:'0.875rem',color:'white',textDecoration:'none',fontWeight:600 }}>Start a Sprint</a>
          </div>
          <a className="mobile-menu-btn" href="/register?role=employer" style={{ padding:'8px 20px',background:ORANGE,borderRadius:999,fontSize:'0.82rem',fontWeight:600,color:'white',textDecoration:'none' }}>Start a Sprint</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ paddingTop:120,paddingBottom:60,background:`linear-gradient(160deg,${NAVY_DARK} 0%,${NAVY} 60%,#0D2B50 100%)`,position:'relative',overflow:'hidden' }}>
        <div style={{ position:'absolute',top:-150,right:-150,width:500,height:500,background:'radial-gradient(circle,rgba(224,123,57,0.12) 0%,transparent 70%)',pointerEvents:'none' }} />
        <div style={{ position:'absolute',inset:0,pointerEvents:'none',opacity:1,background:'repeating-linear-gradient(15deg,rgba(255,255,255,0.025) 0px,rgba(255,255,255,0.025) 1px,transparent 1px,transparent 28px)' }} />
        <div style={{ maxWidth:800,margin:'0 auto',padding:'0 24px',textAlign:'center',position:'relative',zIndex:1 }}>
          <div style={{ fontSize:'0.72rem',fontWeight:700,letterSpacing:'2px',textTransform:'uppercase',color:ORANGE,marginBottom:16 }}>Legal</div>
          <h1 style={{ fontFamily:SERIF,fontSize:'clamp(2rem,4.5vw,3.2rem)',fontWeight:400,color:'white',lineHeight:1.15,marginBottom:16 }}>
            Terms of Use & <em style={{ fontStyle:'italic',color:ORANGE_LIGHT }}>Student Freelancer Agreement</em>
          </h1>
          <p style={{ fontSize:'0.92rem',color:'rgba(255,255,255,0.45)',lineHeight:1.7 }}>
            Effective Date: January 1, 2025 &nbsp;|&nbsp; Last Updated: January 1, 2025
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ background:NAVY,padding:'64px 24px 96px' }}>
        <div style={{ maxWidth:760,margin:'0 auto' }}>
          {sections.map((s) => (
            <div key={s.num} style={{ marginBottom:48 }}>
              <div style={{ display:'flex',alignItems:'baseline',gap:12,marginBottom:16 }}>
                <span style={{ fontFamily:SERIF,fontSize:'1.8rem',color:ORANGE,opacity:0.4,lineHeight:1 }}>{s.num}.</span>
                <h2 style={{ fontFamily:SERIF,fontSize:'1.3rem',color:'white',fontWeight:400,lineHeight:1.3 }}>{s.title}</h2>
              </div>
              <div style={{ paddingLeft:0,fontSize:'0.9rem',color:'rgba(255,255,255,0.55)',lineHeight:1.8 }} className="tos-content">
                {s.content}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background:'#050F1C',borderTop:'1px solid rgba(255,255,255,0.06)',padding:'48px 24px 32px' }}>
        <div style={{ maxWidth:1080,margin:'0 auto' }}>
          <div className="cs-footer-grid" style={{ marginBottom:40 }}>
            <div>
              <div style={{ fontFamily:SERIF,fontSize:'1.2rem',color:'white',marginBottom:10 }}>Work<span style={{ color:ORANGE }}>Simplr</span></div>
              <p style={{ fontSize:'0.83rem',color:'rgba(255,255,255,0.35)',lineHeight:1.65,maxWidth:220 }}>AI-powered execution platform. We turn undefined work into delivered outcomes.</p>
            </div>
            {[
              { title:'Platform',links:[['/#solution','SprintWork\u2122'],['/case-studies','Case Studies'],['/#how','How It Works'],['/register','Start a Sprint']] },
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
            <span>&copy; {new Date().getFullYear()} Work Simplr. All rights reserved.</span>
            <div style={{ display:'flex',gap:20 }}>
              <a href="https://www.linkedin.com/company/68873365/" style={{ color:'inherit',textDecoration:'none' }}>LinkedIn</a>
              <a href="https://www.facebook.com/worksimplrUS/" style={{ color:'inherit',textDecoration:'none' }}>Facebook</a>
              <a href="https://www.instagram.com/worksimplr/" style={{ color:'inherit',textDecoration:'none' }}>Instagram</a>
              <a href="https://x.com/worksimplr" style={{ color:'inherit',textDecoration:'none' }}>X</a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .tos-content p { margin-bottom: 12px; }
        .tos-content strong { color: rgba(255,255,255,0.75); }
        .tos-content ul { padding-left: 24px; margin: 12px 0; }
        .tos-content li { margin-bottom: 8px; list-style-type: disc; }
        .tos-content li::marker { color: rgba(224,123,57,0.5); }
      `}</style>
    </>
  );
}

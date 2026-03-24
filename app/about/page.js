import Link from 'next/link';

const SERIF = "'DM Serif Display', serif";

export default function AboutPage() {
  return (
    <div style={{ fontFamily: 'DM Sans, sans-serif', background: '#081A30', minHeight: '100vh', color: 'white' }}>

      {/* Nav */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(8,26,48,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <img src="/logo.png" alt="Work Simplr" style={{ height: 40, width: 'auto' }} />
        </Link>
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {[['/#problem','Why It Works'],['/#solution','Platform'],['/#how','Process'],['/#use-cases','For Teams'],['about','About']].map(([href,label]) => (
            <Link key={label} href={href} style={{ color: label === 'About' ? '#E07B39' : 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: label === 'About' ? 600 : 400 }}>{label}</Link>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <Link href="/login" style={{ padding: '8px 18px', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 999, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.875rem' }}>Log in</Link>
          <Link href="/register?role=employer" style={{ padding: '8px 20px', background: '#E07B39', borderRadius: 999, color: 'white', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 600 }}>Start a Sprint</Link>
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
      <section style={{ padding: '72px 24px', maxWidth: 860, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
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
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
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
              name: 'Eric H.',
              title: 'Client Partner, U.S. News & World Report',
              bio: '"Work Simplr successfully processed over 180,000 pieces of data in just three weeks using a coordinated team of 60 students. The work was accurate, well-managed, and delivered on schedule."',
              isQuote: true,
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
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px', textAlign: 'center', fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)' }}>
        © {new Date().getFullYear()} Work Simplr (UPSKLS dba Work Simplr). All rights reserved. · <Link href="/login" style={{ color: 'inherit', textDecoration: 'none' }}>Login</Link>
      </footer>
    </div>
  );
}

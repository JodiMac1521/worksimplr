import Link from 'next/link';

const SERIF = "'DM Serif Display', serif";

const plans = [
  {
    name: 'Starter Sprint',
    price: '$2,500',
    per: 'per sprint',
    desc: 'Perfect for validating a single project or workflow with a small team.',
    highlight: false,
    features: [
      'One 28-day sprint',
      'Up to 3 Sprint-Terns™',
      'AI-scoped project brief',
      'Weekly milestone check-ins',
      'QA review before delivery',
      '1 revision round',
    ],
    cta: 'Start a Sprint',
    href: '/register?role=employer',
  },
  {
    name: 'Growth',
    price: '$6,500',
    per: 'per sprint',
    desc: 'For teams running ongoing work across multiple workstreams.',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'One 28-day sprint',
      'Up to 10 Sprint-Terns™',
      'AI scoping + project manager',
      'Bi-weekly stakeholder syncs',
      'Full QA + delivery report',
      '2 revision rounds',
      'Accredible credentials for team',
      'Priority talent matching',
    ],
    cta: 'Start a Sprint',
    href: '/register?role=employer',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    per: 'contact us',
    desc: 'For organizations running multiple sprints, campus programs, or workforce pipelines.',
    highlight: false,
    features: [
      'Unlimited sprint capacity',
      '10–100+ Sprint-Terns™',
      'Dedicated account manager',
      'Custom scoping workflow',
      'SLA-backed delivery',
      'Branded credential program',
      'School partner integration',
      'Quarterly impact reports',
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
    <div style={{ fontFamily: 'DM Sans, sans-serif', background: '#081A30', minHeight: '100vh', color: 'white' }}>

      {/* Nav */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(8,26,48,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <img src="/logo.png" alt="Work Simplr" style={{ height: 40, width: 'auto' }} />
        </Link>
        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {[['/#problem','Why It Works'],['/#solution','Platform'],['/#how','Process'],['/#use-cases','For Teams'],['/about','About'],['pricing','Pricing']].map(([href, label]) => (
            <Link key={label} href={href} style={{ color: label === 'Pricing' ? '#E07B39' : 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: label === 'Pricing' ? 600 : 400 }}>{label}</Link>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <Link href="/login" style={{ padding: '8px 18px', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 999, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.875rem' }}>Log in</Link>
          <Link href="/register?role=employer" style={{ padding: '8px 20px', background: '#E07B39', borderRadius: 999, color: 'white', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 600 }}>Start a Sprint</Link>
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
              <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: plan.highlight ? '#E07B39' : 'rgba(255,255,255,0.4)', marginBottom: 12 }}>{plan.name}</div>
              <div style={{ marginBottom: 6 }}>
                <span style={{ fontFamily: SERIF, fontSize: 'clamp(2rem,4vw,2.8rem)', color: 'white', fontWeight: 400 }}>{plan.price}</span>
                <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)', marginLeft: 8 }}>{plan.per}</span>
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
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 0, fontSize: '0.85rem' }}>
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

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '28px 24px', textAlign: 'center', fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)' }}>
        © {new Date().getFullYear()} Work Simplr · <Link href="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About</Link> · <Link href="/students" style={{ color: 'inherit', textDecoration: 'none' }}>For Students</Link>
      </footer>
    </div>
  );
}

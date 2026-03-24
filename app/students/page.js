'use client';
import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import Link from 'next/link';

const SERIF = "'DM Serif Display', serif";

export default function StudentsPage() {
  const [step, setStep] = useState(0); // 0=landing, 1=form, 2=done
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [school, setSchool] = useState('');
  const [major, setMajor] = useState('');
  const [year, setYear] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const inputStyle = {
    width: '100%', padding: '13px 16px', background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, fontSize: '0.95rem',
    outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit', color: 'white',
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (password.length < 8) { setError('Password must be at least 8 characters'); return; }
    setLoading(true); setError('');
    const { error: err } = await supabase.auth.signUp({
      email, password,
      options: { data: { full_name: fullName, role: 'student', school, major, year } }
    });
    if (err) { setError(err.message); setLoading(false); return; }
    setStep(2); setLoading(false);
  }

  if (step === 2) return (
    <div style={{ minHeight: '100vh', background: '#081A30', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'DM Sans, sans-serif' }}>
      <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: '56px 48px', maxWidth: 460, width: '100%', textAlign: 'center' }}>
        <div style={{ width: 72, height: 72, background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', margin: '0 auto 24px' }}>🎓</div>
        <h2 style={{ fontFamily: SERIF, fontSize: '1.8rem', fontWeight: 400, color: 'white', marginBottom: 12 }}>You're in!</h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 32, lineHeight: 1.7 }}>
          Check your email at <strong style={{ color: 'rgba(255,255,255,0.8)' }}>{email}</strong> to confirm your Sprint-Tern™ account. We'll reach out when a sprint matches your skills.
        </p>
        <Link href="/" style={{ display: 'block', padding: '14px', background: '#E07B39', color: 'white', borderRadius: 999, textDecoration: 'none', fontWeight: 600 }}>Back to homepage →</Link>
      </div>
    </div>
  );

  return (
    <div style={{ fontFamily: 'DM Sans, sans-serif', background: '#081A30', minHeight: '100vh', color: 'white' }}>

      {/* Nav */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(8,26,48,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <img src="/logo.png" alt="Work Simplr" style={{ height: 40, width: 'auto' }} />
        </Link>
        <div style={{ display: 'flex', gap: 12 }}>
          <Link href="/login" style={{ padding: '8px 18px', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 999, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.875rem' }}>Log in</Link>
          <Link href="/register?role=employer" style={{ padding: '8px 20px', background: '#E07B39', borderRadius: 999, color: 'white', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 600 }}>Hire a Sprint team</Link>
        </div>
      </nav>

      {step === 0 ? (
        /* Landing */
        <>
          {/* Hero */}
          <section style={{ paddingTop: 120, paddingBottom: 72, textAlign: 'center', padding: '120px 24px 72px', maxWidth: 780, margin: '0 auto' }}>
            <div style={{ display: 'inline-block', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 999, padding: '4px 16px', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#22C55E', marginBottom: 28 }}>Sprint-Tern™ Program</div>
            <h1 style={{ fontFamily: SERIF, fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 400, lineHeight: 1.15, marginBottom: 20 }}>
              Real work. Real pay.<br /><em style={{ color: '#F08C4E' }}>No coffee runs.</em>
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, maxWidth: 540, margin: '0 auto 40px' }}>
              Sprint-Terns™ work on structured 28-day projects for real companies — getting paid, building a portfolio, and earning verified credentials along the way.
            </p>
            <button onClick={() => setStep(1)} style={{ padding: '14px 40px', background: '#E07B39', border: 'none', borderRadius: 999, color: 'white', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', boxShadow: '0 8px 24px rgba(224,123,57,0.4)', fontFamily: 'inherit' }}>
              Apply as a Sprint-Tern™ →
            </button>
            <div style={{ marginTop: 16, fontSize: '0.82rem', color: 'rgba(255,255,255,0.3)' }}>Takes 3 minutes · No resume required to start</div>
          </section>

          {/* What you get */}
          <section style={{ background: '#0A2342', padding: '64px 24px', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ maxWidth: 860, margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 40 }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#E07B39', marginBottom: 12 }}>What You Get</div>
                <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(1.6rem,3vw,2rem)', fontWeight: 400 }}>More than an internship. Better than a side hustle.</h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                {[
                  { icon: '💰', title: 'Get Paid', desc: 'Competitive pay per sprint — directly deposited after delivery.' },
                  { icon: '🏆', title: 'Verified Credentials', desc: 'Earn Accredible badges that prove your skills to future employers.' },
                  { icon: '🗂️', title: 'Real Portfolio', desc: 'Deliverables you can show — not theoretical coursework.' },
                  { icon: '📍', title: 'Work Remotely', desc: 'All sprints are remote. Work from anywhere in the US.' },
                ].map(f => (
                  <div key={f.title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '24px 20px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.8rem', marginBottom: 12 }}>{f.icon}</div>
                    <div style={{ fontWeight: 700, color: 'white', marginBottom: 8, fontSize: '0.95rem' }}>{f.title}</div>
                    <div style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How it works for students */}
          <section style={{ padding: '64px 24px', maxWidth: 760, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#E07B39', marginBottom: 12 }}>The Process</div>
              <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(1.4rem,3vw,1.9rem)', fontWeight: 400 }}>How a Sprint-Tern™ engagement works</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { num: '01', title: 'Apply & get matched', desc: 'Tell us your skills, school, and interests. TalentOS matches you to a live sprint within 48 hours.' },
                { num: '02', title: 'Get scoped work', desc: 'You receive a structured brief with clear deliverables, milestones, and a deadline. No guessing.' },
                { num: '03', title: 'Execute the sprint', desc: 'Work with your team over 28 days using our SprintWork™ methodology. A manager reviews your output.' },
                { num: '04', title: 'Deliver & get paid', desc: 'Submit your deliverable, pass QA, get paid. Earn a verified Accredible credential for your portfolio.' },
              ].map((s, i) => (
                <div key={s.num} style={{ display: 'flex', gap: 24, paddingBottom: 32, borderLeft: i < 3 ? '1px solid rgba(224,123,57,0.2)' : 'none', marginLeft: 20, paddingLeft: 32, position: 'relative' }}>
                  <div style={{ position: 'absolute', left: -20, top: 0, width: 40, height: 40, background: '#0A2342', border: '2px solid #E07B39', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 800, color: '#E07B39', flexShrink: 0 }}>{s.num}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'white', marginBottom: 6, fontSize: '1rem' }}>{s.title}</div>
                    <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 16 }}>
              <button onClick={() => setStep(1)} style={{ padding: '14px 40px', background: '#E07B39', border: 'none', borderRadius: 999, color: 'white', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', fontFamily: 'inherit', boxShadow: '0 8px 24px rgba(224,123,57,0.35)' }}>
                Apply Now →
              </button>
            </div>
          </section>
        </>
      ) : (
        /* Sign-up form */
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px 40px' }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: '48px', maxWidth: 500, width: '100%' }}>
            <div style={{ marginBottom: 32 }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#22C55E', marginBottom: 12 }}>Sprint-Tern™ Application</div>
              <h2 style={{ fontFamily: SERIF, fontSize: '2rem', fontWeight: 400, color: 'white', marginBottom: 8 }}>Create your account</h2>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem' }}>Takes 3 minutes. We'll match you to a sprint within 48 hours.</p>
            </div>

            {error && <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: 8, padding: '10px 14px', color: '#ef4444', fontSize: '0.85rem', marginBottom: 20 }}>{error}</div>}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <input style={inputStyle} type="text" placeholder="Full name" value={fullName} onChange={e => setFullName(e.target.value)} required />
              <input style={inputStyle} type="email" placeholder="School email (you@university.edu)" value={email} onChange={e => setEmail(e.target.value)} required />
              <input style={inputStyle} type="text" placeholder="University or college" value={school} onChange={e => setSchool(e.target.value)} required />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <input style={inputStyle} type="text" placeholder="Major / field of study" value={major} onChange={e => setMajor(e.target.value)} />
                <select style={{ ...inputStyle, appearance: 'none' }} value={year} onChange={e => setYear(e.target.value)} required>
                  <option value="" style={{ background: '#0A2342' }}>Year in school</option>
                  {['Freshman','Sophomore','Junior','Senior','Graduate'].map(y => (
                    <option key={y} value={y} style={{ background: '#0A2342' }}>{y}</option>
                  ))}
                </select>
              </div>
              <input style={inputStyle} type="password" placeholder="Create a password (8+ chars)" value={password} onChange={e => setPassword(e.target.value)} required minLength={8} />

              <button type="submit" disabled={loading} style={{ padding: '14px', background: loading ? 'rgba(224,123,57,0.5)' : '#E07B39', border: 'none', borderRadius: 999, color: 'white', fontWeight: 700, fontSize: '0.95rem', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'inherit', marginTop: 8 }}>
                {loading ? 'Creating account...' : 'Apply as Sprint-Tern™ →'}
              </button>
            </form>

            <p style={{ marginTop: 20, fontSize: '0.82rem', color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
              Already have an account? <Link href="/login" style={{ color: '#E07B39', textDecoration: 'none' }}>Log in</Link>
            </p>
          </div>
        </div>
      )}

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '24px', textAlign: 'center', fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)' }}>
        © {new Date().getFullYear()} Work Simplr · <Link href="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About</Link> · <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>For Employers</Link>
      </footer>
    </div>
  );
}

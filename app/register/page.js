'use client';
import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import Link from 'next/link';

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);
  const SERIF = "'DM Serif Display', serif";

  async function handleRegister(e) {
    e.preventDefault();
    if (password.length < 8) { setError('Password must be at least 8 characters'); return; }
    setLoading(true); setError('');
    const { error } = await supabase.auth.signUp({ email, password, options: { data: { full_name: fullName, role } } });
    if (error) { setError(error.message); setLoading(false); return; }
    setDone(true); setLoading(false);
  }

  const inputStyle = {
    width: '100%', padding: '13px 16px', background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, fontSize: '0.95rem',
    outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit', color: 'white',
  };

  if (done) return (
    <div style={{ minHeight: '100vh', background: '#081A30', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'DM Sans, sans-serif' }}>
      <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: '56px 48px', maxWidth: 460, width: '100%', textAlign: 'center' }}>
        <div style={{ width: 72, height: 72, background: 'rgba(224,123,57,0.12)', border: '1px solid rgba(224,123,57,0.25)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', margin: '0 auto 24px' }}>🎉</div>
        <h2 style={{ fontFamily: SERIF, fontSize: '1.8rem', fontWeight: 400, color: 'white', marginBottom: 12 }}>Check your email!</h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 32, lineHeight: 1.7, fontSize: '0.95rem' }}>
          We sent a confirmation link to <strong style={{ color: 'rgba(255,255,255,0.8)' }}>{email}</strong>. Click it to activate your account.
        </p>
        <Link href="/login" style={{ display: 'block', padding: '14px', background: '#E07B39', color: 'white', borderRadius: 999, textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>Go to login →</Link>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', display: 'flex', fontFamily: 'DM Sans, sans-serif', background: '#081A30' }}>
      {/* Left — form */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '48px 64px', maxWidth: 560 }}>
        <Link href="/" style={{ textDecoration: 'none', marginBottom: 56, display: 'inline-block' }}>
          <img src="/logo.svg" alt="Work Simplr" style={{ height:56,width:'auto',display:'block' }} />
        </Link>

        {/* Step indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 40 }}>
          {[1, 2].map(s => (
            <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: step >= s ? '#E07B39' : 'rgba(255,255,255,0.08)', border: step >= s ? 'none' : '1px solid rgba(255,255,255,0.15)', color: step >= s ? 'white' : 'rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.78rem', fontWeight: 700 }}>{s}</div>
              <span style={{ fontSize: '0.78rem', color: step >= s ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.3)', fontWeight: step >= s ? 500 : 400 }}>{s === 1 ? 'Choose role' : 'Your details'}</span>
              {s < 2 && <div style={{ width: 28, height: 1, background: step > s ? '#E07B39' : 'rgba(255,255,255,0.1)' }} />}
            </div>
          ))}
        </div>

        {/* Step 1 — choose role */}
        {step === 1 && (
          <>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#E07B39', marginBottom: 12 }}>Get started</div>
            <h1 style={{ fontFamily: SERIF, fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 400, color: 'white', marginBottom: 8, lineHeight: 1.2 }}>Join WorkSimplr</h1>
            <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 36, fontWeight: 300, fontSize: '0.95rem' }}>Are you looking for work, or looking to hire?</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 36 }}>
              {[
                { v: 'worker', emoji: '💼', title: 'Sprint-Tern™', desc: 'Find work, complete sprints, get paid.' },
                { v: 'employer', emoji: '🏢', title: 'Employer', desc: 'Post work, receive scoped deliverables.' },
              ].map(opt => (
                <button key={opt.v} onClick={() => { setRole(opt.v); setStep(2); }}
                  style={{ padding: '24px 18px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#E07B39'; e.currentTarget.style.background = 'rgba(224,123,57,0.06)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}>
                  <div style={{ fontSize: '2rem', marginBottom: 10 }}>{opt.emoji}</div>
                  <div style={{ fontWeight: 700, color: 'white', marginBottom: 5, fontSize: '0.95rem' }}>{opt.title}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{opt.desc}</div>
                </button>
              ))}
            </div>
            <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.35)', fontSize: '0.875rem' }}>
              Already have an account?{' '}
              <Link href="/login" style={{ color: '#E07B39', fontWeight: 600, textDecoration: 'none' }}>Log in</Link>
            </p>
          </>
        )}

        {/* Step 2 — details */}
        {step === 2 && (
          <>
            <button onClick={() => setStep(1)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', cursor: 'pointer', marginBottom: 24, padding: 0, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'inherit' }}>← Back</button>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#E07B39', marginBottom: 12 }}>{role === 'employer' ? 'Employer account' : 'Sprint-Tern™ account'}</div>
            <h1 style={{ fontFamily: SERIF, fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 400, color: 'white', marginBottom: 8, lineHeight: 1.2 }}>Create your account</h1>
            <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 32, fontWeight: 300, fontSize: '0.95rem' }}>Fill in your details to get started free.</p>
            {error && <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 10, padding: '12px 16px', marginBottom: 20, color: '#FCA5A5', fontSize: '0.875rem' }}>{error}</div>}
            <form onSubmit={handleRegister}>
              {[
                { label: 'Full name', type: 'text', val: fullName, set: setFullName, ph: 'Jane Smith' },
                { label: role === 'employer' ? 'Business email address' : 'Personal email address', type: 'email', val: email, set: setEmail, ph: role === 'employer' ? 'you@company.com' : 'you@gmail.com' },
                { label: 'Password', type: 'password', val: password, set: setPassword, ph: 'Min. 8 characters' },
              ].map(f => (
                <div key={f.label} style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 500, color: 'rgba(255,255,255,0.5)', marginBottom: 8, letterSpacing: '0.5px', textTransform: 'uppercase' }}>{f.label}</label>
                  <input type={f.type} value={f.val} onChange={e => f.set(e.target.value)} required placeholder={f.ph} style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#E07B39'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'} />
                </div>
              ))}
              <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)', marginBottom: 24, lineHeight: 1.6 }}>
                By signing up you agree to our <a href="/terms" style={{ color: '#E07B39' }}>Terms</a> and <a href="/privacy" style={{ color: '#E07B39' }}>Privacy Policy</a>.
              </p>
              <button type="submit" disabled={loading}
                style={{ width: '100%', padding: '14px', background: loading ? 'rgba(224,123,57,0.5)' : '#E07B39', color: 'white', border: 'none', borderRadius: 999, fontSize: '1rem', fontWeight: 600, cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'inherit', boxShadow: '0 4px 20px rgba(224,123,57,0.35)' }}>
                {loading ? 'Creating account...' : 'Create account →'}
              </button>
            </form>
          </>
        )}
      </div>

      {/* Right — brand panel */}
      <div style={{ flex: 1, background: 'linear-gradient(160deg,#0A2342 0%,#0D2B50 50%,#0A2342 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 64, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 480, height: 480, background: 'radial-gradient(circle,rgba(224,123,57,0.15) 0%,transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 400 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(224,123,57,0.12)', border: '1px solid rgba(224,123,57,0.25)', borderRadius: 999, padding: '5px 14px', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#F08C4E', marginBottom: 28 }}>SprintWork™</div>
          <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 400, color: 'white', lineHeight: 1.25, marginBottom: 16 }}>Stop managing work.<br /><em style={{ color: '#F08C4E', fontStyle: 'italic' }}>Start shipping it.</em></h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.9rem', lineHeight: 1.7, fontWeight: 300, marginBottom: 40 }}>
            Join thousands of verified operators and employers already running on SprintWork™ across the US.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { n: '5,000+', l: 'Projects Completed', icon: '📦' },
              { n: '98%', l: 'Completion Rate', icon: '✅' },
              { n: '2 weeks', l: 'Avg Sprint Time', icon: '⚡' },
              { n: '1–100', l: 'Sprint-Terns™ per job', icon: '👥' },
            ].map(stat => (
              <div key={stat.l} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '18px 16px' }}>
                <div style={{ fontSize: '1.1rem', marginBottom: 8 }}>{stat.icon}</div>
                <div style={{ fontFamily: SERIF, fontSize: '1.3rem', color: '#F08C4E', marginBottom: 3 }}>{stat.n}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.4 }}>{stat.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

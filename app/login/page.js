'use client';
import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const SERIF = "'DM Serif Display', serif";

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) { setError(error.message); setLoading(false); return; }
    const { data: profile } = await supabase.from('profiles').select('role').eq('id', data.user.id).single();
    window.location.href = profile?.role === 'employer' ? '/dashboard/employer' : '/dashboard/worker';
  }

  const inputStyle = {
    width: '100%', padding: '13px 16px', background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, fontSize: '0.95rem',
    outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit', color: 'white',
    transition: 'border-color 0.2s',
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', fontFamily: 'DM Sans, sans-serif', background: '#081A30' }}>
      {/* Left — form */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '48px 64px', maxWidth: 560 }}>
        <Link href="/" style={{ textDecoration: 'none', marginBottom: 56, display: 'inline-block' }}>
          <img src="/logo.svg" alt="Work Simplr" style={{ height:56,width:'auto',display:'block' }} />
        </Link>

        <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#E07B39', marginBottom: 12 }}>Welcome back</div>
        <h1 style={{ fontFamily: SERIF, fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 400, color: 'white', marginBottom: 8, lineHeight: 1.2 }}>Log in to your account</h1>
        <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 40, fontSize: '0.95rem', fontWeight: 300 }}>Continue where you left off.</p>

        {error && (
          <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 10, padding: '12px 16px', marginBottom: 24, color: '#FCA5A5', fontSize: '0.875rem' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: 20 }}>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 500, color: 'rgba(255,255,255,0.5)', marginBottom: 8, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Email address</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="you@example.com" style={inputStyle}
              onFocus={e => e.target.style.borderColor = '#E07B39'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'} />
          </div>
          <div style={{ marginBottom: 32 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <label style={{ fontSize: '0.8rem', fontWeight: 500, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Password</label>
              <a href="#" style={{ fontSize: '0.8rem', color: '#E07B39', textDecoration: 'none' }}>Forgot password?</a>
            </div>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="••••••••" style={inputStyle}
              onFocus={e => e.target.style.borderColor = '#E07B39'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'} />
          </div>
          <button type="submit" disabled={loading}
            style={{ width: '100%', padding: '14px', background: loading ? 'rgba(224,123,57,0.5)' : '#E07B39', color: 'white', border: 'none', borderRadius: 999, fontSize: '1rem', fontWeight: 600, cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'inherit', boxShadow: '0 4px 20px rgba(224,123,57,0.35)', transition: 'all 0.2s' }}>
            {loading ? 'Logging in...' : 'Log in →'}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: 28, color: 'rgba(255,255,255,0.35)', fontSize: '0.875rem' }}>
          Do not have an account?{' '}
          <Link href="/register" style={{ color: '#E07B39', fontWeight: 600, textDecoration: 'none' }}>Sign up free</Link>
        </p>

        <div style={{ marginTop: 'auto', paddingTop: 48, display: 'flex', justifyContent: 'center', gap: 24 }}>
          {['Privacy', 'Terms', 'Help'].map(l => (
            <a key={l} href={'/' + l.toLowerCase()} style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}>{l}</a>
          ))}
        </div>
      </div>

      {/* Right — brand panel */}
      <div style={{ flex: 1, background: 'linear-gradient(160deg,#0A2342 0%,#0D2B50 50%,#0A2342 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 64, position: 'relative', overflow: 'hidden' }}>
        {/* decorative glow */}
        <div style={{ position: 'absolute', top: -100, right: -100, width: 480, height: 480, background: 'radial-gradient(circle,rgba(224,123,57,0.15) 0%,transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -80, left: -80, width: 320, height: 320, background: 'radial-gradient(circle,rgba(224,123,57,0.08) 0%,transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 420 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(224,123,57,0.12)', border: '1px solid rgba(224,123,57,0.25)', borderRadius: 999, padding: '5px 14px', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#F08C4E', marginBottom: 28 }}>SprintWork™</div>
          <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 400, color: 'white', lineHeight: 1.25, marginBottom: 16 }}>
            AI-powered work,<br /><em style={{ color: '#F08C4E', fontStyle: 'italic' }}>delivered.</em>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', lineHeight: 1.7, fontWeight: 300, marginBottom: 40 }}>
            Connect with thousands of verified Sprint-Terns™ and get real work done — scoped, managed, and delivered.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { icon: '✅', title: 'Verified Sprint-Terns™', desc: 'Every operator is vetted before they join the platform.' },
              { icon: '🎯', title: 'Precise scope, every time', desc: 'Work is scoped with precise time and task — no ambiguity.' },
              { icon: '👥', title: 'Distributed execution', desc: 'Work is distributed across 1–100 Sprint-Terns™ and one account manager.' },
            ].map(item => (
              <div key={item.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 40, height: 48, background: 'rgba(224,123,57,0.1)', border: '1px solid rgba(224,123,57,0.2)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <div style={{ fontWeight: 600, color: 'white', fontSize: '0.9rem', marginBottom: 3 }}>{item.title}</div>
                  <div style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 48, paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', gap: 32 }}>
            {[['5,000+','Projects'],['98%','Completion'],['2 wks','Per Sprint']].map(([n,l]) => (
              <div key={l}>
                <div style={{ fontFamily: SERIF, fontSize: '1.4rem', color: '#F08C4E' }}>{n}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

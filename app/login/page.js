'use client';
import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) { setError(error.message); setLoading(false); return; }
    const { data: profile } = await supabase.from('profiles').select('role').eq('id', data.user.id).single();
    window.location.href = profile?.role === 'employer' ? '/dashboard/employer' : '/dashboard/worker';
  }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #EEF3FF 0%, #F9FAFF 100%)', display: 'flex', fontFamily: 'DM Sans, sans-serif' }}>
      {/* Left panel */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 48 }}>
        <div style={{ width: '100%', maxWidth: 420 }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 48 }}>
            <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.4rem', color: '#1455C4' }}>Work<span style={{ color: '#09112A' }}>Simplr</span></span>
          </Link>

          <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: '2rem', fontWeight: 800, color: '#09112A', marginBottom: 8, letterSpacing: '-0.03em' }}>Welcome back</h1>
          <p style={{ color: '#6B7BA4', marginBottom: 36, fontSize: '1rem', fontWeight: 300 }}>Log in to your WorkSimplr account</p>

          {error && (
            <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 10, padding: '12px 16px', marginBottom: 24, color: '#DC2626', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: 8 }}>
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#09112A', marginBottom: 8 }}>Email address</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="you@example.com"
                style={{ width: '100%', padding: '13px 16px', border: '1.5px solid #E2E8F0', borderRadius: 10, fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit', transition: 'border-color 0.2s', background: 'white' }}
                onFocus={e => e.target.style.borderColor = '#1455C4'}
                onBlur={e => e.target.style.borderColor = '#E2E8F0'} />
            </div>
            <div style={{ marginBottom: 32 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#09112A' }}>Password</label>
                <a href="#" style={{ fontSize: '0.8rem', color: '#1455C4', textDecoration: 'none' }}>Forgot password?</a>
              </div>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="••••••••"
                style={{ width: '100%', padding: '13px 16px', border: '1.5px solid #E2E8F0', borderRadius: 10, fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit', background: 'white' }}
                onFocus={e => e.target.style.borderColor = '#1455C4'}
                onBlur={e => e.target.style.borderColor = '#E2E8F0'} />
            </div>
            <button type="submit" disabled={loading}
              style={{ width: '100%', padding: '14px', background: loading ? '#6B7BA4' : '#1455C4', color: 'white', border: 'none', borderRadius: 999, fontSize: '1rem', fontWeight: 500, cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'inherit', transition: 'all 0.2s', boxShadow: '0 4px 16px rgba(20,85,196,0.3)' }}>
              {loading ? 'Logging in...' : 'Log in →'}
            </button>
          </form>

          <p style={{ textAlign: 'center', marginTop: 28, color: '#6B7BA4', fontSize: '0.9rem' }}>
            Don't have an account?{' '}
            <Link href="/register" style={{ color: '#1455C4', fontWeight: 600, textDecoration: 'none' }}>Sign up free</Link>
          </p>

          <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid rgba(20,85,196,0.1)', display: 'flex', justifyContent: 'center', gap: 24 }}>
            {['Privacy', 'Terms', 'Help'].map(l => (
              <a key={l} href={'/' + l.toLowerCase()} style={{ fontSize: '0.8rem', color: '#6B7BA4', textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div style={{ flex: 1, background: 'linear-gradient(160deg, #09112A 0%, #1E2D52 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 48, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, background: 'radial-gradient(circle, rgba(20,85,196,0.3) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 400 }}>
          <div style={{ fontSize: '3rem', marginBottom: 24 }}>💼</div>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.8rem', fontWeight: 800, color: 'white', marginBottom: 16, letterSpacing: '-0.03em', lineHeight: 1.2 }}>The UK's gig economy marketplace</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.7, fontWeight: 300, marginBottom: 36 }}>
            Connect with thousands of verified professionals or find your next shift — all in one place.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { icon: '✅', text: 'Identity-verified workers' },
              { icon: '💰', text: 'Fast, transparent payouts' },
              { icon: '📋', text: 'Clear contracts, no surprises' },
            ].map(item => (
              <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 36, height: 36, background: 'rgba(255,255,255,0.08)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>{item.icon}</div>
                <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

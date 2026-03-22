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
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #EEF3FF 0%, #F9FAFF 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', fontFamily: 'DM Sans, sans-serif' }}>
      <div style={{ background: 'white', borderRadius: 20, padding: '48px 40px', width: '100%', maxWidth: 440, boxShadow: '0 8px 40px rgba(20,85,196,0.12)' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32, textDecoration: 'none' }}>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.3rem', color: '#1455C4' }}>Work<span style={{ color: '#09112A' }}>Simplr</span></span>
        </Link>
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.8rem', fontWeight: 800, color: '#09112A', marginBottom: 8 }}>Welcome back</h1>
        <p style={{ color: '#6B7BA4', marginBottom: 32, fontSize: '0.95rem' }}>Log in to your WorkSimplr account</p>

        {error && <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 8, padding: '12px 16px', marginBottom: 20, color: '#DC2626', fontSize: '0.875rem' }}>{error}</div>}

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: 20 }}>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#09112A', marginBottom: 8 }}>Email address</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="you@example.com"
              style={{ width: '100%', padding: '12px 16px', border: '1.5px solid #E2E8F0', borderRadius: 10, fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit' }} />
          </div>
          <div style={{ marginBottom: 28 }}>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#09112A', marginBottom: 8 }}>Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="••••••••"
              style={{ width: '100%', padding: '12px 16px', border: '1.5px solid #E2E8F0', borderRadius: 10, fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit' }} />
          </div>
          <button type="submit" disabled={loading}
            style={{ width: '100%', padding: '14px', background: '#1455C4', color: 'white', border: 'none', borderRadius: 999, fontSize: '1rem', fontWeight: 500, cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1, fontFamily: 'inherit' }}>
            {loading ? 'Logging in...' : 'Log in →'}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: 24, color: '#6B7BA4', fontSize: '0.875rem' }}>
          Don't have an account?{' '}
          <Link href="/register" style={{ color: '#1455C4', fontWeight: 500, textDecoration: 'none' }}>Sign up</Link>
        </p>
      </div>
    </div>
  );
}

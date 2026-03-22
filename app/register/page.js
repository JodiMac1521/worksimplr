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

  async function handleRegister(e) {
    e.preventDefault();
    setLoading(true); setError('');
    const { data, error } = await supabase.auth.signUp({
      email, password,
      options: { data: { full_name: fullName, role } }
    });
    if (error) { setError(error.message); setLoading(false); return; }
    window.location.href = role === 'employer' ? '/dashboard/employer' : '/dashboard/worker';
  }

  const card = { background: 'white', borderRadius: 20, padding: '48px 40px', width: '100%', maxWidth: 480, boxShadow: '0 8px 40px rgba(20,85,196,0.12)' };
  const wrap = { minHeight: '100vh', background: 'linear-gradient(135deg,#EEF3FF 0%,#F9FAFF 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, fontFamily: 'DM Sans, sans-serif' };

  return (
    <div style={wrap}>
      <div style={card}>
        <Link href="/" style={{ textDecoration: 'none', display: 'block', marginBottom: 32 }}>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.3rem', color: '#1455C4' }}>Work<span style={{ color: '#09112A' }}>Simplr</span></span>
        </Link>

        {step === 1 && (
          <>
            <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.8rem', fontWeight: 800, color: '#09112A', marginBottom: 8 }}>Join WorkSimplr</h1>
            <p style={{ color: '#6B7BA4', marginBottom: 36, fontSize: '0.95rem' }}>Are you looking for work, or looking to hire?</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32 }}>
              {[
                { v: 'worker', emoji: '💼', title: 'I want work', desc: 'Find shifts, contracts & gigs' },
                { v: 'employer', emoji: '🏢', title: 'I want to hire', desc: 'Post jobs & find talent fast' }
              ].map(opt => (
                <button key={opt.v} onClick={() => { setRole(opt.v); setStep(2); }}
                  style={{ padding: '24px 20px', border: `2px solid ${role === opt.v ? '#1455C4' : '#E2E8F0'}`, borderRadius: 14, background: role === opt.v ? '#EEF3FF' : 'white', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s' }}>
                  <div style={{ fontSize: '2rem', marginBottom: 10 }}>{opt.emoji}</div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: '#09112A', marginBottom: 4 }}>{opt.title}</div>
                  <div style={{ fontSize: '0.8rem', color: '#6B7BA4' }}>{opt.desc}</div>
                </button>
              ))}
            </div>
            <p style={{ textAlign: 'center', color: '#6B7BA4', fontSize: '0.875rem' }}>
              Already have an account? <Link href="/login" style={{ color: '#1455C4', fontWeight: 500, textDecoration: 'none' }}>Log in</Link>
            </p>
          </>
        )}

        {step === 2 && (
          <>
            <button onClick={() => setStep(1)} style={{ background: 'none', border: 'none', color: '#6B7BA4', cursor: 'pointer', marginBottom: 20, padding: 0, fontSize: '0.875rem' }}>← Back</button>
            <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.8rem', fontWeight: 800, color: '#09112A', marginBottom: 8 }}>
              {role === 'employer' ? 'Create employer account' : 'Create worker account'}
            </h1>
            <p style={{ color: '#6B7BA4', marginBottom: 32, fontSize: '0.95rem' }}>Fill in your details to get started</p>
            {error && <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 8, padding: '12px 16px', marginBottom: 20, color: '#DC2626', fontSize: '0.875rem' }}>{error}</div>}
            <form onSubmit={handleRegister}>
              {[
                { label: 'Full name', type: 'text', val: fullName, set: setFullName, ph: 'Jane Smith' },
                { label: 'Email address', type: 'email', val: email, set: setEmail, ph: 'you@example.com' },
                { label: 'Password', type: 'password', val: password, set: setPassword, ph: '8+ characters' },
              ].map(f => (
                <div key={f.label} style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#09112A', marginBottom: 8 }}>{f.label}</label>
                  <input type={f.type} value={f.val} onChange={e => f.set(e.target.value)} required placeholder={f.ph}
                    style={{ width: '100%', padding: '12px 16px', border: '1.5px solid #E2E8F0', borderRadius: 10, fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit' }} />
                </div>
              ))}
              <button type="submit" disabled={loading}
                style={{ width: '100%', padding: 14, background: '#1455C4', color: 'white', border: 'none', borderRadius: 999, fontSize: '1rem', fontWeight: 500, cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1, fontFamily: 'inherit', marginTop: 8 }}>
                {loading ? 'Creating account...' : 'Create account →'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

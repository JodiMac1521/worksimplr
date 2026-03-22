'use client';
import { useState, useEffect } from 'react';
import { supabase } from '../../../lib/supabase';
import Link from 'next/link';

export default function WorkerDashboard() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [applications, setApplications] = useState([]);
  const [engagements, setEngagements] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);
  const [tab, setTab] = useState('overview');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { window.location.href = '/login'; return; }
      setUser(user);
      const [{ data: prof }, { data: apps }, { data: engs }, { data: saved }] = await Promise.all([
        supabase.from('profiles').select('*, worker_profiles(*)').eq('id', user.id).single(),
        supabase.from('applications').select('*, jobs(title, location, rate_amount, rate_type, sector)').eq('worker_id', user.id).order('applied_at', { ascending: false }),
        supabase.from('engagements').select('*, jobs(title, location, rate_amount), payments(amount_net, status)').eq('worker_id', user.id).order('created_at', { ascending: false }),
        supabase.from('saved_jobs').select('*, jobs(title, location, rate_amount, rate_type, sector, status)').eq('profile_id', user.id)
      ]);
      setProfile(prof); setApplications(apps || []); setEngagements(engs || []); setSavedJobs(saved || []);
      setLoading(false);
    }
    load();
  }, []);

  async function handleSignOut() {
    await supabase.auth.signOut();
    window.location.href = '/';
  }

  const STATUS_COLORS = { pending: ['#FFF7ED','#EA580C'], shortlisted: ['#EEF3FF','#1455C4'], accepted: ['#E6F7EF','#059669'], rejected: ['#FEF2F2','#DC2626'], withdrawn: ['#F4F6FB','#6B7BA4'] };
  const totalEarned = engagements.filter(e => e.payments?.[0]?.status === 'completed').reduce((s, e) => s + (e.payments?.[0]?.amount_net || 0), 0);

  const navStyle = { background: 'white', borderBottom: '1px solid #E2E8F0', position: 'sticky', top: 0, zIndex: 50 };
  const pageStyle = { fontFamily: 'DM Sans, sans-serif', minHeight: '100vh', background: '#F4F6FB' };
  const cardStyle = { background: 'white', borderRadius: 16, padding: 24, boxShadow: '0 2px 16px rgba(20,85,196,0.06)', border: '1.5px solid #F0F4FF' };

  if (loading) return <div style={{ ...pageStyle, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ color: '#6B7BA4', fontSize: '1rem' }}>Loading your dashboard...</div></div>;

  return (
    <div style={pageStyle}>
      <nav style={navStyle}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <Link href="/" style={{ textDecoration: 'none', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.2rem', color: '#1455C4' }}>Work<span style={{ color: '#09112A' }}>Simplr</span></Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Link href="/jobs" style={{ color: '#6B7BA4', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Browse jobs</Link>
            <div style={{ width: 36, height: 36, background: '#1455C4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '0.85rem' }}>
              {profile?.full_name?.[0] || 'W'}
            </div>
            <button onClick={handleSignOut} style={{ background: 'none', border: '1.5px solid #E2E8F0', borderRadius: 999, padding: '6px 16px', cursor: 'pointer', fontSize: '0.85rem', color: '#6B7BA4', fontFamily: 'inherit' }}>Sign out</button>
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '32px 24px' }}>
        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.8rem', fontWeight: 800, color: '#09112A', marginBottom: 4 }}>
            Welcome back, {profile?.full_name?.split(' ')[0] || 'Worker'} 👋
          </h1>
          <p style={{ color: '#6B7BA4', fontSize: '0.95rem' }}>Here's what's happening with your jobs</p>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16, marginBottom: 32 }}>
          {[
            { label: 'Applications', value: applications.length, icon: '📋', color: '#EEF3FF' },
            { label: 'Active Jobs', value: engagements.filter(e => !e.completed_at).length, icon: '⚡', color: '#E6F7EF' },
            { label: 'Completed', value: engagements.filter(e => e.completed_at).length, icon: '✅', color: '#FFF7ED' },
            { label: 'Total Earned', value: '£' + totalEarned.toFixed(0), icon: '💰', color: '#F0F4FF' },
          ].map(stat => (
            <div key={stat.label} style={{ ...cardStyle, display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 48, height: 48, background: stat.color, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', flexShrink: 0 }}>{stat.icon}</div>
              <div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.5rem', fontWeight: 800, color: '#09112A' }}>{stat.value}</div>
                <div style={{ fontSize: '0.8rem', color: '#6B7BA4' }}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 4, background: 'white', borderRadius: 12, padding: 4, marginBottom: 24, width: 'fit-content', border: '1.5px solid #F0F4FF' }}>
          {['overview', 'applications', 'engagements', 'saved'].map(t => (
            <button key={t} onClick={() => setTab(t)}
              style={{ padding: '8px 20px', borderRadius: 8, border: 'none', background: tab === t ? '#1455C4' : 'transparent', color: tab === t ? 'white' : '#6B7BA4', fontWeight: 500, fontSize: '0.875rem', cursor: 'pointer', fontFamily: 'inherit', textTransform: 'capitalize' }}>
              {t}
            </button>
          ))}
        </div>

        {/* Overview */}
        {tab === 'overview' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div style={cardStyle}>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: '#09112A', marginBottom: 16, fontSize: '1rem' }}>Recent Applications</h3>
              {applications.slice(0, 4).length === 0 ? (
                <div style={{ textAlign: 'center', padding: '24px 0' }}>
                  <div style={{ fontSize: '2rem', marginBottom: 8 }}>🔍</div>
                  <p style={{ color: '#6B7BA4', fontSize: '0.875rem' }}>No applications yet</p>
                  <Link href="/jobs" style={{ color: '#1455C4', fontSize: '0.875rem', fontWeight: 500 }}>Browse jobs →</Link>
                </div>
              ) : applications.slice(0, 4).map(app => (
                <div key={app.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #F4F6FB' }}>
                  <div>
                    <div style={{ fontWeight: 500, color: '#09112A', fontSize: '0.9rem' }}>{app.jobs?.title}</div>
                    <div style={{ fontSize: '0.8rem', color: '#6B7BA4' }}>📍 {app.jobs?.location}</div>
                  </div>
                  <span style={{ background: STATUS_COLORS[app.status]?.[0] || '#F4F6FB', color: STATUS_COLORS[app.status]?.[1] || '#6B7BA4', padding: '4px 10px', borderRadius: 999, fontSize: '0.75rem', fontWeight: 500 }}>
                    {app.status}
                  </span>
                </div>
              ))}
            </div>
            <div style={cardStyle}>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: '#09112A', marginBottom: 16, fontSize: '1rem' }}>Profile Completion</h3>
              {[
                { label: 'Basic info', done: !!profile?.full_name },
                { label: 'Phone verified', done: !!profile?.phone },
                { label: 'Location set', done: !!profile?.postcode },
                { label: 'Identity verified', done: profile?.verification === 'verified' },
                { label: 'Skills added', done: (profile?.worker_profiles?.[0]?.skills?.length || 0) > 0 },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: '1px solid #F4F6FB' }}>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', background: item.done ? '#E6F7EF' : '#F4F6FB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>{item.done ? '✅' : '○'}</div>
                  <span style={{ fontSize: '0.875rem', color: item.done ? '#09112A' : '#6B7BA4' }}>{item.label}</span>
                </div>
              ))}
              <div style={{ marginTop: 16, background: '#F4F6FB', borderRadius: 999, height: 8 }}>
                <div style={{ width: ([!!profile?.full_name, !!profile?.phone, !!profile?.postcode, profile?.verification === 'verified', (profile?.worker_profiles?.[0]?.skills?.length || 0) > 0].filter(Boolean).length / 5 * 100) + '%', height: '100%', background: '#1455C4', borderRadius: 999 }} />
              </div>
            </div>
          </div>
        )}

        {/* Applications */}
        {tab === 'applications' && (
          <div style={cardStyle}>
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: '#09112A', marginBottom: 20, fontSize: '1rem' }}>All Applications ({applications.length})</h3>
            {applications.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: 12 }}>📋</div>
                <h4 style={{ fontFamily: 'Syne, sans-serif', color: '#09112A', marginBottom: 8 }}>No applications yet</h4>
                <p style={{ color: '#6B7BA4', marginBottom: 20, fontSize: '0.875rem' }}>Start applying to jobs to track them here</p>
                <Link href="/jobs" style={{ padding: '12px 28px', background: '#1455C4', color: 'white', borderRadius: 999, textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem' }}>Browse jobs →</Link>
              </div>
            ) : applications.map(app => (
              <div key={app.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid #F4F6FB' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, color: '#09112A', marginBottom: 4 }}>{app.jobs?.title}</div>
                  <div style={{ fontSize: '0.85rem', color: '#6B7BA4' }}>📍 {app.jobs?.location} · £{app.jobs?.rate_amount}/{app.jobs?.rate_type}</div>
                  <div style={{ fontSize: '0.8rem', color: '#9CA3AF', marginTop: 4 }}>Applied {new Date(app.applied_at).toLocaleDateString()}</div>
                </div>
                <span style={{ background: STATUS_COLORS[app.status]?.[0] || '#F4F6FB', color: STATUS_COLORS[app.status]?.[1] || '#6B7BA4', padding: '6px 14px', borderRadius: 999, fontSize: '0.8rem', fontWeight: 500, textTransform: 'capitalize' }}>
                  {app.status}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Engagements */}
        {tab === 'engagements' && (
          <div style={cardStyle}>
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: '#09112A', marginBottom: 20, fontSize: '1rem' }}>Jobs & Engagements ({engagements.length})</h3>
            {engagements.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: 12 }}>⚡</div>
                <h4 style={{ fontFamily: 'Syne, sans-serif', color: '#09112A', marginBottom: 8 }}>No active engagements</h4>
                <p style={{ color: '#6B7BA4', fontSize: '0.875rem' }}>Once an employer accepts your application, it will appear here</p>
              </div>
            ) : engagements.map(eng => (
              <div key={eng.id} style={{ padding: '16px 0', borderBottom: '1px solid #F4F6FB' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ fontWeight: 600, color: '#09112A', marginBottom: 4 }}>{eng.jobs?.title}</div>
                    <div style={{ fontSize: '0.85rem', color: '#6B7BA4' }}>📍 {eng.jobs?.location} · £{eng.agreed_rate}/{eng.rate_type}</div>
                  </div>
                  <span style={{ background: eng.completed_at ? '#E6F7EF' : '#EEF3FF', color: eng.completed_at ? '#059669' : '#1455C4', padding: '6px 14px', borderRadius: 999, fontSize: '0.8rem', fontWeight: 500 }}>
                    {eng.completed_at ? 'Completed' : 'Active'}
                  </span>
                </div>
                {eng.payments?.[0] && (
                  <div style={{ marginTop: 8, padding: '8px 12px', background: '#F4F6FB', borderRadius: 8, fontSize: '0.85rem', color: '#6B7BA4' }}>
                    Payment: <strong style={{ color: '#09112A' }}>£{eng.payments[0].amount_net}</strong> · <span style={{ color: eng.payments[0].status === 'completed' ? '#059669' : '#EA580C' }}>{eng.payments[0].status}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Saved */}
        {tab === 'saved' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
            {savedJobs.length === 0 ? (
              <div style={{ ...cardStyle, textAlign: 'center', padding: '40px', gridColumn: '1/-1' }}>
                <div style={{ fontSize: '3rem', marginBottom: 12 }}>🔖</div>
                <h4 style={{ fontFamily: 'Syne, sans-serif', color: '#09112A', marginBottom: 8 }}>No saved jobs</h4>
                <p style={{ color: '#6B7BA4', marginBottom: 20, fontSize: '0.875rem' }}>Save jobs you're interested in to find them quickly</p>
                <Link href="/jobs" style={{ padding: '12px 28px', background: '#1455C4', color: 'white', borderRadius: 999, textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem' }}>Browse jobs →</Link>
              </div>
            ) : savedJobs.map(s => (
              <div key={s.id} style={cardStyle}>
                <div style={{ fontWeight: 600, color: '#09112A', marginBottom: 6 }}>{s.jobs?.title}</div>
                <div style={{ fontSize: '0.85rem', color: '#6B7BA4', marginBottom: 12 }}>📍 {s.jobs?.location}</div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.2rem', fontWeight: 700, color: '#1455C4', marginBottom: 16 }}>£{s.jobs?.rate_amount}/{s.jobs?.rate_type}</div>
                <Link href="/register?type=worker" style={{ display: 'block', textAlign: 'center', padding: '10px', background: '#EEF3FF', color: '#1455C4', borderRadius: 999, textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>Apply now →</Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

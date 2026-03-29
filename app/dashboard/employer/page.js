'use client';

import { useState, useEffect } from 'react';
import { supabase } from '../../../lib/supabase';
import Link from 'next/link';

const SERIF = "'DM Serif Display', serif";
const SANS = "'DM Sans', sans-serif";

const STATUS_COLORS = {
  draft:        { bg: 'rgba(255,255,255,0.06)', text: 'rgba(255,255,255,0.4)', label: 'Draft' },
  submitted:    { bg: 'rgba(224,123,57,0.15)',  text: '#F08C4E', label: 'Submitted' },
  in_review:    { bg: 'rgba(96,165,250,0.15)',  text: '#60A5FA', label: 'In Review' },
  team_matching:{ bg: 'rgba(167,139,250,0.15)', text: '#A78BFA', label: 'Team Matching' },
  active:       { bg: 'rgba(52,211,153,0.15)',  text: '#34D399', label: 'Active' },
  paused:       { bg: 'rgba(251,191,36,0.15)',  text: '#FBBF24', label: 'Paused' },
  completed:    { bg: 'rgba(52,211,153,0.15)',  text: '#34D399', label: 'Completed' },
  cancelled:    { bg: 'rgba(248,113,113,0.15)', text: '#F87171', label: 'Cancelled' },
  duplicate:    { bg: 'rgba(248,113,113,0.15)', text: '#F87171', label: 'Duplicate' },
};

const VERTICAL_LABELS = {
  product_testing:     'Product Testing',
  data_research:       'Data & Research',
  campus_marketing:    'Campus Marketing',
  specialized_research:'Specialized Research',
  tech_development:    'Tech Development',
  qa_uat:              'QA & UAT',
};

const VERTICAL_ICONS = {
  product_testing:     '🧪',
  data_research:       '📊',
  campus_marketing:    '🎓',
  specialized_research:'🔍',
  tech_development:    '💻',
  qa_uat:              '✅',
};

export default function EmployerDashboard() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { window.location.href = '/login'; return; }
      setUser(user);

      const [{ data: prof }, { data: projs }] = await Promise.all([
        supabase.from('profiles').select('*, employer_profiles(*)').eq('id', user.id).single(),
        supabase.from('projects').select(`
          *,
          project_vertical_details(details),
          project_compliance(requirement),
          project_timeline(title, status, created_at, note)
        `).eq('employer_id', user.id).order('created_at', { ascending: false })
      ]);

      if (prof?.role !== 'employer') { window.location.href = '/dashboard/worker'; return; }
      setProfile(prof);
      setProjects(projs || []);
      setLoading(false);
    }
    load();
  }, []);

  async function handleSignOut() {
    await supabase.auth.signOut();
    window.location.href = '/';
  }

  const filtered = filter === 'all' ? projects : projects.filter(p => p.status === filter);
  const activeCount = projects.filter(p => p.status === 'active').length;
  const submittedCount = projects.filter(p => p.status === 'submitted').length;
  const completedCount = projects.filter(p => p.status === 'completed').length;
  const dupeCount = projects.filter(p => p.status === 'duplicate').length;

  if (loading) return (
    <div style={{ minHeight: '100vh', background: '#081A30', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: SANS }}>
      <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem' }}>Loading your dashboard...</div>
    </div>
  );
  return (
    <div style={{ minHeight: '100vh', background: '#081A30', fontFamily: SANS }}>
      {/* Nav */}
      <nav style={{ background: 'rgba(10,35,66,0.95)', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'sticky', top: 0, zIndex: 50, backdropFilter: 'blur(12px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <img src="/logo.png" alt="Work Simplr" style={{ height: 36 }} />
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Link href="/dashboard/employer/new-project" style={{
              padding: '8px 20px', background: '#E07B39', color: 'white', borderRadius: 999,
              textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600,
              boxShadow: '0 4px 16px rgba(224,123,57,0.3)', transition: 'all 0.2s'
            }}>
              + New Project
            </Link>
            <div style={{
              width: 36, height: 36, background: 'rgba(224,123,57,0.15)', border: '1px solid rgba(224,123,57,0.3)',
              borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#F08C4E', fontWeight: 700, fontSize: '0.85rem'
            }}>
              {profile?.full_name?.[0] || 'E'}
            </div>
            <button onClick={handleSignOut} style={{
              background: 'none', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 999,
              padding: '6px 16px', cursor: 'pointer', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'inherit'
            }}>Sign out</button>
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 24px' }}>
        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#E07B39', marginBottom: 8 }}>Employer Dashboard</div>
          <h1 style={{ fontFamily: SERIF, fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 400, color: 'white', marginBottom: 4 }}>
            Welcome back, {profile?.full_name?.split(' ')[0] || 'there'}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.95rem', fontWeight: 300 }}>
            {profile?.employer_profiles?.[0]?.company_name || 'Your company'} &middot; {projects.length} project{projects.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16, marginBottom: 32 }}>
          {[
            { label: 'Active Sprints', value: activeCount, icon: '⚡', color: 'rgba(52,211,153,0.12)' },
            { label: 'Awaiting Review', value: submittedCount, icon: '📋', color: 'rgba(224,123,57,0.12)' },
            { label: 'Completed', value: completedCount, icon: '✅', color: 'rgba(96,165,250,0.12)' },
            { label: 'Total Projects', value: projects.length, icon: '📁', color: 'rgba(255,255,255,0.04)' },
          ].map(stat => (
            <div key={stat.label} style={{
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 16, padding: 20, display: 'flex', alignItems: 'center', gap: 16
            }}>
              <div style={{
                width: 48, height: 48, background: stat.color, borderRadius: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0
              }}>{stat.icon}</div>
              <div>
                <div style={{ fontFamily: SERIF, fontSize: '1.5rem', color: 'white' }}>{stat.value}</div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)' }}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Dupe banner */}
        {dupeCount > 0 && (
          <div style={{
            background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.2)',
            borderRadius: 12, padding: '14px 20px', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12
          }}>
            <span style={{ fontSize: '1.2rem' }}>⚠️</span>
            <span style={{ color: '#FCA5A5', fontSize: '0.9rem' }}>
              {dupeCount} project{dupeCount > 1 ? 's' : ''} flagged as potential duplicate{dupeCount > 1 ? 's' : ''}.{' '}
              <button onClick={() => setFilter('duplicate')} style={{
                background: 'none', border: 'none', color: '#F87171', fontWeight: 600, cursor: 'pointer',
                fontFamily: 'inherit', fontSize: '0.9rem', textDecoration: 'underline'
              }}>Review now</button>
            </span>
          </div>
        )}

        {/* Filters */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', gap: 4, background: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: 4, border: '1px solid rgba(255,255,255,0.06)' }}>
            {['all', 'submitted', 'active', 'completed', 'duplicate'].map(f => (
              <button key={f} onClick={() => setFilter(f)} style={{
                padding: '7px 16px', borderRadius: 8, border: 'none',
                background: filter === f ? '#E07B39' : 'transparent',
                color: filter === f ? 'white' : 'rgba(255,255,255,0.4)',
                fontWeight: 500, fontSize: '0.8rem', cursor: 'pointer', fontFamily: 'inherit', textTransform: 'capitalize'
              }}>{f === 'all' ? `All (${projects.length})` : `${f.replace('_',' ')} (${projects.filter(p => p.status === f).length})`}</button>
            ))}
          </div>
        </div>
        {/* Project list */}
        {filtered.length === 0 ? (
          <div style={{
            background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 16, padding: '64px 32px', textAlign: 'center'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: 16 }}>📁</div>
            <h3 style={{ fontFamily: SERIF, color: 'white', marginBottom: 8, fontWeight: 400 }}>
              {filter === 'all' ? 'No projects yet' : `No ${filter.replace('_',' ')} projects`}
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.35)', marginBottom: 28, fontSize: '0.9rem' }}>
              {filter === 'all' ? 'Start by scoping your first SprintWork project.' : 'Try a different filter.'}
            </p>
            {filter === 'all' && (
              <Link href="/dashboard/employer/new-project" style={{
                padding: '12px 28px', background: '#E07B39', color: 'white', borderRadius: 999,
                textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem',
                boxShadow: '0 4px 16px rgba(224,123,57,0.3)'
              }}>Scope a Project</Link>
            )}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {filtered.map(project => {
              const sc = STATUS_COLORS[project.status] || STATUS_COLORS.draft;
              return (
                <Link key={project.id} href={`/dashboard/employer/projects/${project.id}`} style={{ textDecoration: 'none' }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 14, padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 16,
                    transition: 'all 0.2s', cursor: 'pointer'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(224,123,57,0.2)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
                  >
                    <div style={{
                      width: 44, height: 44, background: 'rgba(224,123,57,0.1)', border: '1px solid rgba(224,123,57,0.2)',
                      borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0
                    }}>
                      {VERTICAL_ICONS[project.service_vertical] || '📁'}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 600, color: 'white', fontSize: '0.95rem', marginBottom: 4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {project.project_name}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                        <span>{VERTICAL_LABELS[project.service_vertical] || project.service_vertical}</span>
                        {project.sprint_team_size && <span>&middot; {project.sprint_team_size}</span>}
                        {project.sprint_duration && <span>&middot; {project.sprint_duration}</span>}
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
                      {project.sprint_rate_range && (
                        <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>
                          {project.sprint_rate_range}
                        </div>
                      )}
                      <span style={{
                        background: sc.bg, color: sc.text, padding: '5px 12px', borderRadius: 999,
                        fontSize: '0.75rem', fontWeight: 600, whiteSpace: 'nowrap'
                      }}>{sc.label}</span>
                      <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.8rem' }}>
                        {new Date(project.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

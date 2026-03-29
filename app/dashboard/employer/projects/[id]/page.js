'use client';

import { useState, useEffect } from 'react';
import { supabase } from '../../../../../lib/supabase';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const SERIF = "'DM Serif Display', serif";
const SANS = "'DM Sans', sans-serif";

const STATUS_COLORS = {
  draft: { bg: 'rgba(255,255,255,0.06)', text: 'rgba(255,255,255,0.4)', label: 'Draft' },
  submitted: { bg: 'rgba(224,123,57,0.15)', text: '#F08C4E', label: 'Submitted' },
  in_review: { bg: 'rgba(96,165,250,0.15)', text: '#60A5FA', label: 'In Review' },
  team_matching: { bg: 'rgba(167,139,250,0.15)', text: '#A78BFA', label: 'Team Matching' },
  active: { bg: 'rgba(52,211,153,0.15)', text: '#34D399', label: 'Active' },
  paused: { bg: 'rgba(251,191,36,0.15)', text: '#FBBF24', label: 'Paused' },
  completed: { bg: 'rgba(52,211,153,0.15)', text: '#34D399', label: 'Completed' },
  cancelled: { bg: 'rgba(248,113,113,0.15)', text: '#F87171', label: 'Cancelled' },
  duplicate: { bg: 'rgba(248,113,113,0.15)', text: '#F87171', label: 'Duplicate' },
};
const VERTICAL_LABELS = { product_testing: 'Product Testing', data_research: 'Data & Research', campus_marketing: 'Campus Marketing', specialized_research: 'Specialized Research', tech_development: 'Tech Development', qa_uat: 'QA & UAT' };
const VERTICAL_ICONS = { product_testing: '🧪', data_research: '📊', campus_marketing: '🎓', specialized_research: '🔍', tech_development: '💻', qa_uat: '✅' };

export default function ProjectDetail() {
  const params = useParams();
  const [project, setProject] = useState(null);
  const [timeline, setTimeline] = useState([]);
  const [verticalDetails, setVerticalDetails] = useState(null);
  const [compliance, setCompliance] = useState([]);
  const [dupeOriginal, setDupeOriginal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [resolving, setResolving] = useState(false);

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { window.location.href = '/login'; return; }
      const { data: proj } = await supabase.from('projects').select('*').eq('id', params.id).eq('employer_id', user.id).single();
      if (!proj) { window.location.href = '/dashboard/employer'; return; }
      setProject(proj);
      const [{ data: tl }, { data: vd }, { data: comp }] = await Promise.all([
        supabase.from('project_timeline').select('*').eq('project_id', params.id).order('created_at', { ascending: true }),
        supabase.from('project_vertical_details').select('*').eq('project_id', params.id).single(),
        supabase.from('project_compliance').select('*').eq('project_id', params.id),
      ]);
      setTimeline(tl || []); setVerticalDetails(vd?.details || null); setCompliance(comp || []);
      if (proj.dupe_of_project_id) {
        const { data: orig } = await supabase.from('projects').select('project_name').eq('id', proj.dupe_of_project_id).single();
        setDupeOriginal(orig);
      }
      setLoading(false);
    }
    load();
  }, [params.id]);

  async function resolveDupe(action) {
    setResolving(true);
    if (action === 'keep_separate') {
      await supabase.from('projects').update({ status: 'submitted', dupe_of_project_id: null, dupe_score: null, dupe_resolved: true }).eq('id', params.id);
    } else {
      await supabase.from('projects').update({ status: 'cancelled', dupe_resolved: true }).eq('id', params.id);
    }
    await supabase.from('project_timeline').insert({ project_id: params.id, status: action === 'keep_separate' ? 'submitted' : 'cancelled', title: action === 'keep_separate' ? 'Duplicate Resolved — Kept Separate' : action === 'merge' ? 'Merged with Original' : 'Discarded as Duplicate', note: 'Resolved by employer' });
    window.location.reload();
  }

  const cardStyle = { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: 24 };
  if (loading) return <div style={{ minHeight: '100vh', background: '#081A30', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: SANS }}><div style={{ color: 'rgba(255,255,255,0.4)' }}>Loading project...</div></div>;
  const sc = STATUS_COLORS[project.status] || STATUS_COLORS.draft;
  return (
    <div style={{ minHeight: '100vh', background: '#081A30', fontFamily: SANS }}>
      <nav style={{ background: 'rgba(10,35,66,0.95)', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'sticky', top: 0, zIndex: 50, backdropFilter: 'blur(12px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <Link href="/dashboard/employer" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>← Back to Dashboard</Link>
          <span style={{ background: sc.bg, color: sc.text, padding: '5px 14px', borderRadius: 999, fontSize: '0.8rem', fontWeight: 600 }}>{sc.label}</span>
        </div>
      </nav>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 24px' }}>
        {/* Dupe banner */}
        {project.status === 'duplicate' && (
          <div style={{ background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.2)', borderRadius: 14, padding: 24, marginBottom: 28 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 16 }}>
              <span style={{ fontSize: '1.3rem' }}>⚠️</span>
              <div>
                <div style={{ color: '#FCA5A5', fontWeight: 600, fontSize: '0.95rem', marginBottom: 4 }}>Potential Duplicate Detected</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>This project looks similar to "{dupeOriginal?.project_name || 'another project'}" {project.dupe_score && `(${Math.round(project.dupe_score * 100)}% match)`}.</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {[{ label: 'Keep Separate', action: 'keep_separate', bg: 'rgba(52,211,153,0.15)', color: '#34D399' }, { label: 'Merge with Original', action: 'merge', bg: 'rgba(96,165,250,0.15)', color: '#60A5FA' }, { label: 'Discard', action: 'discard', bg: 'rgba(248,113,113,0.15)', color: '#F87171' }].map(btn => (
                <button key={btn.action} onClick={() => resolveDupe(btn.action)} disabled={resolving} style={{ padding: '8px 18px', borderRadius: 999, fontSize: '0.82rem', fontWeight: 600, background: btn.bg, color: btn.color, border: 'none', cursor: resolving ? 'not-allowed' : 'pointer', fontFamily: 'inherit' }}>{btn.label}</button>
              ))}
            </div>
          </div>
        )}
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
          <div style={{ width: 48, height: 48, background: 'rgba(224,123,57,0.1)', border: '1px solid rgba(224,123,57,0.2)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>{VERTICAL_ICONS[project.service_vertical] || '📁'}</div>
          <div>
            <h1 style={{ fontFamily: SERIF, fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 400, color: 'white', marginBottom: 2 }}>{project.project_name}</h1>
            <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.35)' }}>{project.company_name} · {VERTICAL_LABELS[project.service_vertical]}</div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24, alignItems: 'start' }}>
          {/* Left: Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={cardStyle}><div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#E07B39', marginBottom: 12 }}>Project Description</div><p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.7 }}>{project.project_description}</p></div>
            {verticalDetails && Object.keys(verticalDetails).length > 0 && (
              <div style={cardStyle}><div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#E07B39', marginBottom: 16 }}>{VERTICAL_LABELS[project.service_vertical]} Details</div><div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>{Object.entries(verticalDetails).map(([key, val]) => (<div key={key} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}><span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem', textTransform: 'capitalize' }}>{key.replace(/_/g, ' ')}</span><span style={{ color: 'white', fontSize: '0.85rem', fontWeight: 500, textAlign: 'right', maxWidth: '60%' }}>{Array.isArray(val) ? val.join(', ') : val}</span></div>))}</div></div>
            )}
            {compliance.length > 0 && <div style={cardStyle}><div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#E07B39', marginBottom: 12 }}>Compliance Requirements</div><div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{compliance.map(c => <span key={c.id} style={{ padding: '6px 14px', borderRadius: 999, fontSize: '0.82rem', background: 'rgba(224,123,57,0.1)', border: '1px solid rgba(224,123,57,0.2)', color: '#F08C4E' }}>{c.requirement}</span>)}</div></div>}
            {project.additional_notes && <div style={cardStyle}><div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#E07B39', marginBottom: 12 }}>Additional Notes</div><p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.6 }}>{project.additional_notes}</p></div>}
          </div>          {/* Right sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ ...cardStyle, background: 'rgba(224,123,57,0.04)', borderColor: 'rgba(224,123,57,0.15)' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#E07B39', marginBottom: 16 }}>SprintWork Config</div>
              {[{ label: 'Duration', value: project.sprint_duration }, { label: 'Team Size', value: project.sprint_team_size }, { label: 'Rate Range', value: project.sprint_rate_range }, { label: 'Pricing', value: project.sprint_pricing_model }, { label: 'Budget', value: project.budget?.replace(/_/g, ' ') }].filter(r => r.value).map(row => (
                <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}><span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem' }}>{row.label}</span><span style={{ color: '#F08C4E', fontSize: '0.8rem', fontWeight: 500 }}>{row.value}</span></div>
              ))}
            </div>
            <div style={cardStyle}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#E07B39', marginBottom: 16 }}>Key Dates</div>
              {[{ label: 'Created', value: new Date(project.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) }, project.start_date && { label: 'Start Date', value: new Date(project.start_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) }, project.deadline && { label: 'Deadline', value: new Date(project.deadline).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) }].filter(Boolean).map(row => (
                <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}><span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem' }}>{row.label}</span><span style={{ color: 'white', fontSize: '0.8rem' }}>{row.value}</span></div>
              ))}
            </div>
            <div style={cardStyle}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#E07B39', marginBottom: 16 }}>Timeline</div>
              {timeline.length === 0 ? <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem', textAlign: 'center', padding: '12px 0' }}>No timeline events yet</div> : (
                <div style={{ position: 'relative' }}>
                  {timeline.map((event, i) => (
                    <div key={event.id} style={{ display: 'flex', gap: 12, paddingBottom: i < timeline.length - 1 ? 20 : 0, position: 'relative' }}>
                      {i < timeline.length - 1 && <div style={{ position: 'absolute', left: 7, top: 18, bottom: 0, width: 1, background: 'rgba(255,255,255,0.08)' }} />}
                      <div style={{ width: 15, height: 15, borderRadius: '50%', flexShrink: 0, marginTop: 2, background: STATUS_COLORS[event.status]?.bg || 'rgba(255,255,255,0.06)', border: `2px solid ${STATUS_COLORS[event.status]?.text || 'rgba(255,255,255,0.2)'}` }} />
                      <div>
                        <div style={{ fontWeight: 500, color: 'white', fontSize: '0.85rem', marginBottom: 2 }}>{event.title}</div>
                        {event.note && <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem', marginBottom: 2 }}>{event.note}</div>}
                        <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.72rem' }}>{new Date(event.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div style={cardStyle}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#E07B39', marginBottom: 12 }}>Contact</div>
              <div style={{ color: 'white', fontSize: '0.85rem', marginBottom: 4 }}>{project.contact_name}</div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem' }}>{project.contact_email}</div>
              {project.communication_pref && <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem', marginTop: 6 }}>Prefers: {project.communication_pref}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

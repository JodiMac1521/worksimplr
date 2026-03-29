'use client';

import { useState, useEffect } from 'react';
import { supabase } from '../../../../lib/supabase';
import Link from 'next/link';

const SERIF = "'DM Serif Display', serif";
const SANS = "'DM Sans', sans-serif";

const VERTICALS = [
  { key: 'product_testing', label: 'Product Testing', icon: '🧪', desc: 'Alpha/beta testing with real users, UX research, behavioral data', example: 'MacMillan Learning' },
  { key: 'data_research', label: 'Data & Research', icon: '📊', desc: 'Large-scale data collection, scraping, survey research, content audits', example: 'U.S. News & World Report' },
  { key: 'campus_marketing', label: 'Campus Marketing', icon: '🎓', desc: 'Student ambassador programs, peer-to-peer outreach, campus events', example: 'Acadeum' },
  { key: 'specialized_research', label: 'Specialized Research', icon: '🔍', desc: 'Niche expert sourcing, influencer ID, qualitative research', example: 'Gates Foundation' },
  { key: 'tech_development', label: 'Tech Development', icon: '💻', desc: 'Software sprints, AI prototypes, MVP builds with student devs', example: '28-day SprintWork' },
  { key: 'qa_uat', label: 'QA & UAT', icon: '✅', desc: 'User acceptance testing, regression testing, managed test programs', example: 'Norton' },
];

const VERTICAL_QUESTIONS = {
  product_testing: [
    { key: 'product_type', label: 'What product or platform will be tested?', type: 'text', required: true },
    { key: 'testing_phase', label: 'What phase is the product in?', type: 'select', options: ['Alpha (early prototype)', 'Beta (feature-complete)', 'Pre-launch', 'Post-launch optimization'], required: true },
    { key: 'target_users', label: 'Describe the ideal tester profile', type: 'text' },
    { key: 'tester_count', label: 'How many testers do you need?', type: 'select', options: ['3-5', '6-10', '10-20', '20+'], required: true },
    { key: 'testing_method', label: 'Testing approach?', type: 'select', options: ['Moderated (live sessions)', 'Unmoderated (async)', 'Embedded use (multi-week)', 'Hybrid'] },
    { key: 'deliverables', label: 'What deliverables do you need?', type: 'multi', options: ['Session Recordings', 'Bug Reports', 'UX Insights Report', 'Behavioral Data', 'NPS Scores', 'Heatmaps'] },
    { key: 'platforms', label: 'Device or platform requirements?', type: 'multi', options: ['iOS', 'Android', 'Chrome', 'Safari', 'Desktop', 'Tablet'] },
  ],
  data_research: [
    { key: 'research_type', label: 'What type of research?', type: 'select', options: ['Data Collection & Entry', 'Web Scraping', 'Survey Research', 'Content Audit', 'Competitive Intelligence', 'Lead List Building'], required: true },
    { key: 'data_volume', label: 'How much data?', type: 'select', options: ['Under 1,000 records', '1,000-10,000 records', '10,000-100,000 records', '100,000+ records'], required: true },
    { key: 'data_description', label: 'Describe the data you need collected or processed', type: 'textarea' },
    { key: 'data_sources', label: 'Where does the data come from?', type: 'multi', options: ['Public Websites', 'Databases / APIs', 'Social Media', 'Documents / PDFs', 'Surveys', 'Internal Systems'] },
    { key: 'delivery_format', label: 'Delivery format?', type: 'select', options: ['Google Sheets', 'Excel (.xlsx)', 'CSV', 'Airtable', 'Your CRM'] },
    { key: 'quality_level', label: 'Quality level?', type: 'select', options: ['Human-verified (100%)', 'AI + Human hybrid', 'Spot-checked (sample QA)', 'Publication-ready'] },
  ],
  campus_marketing: [
    { key: 'campaign_goal', label: 'What is the campaign goal?', type: 'select', options: ['Brand Awareness', 'Event Promotion', 'User-Generated Content (UGC)', 'Peer-to-Peer Referrals', 'Campus Partnerships'], required: true },
    { key: 'campus_count', label: 'How many campuses?', type: 'select', options: ['1-3 campuses', '4-10 campuses', '10-25 campuses', '25+ (national)'], required: true },
    { key: 'ambassadors_per_campus', label: 'Ambassadors per campus?', type: 'select', options: ['1', '2-3', '4-6', '6+'] },
    { key: 'program_duration', label: 'Program duration?', type: 'select', options: ['1-month sprint', 'Semester-long', 'Academic year', 'Ongoing'] },
    { key: 'student_demographics', label: 'Describe target student demographics', type: 'text' },
    { key: 'outreach_channels', label: 'Which outreach channels?', type: 'multi', options: ['Social Media', 'Student Clubs / Orgs', 'In-Person Events', 'Campus Email', 'Flyers / Posters', 'Student Media'] },
  ],
  specialized_research: [
    { key: 'research_focus', label: 'What is the research focus?', type: 'select', options: ['Influencer / Creator Identification', 'Expert Sourcing', 'Qualitative Interviews', 'Landscape / Market Mapping', 'Community Analysis', 'Trend Research'], required: true },
    { key: 'subject_domain', label: 'What subject domain?', type: 'text', placeholder: 'e.g. Math education, fintech, sustainability', required: true },
    { key: 'research_goal', label: 'What are you trying to find or learn?', type: 'textarea' },
    { key: 'research_platforms', label: 'Which platforms should we research?', type: 'multi', options: ['YouTube', 'TikTok', 'Instagram', 'LinkedIn', 'Reddit', 'Discord', 'X (Twitter)', 'Podcasts'] },
    { key: 'peer_value_prop', label: 'Why is student/peer perspective valuable?', type: 'select', options: ['Authenticity', 'Cost efficiency', 'Domain access', 'Speed'] },
  ],
  tech_development: [
    { key: 'project_type', label: 'What are you building?', type: 'select', options: ['MVP / Prototype', 'Feature Sprint', 'AI / ML Product', 'Mobile App', 'Web Application', 'API / Backend', 'Data Pipeline'], required: true },
    { key: 'starting_point', label: 'Starting point?', type: 'select', options: ['Greenfield (from scratch)', 'Existing codebase', 'Proof of concept exists', 'Design mockups'], required: true },
    { key: 'tech_stack', label: 'Tech stack preferences?', type: 'multi', options: ['React / Next.js', 'Python', 'Node.js', 'React Native', 'Swift / iOS', 'Flutter', 'AI / LLM', 'No preference'] },
    { key: 'team_size', label: 'Team size needed?', type: 'select', options: ['2-3 developers', '4-6 developers', '6-8 developers', '8+ developers'], required: true },
    { key: 'sprint_duration', label: 'Sprint duration?', type: 'select', options: ['2-week sprint', '28-day SprintWork', '6-8 week engagement', 'Quarter-long'] },
    { key: 'handoff_requirements', label: 'What handoff artifacts do you need?', type: 'multi', options: ['Source Code + Repo', 'Technical Documentation', 'Deployment Guide', 'Product Roadmap', 'API Documentation', 'Video Walkthrough'] },
  ],
  qa_uat: [
    { key: 'testing_type', label: 'Testing type?', type: 'select', options: ['User Acceptance Testing (UAT)', 'Regression Testing', 'Exploratory Testing', 'Accessibility Testing', 'Cross-Browser Testing', 'Load / Performance Testing'], required: true },
    { key: 'testing_mode', label: 'Testing mode?', type: 'select', options: ['Synchronous (live sessions)', 'Asynchronous (independent)', 'Hybrid (sync + async)'], required: true },
    { key: 'tester_count', label: 'How many testers?', type: 'select', options: ['3-5', '5-10', '10-20', '20+'], required: true },
    { key: 'program_management', label: 'Do you need program management?', type: 'select', options: ['Yes — end-to-end coordination', 'Partial — we manage, you supply testers', 'Just testers'] },
    { key: 'test_subject', label: 'What is being tested?', type: 'text', placeholder: 'e.g. Web-based LMS, mobile banking app' },
    { key: 'reporting_needs', label: 'Reporting needs?', type: 'multi', options: ['Bug Reports (JIRA / Linear)', 'Weekly Status Reports', 'Test Coverage Matrix', 'Risk / Blocker Tracking', 'Session Recordings', 'Executive Summary'] },
  ],
};
const SPRINT_CONFIG = {
  product_testing:     { duration: '4-10 weeks', team: '3-10 testers', rate: '$18-22/hr', model: 'Per-session + weekly' },
  data_research:       { duration: '2-6 weeks', team: '10-60 workers', rate: '$15-20/hr', model: 'Per-record + QA layer' },
  campus_marketing:    { duration: '1-7 months', team: '5-25 ambassadors', rate: '$16-20/hr', model: 'Monthly retainer' },
  specialized_research:{ duration: '2-4 weeks', team: '3-8 researchers', rate: '$18-22/hr', model: 'Fixed project fee' },
  tech_development:    { duration: '2-8 weeks', team: '4-8 developers', rate: '$20-25/hr', model: '28-day SprintWork' },
  qa_uat:              { duration: '2-6 weeks', team: '5-20 testers', rate: '$18-22/hr', model: 'Managed program' },
};

const BUDGET_OPTIONS = [
  { label: 'Under $2,500', value: 'under_2500' },
  { label: '$2,500 - $5,000', value: '2500_5000' },
  { label: '$5,000 - $15,000', value: '5000_15000' },
  { label: '$15,000 - $50,000', value: '15000_50000' },
  { label: '$50,000+', value: '50000_plus' },
  { label: 'Need guidance', value: 'needs_guidance' },
];

const COMPLIANCE_OPTIONS = ['NDA Required', 'FERPA', 'HIPAA', 'GDPR', 'Background Checks', 'Data Security Agreement'];

export default function NewProjectIntake() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [step, setStep] = useState(1);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [savedProject, setSavedProject] = useState(null);
  const [isDupe, setIsDupe] = useState(false);
  const [form, setForm] = useState({
    projectName: '', companyName: '', description: '', vertical: '',
    verticalDetails: {}, budget: '', startDate: '', deadline: '',
    comms: '', notes: '', compliance: [],
  });

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { window.location.href = '/login'; return; }
      setUser(user);
      const { data: prof } = await supabase.from('profiles').select('*, employer_profiles(*)').eq('id', user.id).single();
      if (prof?.role !== 'employer') { window.location.href = '/dashboard/worker'; return; }
      setProfile(prof);
      setForm(f => ({ ...f, companyName: prof?.employer_profiles?.[0]?.company_name || '' }));
    }
    load();
  }, []);

  function updateForm(field, value) { setForm(f => ({ ...f, [field]: value })); }
  function updateVerticalDetail(key, value) { setForm(f => ({ ...f, verticalDetails: { ...f.verticalDetails, [key]: value } })); }
  function toggleMulti(key, option) {
    setForm(f => {
      const cur = f.verticalDetails[key] || [];
      const next = cur.includes(option) ? cur.filter(o => o !== option) : [...cur, option];
      return { ...f, verticalDetails: { ...f.verticalDetails, [key]: next } };
    });
  }
  function toggleCompliance(req) {
    setForm(f => {
      const next = f.compliance.includes(req) ? f.compliance.filter(r => r !== req) : [...f.compliance, req];
      return { ...f, compliance: next };
    });
  }

  function canProceed() {
    if (step === 1) return form.projectName.trim() && form.companyName.trim() && form.description.trim();
    if (step === 2) return !!form.vertical;
    if (step === 3) {
      const qs = VERTICAL_QUESTIONS[form.vertical] || [];
      return qs.filter(q => q.required).every(q => {
        const val = form.verticalDetails[q.key];
        return val && (Array.isArray(val) ? val.length > 0 : val.trim?.() !== '');
      });
    }
    return true;
  }
  async function handleSubmit() {
    setSaving(true);
    const config = SPRINT_CONFIG[form.vertical] || {};
    const { data: project, error } = await supabase.from('projects').insert({
      employer_id: user.id, project_name: form.projectName, company_name: form.companyName,
      contact_name: profile?.full_name || '', contact_email: profile?.email || user.email,
      project_description: form.description, service_vertical: form.vertical,
      industry: profile?.employer_profiles?.[0]?.sector || null,
      budget: form.budget || null, start_date: form.startDate || null,
      deadline: form.deadline || null, communication_pref: form.comms || null,
      additional_notes: form.notes || null, status: 'submitted', intake_source: 'form',
      submitted_at: new Date().toISOString(),
      sprint_duration: config.duration, sprint_team_size: config.team,
      sprint_rate_range: config.rate, sprint_pricing_model: config.model,
    }).select().single();
    if (error) { alert('Error saving project: ' + error.message); setSaving(false); return; }
    await supabase.from('project_vertical_details').insert({ project_id: project.id, vertical: form.vertical, details: form.verticalDetails });
    if (form.compliance.length) {
      await supabase.from('project_compliance').insert(form.compliance.map(req => ({ project_id: project.id, requirement: req })));
    }
    await supabase.from('project_timeline').insert({ project_id: project.id, status: 'submitted', title: 'Brief Submitted', note: 'Via guided intake form', created_by: user.id });
    const { data: check } = await supabase.from('projects').select('status, dupe_of_project_id, dupe_score').eq('id', project.id).single();
    setSavedProject(project);
    setIsDupe(check?.status === 'duplicate');
    setSaved(true); setSaving(false); setStep(5);
  }

  const inputStyle = { width: '100%', padding: '13px 16px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit', color: 'white', transition: 'border-color 0.2s' };
  const labelStyle = { display: 'block', fontSize: '0.8rem', fontWeight: 500, color: 'rgba(255,255,255,0.5)', marginBottom: 8, letterSpacing: '0.5px', textTransform: 'uppercase' };
  const cardStyle = { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: 24 };
  const pillStyle = (sel) => ({ padding: '8px 16px', borderRadius: 999, fontSize: '0.85rem', cursor: 'pointer', fontFamily: 'inherit', background: sel ? 'rgba(224,123,57,0.15)' : 'rgba(255,255,255,0.04)', border: sel ? '1px solid rgba(224,123,57,0.4)' : '1px solid rgba(255,255,255,0.08)', color: sel ? '#F08C4E' : 'rgba(255,255,255,0.5)', transition: 'all 0.15s' });

  if (!user) return null;

  return (
    <div style={{ minHeight: '100vh', background: '#081A30', fontFamily: SANS }}>
      <nav style={{ background: 'rgba(10,35,66,0.95)', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'sticky', top: 0, zIndex: 50, backdropFilter: 'blur(12px)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <Link href="/dashboard/employer" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>← Back to Dashboard</Link>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#E07B39' }}>New Project</div>
        </div>
      </nav>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '40px 24px' }}>
        {/* Progress */}
        <div style={{ display: 'flex', gap: 4, marginBottom: 40 }}>
          {['Basics', 'Vertical', 'Details', 'Timeline', 'Confirm'].map((label, i) => (
            <div key={label} style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ height: 3, borderRadius: 2, marginBottom: 8, background: i + 1 <= step ? '#E07B39' : 'rgba(255,255,255,0.08)', transition: 'background 0.3s' }} />
              <span style={{ fontSize: '0.7rem', color: i + 1 <= step ? '#F08C4E' : 'rgba(255,255,255,0.2)', fontWeight: 500, letterSpacing: '0.5px', textTransform: 'uppercase' }}>{label}</span>
            </div>
          ))}
        </div>
        {/* Step 1: Basics */}
        {step === 1 && (
          <div>
            <h2 style={{ fontFamily: SERIF, fontSize: '1.8rem', fontWeight: 400, color: 'white', marginBottom: 8 }}>Tell us about your project</h2>
            <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 32, fontSize: '0.95rem' }}>Start with the basics. Your account manager will follow up.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div><label style={labelStyle}>Project Name *</label><input value={form.projectName} onChange={e => updateForm('projectName', e.target.value)} placeholder="e.g. Beta Testing Sprint for iOS App" style={inputStyle} onFocus={e => e.target.style.borderColor = '#E07B39'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'} /></div>
              <div><label style={labelStyle}>Company Name *</label><input value={form.companyName} onChange={e => updateForm('companyName', e.target.value)} placeholder="Your company" style={inputStyle} onFocus={e => e.target.style.borderColor = '#E07B39'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'} /></div>
              <div><label style={labelStyle}>Project Description *</label><textarea value={form.description} onChange={e => updateForm('description', e.target.value)} placeholder="Describe what you need done..." rows={4} style={{ ...inputStyle, resize: 'vertical' }} onFocus={e => e.target.style.borderColor = '#E07B39'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'} /></div>
            </div>
          </div>
        )}

        {/* Step 2: Vertical Selection */}
        {step === 2 && (
          <div>
            <h2 style={{ fontFamily: SERIF, fontSize: '1.8rem', fontWeight: 400, color: 'white', marginBottom: 8 }}>What type of work is this?</h2>
            <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 32, fontSize: '0.95rem' }}>Select the service vertical that best matches your project.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {VERTICALS.map(v => (
                <button key={v.key} onClick={() => { updateForm('vertical', v.key); updateForm('verticalDetails', {}); }} style={{
                  ...cardStyle, textAlign: 'left', cursor: 'pointer', transition: 'all 0.2s',
                  border: form.vertical === v.key ? '1.5px solid #E07B39' : '1px solid rgba(255,255,255,0.06)',
                  background: form.vertical === v.key ? 'rgba(224,123,57,0.08)' : 'rgba(255,255,255,0.03)',
                }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: 8 }}>{v.icon}</div>
                  <div style={{ fontWeight: 600, color: 'white', fontSize: '0.95rem', marginBottom: 4 }}>{v.label}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.5, marginBottom: 8 }}>{v.desc}</div>
                  <div style={{ fontSize: '0.72rem', color: '#E07B39', fontWeight: 500 }}>e.g. {v.example}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Vertical-specific questions */}
        {step === 3 && form.vertical && (
          <div>
            <h2 style={{ fontFamily: SERIF, fontSize: '1.8rem', fontWeight: 400, color: 'white', marginBottom: 8 }}>
              {VERTICALS.find(v => v.key === form.vertical)?.icon} {VERTICALS.find(v => v.key === form.vertical)?.label} Details
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 32, fontSize: '0.95rem' }}>These help us scope your SprintWork engagement accurately.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {(VERTICAL_QUESTIONS[form.vertical] || []).map(q => (
                <div key={q.key}>
                  <label style={labelStyle}>{q.label} {q.required && '*'}</label>
                  {q.type === 'text' && <input value={form.verticalDetails[q.key] || ''} onChange={e => updateVerticalDetail(q.key, e.target.value)} placeholder={q.placeholder || ''} style={inputStyle} onFocus={e => e.target.style.borderColor = '#E07B39'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'} />}
                  {q.type === 'textarea' && <textarea value={form.verticalDetails[q.key] || ''} onChange={e => updateVerticalDetail(q.key, e.target.value)} rows={3} style={{ ...inputStyle, resize: 'vertical' }} onFocus={e => e.target.style.borderColor = '#E07B39'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'} />}
                  {q.type === 'select' && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{q.options.map(opt => <button key={opt} onClick={() => updateVerticalDetail(q.key, opt)} style={pillStyle(form.verticalDetails[q.key] === opt)}>{opt}</button>)}</div>}
                  {q.type === 'multi' && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{q.options.map(opt => { const sel = (form.verticalDetails[q.key] || []).includes(opt); return <button key={opt} onClick={() => toggleMulti(q.key, opt)} style={pillStyle(sel)}>{sel ? '✓ ' : ''}{opt}</button>; })}</div>}
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Step 4: Timeline & Logistics */}
        {step === 4 && (
          <div>
            <h2 style={{ fontFamily: SERIF, fontSize: '1.8rem', fontWeight: 400, color: 'white', marginBottom: 8 }}>Timeline & logistics</h2>
            <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 32, fontSize: '0.95rem' }}>All optional — your account manager will confirm these details.</p>
            {form.vertical && (
              <div style={{ ...cardStyle, marginBottom: 28, borderColor: 'rgba(224,123,57,0.2)', background: 'rgba(224,123,57,0.04)' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#E07B39', marginBottom: 12 }}>Recommended SprintWork Configuration</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 16 }}>
                  {[{ label: 'Duration', value: SPRINT_CONFIG[form.vertical]?.duration }, { label: 'Team Size', value: SPRINT_CONFIG[form.vertical]?.team }, { label: 'Rate Range', value: SPRINT_CONFIG[form.vertical]?.rate }, { label: 'Model', value: SPRINT_CONFIG[form.vertical]?.model }].map(item => (
                    <div key={item.label}><div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{item.label}</div><div style={{ fontSize: '0.9rem', color: '#F08C4E', fontWeight: 500 }}>{item.value}</div></div>
                  ))}
                </div>
              </div>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div><label style={labelStyle}>Ideal Start Date</label><input type="date" value={form.startDate} onChange={e => updateForm('startDate', e.target.value)} style={inputStyle} /></div>
                <div><label style={labelStyle}>Deadline</label><input type="date" value={form.deadline} onChange={e => updateForm('deadline', e.target.value)} style={inputStyle} /></div>
              </div>
              <div><label style={labelStyle}>Budget Range</label><div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{BUDGET_OPTIONS.map(b => <button key={b.value} onClick={() => updateForm('budget', b.value)} style={pillStyle(form.budget === b.value)}>{b.label}</button>)}</div></div>
              <div><label style={labelStyle}>Communication Preference</label><div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{['Email', 'Slack', 'Video Calls', 'Phone', 'No preference'].map(opt => <button key={opt} onClick={() => updateForm('comms', opt)} style={pillStyle(form.comms === opt)}>{opt}</button>)}</div></div>
              <div><label style={labelStyle}>Compliance Requirements</label><div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{COMPLIANCE_OPTIONS.map(req => { const sel = form.compliance.includes(req); return <button key={req} onClick={() => toggleCompliance(req)} style={pillStyle(sel)}>{sel ? '✓ ' : ''}{req}</button>; })}</div></div>
              <div><label style={labelStyle}>Additional Notes</label><textarea value={form.notes} onChange={e => updateForm('notes', e.target.value)} rows={3} placeholder="Anything else we should know..." style={{ ...inputStyle, resize: 'vertical' }} onFocus={e => e.target.style.borderColor = '#E07B39'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'} /></div>
            </div>
          </div>
        )}

        {/* Step 5: Confirmation */}
        {step === 5 && (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            {isDupe ? (<><div style={{ fontSize: '3rem', marginBottom: 16 }}>⚠️</div><h2 style={{ fontFamily: SERIF, fontSize: '1.8rem', fontWeight: 400, color: '#FBBF24', marginBottom: 8 }}>Potential Duplicate Detected</h2><p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 32, fontSize: '0.95rem', maxWidth: 480, margin: '0 auto 32px' }}>This looks similar to an existing project. Your account manager will review within 24 hours.</p></>) : (<><div style={{ fontSize: '3rem', marginBottom: 16 }}>🎉</div><h2 style={{ fontFamily: SERIF, fontSize: '1.8rem', fontWeight: 400, color: 'white', marginBottom: 8 }}>Brief Submitted</h2><p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 32, fontSize: '0.95rem', maxWidth: 480, margin: '0 auto 32px' }}>Your project brief has been saved. An account manager will reach out within 24 hours.</p></>)}
            <div style={{ ...cardStyle, textAlign: 'left', maxWidth: 560, margin: '0 auto 32px' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#E07B39', marginBottom: 16 }}>Project Brief Summary</div>
              {[{ label: 'Project', value: form.projectName }, { label: 'Vertical', value: VERTICALS.find(v => v.key === form.vertical)?.label }, { label: 'Duration', value: SPRINT_CONFIG[form.vertical]?.duration }, { label: 'Team', value: SPRINT_CONFIG[form.vertical]?.team }, { label: 'Rate', value: SPRINT_CONFIG[form.vertical]?.rate }, { label: 'Status', value: isDupe ? 'Under Review (Duplicate Check)' : 'Submitted' }].map(row => (
                <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}><span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem' }}>{row.label}</span><span style={{ color: 'white', fontSize: '0.85rem', fontWeight: 500 }}>{row.value}</span></div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <Link href="/dashboard/employer" style={{ padding: '12px 28px', background: '#E07B39', color: 'white', borderRadius: 999, textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', boxShadow: '0 4px 16px rgba(224,123,57,0.3)' }}>View Dashboard</Link>
              <button onClick={() => { setStep(1); setForm({ projectName: '', companyName: form.companyName, description: '', vertical: '', verticalDetails: {}, budget: '', startDate: '', deadline: '', comms: '', notes: '', compliance: [] }); setSaved(false); setIsDupe(false); }} style={{ padding: '12px 28px', background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.6)', borderRadius: 999, border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600, fontSize: '0.9rem' }}>Scope Another Project</button>
            </div>
          </div>
        )}

        {/* Navigation buttons */}
        {step < 5 && (
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 40 }}>
            {step > 1 ? <button onClick={() => setStep(s => s - 1)} style={{ padding: '12px 28px', background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)', borderRadius: 999, border: '1px solid rgba(255,255,255,0.08)', cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.9rem' }}>← Back</button> : <div />}
            {step < 4 ? <button onClick={() => setStep(s => s + 1)} disabled={!canProceed()} style={{ padding: '12px 28px', background: canProceed() ? '#E07B39' : 'rgba(224,123,57,0.3)', color: 'white', borderRadius: 999, border: 'none', cursor: canProceed() ? 'pointer' : 'not-allowed', fontFamily: 'inherit', fontWeight: 600, fontSize: '0.9rem', boxShadow: canProceed() ? '0 4px 16px rgba(224,123,57,0.3)' : 'none' }}>Continue →</button>
            : <button onClick={handleSubmit} disabled={saving} style={{ padding: '12px 28px', background: saving ? 'rgba(224,123,57,0.5)' : '#E07B39', color: 'white', borderRadius: 999, border: 'none', cursor: saving ? 'not-allowed' : 'pointer', fontFamily: 'inherit', fontWeight: 600, fontSize: '0.9rem', boxShadow: '0 4px 16px rgba(224,123,57,0.3)' }}>{saving ? 'Submitting...' : 'Submit Brief →'}</button>}
          </div>
        )}
      </div>
    </div>
  );
}

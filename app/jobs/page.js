'use client';
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import Link from 'next/link';

const SECTORS = ['All', 'food_beverage', 'information_technology', 'marketing', 'legal', 'creative_art', 'business_services', 'video_photography', 'fashion', 'audio', 'finance'];
const SECTOR_LABELS = { food_beverage: '🍽️ Food & Beverage', information_technology: '💻 IT & Dev', marketing: '📣 Marketing', legal: '⚖️ Legal', creative_art: '🎨 Creative & Art', business_services: '👔 Business', video_photography: '📸 Photography', fashion: '👗 Fashion', audio: '🎵 Audio', finance: '💰 Finance' };

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sector, setSector] = useState('All');
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function load() {
      setLoading(true);
      let q = supabase.from('jobs').select('*, profiles(full_name, employer_profiles(company_name))').eq('status', 'active').order('created_at', { ascending: false });
      if (sector !== 'All') q = q.eq('sector', sector);
      if (search) q = q.ilike('title', `%${search}%`);
      const { data } = await q;
      setJobs(data || []);
      setLoading(false);
    }
    load();
  }, [sector, search]);

  const s = { fontFamily: 'DM Sans, sans-serif', minHeight: '100vh', background: '#F4F6FB' };

  return (
    <div style={s}>
      {/* Nav */}
      <nav style={{ background: 'white', borderBottom: '1px solid #E2E8F0', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <Link href="/" style={{ textDecoration: 'none', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.2rem', color: '#1455C4' }}>Work<span style={{ color: '#09112A' }}>Simplr</span></Link>
          <div style={{ display: 'flex', gap: 12 }}>
            <Link href="/login" style={{ padding: '8px 20px', border: '1.5px solid #E2E8F0', borderRadius: 999, textDecoration: 'none', color: '#09112A', fontSize: '0.9rem', fontWeight: 500 }}>Log in</Link>
            <Link href="/register" style={{ padding: '8px 20px', background: '#1455C4', borderRadius: 999, textDecoration: 'none', color: 'white', fontSize: '0.9rem', fontWeight: 500 }}>Get started</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #09112A 0%, #1E2D52 100%)', padding: '60px 24px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800, color: 'white', marginBottom: 12 }}>Browse jobs</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 28, fontSize: '1rem' }}>Hundreds of verified opportunities across the UK</p>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search job titles..."
            style={{ width: '100%', maxWidth: 480, padding: '14px 20px', borderRadius: 999, border: 'none', fontSize: '1rem', outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' }} />
        </div>
      </div>

      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '32px 24px' }}>
        {/* Sector filters */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
          {SECTORS.map(s => (
            <button key={s} onClick={() => setSector(s)}
              style={{ padding: '8px 16px', borderRadius: 999, border: `1.5px solid ${sector === s ? '#1455C4' : '#E2E8F0'}`, background: sector === s ? '#1455C4' : 'white', color: sector === s ? 'white' : '#6B7BA4', fontSize: '0.85rem', fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit' }}>
              {s === 'All' ? 'All sectors' : SECTOR_LABELS[s]}
            </button>
          ))}
        </div>

        {/* Job grid */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#6B7BA4' }}>Loading jobs...</div>
        ) : jobs.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <div style={{ fontSize: '3rem', marginBottom: 16 }}>🔍</div>
            <h3 style={{ fontFamily: 'Syne, sans-serif', color: '#09112A', marginBottom: 8 }}>No jobs found</h3>
            <p style={{ color: '#6B7BA4' }}>Try adjusting your search or sector filter</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20 }}>
            {jobs.map(job => (
              <div key={job.id} style={{ background: 'white', borderRadius: 16, padding: 28, boxShadow: '0 2px 16px rgba(20,85,196,0.06)', border: '1.5px solid #F0F4FF', transition: 'all 0.2s' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
                  <span style={{ background: '#EEF3FF', color: '#1455C4', padding: '4px 12px', borderRadius: 999, fontSize: '0.75rem', fontWeight: 500 }}>{SECTOR_LABELS[job.sector] || job.sector}</span>
                  <span style={{ background: '#E6F7EF', color: '#059669', padding: '4px 10px', borderRadius: 999, fontSize: '0.75rem', fontWeight: 500 }}>✓ Active</span>
                </div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: '#09112A', marginBottom: 6 }}>{job.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#6B7BA4', marginBottom: 14 }}>📍 {job.location} · {job.contract_type?.replace('_', ' ')}</p>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.3rem', fontWeight: 700, color: '#1455C4', marginBottom: 16 }}>
                  £{job.rate_amount}<span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', fontWeight: 400, color: '#6B7BA4' }}>/{job.rate_type}</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#6B7BA4', marginBottom: 20, lineHeight: 1.6 }}>{job.description?.substring(0, 100)}...</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, borderTop: '1px solid #F4F6FB' }}>
                  <span style={{ fontSize: '0.8rem', color: '#6B7BA4' }}>{job.profiles?.employer_profiles?.[0]?.company_name || 'Employer'}</span>
                  <Link href={`/register?type=worker`} style={{ padding: '8px 20px', background: '#1455C4', color: 'white', borderRadius: 999, textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}>Apply →</Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

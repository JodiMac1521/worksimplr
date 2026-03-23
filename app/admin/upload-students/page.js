'use client';
import { useState, useRef } from 'react';
import { supabase } from '../../../lib/supabase';

const SERIF = "'DM Serif Display', serif";

const EXPECTED_COLUMNS = ['first_name','last_name','email','school','major','grad_year','gpa','skills','tier','notes'];

function parseCSV(text) {
  const lines = text.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.trim().toLowerCase().replace(/\s+/g,'_').replace(/[^a-z_]/g,''));
  return lines.slice(1).map(line => {
    const vals = line.split(',').map(v => v.trim().replace(/^"|"$/g,''));
    const row = {};
    headers.forEach((h, i) => { row[h] = vals[i] || ''; });
    return row;
  }).filter(r => r.email && r.first_name);
}

export default function UploadStudents() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [results, setResults] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const fileRef = useRef();

  function handleFile(f) {
    if (!f || !f.name.endsWith('.csv')) return;
    setFile(f);
    setResults(null);
    const reader = new FileReader();
    reader.onload = e => {
      const rows = parseCSV(e.target.result);
      setPreview(rows);
      setHeaders(rows.length ? Object.keys(rows[0]) : []);
    };
    reader.readAsText(f);
  }

  async function handleUpload() {
    if (!preview.length) return;
    setUploading(true);
    setResults(null);

    const toInsert = preview.map(r => ({
      first_name:  r.first_name  || '',
      last_name:   r.last_name   || '',
      email:       r.email       || '',
      school:      r.school      || '',
      major:       r.major       || '',
      grad_year:   r.grad_year   || r.graduation_year || '',
      gpa:         r.gpa         || '',
      skills:      r.skills      || '',
      tier:        ['entry','mid','elite'].includes(r.tier) ? r.tier : 'entry',
      notes:       r.notes       || '',
      status:      'active',
      uploaded_by: 'admin',
    }));

    // Upsert by email — so re-uploading won't create duplicates
    const { data, error } = await supabase
      .from('students')
      .upsert(toInsert, { onConflict: 'email', ignoreDuplicates: false });

    setUploading(false);
    if (error) {
      setResults({ success: false, message: error.message });
    } else {
      setResults({ success: true, count: toInsert.length });
      setPreview([]);
      setFile(null);
    }
  }

  const inputStyle = {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 8,
    padding: '8px 12px',
    color: 'white',
    fontSize: '0.82rem',
    fontFamily: 'inherit',
  };

  return (
    <div style={{ minHeight: '100vh', background: '#081A30', fontFamily: 'DM Sans, sans-serif', color: 'white' }}>
      {/* Nav */}
      <nav style={{ background: 'rgba(10,35,66,0.95)', backdropFilter: 'blur(14px)', borderBottom: '1px solid rgba(224,123,57,0.2)', height: 60, display: 'flex', alignItems: 'center', padding: '0 32px', justifyContent: 'space-between' }}>
        <a href="/" style={{ textDecoration: 'none' }}>
          <img src="/logo.png" alt="Work Simplr" style={{ height:52,width:'auto',display:'block' }} />
        </a>
        <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>Admin Portal</span>
      </nav>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#E07B39', marginBottom: 10 }}>Admin</div>
          <h1 style={{ fontFamily: SERIF, fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 400, color: 'white', marginBottom: 12 }}>Upload Students</h1>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.95rem', lineHeight: 1.6 }}>
            Bulk-add Sprint-Terns™ to the platform via CSV. Existing emails will be updated, not duplicated.
          </p>
        </div>

        {/* Template download */}
        <div style={{ background: 'rgba(224,123,57,0.06)', border: '1px solid rgba(224,123,57,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 32, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: 4 }}>📋 CSV Template</div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)' }}>
              Required: <code style={{ color: '#F08C4E' }}>first_name, last_name, email</code> — Optional: school, major, grad_year, gpa, skills, tier, notes
            </div>
          </div>
          <button
            onClick={() => {
              const csv = 'first_name,last_name,email,school,major,grad_year,gpa,skills,tier,notes\nJane,Smith,jane@gmail.com,CU Boulder,Business,2026,3.5,"Writing, Research",entry,Strong communicator';
              const blob = new Blob([csv], { type: 'text/csv' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a'); a.href = url; a.download = 'sprint-terns-template.csv'; a.click();
            }}
            style={{ padding: '9px 18px', background: 'rgba(224,123,57,0.15)', border: '1px solid rgba(224,123,57,0.3)', borderRadius: 8, color: '#F08C4E', fontSize: '0.83rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap' }}>
            ↓ Download Template
          </button>
        </div>

        {/* Drop zone */}
        {!preview.length && (
          <div
            onDragOver={e => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={e => { e.preventDefault(); setDragOver(false); handleFile(e.dataTransfer.files[0]); }}
            onClick={() => fileRef.current.click()}
            style={{
              border: `2px dashed ${dragOver ? '#E07B39' : 'rgba(255,255,255,0.15)'}`,
              borderRadius: 16,
              padding: '64px 32px',
              textAlign: 'center',
              cursor: 'pointer',
              background: dragOver ? 'rgba(224,123,57,0.04)' : 'rgba(255,255,255,0.02)',
              transition: 'all 0.2s',
              marginBottom: 32,
            }}>
            <input ref={fileRef} type="file" accept=".csv" style={{ display: 'none' }} onChange={e => handleFile(e.target.files[0])} />
            <div style={{ fontSize: '3rem', marginBottom: 16 }}>📂</div>
            <div style={{ fontWeight: 600, fontSize: '1rem', marginBottom: 8 }}>Drop your CSV here, or click to browse</div>
            <div style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.35)' }}>.csv files only</div>
          </div>
        )}

        {/* Success / Error */}
        {results && (
          <div style={{
            background: results.success ? 'rgba(34,197,94,0.08)' : 'rgba(239,68,68,0.08)',
            border: `1px solid ${results.success ? 'rgba(34,197,94,0.25)' : 'rgba(239,68,68,0.25)'}`,
            borderRadius: 12, padding: '20px 24px', marginBottom: 32,
            display: 'flex', alignItems: 'center', gap: 16,
          }}>
            <span style={{ fontSize: '1.6rem' }}>{results.success ? '🎉' : '⚠️'}</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: 4, color: results.success ? '#4ade80' : '#fca5a5' }}>
                {results.success ? `${results.count} students uploaded successfully!` : 'Upload failed'}
              </div>
              {!results.success && <div style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.5)' }}>{results.message}</div>}
            </div>
          </div>
        )}

        {/* Preview table */}
        {preview.length > 0 && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, flexWrap: 'wrap', gap: 12 }}>
              <div>
                <span style={{ fontWeight: 700, fontSize: '1rem' }}>{preview.length} students ready to upload</span>
                <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.83rem', marginLeft: 12 }}>{file?.name}</span>
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <button onClick={() => { setPreview([]); setFile(null); }}
                  style={{ padding: '9px 18px', background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, color: 'rgba(255,255,255,0.5)', fontSize: '0.83rem', cursor: 'pointer', fontFamily: 'inherit' }}>
                  Clear
                </button>
                <button onClick={handleUpload} disabled={uploading}
                  style={{ padding: '9px 24px', background: uploading ? 'rgba(224,123,57,0.4)' : '#E07B39', border: 'none', borderRadius: 8, color: 'white', fontSize: '0.9rem', fontWeight: 700, cursor: uploading ? 'not-allowed' : 'pointer', fontFamily: 'inherit', boxShadow: '0 4px 16px rgba(224,123,57,0.3)' }}>
                  {uploading ? 'Uploading...' : `Upload ${preview.length} Students →`}
                </button>
              </div>
            </div>

            {/* Scrollable table */}
            <div style={{ overflowX: 'auto', borderRadius: 12, border: '1px solid rgba(255,255,0.08)', overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    {['first_name','last_name','email','school','major','grad_year','tier','skills'].map(h => (
                      <th key={h} style={{ padding: '10px 14px', textAlign: 'left', color: 'rgba(255,255,255,0.4)', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', fontSize: '0.7rem', whiteSpace: 'nowrap' }}>{h.replace('_',' ')}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {preview.slice(0, 50).map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)' }}>
                      {['first_name','last_name','email','school','major','grad_year','tier','skills'].map(h => (
                        <td key={h} style={{ padding: '9px 14px', color: h === 'email' ? '#F08C4E' : 'rgba(255,255,255,0.75)', whiteSpace: h === 'skills' ? 'normal' : 'nowrap', maxWidth: h === 'skills' ? 200 : 'none' }}>{row[h] || '—'}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              {preview.length > 50 && (
                <div style={{ padding: '12px 16px', textAlign: 'center', color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  + {preview.length - 50} more rows not shown
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

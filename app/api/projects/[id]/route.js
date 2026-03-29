import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function GET(request, { params }) {
  const supabase = createClient(supabaseUrl, supabaseKey, {
    global: { headers: { Authorization: request.headers.get('Authorization') || '' } }
  });
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { data: project, error } = await supabase.from('projects').select(`
    *, project_vertical_details(details, vertical),
    project_compliance(id, requirement),
    project_timeline(id, title, status, note, created_at, created_by)
  `).eq('id', params.id).eq('employer_id', user.id).single();

  if (error || !project) return NextResponse.json({ error: 'Project not found' }, { status: 404 });
  return NextResponse.json({ project });
}

export async function PATCH(request, { params }) {
  const supabase = createClient(supabaseUrl, supabaseKey, {
    global: { headers: { Authorization: request.headers.get('Authorization') || '' } }
  });
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await request.json();
  const allowedFields = ['project_name', 'project_description', 'additional_notes', 'budget', 'start_date', 'deadline', 'communication_pref'];
  const updates = {};
  for (const field of allowedFields) { if (body[field] !== undefined) updates[field] = body[field]; }
  if (Object.keys(updates).length === 0) return NextResponse.json({ error: 'No valid fields to update' }, { status: 400 });

  const { data, error } = await supabase.from('projects').update(updates).eq('id', params.id).eq('employer_id', user.id).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ project: data });
}

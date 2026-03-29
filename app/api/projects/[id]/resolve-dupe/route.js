import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function PATCH(request, { params }) {
  const supabase = createClient(supabaseUrl, supabaseKey, {
    global: { headers: { Authorization: request.headers.get('Authorization') || '' } }
  });
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await request.json();
  const action = body.action;
  if (!['merge', 'keep_separate', 'discard'].includes(action)) {
    return NextResponse.json({ error: 'Invalid action. Must be: merge, keep_separate, or discard' }, { status: 400 });
  }

  const { data: project } = await supabase.from('projects').select('status, employer_id').eq('id', params.id).single();
  if (!project || project.employer_id !== user.id) return NextResponse.json({ error: 'Project not found' }, { status: 404 });
  if (project.status !== 'duplicate') return NextResponse.json({ error: 'Project is not flagged as duplicate' }, { status: 400 });

  let newStatus, timelineTitle;
  if (action === 'keep_separate') {
    newStatus = 'submitted';
    timelineTitle = 'Duplicate Resolved \u2014 Kept Separate';
    await supabase.from('projects').update({ status: 'submitted', dupe_of_project_id: null, dupe_score: null, dupe_resolved: true }).eq('id', params.id);
  } else if (action === 'merge') {
    newStatus = 'cancelled';
    timelineTitle = 'Merged with Original Project';
    await supabase.from('projects').update({ status: 'cancelled', dupe_resolved: true }).eq('id', params.id);
  } else {
    newStatus = 'cancelled';
    timelineTitle = 'Discarded as Duplicate';
    await supabase.from('projects').update({ status: 'cancelled', dupe_resolved: true }).eq('id', params.id);
  }

  await supabase.from('project_timeline').insert({
    project_id: params.id, status: newStatus, title: timelineTitle,
    note: `Resolved by employer (action: ${action})`, created_by: user.id,
  });

  return NextResponse.json({ success: true, action, newStatus });
}

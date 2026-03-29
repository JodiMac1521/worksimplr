import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function GET(request) {
  const supabase = createClient(supabaseUrl, supabaseKey, {
    global: { headers: { Authorization: request.headers.get('Authorization') || '' } }
  });
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status');
  let query = supabase.from('projects').select(`*, project_vertical_details(details), project_compliance(requirement), project_timeline(title, status, created_at, note)`).eq('employer_id', user.id).order('created_at', { ascending: false });
  if (status && status !== 'all') query = query.eq('status', status);
  const { data, error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ projects: data });
}

export async function POST(request) {
  const supabase = createClient(supabaseUrl, supabaseKey, {
    global: { headers: { Authorization: request.headers.get('Authorization') || '' } }
  });
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await request.json();
  const required = ['projectName', 'companyName', 'description', 'vertical'];
  for (const field of required) {
    if (!body[field]?.trim?.()) return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
  }

  const SPRINT_CONFIG = {
    product_testing: { duration: '4-10 weeks', team: '3-10 testers', rate: '$18-22/hr', model: 'Per-session + weekly' },
    data_research: { duration: '2-6 weeks', team: '10-60 workers', rate: '$15-20/hr', model: 'Per-record + QA layer' },
    campus_marketing: { duration: '1-7 months', team: '5-25 ambassadors', rate: '$16-20/hr', model: 'Monthly retainer' },
    specialized_research: { duration: '2-4 weeks', team: '3-8 researchers', rate: '$18-22/hr', model: 'Fixed project fee' },
    tech_development: { duration: '2-8 weeks', team: '4-8 developers', rate: '$20-25/hr', model: '28-day SprintWork' },
    qa_uat: { duration: '2-6 weeks', team: '5-20 testers', rate: '$18-22/hr', model: 'Managed program' },
  };
  const config = SPRINT_CONFIG[body.vertical] || {};

  const { data: project, error } = await supabase.from('projects').insert({
    employer_id: user.id, project_name: body.projectName, company_name: body.companyName,
    contact_name: body.contactName || '', contact_email: body.contactEmail || user.email,
    project_description: body.description, service_vertical: body.vertical,
    industry: body.industry || null, budget: body.budget || null,
    start_date: body.startDate || null, deadline: body.deadline || null,
    communication_pref: body.comms || null, additional_notes: body.notes || null,
    status: 'submitted', intake_source: body.intakeSource || 'form',
    submitted_at: new Date().toISOString(),
    sprint_duration: config.duration, sprint_team_size: config.team,
    sprint_rate_range: config.rate, sprint_pricing_model: config.model,
  }).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  if (body.verticalDetails && Object.keys(body.verticalDetails).length > 0) {
    await supabase.from('project_vertical_details').insert({ project_id: project.id, vertical: body.vertical, details: body.verticalDetails });
  }
  if (body.compliance?.length) {
    await supabase.from('project_compliance').insert(body.compliance.map(req => ({ project_id: project.id, requirement: req })));
  }
  await supabase.from('project_timeline').insert({ project_id: project.id, status: 'submitted', title: 'Brief Submitted', note: `Via ${body.intakeSource || 'form'} intake`, created_by: user.id });

  const { data: check } = await supabase.from('projects').select('status, dupe_of_project_id, dupe_score').eq('id', project.id).single();
  return NextResponse.json({ project, isDuplicate: check?.status === 'duplicate', dupeOf: check?.dupe_of_project_id, dupeScore: check?.dupe_score }, { status: 201 });
                            }

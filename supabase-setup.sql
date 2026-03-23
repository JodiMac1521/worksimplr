-- ============================================================
-- Work Simplr — Supabase Schema Setup
-- Run this entire file in Supabase → SQL Editor → New query
-- ============================================================

-- 1. PROFILES TABLE
-- Auto-created when a user registers via Supabase Auth
-- ============================================================
create table if not exists public.profiles (
  id           uuid references auth.users(id) on delete cascade primary key,
  full_name    text,
  email        text,
  role         text check (role in ('worker', 'employer', 'admin')),
  created_at   timestamptz default now()
);

-- Auto-populate profiles on signup
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer as $$
begin
  insert into public.profiles (id, full_name, email, role)
  values (
    new.id,
    new.raw_user_meta_data->>'full_name',
    new.email,
    coalesce(new.raw_user_meta_data->>'role', 'worker')
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Row Level Security
alter table public.profiles enable row level security;
create policy "Users can view own profile"
  on public.profiles for select using (auth.uid() = id);
create policy "Users can update own profile"
  on public.profiles for update using (auth.uid() = id);


-- 2. STUDENTS TABLE
-- For bulk CSV uploads — separate from auth users
-- ============================================================
create table if not exists public.students (
  id              uuid default gen_random_uuid() primary key,
  first_name      text not null,
  last_name       text not null,
  email           text not null unique,
  school          text,
  major           text,
  grad_year       text,
  gpa             text,
  skills          text,          -- comma-separated
  tier            text check (tier in ('entry', 'mid', 'elite')) default 'entry',
  status          text check (status in ('active', 'inactive', 'pending')) default 'pending',
  notes           text,
  uploaded_by     text,          -- admin who uploaded
  created_at      timestamptz default now()
);

-- Row Level Security — only admins can read/write students
alter table public.students enable row level security;
create policy "Admins can manage students"
  on public.students for all
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- Allow anon reads for now (remove in production when you have admin auth)
create policy "Allow anon reads for dev"
  on public.students for select using (true);
create policy "Allow anon inserts for dev"
  on public.students for insert with check (true);


-- 3. JOBS TABLE (already exists — ensure columns are right)
-- ============================================================
alter table public.jobs add column if not exists title text;
alter table public.jobs add column if not exists description text;
alter table public.jobs add column if not exists employer_id uuid references public.profiles(id);
alter table public.jobs add column if not exists status text default 'open';
alter table public.jobs add column if not exists created_at timestamptz default now();

alter table public.jobs enable row level security;
create policy "Anyone can view open jobs"
  on public.jobs for select using (status = 'open');
create policy "Employers can manage own jobs"
  on public.jobs for all using (auth.uid() = employer_id);

-- ============================================================
-- Done! Tables: profiles, students, jobs
-- ============================================================

-- Employee portal schema

-- Weekly reports table (tracks employee hours/tasks each week)
create table if not exists public.weekly_reports (
  id           uuid default gen_random_uuid() primary key,
  employee_id  uuid references auth.users on delete cascade not null,
  week_of      date not null,
  tasks        text not null check (char_length(tasks) <= 200),
  certified    boolean not null default false,
  submitted_at timestamptz default now() not null
);

-- Index for fast per-employee lookups
create index if not exists weekly_reports_employee_id_idx on public.weekly_reports (employee_id);

-- Row-level security: employees see only their own reports
alter table public.weekly_reports enable row level security;

create policy "employees can insert own reports"
  on public.weekly_reports for insert
  with check (auth.uid() = employee_id);

create policy "employees can read own reports"
  on public.weekly_reports for select
  using (auth.uid() = employee_id);

-- HR documents storage bucket
insert into storage.buckets (id, name, public)
values ('hr-documents', 'hr-documents', false)
on conflict (id) do nothing;

-- Storage RLS: employees upload to their own folder, HR can read all
create policy "employees can upload own documents"
  on storage.objects for insert
  with check (
    bucket_id = 'hr-documents'
    and auth.uid()::text = (storage.foldername(name))[1]
  );

create policy "employees can read own documents"
  on storage.objects for select
  using (
    bucket_id = 'hr-documents'
    and auth.uid()::text = (storage.foldername(name))[1]
  );

-- Sentier Claude — V2 : table de progression liée aux comptes utilisateurs.
-- À coller et exécuter une seule fois dans Supabase > SQL Editor.

create table if not exists public.progression (
  user_id uuid references auth.users(id) on delete cascade primary key,
  lecons_terminees integer[] not null default '{}',
  xp integer not null default 0,
  serie integer not null default 0,
  derniere_visite date,
  updated_at timestamptz not null default now()
);

alter table public.progression enable row level security;

drop policy if exists "lecture de sa propre progression" on public.progression;
create policy "lecture de sa propre progression"
  on public.progression for select
  using (auth.uid() = user_id);

drop policy if exists "creation de sa propre progression" on public.progression;
create policy "creation de sa propre progression"
  on public.progression for insert
  with check (auth.uid() = user_id);

drop policy if exists "mise a jour de sa propre progression" on public.progression;
create policy "mise a jour de sa propre progression"
  on public.progression for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

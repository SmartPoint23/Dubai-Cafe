-- Beauty Queen Cosmetics REAL STORE V7
-- Run this in Supabase SQL Editor.

create extension if not exists "pgcrypto";

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text not null,
  brand text,
  price numeric(12,2) not null default 0,
  old_price numeric(12,2),
  currency text not null default 'KES',
  image text,
  description text,
  stock integer not null default 0,
  rating numeric(3,2) default 0,
  review_count integer not null default 0,
  badge text,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  order_number text unique not null,
  customer_name text not null,
  customer_email text,
  customer_phone text not null,
  shipping_address text not null,
  items jsonb not null,
  total numeric(12,2) not null,
  currency text not null default 'KES',
  payment_method text not null,
  payment_status text not null default 'pending',
  order_status text not null default 'pending',
  payment_reference text,
  mpesa_checkout_request_id text,
  paid_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.profiles (
  id uuid primary key,
  full_name text,
  phone text,
  role text not null default 'customer',
  created_at timestamptz not null default now()
);

create index if not exists products_category_idx on public.products(category);
create index if not exists products_active_idx on public.products(active);
create index if not exists orders_status_idx on public.orders(order_status);
create index if not exists orders_payment_status_idx on public.orders(payment_status);

alter table public.products enable row level security;
alter table public.orders enable row level security;
alter table public.profiles enable row level security;

-- Public storefront can read active products.
drop policy if exists "public read active products" on public.products;
create policy "public read active products"
on public.products for select
using (active = true);

-- Server uses service_role and bypasses RLS for writes/admin operations.
-- Never expose SUPABASE_SERVICE_ROLE_KEY in browser code.

-- Optional seed examples:
insert into public.products (name, category, brand, price, old_price, currency, image, description, stock, rating, review_count, badge)
select
  'Radiance Glow Serum', 'Skincare', 'Beauty Queen', 1850, 2300, 'KES',
  'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=85',
  'Brightening serum for a fresh, luminous look.', 25, 4.8, 124, 'BESTSELLER'
where not exists (select 1 from public.products where name='Radiance Glow Serum');


-- ================= V8 PRODUCTION STORE EXTENSIONS =================

create table if not exists public.store_settings (
  id integer primary key default 1 check (id = 1),
  store_name text not null default 'Beauty Queen Cosmetics',
  support_email text,
  support_phone text,
  currency text not null default 'KES',
  usd_rate numeric(12,4) default 130,
  updated_at timestamptz not null default now()
);

insert into public.store_settings(id) values (1)
on conflict (id) do nothing;

create table if not exists public.coupons (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,
  discount_type text not null check (discount_type in ('percent','fixed')),
  discount_value numeric(12,2) not null,
  min_order numeric(12,2) default 0,
  max_uses integer,
  used_count integer not null default 0,
  active boolean not null default true,
  expires_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.order_events (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references public.orders(id) on delete cascade,
  status text not null,
  note text,
  created_at timestamptz not null default now()
);

create index if not exists order_events_order_idx on public.order_events(order_id);

alter table public.store_settings enable row level security;
alter table public.coupons enable row level security;
alter table public.order_events enable row level security;

-- Atomic stock decrement. The API calls this after validating an order.
create or replace function public.decrement_product_stock(p_id uuid, p_qty integer)
returns boolean
language plpgsql
security definer
as $$
declare
  changed integer;
begin
  update public.products
     set stock = stock - p_qty,
         updated_at = now()
   where id = p_id and active = true and stock >= p_qty;
  get diagnostics changed = row_count;
  return changed = 1;
end;
$$;

-- Restore stock if an order is cancelled/refunded.
create or replace function public.restore_product_stock(p_id uuid, p_qty integer)
returns boolean
language plpgsql
security definer
as $$
declare
  changed integer;
begin
  update public.products
     set stock = stock + p_qty,
         updated_at = now()
   where id = p_id;
  get diagnostics changed = row_count;
  return changed = 1;
end;
$$;

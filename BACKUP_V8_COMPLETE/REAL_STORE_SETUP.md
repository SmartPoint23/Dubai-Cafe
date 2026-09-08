# REAL STORE SETUP — quick path

## 1) Database
- Create Supabase project.
- SQL Editor → paste `supabase/schema.sql` → Run.
- Keep the service role key server-side only.

## 2) API
- Node.js 20+ recommended.
- `npm install`
- Copy `.env.example` to `.env`.
- Add Supabase, M-PESA and PayPal credentials.
- `npm run start:api`

## 3) Storefront
- Serve the folder using a static web server.
- The new checkout calls `http://localhost:8787` by default.
- Change `localStorage.bq_api_base` to your deployed API URL if needed.

## 4) M-PESA
- Start with Daraja sandbox.
- Configure the callback URL to `https://YOUR_API_DOMAIN/api/payments/mpesa/callback`.
- Test STK push and verify callback updates the order to `paid`.

## 5) PayPal
- Start with sandbox.
- The API creates and captures PayPal orders server-side.
- Switch `PAYPAL_ENV=production` only after sandbox testing.

## 6) Admin
- Open `/admin.html`.
- Enter `ADMIN_API_KEY`.
- Add/delete products and update order status.

## 7) Users
- The `profiles` table is ready for Supabase Auth users.
- Before public launch, add proper JWT-based admin authorization instead of relying only on a shared API key.

## 8) Do not publish secrets
Never place:
- Supabase service role key
- M-PESA consumer secret/passkey
- PayPal client secret
- Admin API key
inside `index.html`, `app.js`, or any browser bundle.

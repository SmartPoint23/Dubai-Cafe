# Beauty Queen Cosmetics V8 — deployment path

## A. Supabase
1. Create a Supabase project.
2. Open SQL Editor.
3. Run `supabase/schema.sql`.
4. Copy Project URL + service role key into your API environment.
5. Never expose the service role key in browser code.

## B. Backend API
1. Node.js 20+.
2. `npm install`
3. Copy `.env.example` to `.env`.
4. Add all secrets.
5. `npm run start:api`
6. Confirm `GET /api/health` reports the expected integrations.

## C. Static storefront
Serve `beauty_queen_cosmetics` over HTTPS using a static host.
Before public launch, set:
`localStorage.bq_api_base = "https://YOUR-API-DOMAIN"`
or define `window.BQ_API_BASE` before `src/live-store.js`.

## D. M-PESA
- Begin with Daraja sandbox.
- Use an HTTPS public callback URL ending in `/api/payments/mpesa/callback`.
- Test STK prompt → callback → order changes to paid.
- Only then switch `MPESA_ENV=production`.

## E. PayPal
- Test with sandbox credentials.
- Confirm create → approval → capture.
- Only then use production credentials.

## F. Card payments
V8 deliberately does not store or submit raw PAN/CVV from this static page.
For Visa/Mastercard, use a PCI-compliant hosted/tokenized gateway and server-side webhook.

## G. Admin
Open `/admin.html`, enter the server `ADMIN_API_KEY`, and manage:
- products
- stock
- visibility
- orders
- statuses
- users
- coupons
- order timeline

## H. Before real public launch
- Use HTTPS everywhere.
- Replace the shared admin-key mechanism with Supabase Auth/JWT + role checks.
- Add rate limiting, logging, backups and monitoring.
- Verify refund/chargeback handling with the payment providers.
- Test stock race conditions and failed payments.
- Configure email/SMS/WhatsApp order notifications if desired.

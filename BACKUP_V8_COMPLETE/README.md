# Beauty Queen Cosmetics — REAL STORE V7

V7 keeps the complete V6 website and adds a real-store backend layer.

## What was added without deleting the old work

- Full V6 project preserved in `BACKUP_V6_COMPLETE/`
- Supabase/PostgreSQL schema in `supabase/schema.sql`
- Node/Express API in `server/server.js`
- Real order creation
- M-PESA Daraja STK Push + callback endpoint
- PayPal Orders API + capture endpoint
- Admin API key protection
- Admin dashboard with:
  - sales/revenue stats
  - products list
  - add product
  - delete product
  - orders
  - order status
  - users
- Live storefront bridge in `src/live-store.js`
- Real checkout overlay added to the existing storefront
- Existing V3/V4/V5/V6 files and backup snapshots remain

## Important: credentials are required for live money movement

This package contains the integration code, but no merchant secrets are embedded.

1. Create a Supabase project and run `supabase/schema.sql`.
2. Copy `.env.example` to `.env`.
3. Fill in Supabase server credentials.
4. Fill in M-PESA Daraja credentials and a public HTTPS callback URL.
5. Fill in PayPal sandbox credentials first, then production credentials after testing.
6. Set a strong `ADMIN_API_KEY`.
7. Install Node dependencies: `npm install`
8. Start API: `npm run start:api`
9. Open `index.html` through a local/static web server rather than `file://` for best browser behavior.
10. Open `admin.html` and enter the same admin key.

### Card payments

The checkout intentionally does **not** collect raw card numbers in this static site. For real Visa/Mastercard processing, connect a PCI-compliant gateway (for example a hosted checkout/tokenized provider) and add its server-side webhook before going live.

### Production deployment

Use HTTPS. Keep `SUPABASE_SERVICE_ROLE_KEY`, M-PESA secrets, PayPal secret and `ADMIN_API_KEY` on the server only. Never put them in browser JavaScript.

This is an integration-ready V7, not a claim that merchant accounts have been activated automatically.

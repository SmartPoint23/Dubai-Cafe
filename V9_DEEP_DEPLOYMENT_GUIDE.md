# Beauty Queen Cosmetics — V9 Deep Deployment Guide

## Goal
Put the existing V8 real-store architecture online without removing earlier versions.

## 1. Keep the project history
The ZIP contains the V8 source and its prior backup chain. `BACKUP_V8_COMPLETE/` is the full V8 snapshot.

## 2. Supabase
Create a Supabase project, open SQL Editor, and run:
- `supabase/schema.sql`

Then create server environment variables:
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

Never expose the service-role key in browser JavaScript.

## 3. M-PESA
Create/configure a Safaricom Daraja application and set:
- `MPESA_ENV`
- `MPESA_CONSUMER_KEY`
- `MPESA_CONSUMER_SECRET`
- `MPESA_SHORTCODE`
- `MPESA_PASSKEY`
- `MPESA_CALLBACK_URL`
- `MPESA_TRANSACTION_TYPE`

The callback must be reachable over public HTTPS in production.

## 4. PayPal
Set:
- `PAYPAL_ENV=live`
- `PAYPAL_CLIENT_ID`
- `PAYPAL_CLIENT_SECRET`

Start with sandbox testing before live credentials.

## 5. Server
From the project root:
```bash
npm install
npm run server
```
The backend defaults to port 8787.

Check:
```text
GET /api/health
```

## 6. Frontend
The storefront can use `window.BQ_API_BASE` or `localStorage.bq_api_base`.
Set it to the public backend URL before production.

## 7. Admin
Set a strong `ADMIN_API_KEY`.
For a public production launch, migrate the shared API key to authenticated Supabase users + role checks/JWT before exposing admin broadly.

## 8. Cards
Do not collect raw card numbers in this project. Connect a PCI-compliant hosted/tokenized card gateway if card payments are required.

## 9. Production checklist
- HTTPS enabled
- frontend origin configured
- backend health check passes
- Supabase schema applied
- product stock verified
- M-PESA sandbox callback tested
- PayPal sandbox create/capture tested
- admin access tested
- order status flow tested
- rollback ZIP stored safely
- secrets stored only in hosting secret manager

## 10. Rollback
If a V9 change causes trouble, use the V8 snapshot in:
`BACKUP_V8_COMPLETE/`
and the original V8 ZIP as the known-good package.

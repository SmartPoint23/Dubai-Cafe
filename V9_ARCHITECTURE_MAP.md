# V9 Architecture Map

Frontend
  -> `src/live-store.js`
  -> public/backend API
  -> Node/Express server (`server/server.js`)
  -> Supabase/PostgreSQL

Payments
  M-PESA -> Daraja STK Push -> HTTPS callback -> order/payment update
  PayPal -> server create -> PayPal -> server capture -> order/payment update

Admin
  Admin dashboard -> protected admin API -> Supabase

Preservation
  V3 -> V4 -> V5 -> V6 -> V7 -> V8 -> V9
  Each stage is retained through backup folders/snapshots where present.

Principle:
V9 adds operational depth; it does not intentionally delete the earlier store implementation.

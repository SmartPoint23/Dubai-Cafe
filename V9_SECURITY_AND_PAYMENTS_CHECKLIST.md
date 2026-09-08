# V9 Security & Payments Checklist

## Secrets
Never place these in HTML, client JS, GitHub, or the ZIP:
- M-PESA consumer key/secret
- M-PESA passkey
- PayPal client secret
- Supabase service-role key
- Admin API key

## Payments
M-PESA:
1. Initiate STK Push server-side.
2. Keep the callback endpoint public over HTTPS.
3. Treat the callback as the source of payment confirmation.
4. Do not mark an order paid merely because a browser says so.

PayPal:
1. Create order server-side.
2. Capture server-side.
3. Verify the returned order/payment state.
4. Update local order status only after server verification.

## Orders
- Prices are re-read server-side.
- Stock is checked server-side.
- Coupon validation happens server-side.
- Stock reservation uses the database RPC.
- Failed order creation can restore stock.

## Admin
The V8 admin API is protected by an API key. Before a serious public launch, use authenticated users and database-backed roles.

## Privacy
Collect only customer information needed to fulfill an order.
Do not log payment secrets.
Avoid logging unnecessary phone/address details.

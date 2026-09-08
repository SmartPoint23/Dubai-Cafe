# V9 Production Smoke Test

Run these tests after deployment.

## Store
- [ ] Home page opens
- [ ] Category filters work
- [ ] Product images load
- [ ] Product quick view works
- [ ] Cart opens
- [ ] Wishlist works
- [ ] Checkout opens
- [ ] Coupon can be entered
- [ ] Mobile layout works

## Backend
- [ ] `/api/health` returns healthy
- [ ] `/api/products` returns products
- [ ] `/api/settings` responds
- [ ] CORS allows only the intended frontend origin

## Orders
- [ ] Create a test order
- [ ] Confirm price comes from database
- [ ] Confirm stock decreases correctly
- [ ] Confirm order event is recorded
- [ ] Confirm failed order can restore stock where applicable

## M-PESA
- [ ] Sandbox STK request reaches phone
- [ ] Callback reaches HTTPS endpoint
- [ ] Successful payment updates order
- [ ] Failed/cancelled payment does not mark order paid

## PayPal
- [ ] Sandbox order creates
- [ ] Sandbox capture completes
- [ ] Order payment status updates

## Admin
- [ ] Stats load
- [ ] Products load
- [ ] Stock editing works
- [ ] Publish/hide works
- [ ] Order status update works
- [ ] Timeline/events load
- [ ] Coupon creation works

## Safety
- [ ] No secrets appear in browser source
- [ ] No secrets committed to Git
- [ ] HTTPS is active
- [ ] V8 backup is retained

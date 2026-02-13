# Specification

## Summary
**Goal:** Create a premium single-product ecommerce landing + checkout flow for “Pro 2 ANC Wireless Earbuds” (India) with UPI intent/QR payment initiation and an order flow stored in a Motoko canister.

**Planned changes:**
- Build a single-product landing page with 4 sections in order: Hero (3D-floating-style product visual, headline, price “₹1499 (Limited Offer)”, “Buy Now” CTA), Features (icon list), Offer (₹1499 emphasis), Trust (badges: “7 Days Replacement”, “Free Shipping India”).
- Apply a consistent dark-luxury, Apple-like minimal theme across landing and checkout, with soft glow around the product visual and no blue/purple as primary brand colors.
- Add smooth scrolling and subtle performance-friendly micro-animations (section reveal, CTA hover/press, product tilt/parallax).
- Create a dedicated checkout page/route with customer details, shipping address, quantity selector, inline validation, and an order summary computing totals from ₹1499 unit price.
- Implement UPI payment initiation via a generated `upi://pay...` deep link and a client-generated QR code, with centralized configuration for UPI payee details.
- Add Motoko-backed order flow: create order with status “pending_payment”, persist orders in stable storage, fetch order by id for confirmation/next steps.
- Allow users to submit UTR/reference after payment; store it on the order, set status to “payment_submitted”, and show a success state noting verification is pending (no automatic verification claims).
- Add lightweight navigation (top nav with product name + “Buy Now”) and a consistent footer with basic India-focused trust/support text; keep all user-facing text in English.

**User-visible outcome:** Users can view a premium landing page for “Pro 2 ANC Wireless Earbuds”, tap “Buy Now” to complete a simple checkout, initiate UPI payment via link or QR, receive an order id/confirmation screen, and submit a UTR/reference for manual verification.

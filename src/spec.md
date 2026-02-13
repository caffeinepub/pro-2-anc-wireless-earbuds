# Specification

## Summary
**Goal:** Restore the landing page hero product photo to the previously user-provided image to ensure it renders correctly.

**Planned changes:**
- Update `HERO_IMAGE_SRC` in `frontend/src/lib/pricing.ts` to point to the existing user-provided hero image file under `frontend/public/assets/generated` (replacing the current `product-hero-v2` reference).
- Verify the Hero section continues to use the centralized `HERO_IMAGE_SRC` constant and that the image loads without broken links.

**User-visible outcome:** The landing page hero displays the original user-provided product photo correctly (no missing/404 image), with no other visual or content changes.

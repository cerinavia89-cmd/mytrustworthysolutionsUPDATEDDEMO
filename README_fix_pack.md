# Fix Pack CSS Overrides (scoped)

Edits made **only** to `assets/css/styles.css` (appended near the bottom) to implement the requested page-scoped tweaks.

## Changes included

1. **Policies (body.page-policies)**
   - Removed glass/frost styling **only** for the first two blocks inside `main.container`:
     - `main.container > .card.glass-card.glass-card-lg`
     - `main.container > .glass-card`
   - Kept spacing/layout intact; removed background/border/blur/shadow (+ safety border-radius reset).

2. **Notary Signings (body.page-notary-signings)**
   - Prevented `.hero-btn` from overflowing/clipping on narrow widths.
   - Added small-screen (<= 420px) fallback to stack `.hero-actions` vertically and make buttons full width.

3. **Footer frosting**
   - Kept `.footer-frosted` globally.
   - Added **homepage-only** override (`body.page-home footer.footer-frosted`) to remove frosting while preserving a clean top border divider.

4. **About (body.page-about)**
   - Reduced the right “safe zone” padding on `#main.container` so cards can sit closer to the portrait without overlapping.
   - Optional: constrained `.glass-card` max-width to keep card widths reasonable.

5. **Life Insurance (body.page-life)**
   - Removed visual styling from the **outer** `.glass-card.glass-card-lg` wrappers in:
     - `.target-groups`
     - `.insurance-types`
   - Kept inner `.glass-tile` styling intact.
   - Removed extra outer padding (set to `0`) so only inner tiles read as cards.

## QA Gate checklist

- ✅ No HTML structure changes (no HTML files modified).
- ✅ Only targeted, page-scoped selectors were added (policies, notary, home, about, life).
- ✅ Homepage footer frosting removed via CSS override (class remains in HTML).
- ✅ Notary hero buttons cannot overflow at small widths; stacked layout under 420px prevents clipping.

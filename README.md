# Site Update — Image Asset Swap

## What was changed
The following image files in `assets/img/` were replaced **in-place** (same filenames as expected by existing CSS/HTML):

1. **Notary page hero background**
   - Replaced: `assets/img/notary-hero-bg.png`

2. **Strategic Planning page background**
   - Replaced: `assets/img/strategy-bg.png`

3. **Homepage / Contact / Policy hero**
   - Replaced: `assets/img/home-hero.png`

4. **About page background**
   - Replaced: `assets/img/about-bg.png`

No other files were modified.

## QA Gate
- ✔ No layout/structure changes (no HTML/CSS edits made)
- ✔ Filenames preserved exactly as referenced by existing CSS
- ✔ Changes applied consistently (direct file replacement in `assets/img/`)
- ✔ No navigation logic or components altered
- ✔ Only the requested assets were changed

## Notes
If your deployment pipeline uses caching/CDN, you may need to purge cache so the new images appear immediately.

## Additional update
- 2026-02-17: Updated `assets/img/strategy-bg.png` again per request (filename unchanged).

## Feb 17, 2026 — Favicon + performance optimizations (GitHub Pages & mobile)

### Favicon (“TS” logo in browser tabs)
Added standard favicon assets to the site root:
- `favicon.ico`
- `favicon-32x32.png`
- `favicon-16x16.png`
- `apple-touch-icon.png`
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`
- `site.webmanifest`

Injected favicon/manifest tags into the `<head>` of all HTML pages.

### Faster image loading (no layout changes)
Created lightweight WebP versions for large background photos and updated CSS to use `image-set()` with WebP (and PNG fallback):
- `home-hero.webp` + `home-hero-1280.webp`
- `about-bg.webp` + `about-bg-1280.webp`
- `strategy-bg.webp` + `strategy-bg-1280.webp`
- `notary-hero-bg.webp` + `notary-hero-bg-1280.webp`

Added page-specific `<link rel="preload" as="image">` for the above backgrounds on the pages where they’re used.

Added `width`/`height` and `decoding="async"` to logo `<img>` tags to reduce layout shift and speed decoding.

# Strategic Business Planning – Requested Updates

## Files modified (only)
- `strategic-business-planning.html`
- `assets/css/styles.css`

## Changes made

### 1) strategic-business-planning.html
- Added a **4th** glass service card as the **last** item inside:
  `.who-this-is-for .glass-grid`
- Card heading: **Guided support network**
- Includes the requested copy and a bullet list with the 3 core pillars using `ul.pillars-list`.

### 2) assets/css/styles.css
- Updated Strategy page card grid to display **2×2** on desktop by changing:
  `grid-template-columns: repeat(3, ...)` → `repeat(2, ...)`
  for:
  `body.page-strategy .who-this-is-for .glass-grid`
- Added light styling for the bullet list inside Strategy tiles:
  `body.page-strategy .glass-tile .pillars-list` and `li`

## QA Gate
- ✔ No section order/layout structure changed (only added one card inside existing grid)
- ✔ Hero / CTA / header / footer / menu unchanged
- ✔ Existing wording elsewhere unchanged
- ✔ Grid now shows 2 columns on desktop; mobile behavior (under 980px) unchanged
- ✔ New bullet list styling is scoped to `body.page-strategy` only

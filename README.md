# Gulo 🏔️🎣

Haiden & Mario's outdoor adventures site — hiking, fishing, photos, and a catch log.
Built with plain HTML, CSS, and JavaScript. No build tools, no setup.

## Files
- `index.html` — Home / intro + trip stats + recent adventures
- `adventures.html` — Trip log (hiking + fishing posts)
- `gallery.html` — Photo grid with click-to-enlarge lightbox
- `catches.html` — Fishing catch log with filters (by angler / species)
- `styles.css` — All styling (rugged / earthy theme)
- `script.js` — Menu, lightbox, filters
- `assets/` — Put your photos here

## How to view it
1. Open this folder in VS Code.
2. Double-click `index.html` to open it in your browser, **or**
3. In VS Code, install the "Live Server" extension, right-click `index.html` → "Open with Live Server" (auto-refreshes as you edit).

## Adding your own photos
1. Drop image files into the `assets/` folder (e.g. `assets/haiden.jpg`).
2. The placeholders show the exact filename each spot expects.
3. In the gallery, replace a placeholder like:
   ```html
   <figure><div class="ph" style="height:240px;">assets/photo-01.jpg</div><figcaption>Ridge line at sunrise</figcaption></figure>
   ```
   with a real image:
   ```html
   <figure><img src="assets/photo-01.jpg" alt="Ridge line at sunrise"><figcaption>Ridge line at sunrise</figcaption></figure>
   ```
4. For the hero background, add `assets/hero.jpg` — it's wired up in `styles.css` already.

## Editing content
- Text lives right in the `.html` files — change the trip titles, dates, and descriptions to your real adventures.
- Update the numbers in the stats strip on `index.html`.
- Add new catches by copying a `<div class="catch">…</div>` block in `catches.html`.

## The fun stuff (game features)
- **Catch Dex** (`catchdex.html` + `fishdex.js`): all 45 fish species in Utah. Caught species light up; the rest are locked silhouettes. **Each category completes on its own** (its own progress bar) plus a grand-total bar up top. **To mark a fish caught**, open `fishdex.js` and change that fish's `caught: false` to `caught: true` (optionally add `by` and `date`). The full illustrated **Fish of Utah poster** is linked at the top of the page (`assets/fish-of-utah.jpg`).
  - **Catch photos:** each caught fish can show a real photo. Drop the image in `assets/dex/` and add a `photo: "assets/dex/your-file.jpg"` field to that fish in `fishdex.js`.
- **Season Standings** (home page): Haiden-vs-Mario rivalry across categories. Edit the `data-h` / `data-m` numbers on each row in `index.html` — the winner and the "Gulo Champion" are highlighted automatically.
- **Trophy Case** (home page): achievement badges. Move a badge from locked to earned by removing `trophy--locked` from its `<div>` in `index.html`.
- **Live fishing conditions** (Catch Log): real-time weather via the free Open-Meteo API (no key). Change `LAT`/`LON` in the script at the bottom of `catches.html` to your home water.
- **Upgraded trip map** (Adventures): green pins = hikes, orange = fishing, a dashed line traces the season's route, and each pin links down to its trip. Edit the `trips` list in `adventures.html`.

## Extra features
- **Trip map** (Adventures page): edit the `trips` list near the bottom of `adventures.html` — each pin is `[latitude, longitude, "Name", "hike" or "fish"]`. Get coordinates by right-clicking a spot in Google Maps.
- **Scoreboard** (Catch Log): totals for Haiden vs Mario update automatically from the catch cards — no manual counting. Just add/remove `<div class="catch" data-angler="...">` cards.
- **Brand logo**: the wolf logo lives at `assets/logo-cream.png` (for dark backgrounds — used in the nav and hero) and `assets/logo-green.png` (for light backgrounds). Background removed, "Drury" text removed, recolored to the site palette.
- **Favicon**: the little tab icon is `assets/favicon.png` (generated from the wolf logo).
- **Social link preview**: `assets/social-card.jpg` (1200×630) is already made from the logo. When the site is live, update the `og:` URLs in each page's `<head>` to your real address.

## Photos — keep the site fast
Phone photos are huge (5–10 MB) and will make pages slow. Before adding them:
1. Resize to ~1600 px wide (plenty for web).
2. Compress with a free tool like squoosh.app or tinypng.com — aim for under ~300 KB each.
3. Then drop them in `assets/`.

## Colors (in `styles.css`, top `:root` block)
Forest green, bark brown, burnt-orange accent, sand/cream. Change any hex value there and it updates site-wide.

Have fun out there. 🥾

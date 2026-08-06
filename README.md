# 🎯 Mission Control

Vitality, Stratos, and Pit Stop — merged into one installable app, as three tabs under one roof. Now a fully detailed PWA: full icon set, iOS splash screens, offline fallback, update detection, and an in-app About panel.

## Files (keep all of these together in the same folder)

| File | Purpose |
|---|---|
| `index.html` | The whole app — all three tabs live in this one file |
| `manifest.json` | PWA install metadata — full icon set, shortcuts, display modes |
| `sw.js` | Versioned offline service worker with update detection |
| `icon-72.png` … `icon-512.png` | Full icon set (72/96/128/144/152/192/384/512px) for Android, Windows, and favicons |
| `splash-*.png` | iOS launch/splash screens for common iPhone and iPad sizes |
| `nature-1.png` … `nature-6.png` | Original nature/animal illustrations for Office Hours' Quiet Corner rotator |
| `README.md` | This file |

## The 5 tabs (Dashboard opens first)

- **🏠 Dashboard** — the home screen. Live summary cards for Vitality, Stratos, Office Hours, and Pit Stop, each tappable to jump straight to that tab. If any tutoring session is starting within about an hour, a red alert banner appears right at the top with a direct Join Now button — you don't have to be on the Office Hours tab to catch it.
- **🥗 Vitality** — daily food/movement/water tracker with Bengali & budget-friendly meal options, a supplement corner, emoji on every item, a 14-day heatmap, and a streak counter.
- **🛰️ Stratos** — executive hub: Hub / Goals / Vitals, with quick links, a Focus Ritual timer, Focus Mode (declutters everything but the clock/timer), an animated particle background, a WhatsApp progress-share button, a rotating quote/insight ticker, and **Nova** — a warm, affectionate chat assistant grounded in your real stats.
- **🎓 Office Hours** — every recurring session lives here now, under one **Tutoring Sessions** list: Kiren, Dharshinie, Kaushik, Darsh, and Simran, each with its own live countdown, schedule, and Join button (Darsh and Simran also get a Daily Report button). Admin forms (EdifyChamps Daily Report, Infinity Learn No-Show) sit above that, and a "Quiet Corner" — an original nature/animal illustration with a motivational quote — rotates below every 30 seconds.
- **🧯 Pit Stop** — the 90-second emotional reset, with 9 scenarios, rotating exercises, and a real animated breathing pacer.

Every clickable button, link, and chip across all five tabs plays a short synthesized click sound (Web Audio API — no external audio files, works fully offline).

**Typography**: unified across the whole app — Fraunces (italic serif) for headings, Inter for body text, IBM Plex Mono (small caps) for labels, tags, and timestamps. Everything is center-aligned throughout, with the two horizontally-scrolling nav strips left-anchored so they stay scrollable.

## What "detailed PWA" means here

- **Full icon set** — 8 sizes so Android, iOS, and desktop installs all get a crisp icon instead of a blurry upscale.
- **iOS splash screens** — a proper launch screen instead of a blank white flash when opening from the home screen.
- **Offline fallback** — if a request fails entirely with no cache match, navigations fall back to the cached app shell instead of showing a browser error page.
- **Update detection** — when you redeploy a new version, an in-app banner ("A new version is ready — Refresh") appears instead of silently serving stale content.
- **About panel** (ℹ️ button, top right) — shows install status, offline readiness, local storage used, and a quick per-app status line (Vitality streak, Stratos phase). Tap the ℹ️ any time.
- **Manifest shortcuts** — long-press the installed icon (Android) to jump straight into Vitality, Stratos, or Pit Stop.

## Install

Open `index.html` on a real web host (GitHub Pages, Netlify, etc. — service workers and install prompts need `https://` or `localhost`, not a bare local file).
- **Android/Chrome**: the Install banner appears automatically, or use the menu → "Add to Home Screen"
- **iOS/Safari**: Share sheet → "Add to Home Screen" (you'll now see a proper splash screen on launch)

## Deploy to GitHub Pages

Push all the files above to a repo, enable Pages, done. Same idea as the original Stratos repo.

## Bumping the version later

If you edit `index.html` again, bump `VERSION` at the top of `sw.js` (e.g. `v2` → `v3`) so the update banner correctly detects the change and offers a refresh instead of silently serving the old cached copy.

## Data & privacy

Everything — Vitality's checklist history, Stratos's goals/sleep log/sessions, Pit Stop's session count — stays in this device's local storage only. Nothing is sent anywhere.

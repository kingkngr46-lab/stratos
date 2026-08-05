# 🛰️ Stratos — Executive Hub

Stratos, kept fully intact — plus everything from the Daily Structure PWA merged in as its real engine. One app, three tabs.

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | The whole app |
| `manifest.json` | PWA install metadata |
| `sw.js` | Offline service worker |
| `icon-192.png` / `icon-512.png` | HUD ring icon — cyan (vitals) + amber (build) |

## What merged where

Nothing from Stratos was dropped — everything now actually works instead of showing placeholder states:

| Stratos element | Now |
|---|---|
| Welcome banner, live clock | Real live clock, not frozen at 00:00:00 |
| Quick links (Prashashak, Timeline, AI Neural, Repository, GPT-4, Archive) | All live links, plus "+ Bind New" to add your own |
| "Begin Ritual" timer | A real 25:00 countdown — start, pause, reset |
| Kiren's Sessions ("Calculating next window...") | Set a real recurring day/time (+ optional link) — it computes the actual countdown, or shows "LIVE WINDOW" |
| Global Intel ("Initializing...") | Real intel, computed from your own data — sleep streak, today's content-day status, active phase |
| Mission Log (Sam) | A real status line that changes based on your integrity score, not a fixed message |
| System Integrity 0% | A real ring, computed as an even blend of Vitals (sleep) and Build (phase + stage progress) |
| Daily Targets / ADD | Became the full **Goals** tab — 7 real horizons, pre-loaded with your actual plan, plus your own "Add" per tier |

## The 3 tabs

- **Hub** — clock, integrity ring (the same "sleep and build carry equal weight" idea from Daily Structure, now as one ring plus the twin mini-bars underneath), quick links, Focus Ritual, Kiren's Sessions, Global Intel, Mission Log
- **Goals** — Daily Objectives → Weekly Focus → Bi-Weekly → Monthly Growth → Quarterly → Half Yearly → Yearly Vision, each an expandable accordion. Bi-Weekly holds the 3 channels (Savoring Money / We The Mind Math-Sci / Tech) with their per-video workflow, locked until their Phase unlocks. Monthly/Quarterly hold the Phase gate; Half Yearly/Yearly hold the Stage gate. Every tier has its own "Add a target" input.
- **Vitals** — the sleep log, bar chart, and streak from Daily Structure, unchanged — this is still the real gate everything else is judged against.

## Deploy to GitHub Pages

Same repo you already have at `kingkngr46-lab.github.io/stratos` works — replace its contents with these 5 files (back up the old ones first if you want the original source), or point a fresh repo/Pages site at this folder.

## Install

Add to Home Screen from Chrome (Android) or Safari's Share sheet (iOS). Works offline after first load. All data — goals, sleep log, links, phase/stage progress — stays in this device's local storage only.

## One thing worth remembering

The Daily Structure PWA still exists as its own file if you ever want it back standalone — this build folds its logic in but doesn't delete the original.

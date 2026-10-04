# AEDES-X — Interactive Product Demo

An interactive portfolio experience for the **AEDES-X ESP32 Smart Mosquito Trap**.

This GitHub Pages demo is designed so a visitor can **use the dashboard inside a visual phone** and immediately see the **real AEDES-X prototype change state beside it**.

> The public website is a browser simulation of the real ESP32 logic. It does not remotely control the physical prototype.

## Experience

The page is split into two connected areas:

- **Interactive Phone Dashboard** — visitors can tap Manual, Auto LDR, Timer, the virtual main switch, the LDR simulator, maintenance controls, and the simulated physical mode button.
- **Real Product Preview** — the website switches between two processed states of the real prototype photograph:
  - UV / green indicator OFF
  - UV / green indicator ON

The OFF state is produced from the original real prototype photograph using image processing. No synthetic product image is required.

## Core demo logic

| Feature | Behaviour |
|---|---|
| Manual | User turns the trap ON/OFF |
| Auto LDR | ON when ADC ≥ 2100, OFF when ADC ≤ 1800 |
| Timer Dawn | 05:30–07:30 |
| Timer Dusk | 18:00–19:30 |
| Main switch | Locks controls when OFF |
| Physical mode button | Manual → Auto LDR → Timer |
| BM / EN | Browser-side language switching |
| Maintenance | Browser `localStorage` in the public demo |

## Real prototype vs public demo

| Real ESP32 Prototype | GitHub Pages Demo |
|---|---|
| ESP32 GPIO controls hardware | Browser JavaScript simulates state |
| Real UV LED + fan | Real product photo switches ON/OFF state |
| Real LDR ADC | Interactive light slider |
| SSD1306 OLED | Dashboard state preview |
| Local hotspot `AedesX-Control` | Public GitHub Pages |
| ESP32 Preferences | Browser localStorage for demo maintenance |

## Run locally

No build process is required.

```bash
python -m http.server 8000
```

Open:

```text
http://localhost:8000
```

## Deploy to GitHub Pages

1. Upload the repository files to GitHub.
2. Open **Settings → Pages**.
3. Choose **Deploy from a branch**.
4. Choose `main` and `/ (root)`.
5. Save and wait for the public URL.

## Files

```text
.
├── index.html
├── styles.css
├── app.js
├── README.md
└── assets/
    ├── aedesx-on.webp
    └── aedesx-off.webp
```

## Tech stack

- HTML
- CSS
- Vanilla JavaScript
- GitHub Pages
- Browser localStorage
- No framework
- No backend
- No external API
- No external runtime dependency

## Portfolio note

AEDES-X is an ESP32-based smart mosquito-trap prototype featuring Manual, light-responsive Auto LDR, and scheduled Timer modes, together with a local mobile dashboard, OLED feedback, maintenance reminders, and a physical-button fallback.

This public interactive demo recreates the device behaviour so reviewers can explore the project without having the physical hardware in front of them.

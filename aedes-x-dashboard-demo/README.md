# AEDES-X Interactive Dashboard Demo

A GitHub Pages-ready interactive portfolio demo for **AEDES-X**, an ESP32-based smart mosquito-trap prototype developed as a STEM project.

## What this demo shows

This public demo mirrors the visual identity and core behaviour of the real local ESP32 dashboard:

- Manual Mode
- Auto LDR Mode with the same hysteresis thresholds
  - Dark ON: `LDR >= 2100`
  - Light OFF: `LDR <= 1800`
- Timer Mode
  - Dawn: `05:30–07:30`
  - Dusk: `18:00–19:30`
- Virtual main switch lock
- Simulated physical mode button (`GPIO32`)
- Live UV + fan state
- Live timer countdown
- BM / EN language switch
- Maintenance reminder demo
- Simulated OLED output
- Real AEDES-X prototype photograph

## Important portfolio note

This website is an **interactive simulation**, not a remotely connected live device.

The real prototype dashboard runs locally on the ESP32 hotspot (`AedesX-Control`, `192.168.4.1`).  
This GitHub Pages version reproduces the interaction in browser-side JavaScript so visitors can test the project without having the physical prototype in front of them.

Maintenance data in this demo is stored in browser `localStorage`. It is device/browser-specific and may be removed when browser data is cleared.

## Run locally

No build step or package installation is required.

You can simply open `index.html`, or run a small local server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Publish with GitHub Pages

1. Create a new GitHub repository, for example `aedes-x-dashboard-demo`.
2. Upload all files in this folder to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`.
6. Save.
7. GitHub will provide the public URL after deployment.

The project uses only relative file paths, so no code changes are required for a normal GitHub Pages repository.

## Files

```text
.
├── index.html
├── styles.css
├── app.js
├── .nojekyll
└── assets/
    └── aedesx-prototype.webp
```

## Suggested portfolio description

> AEDES-X is an ESP32-based smart mosquito-trap prototype with Manual, light-responsive Auto LDR, and scheduled Timer modes. I designed a local mobile dashboard for device control and status monitoring, with an OLED display and physical-button fallback. This public interactive demo recreates the dashboard behaviour in the browser so the project can be explored without connecting to the physical ESP32.

## Tech

- HTML
- CSS
- Vanilla JavaScript
- Browser `localStorage` for demo maintenance history
- No framework
- No external CDN
- No internet-dependent assets

The real embedded version runs on ESP32 using Arduino C++, Wi-Fi AP mode, `WebServer`, `Preferences`, and an SSD1306 OLED.

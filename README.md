# Quantum Physics Basics

An interactive, beginner-friendly static webpage introducing the basics of quantum physics.

## What is included?

- Explanations of wave-particle duality, superposition, uncertainty, and entanglement
- Animated CSS quantum illustration in the hero section
- Canvas-based interactive simulator with Wave, Particle, Superposition, and Uncertainty modes
- Five-question quiz with instant feedback and scoring
- Responsive layout for desktop and mobile screens

## Run locally

No build step or dependencies are required. Open `index.html` directly in a browser, or start a local server:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Deploy with GitHub Pages

In the repository, open **Settings → Pages**, choose **Deploy from a branch**, select the `main` branch and `/ (root)` folder, and save. The published site will use the repository's GitHub Pages URL.

## Files

- `index.html` — page structure and content
- `styles.css` — responsive layout, theme, and CSS animations
- `script.js` — simulator animation and quiz behavior

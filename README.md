# Camarillo 24/7 Plumbing website

A single-page static website for a 24-hour emergency plumbing service in Camarillo, CA.

## Files

- `index.html` – page content and structure (includes LocalBusiness/Plumber schema for SEO)
- `styles.css` – styles and responsive layout
- `script.js` – mobile menu and contact-form handling

## Preview

Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

## Before going live

The business name, phone number `(805) 555-0199`, and email are placeholders. Replace them with real details:

- Search for `555-0199` and `camarillo247plumbing` across `index.html` and `script.js`.
- Update the response-time and warranty claims to match what the business actually offers.
- The contact form has no backend. Connect it to a form service (e.g. Formspree or Netlify Forms) to receive requests.

## Deploying

Any static host works: GitHub Pages, Netlify, Vercel, or Cloudflare Pages. No build step is needed.

# Truecons Homepage (redesign)

Static site, no build step. HTML + CSS + vanilla JS.

## Structure
- `index.html`  page markup (hero, about, services, projects, why us, reviews, recognition, careers, contact, footer)
- `css/styles.css`  all styles. Colours, fonts live in `:root` variables at the top; dark/light themes are built in
- `js/main.js`  header, scroll reveals, counters, project filter and lightbox, reviews carousel, mobile menu, WhatsApp enquiry form
- `images/`  project photos (named after each project)

## Run locally
    python3 -m http.server 8000
Open http://localhost:8000

## Common edits
- **Add a project:** copy one `<article class="pc r" ...>` block in `index.html`, change image path, title and `data-s` (`design` or `built`).
- **Add reviews:** edit the `REVIEWS` array at the top of `js/main.js`: `{q:"text", n:"Name", p:"Area"}`. Empty array shows the "Share your experience" button.
- **WhatsApp number:** search `918122603565` in `index.html` and `js/main.js`.
- **Colours:** change `--ac` (accent), `--bg`, `--tx` in `:root`.

## Content to confirm with the client
- Years of experience (old site showed both 20 and 11), so none is shown
- Real client reviews
- Project status (current / upcoming / completed) for each project
- Owner names beside the phone numbers (B. Elango, P. Prabhu, taken from the Facebook page)
- More project and interior photos

## Deploy
Upload the folder as is to any static host (Netlify, Vercel, GitHub Pages, cPanel).

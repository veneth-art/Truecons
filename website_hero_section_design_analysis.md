# Website Hero Section Design Analysis & Specification

**Reference Brand:** DC Carpentry & Construction (Chorley)  
**Industry:** Residential Construction, Carpentry & Renovation  
**Design Style:** Modern, Trust-Driven, High-Contrast Architectural Editorial  

---

## 1. Layout & Structural Architecture

The hero section utilizes a **framed, full-width card layout** separated from a warm off-white page canvas, creating a clean, editorial aesthetic that lets architectural photography take center stage.

* **Top Navigation Bar (Header):**
  * **Container:** Full-width with generous horizontal padding (`~40px–60px`), vertical height `~80px–90px`.
  * **Left Zone (Brand Identity):** Custom monogram logo (`DC` incorporating a subtle door/architectural motif) paired with stacked uppercase serif/sans-serif wordmark (`CARPENTRY & CONSTRUCTION`) and location sub-label (`CHORLEY`).
  * **Center Zone (Primary Navigation):** Horizontal menu links (`Home`, `About`, `Services v`, `Projects`, `Reviews`, `Areas`, `Contact`). Active state (`Home`) is highlighted inside a crisp white pill container (`border-radius: 9999px`).
  * **Right Zone (Conversion & Direct Contact):** Clickable phone number (`01257 543082`) for immediate lead capture, paired with a primary dark-green pill CTA (`Free quote`) featuring a circular icon badge with an upward-right diagonal arrow (`↗`).

* **Hero Banner Container:**
  * **Framing:** Inset from the viewport edges (`margin: 0 40px` on desktop) with pronounced rounded corners (`border-radius: 24px` to `32px`), giving it a modern, contained card look.
  * **Background Treatment:** Full-bleed architectural photograph (brick extension with dark anthracite sliding doors and warm exterior wall sconces) overlaid with a **left-to-right dark gradient scrim** (`linear-gradient(90deg, rgba(15,18,16,0.82) 0%, rgba(15,18,16,0.45) 55%, rgba(15,18,16,0.15) 100%)`) to guarantee WCAG AA/AAA text legibility without obscuring the craftsmanship on the right.
  * **Content Alignment:** Left-aligned content block vertically centered within the banner (`max-width: 620px`, left padding `~64px`).

---

## 2. Color Palette

The palette balances earthy, trustworthy construction tones with crisp modern UI contrast.

| Role | Color Name | Hex (Approx.) | Usage |
| :--- | :--- | :--- | :--- |
| **Page Background** | Warm Alabaster / Cream | `#F5F3EB` | Outer canvas & header background |
| **Brand Primary** | Deep Forest / Sage | `#3A4F3C` | Logo mark, primary header CTA button |
| **Brand Accent** | Muted Sage Green | `#5A745B` | Logo monogram (`DC`) |
| **Surface Light** | Pure White | `#FFFFFF` | Active nav pill, primary hero CTA, headline text |
| **Text Secondary** | Soft Off-White | `#E5E5E0` | Hero subheadline / body copy |
| **Text Dark** | Charcoal Black | `#1C1E1D` | Navigation links, phone number, light button text |
| **Glass Overlay** | Translucent Dark | `rgba(255, 255, 255, 0.08)` | Secondary hero CTA background (`backdrop-filter: blur(8px)`) |

---

## 3. Typography & Hierarchy

* **Eyebrow / Kicker:**
  * **Copy:** `CRAFTING UNIQUE SPACES`
  * **Style:** Sans-serif, uppercase, small (`11px–12px`), wide letter-spacing (`0.15em`), medium weight, soft off-white. Sets an aspirational, bespoke tone.
* **Main Headline (`H1`):**
  * **Copy:** *"Building & Renovation Specialists Across Chorley & Lancashire"*
  * **Style:** Bold geometric/neo-grotesque sans-serif (similar to *Plus Jakarta Sans*, *Inter*, or *Outfit*), tight line-height (`1.1`), negative letter-spacing (`-0.02em`), large scale (`48px–60px`).
  * **SEO & UX Value:** Immediately communicates **what** they do (*Building & Renovation Specialists*) and **where** they operate (*Chorley & Lancashire*).
* **Subheadline / Body Copy:**
  * **Copy:** *"Whether you're planning a home extension, full renovation, loft conversion or structural alteration, DC Carpentry & Construction provides a complete design and build service from concept to completion."*
  * **Style:** Regular sans-serif (`16px–18px`), relaxed line-height (`1.6`), max width ~55–65 characters per line for effortless scanning.

---

## 4. Interactive Elements & CTAs

The hero uses a **dual-CTA hierarchy** inside pill-shaped buttons (`border-radius: 9999px`), each featuring a circular micro-container on the right housing a `↗` arrow icon:

1. **Primary Hero CTA (`View our services`):**
   * Solid white background (`#FFFFFF`) with dark charcoal text (`#1C1E1D`) and a light gray circular icon badge (`#EFEFEF`).
   * *Goal:* Low-friction exploration for homeowners still researching capabilities.
2. **Secondary Hero CTA (`Get a free quote`):**
   * Glassmorphism effect (`background: rgba(255, 255, 255, 0.1)`, `border: 1px solid rgba(255, 255, 255, 0.35)`, `backdrop-filter: blur(8px)`) with white text.
   * *Goal:* High-intent lead conversion directly from the fold.

---

## 5. UX & Conversion Strengths

* **Immediate Local Trust:** Combining local geographic keywords in the `H1`, a local landline number (`01257` Chorley area code) in the header, and real project photography builds instant credibility.
* **Visual Breathing Room:** Placing the dark photo container inside a warm cream outer shell prevents visual heaviness and elevates the brand above typical trade websites.
* **Clear Action Paths:** Visitors can either call immediately, request a quote, or browse services without scrolling.

---

## 6. Developer Implementation Blueprint (HTML/CSS Reference)

```html
<header class="site-header">
  <div class="logo">DC | Carpentry & Construction</div>
  <nav class="nav-links">
    <a href="#" class="active">Home</a>
    <a href="#about">About</a>
    <a href="#services">Services ▾</a>
    <a href="#projects">Projects</a>
    <a href="#reviews">Reviews</a>
    <a href="#areas">Areas</a>
    <a href="#contact">Contact</a>
  </nav>
  <div class="header-actions">
    <a href="tel:01257543082" class="phone-link">01257 543082</a>
    <a href="#quote" class="btn btn-dark">Free quote <span class="icon-circle">↗</span></a>
  </div>
</header>

<section class="hero-wrapper">
  <div class="hero-card">
    <div class="hero-content">
      <span class="eyebrow">CRAFTING UNIQUE SPACES</span>
      <h1>Building &amp; Renovation Specialists Across Chorley &amp; Lancashire</h1>
      <p>Whether you're planning a home extension, full renovation, loft conversion or structural alteration, DC Carpentry &amp; Construction provides a complete design and build service from concept to completion.</p>
      <div class="hero-cta-group">
        <a href="#services" class="btn btn-light">View our services <span class="icon-circle">↗</span></a>
        <a href="#quote" class="btn btn-glass">Get a free quote <span class="icon-circle">↗</span></a>
      </div>
    </div>
  </div>
</section>
```

---

## 7. Responsive Adaptation Notes

* **Tablet (`< 1024px`):** Collapse center navigation into a clean hamburger menu; keep the phone icon and `Free quote` pill visible in the header.
* **Mobile (`< 640px`):** Reduce outer horizontal margins from `40px` to `16px`, adjust `H1` to `32px–36px`, darken the background scrim slightly for full-width text readability, and stack the two hero CTA buttons vertically (`width: 100%`).
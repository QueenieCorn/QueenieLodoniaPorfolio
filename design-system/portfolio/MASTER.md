# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Queenie Lodonia — WordPress Developer portfolio
**Category:** Portfolio / Personal — dark luxury, reference-matched
**Design Dials:** Variance 6/10 (Balanced / Modern) | Motion 6/10 (Standard) | Density 4/10 (Standard)

**Provenance:** Pattern and typography come from `ui-ux-pro-max --design-system`
("Portfolio Grid" + "Classic Elegant"). The palette does **not** — it is derived from a
supplied reference design, because the skill database has no dark-burgundy entry and
returned a light pink/lavender scheme that contradicts the brief. Where the two disagree,
this file records what is actually implemented in `src/`.

---

## Global Rules

### Color Palette

Dark-only. `color-scheme: dark` is pinned; there is no light variant, because the
aesthetic depends on the dark ground. This is a deliberate departure from the skill's
`dark-mode-pairing` rule.

| Role | Hex | CSS Variable | Notes |
|------|-----|--------------|-------|
| Background | `#1A0508` | `--color-bg` | Page ground |
| Background raised | `#2A0A10` | `--color-bg-raised` | Section lift |
| Panel | `#4A0F1A` | `--color-panel` | Stat cards |
| Band | `#6B1220` | `--color-band` | Contact band, hero circle |
| Rose | `#E8B4A0` | `--color-rose` | Display headline, hover state |
| Cream | `#E5D0BC` | `--color-cream` | Logo, headings, solid buttons |
| Muted | `#C9958C` | `--color-muted` | Body copy |
| Gold | `#C9A87C` | `--color-gold` | Icons, seals, focus ring |
| Blush | `#F2DFDA` | `--color-blush` | Light card surfaces |
| Ink | `#2A0A10` | `--color-ink` | Text on light surfaces |
| Line | `#5A1A24` | `--color-line` | Borders |
| Line soft | `#3D0E16` | `--color-line-soft` | Low-emphasis dividers |

**Contrast:** every text/surface pair in use was scripted against WCAG AA and clears 4.5:1.
Worst real pair is muted body on the contact band at 4.71:1.
Re-run the contrast check if any surface value changes.

### Typography

| Role | Font | Weights | Usage |
|------|------|---------|-------|
| Display | Playfair Display | 400, 500, 700, 900 + italic | All headings, numerals, logotypes |
| Wordmark | Bodoni Moda | 900 | **Hero word only** — nothing else |
| Body / labels | Jost | 300, 400, 500 | Body copy, uppercase tracked labels |

All three through `next/font` (self-hosted, `display: swap`). No CDN link.

- Section labels: `.eyebrow` — 11px, `letter-spacing: 0.25em`, uppercase, gold rule after.
- Body: 300 weight, `line-height: 1.7`.

**Hero wordmark compression.** The reference sets `BRANDS` in an ultra-condensed didone —
letters ~0.30em wide against a 265px cap. Measured from the actual font binaries:

| | letters | width/cap ratio |
|---|---|---|
| Reference | 0.30em | 2.49 |
| Bodoni Moda 900 natural | 0.770em | 6.16 |
| Bodoni Moda 900 @ `scale-x-[0.45]` | 0.347em | 2.77 |

No free font reaches that ratio natively, so the wordmark is compressed to 0.45 with
`tracking-[-0.02em]`. At 1440 that renders 662px wide against the reference's 660px, with a
245px cap against 265px. Stems end up lighter than the reference — an unavoidable
consequence of squeezing, since stem thickness is fixed once width and cap are matched.

Playfair needs **no** compression: its `I DESIGN` ratio is 5.94 against the reference's 6.00.

Re-derive the clamps if the compression ratio changes — they are tuned so the wordmark
clears the photograph's subject at every breakpoint.

### Layout

- Container `max-w-7xl`, gutters `px-4 / sm:px-6 / lg:px-8`.
- Section rhythm `py-16 / lg:py-24`.
- Breakpoints 320 / 375 / 768 / 1024 / 1440. Grids: stats 1→3, work 1→2→3→4,
  experience is a single-column timeline.
- **Hero is the one full-bleed exception.** From `lg` the photo leaves the container
  (`lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2`) so it reaches the viewport edge, and the
  section becomes `lg:min-h-svh lg:flex lg:items-center`. Two scrims sit over it: a left
  gradient dissolving it into the page, and a top gradient keeping the transparent nav
  legible. Below `lg` the photo returns to normal flow **after** the headline.
- Nav floats transparent over the hero and switches to the solid blurred bar once scrolled
  past it, driven by an IntersectionObserver on `#home`.
- **Fit rule:** any display type set in `vw` must be checked against the usable column
  width before shipping. The hero word needs a separate `lg:` clamp because the column
  narrows to 58% there; without it the word runs behind the portrait.

### Effects

- Radius: `rounded-sm` on cards, `rounded-md` on the contact band, full on pills and the portrait.
- No hard shadows. Depth comes from gradient surfaces and the fixed radial bloom on `body`.
- Blur is reserved for the sticky header and the badge backing — not decoration.

### Motion

All transitions 150–300ms, transform/opacity only. Everything below is disabled by the
`prefers-reduced-motion` block in `globals.css`.

| Trigger | Behaviour |
|---------|-----------|
| Scroll into view | `Reveal` — IntersectionObserver, 700ms fade + translate, 90ms stagger, observer disconnects after firing |
| Pill hover | Background sweeps in from the left (`scaleX`), arrow nudges 4px |
| Card hover | Cover `scale(1.05)` inside `overflow-hidden`, title to rose, card lifts 4px |
| Nav link hover | Colour to rose; active item marked by a dot, not colour alone |
| Contact row hover | Icon to gold, row indents 8px |
| Continuous | Rotating seal only, 22s linear |

### Components

`src/components/` — `Nav` (client: mobile panel, active-section observer, hero overlay),
`Hero`, `About`, `Work`, `Experience`, `Contact`, `Footer`, plus shared `Reveal`,
`RotatingBadge`, `Peony`, `BehanceIcon`.

Content lives in `src/lib/content.ts`. Copy changes go there, not in components.

### Content sourcing

The 12 projects are the real published work from
[behance.net/queenieloda5ae](https://www.behance.net/queenieloda5ae) — titles, categories
and years taken from those pages, each card linking out to its gallery. Behance carries **no
written descriptions** for any of them, so cards show cover + title + category + year only,
and the case-studies section was removed rather than filled with invented copy.

Cover images live in `public/work/<slug>.jpg`, pulled from each gallery's `og:image` and
normalised to 808px wide JPEG (~1.4 MB for all twelve). They are served through `next/image`
with `loading="lazy"`, and carry `alt=""` — the `h3` inside the same link already names the
project, so alt text would only repeat it.

Bio, skills, stats, employment history, email and page title all come from the resume PDF
at `RESUME_URL` (Queenie_Lodonia_Resume). The `Experience` section is that resume's
employment history verbatim — 7 roles, Jun 2015 to Mar 2025. The invented "My Design
Process" section it replaced was reference-design filler, not the user's content.

Anything that cannot be verified must not be asserted.

### Icons

Lucide (`lucide-react`), stroke 1–1.25 to sit with the light type. No emoji.
Lucide has dropped brand icons, so `BehanceIcon` is drawn locally to the official
mark's geometry rather than substituted with a generic glyph.

---

## Avoid

- Corporate templates, generic layouts.
- Adding a light theme — the palette has no light counterpart.
- Raw hex in components. Use the tokens above.
- Colour as the only signal — the nav marks the active item with a dot, not just colour.
- Inventing biography, metrics or project copy. Every claim traces to the resume or Behance.

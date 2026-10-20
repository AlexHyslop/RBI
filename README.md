# RBI — rbi-kent.co.uk

Website for **RB Interiors (Kent) Limited**, a building and interior contractor
based in Kemsley, Sittingbourne. Built with [Astro](https://astro.build),
statically generated, deployed on Vercel from `main`.

## Running it

Requires Node 22.22+ (see `.nvmrc` — Node 24 is what this was built against).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output into dist/
npm run preview  # serve the built output
```

## Where things live

```
src/
  data/site.ts        every piece of copy that repeats: company details,
                      nav, services, sectors, process. Edit here first.
  layouts/Base.astro  <head>, fonts, JSON-LD, header + footer
  components/         Header, Footer, Logo, Figure, PageHero, CallToAction
  pages/              one file per route
  styles/global.css   design tokens, type scale, shared primitives
public/               favicon, robots.txt, and photographs when they arrive
```

### Editing content

Most changes are a one-line edit in `src/data/site.ts`. Adding a service there
adds it to the homepage list, the services page and the footer at once.

### Photographs

The site is built photo-ready but ships without them. `Figure.astro` renders a
hatched plate with its caption where an image will go; drop files into
`public/photos/` and pass `src` to turn a plate into a real photograph:

```astro
<Figure src="/photos/medway-washrooms.jpg" alt="…" caption="Fig. 01 — …" />
```

### The contact form

`src/pages/contact.astro` has a `FORM_ENDPOINT` constant. While it is empty the
form composes an email in the visitor's own mail client, so enquiries are not
lost. Set it to a POST endpoint (Formspree, a Vercel function, a CRM webhook)
for server-side delivery.

## Design notes

Ink on paper, hairline rules, one accent (`--accent`, a burnt brick red), and a
mono face for labels and numbers. No gradients, no drop shadows, no rounded
corners — the look is meant to read as a drawing set, not a template. Tokens
all live at the top of `src/styles/global.css`.

## Content caveat

The original rbi-kent.co.uk is offline (the domain resolves to an unconfigured
host) and the Wayback Machine only holds a GoDaddy parking page, so none of the
previous site's copy was recoverable. The structure and service list here are
reconstructed from search-engine records of the old site plus the Companies
House entry (no. 08002496). **The copy, phone number, email address and the
testimonial need checking by the client before this goes live.**

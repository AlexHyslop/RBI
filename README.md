# RBI — rbi-kent.co.uk

Website for **RB Interiors (Kent) Limited**, building and refurbishment
contractors covering the South East. Astro, statically generated, deployed on
Vercel from `main`.

## Running it

Requires Node 22.22+ (see `.nvmrc` — built against Node 24).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output into dist/
npm run preview  # serve the built output
```

## Pages

`/` · `/our-services/` · `/contact-us/` — the same three the previous site had,
at the same URLs, so existing links and search results still land.

## Where things live

```
src/
  data/site.ts          company details, nav, the eight services, the four
                        sectors. Nearly every content edit happens here.
  layouts/Base.astro    <head>, fonts, JSON-LD, header + footer, scroll reveals
  components/           Header (overlay menu), Footer, PageBanner,
                        SectorTiles, ContactForm
  pages/                one file per route
  styles/global.css     design tokens, type scale, buttons, shared helpers
public/
  logo.png              navy lockup, transparent
  logo-white.png        white lockup for navy and photographic backgrounds
  icon.png              favicon, cut from the house mark
  photos/               hero, sector tiles, service photos, the mono band
```

Adding a service to `src/data/site.ts` adds it to the homepage grid, the
services page and the footer at once.

## Design

Modelled on [jenner-group.co.uk](https://jenner-group.co.uk): full-bleed
photography, burger-only navigation over a full-screen overlay, a lead
statement whose opening clause picks up the brand colour, washed-back image
tiles that resolve on hover, a mono band, and a grey footer carrying a bold
statement plus quick links. The hero is a full-bleed photograph with the name,
strapline and buttons overlaid on it.

Colour comes from the logo: navy `#1D366C` with grey `#4F5052` and white.
Type is Figtree throughout.

## The contact form

`FORM_ENDPOINT` in `src/components/ContactForm.astro` is empty, so the form
composes the message in the visitor's own mail client and nothing is lost. Set
it to a POST endpoint (Formspree, a Vercel function, a CRM webhook) for
server-side delivery.

## Photography — replace this

**Every photograph on the site is stock and needs swapping for RBI's own
work.** They are from [Pexels](https://www.pexels.com) under the Pexels licence
(free to use, no attribution required), resized and compressed in
`public/photos/`. They are there so the layout can be judged, not because they
show RBI jobs. Replace the files in place, keeping the same names and roughly
the same aspect ratios, and nothing else needs touching:

`hero.jpg` and `hero-portrait.jpg` are the exception — they are RBI's own
photograph of an office floor, cropped two ways so narrow screens get the full
portrait frame rather than a sliver of the landscape one.

| File | Used for | Aspect |
| --- | --- | --- |
| `hero.jpg` | homepage hero, landscape | 16:9 |
| `hero-portrait.jpg` | homepage hero under 48rem | 3:4 |
| `residential/commercial/educational/industrial.jpg` | sector tiles | 4:3 |
| `decorating/refurbishment/bathrooms/partitioning.jpg` | service sections | 3:2 |
| `band.jpg` | full-width mono band | 21:9, greyscale |

## Content provenance

The live site is down and only its **home page** survives in the Wayback
Machine, captured 27 February 2025. The services, the strapline, "We've Been in
Business For Over 20 years", the phone number, the email address and the
South East England coverage all come from that capture. `/our-services/` and
`/contact-us/` were never archived, so the body copy on those pages — and the
longer descriptions under each service — is newly written and **needs Richard's
sign-off before go-live.**

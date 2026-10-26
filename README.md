# Mannath Real Estate

An original, responsive three-page UAE real estate website built with Astro, TypeScript, and CSS. Static HTML output, with lightweight JavaScript for navigation, scroll reveals, and enquiry previews.

## Development

```sh
npm install
npm run dev
```

## Verify and build

```sh
npm run check
npm run build
npm run preview
```

## Before launch

- Set `PUBLIC_SITE_URL` to the confirmed production origin; the default `https://mannath.example` is deliberately a placeholder. This updates canonical URLs, social metadata, robots.txt and the sitemap.
- Connect the enquiry form to an approved form service or backend, replace the preview messaging, and add the company's verified contact and privacy details. Currently the form validates inputs, prepares an enquiry and offers copying; it does not send or store personal data.
- Replace lifestyle inspiration with licensed company property photography and verified listings. No sample images imply actual inventory. Photos currently sourced from Unsplash: photo-1512453979798-5ea266f8880c, photo-1600607687920-4e2a09cf159d, photo-1613977257363-707ba9348227, photo-1518684079-3c830dcef090.
- The original SVG monogram is in `public/logo-mark.svg`. The accessible wordmark is `src/components/Logo.astro`.

## Design references

Taraf (https://www.tarafholding.com/) and Penthouse.ae (https://penthouse.ae/) informed the cinematic, editorial approach. The brand, layouts, styling and copy are original to this project.

Deployment is configured separately from this source repository.

## Visual themes

The floating Themes button opens a sidebar that switches between **Aurelia** (Theme Four), **Evergreen** (Theme One), **Atelier** (Theme Two), and **Nocturne** (Theme Three), and remembers the choice in local storage across all pages. Aurelia is the default; existing visitors are introduced to it once, then their selected theme is remembered. Direct previews: `/?theme=1`, `/?theme=2`, `/?theme=3` and `/?theme=4`. Switching with the sidebar removes the preview parameter so subsequent reloads respect the visitor's latest choice.

Atelier has its own architectural hero, asymmetric collection grid, arched image treatment, warm espresso/bronze palette and motion. Styles are isolated in `src/styles/atelier.css`; the original palette and layout remain available. Both themes honor reduced-motion preferences.

### Nocturne — Theme Three

Preview with `/?theme=3` or select Nocturne from the floating theme sidebar. A midnight, champagne and muted rose design with a three-scene carousel, masked typography reveals, crossfades, gentle image motion and a horizontally scrolling collection. Includes previous/next, slide indicators, keyboard arrows, touch swipes and a pause control. Slides advance every five seconds with long crossfades and continuous gentle image movement. Autoplay continues during mouse hover and pointer interaction; it pauses for keyboard focus, offscreen content and background tabs, and is disabled for reduced-motion preferences.

Additional illustrative Unsplash photography: photo-1600210492486-724fe5c67fb0, photo-1600047509807-ba8f99d2cdde, photo-1600607687939-ce8a6c25118c. These are architectural inspiration, not advertised UAE listings.

Nocturne's carousel now includes seven scenes. Additional Unsplash images: photo-1613490493576-7fde63acd811 (pool villa), photo-1600607688969-a5bfcd646154 (garden residence), photo-1600210492493-0946911123ea (interior), photo-1512632578888-169bbbc64f33 (Abu Dhabi landmark).

### Aurelia — Theme Four

Preview with `/?theme=4`. Deep olive, burnished copper, champagne and parchment create a warm editorial identity across all pages. Includes an arched three-image carousel with crossfades, autoplay, pause, keyboard and swipe controls; scroll parallax; rotating ornament; moving typography ribbon; staggered reveals; and a mobile swipe collection. Reduced-motion preferences disable autoplay and decorative motion. Styles live in `src/styles/aurelia.css` and the hero in `src/components/AureliaHero.astro`.

### Reference palettes — Themes Seven, Eight and Nine

New previews: `/?theme=7` (Signal), `/?theme=8` (Amethyst), `/?theme=9` (Terra). The Themes drawer preserves all earlier designs. Signal is introduced once as the default, after which the visitor's choice persists.

- Signal: charcoal `#2A2A2A`, moonlit silver `#C0C0C0`, signal red `#E10600`.
- Amethyst: jet black `#050505`, royal amethyst `#3B0A6B`, electric cyan `#00E5FF`.
- Terra: sage `#87A96B`, walnut `#5A3E2B`, amber `#D5851F`.

These landing pages now feature dedicated three-image hero carousels, animated typography, photographic collections and previous/next, keyboard, swipe and pause controls. Signal uses an editorial silver/red split composition; Amethyst uses an immersive violet-tinted panorama; Terra uses arched daylight photography and sage collection sections. Autoplay respects reduced motion, keyboard focus, background tabs and active theme. Inner pages use dedicated photography per theme with entrance and hover motion. Photography is illustrative, not advertised inventory.

Dedicated Unsplash photo IDs: Signal — `1615874959474-d609969a20ed`, `1600566753086-00f18fb6b3ea`; Amethyst — `1600121848594-d8644e57abab`, `1486406146926-c627a92ad1ab`; Terra — `1616486338812-3dadae4b4ace`, `1449844908441-8829872d2607`.

Additional dedicated carousel photo IDs: Signal `1600047509782-20d39509f26d`; Amethyst `1511818966892-d7d671e672a2`; Terra `1449158743715-0a90ebb6d2d8`.

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

The floating Themes button opens a sidebar that switches between **Evergreen** (Theme One) and **Atelier** (Theme Two), and remembers the choice in local storage across all pages. Theme One is the default. Direct previews: `/?theme=1`, `/?theme=2` and `/?theme=3`. Switching with the sidebar removes the preview parameter so subsequent reloads respect the visitor's latest choice.

Atelier has its own architectural hero, asymmetric collection grid, arched image treatment, warm espresso/bronze palette and motion. Styles are isolated in `src/styles/atelier.css`; the original palette and layout remain available. Both themes honor reduced-motion preferences.

### Nocturne — Theme Three

Preview with `/?theme=3` or select Nocturne from the floating theme sidebar. A midnight, champagne and muted rose design with a three-scene carousel, masked typography reveals, crossfades, gentle image motion and a horizontally scrolling collection. Includes previous/next, slide indicators, keyboard arrows, touch swipes and a pause control. Slides advance every five seconds with long crossfades and continuous gentle image movement. Autoplay continues during mouse hover and pointer interaction; it pauses for keyboard focus, offscreen content and background tabs, and is disabled for reduced-motion preferences.

Additional illustrative Unsplash photography: photo-1600210492486-724fe5c67fb0, photo-1600047509807-ba8f99d2cdde, photo-1600607687939-ce8a6c25118c. These are architectural inspiration, not advertised UAE listings.

Nocturne's carousel now includes seven scenes. Additional Unsplash images: photo-1613490493576-7fde63acd811 (pool villa), photo-1600607688969-a5bfcd646154 (garden residence), photo-1600210492493-0946911123ea (interior), photo-1512632578888-169bbbc64f33 (Abu Dhabi landmark).

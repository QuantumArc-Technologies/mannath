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

The floating Themes button opens a sidebar that switches between **Evergreen** (Theme One) and **Atelier** (Theme Two), and remembers the choice in local storage across all pages. Theme One is the default. Direct previews: `/?theme=1` and `/?theme=2`. Switching with the sidebar removes the preview parameter so subsequent reloads respect the visitor's latest choice.

Atelier has its own architectural hero, asymmetric collection grid, arched image treatment, warm espresso/bronze palette and motion. Styles are isolated in `src/styles/atelier.css`; the original palette and layout remain available. Both themes honor reduced-motion preferences.

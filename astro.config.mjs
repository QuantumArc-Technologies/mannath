import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({ site: process.env.PUBLIC_SITE_URL || 'https://mannath.example', output: 'static', devToolbar: { enabled: false }, integrations: [sitemap()], trailingSlash: 'always' });

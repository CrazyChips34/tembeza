// @ts-check
import { defineConfig } from 'astro/config';

// Official Astro integrations (preferred over manual Vite plugins)
import tailwind from '@astrojs/tailwind';
// Vercel adapter enables server-side rendering + API routes in production
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // We need server output so that `/src/pages/api/*` routes run when deployed.
  output: 'server',

  // Vercel serverless functions adapter (recommended for Astro + API routes).
  adapter: vercel(),

  // Tailwind integration sets up PostCSS + Tailwind for you.
  integrations: [tailwind()],
});
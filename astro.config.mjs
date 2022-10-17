import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://markteekman.github.io',
  base: '/frontend-mentor-challenge-starter',
  integrations: [tailwind()]
})
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import { site } from './src/data/config.json';

// https://astro.build/config
export default defineConfig({
  site: site.baseurl,
  integrations: [mdx(), sitemap(), tailwind()]
});
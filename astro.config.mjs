// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';

import tailwindcss from '@tailwindcss/vite';

import { remarkHeadingId } from './src/lib/remark-heading-id.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://engineering.kaseovo.com',

  markdown: {
    processor: unified({
      remarkPlugins: [remarkHeadingId],
    }),
  },

  integrations: [mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});
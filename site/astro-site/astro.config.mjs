import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://thai-cozinha-conteudo-nr2k.vercel.app',
  integrations: [sitemap()],
});

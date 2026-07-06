import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://thai-cozinha-conteudo.vercel.app',
  integrations: [sitemap()],
});

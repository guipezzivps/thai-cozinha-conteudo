import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { mkdirSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, 'instagram');
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1080, height: 1350 } });
await page.goto(`file://${join(__dirname, 'carrossel.html')}`);

const slides = await page.$$('.slide');
let i = 1;
for (const slide of slides) {
  const num = String(i).padStart(2, '0');
  await slide.screenshot({ path: join(outDir, `slide-${num}.png`) });
  console.log(`slide-${num}.png`);
  i++;
}

await browser.close();
console.log(`${slides.length} slides renderizados em ${outDir}`);

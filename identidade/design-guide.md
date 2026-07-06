# Identidade visual — Thai Cozinha

> Como a marca aparece em tudo que for gerado pra Thai Cozinha (carrossel, site de apoio).
> As skills de conteúdo/carrossel devem ler esse arquivo (não o `identidade/design-guide.md` da raiz, que é da Tua Marca Online — ver `CLAUDE.md` deste projeto).
> Cores extraídas pelo usuário a partir do logo em 2026-07-06.

---

## Cores

- **Primária (verde oliva):** `#5D6B1D` — usada no nome "Thai", folhas e elementos principais
- **Secundária (marrom escuro):** `#733518` — texto "COZINHA FIT INCLUSIVA", chocolates e detalhes
- **Marrom dourado:** `#8A782D` — ramos de trigo e sombras
- **Neutra clara / bege:** `#F0DCBF` — faixas, creme, elementos claros
- **Destaque (caramelo):** `#C2A766` — mel, tampa de pote, colher, detalhes de contraste
- **Fundo:** `#FEFEFE` (branco quase puro)

**Secundárias de apoio** (usar com moderação, detalhes pequenos):
- Verde-folha claro: `#7A9A3A`
- Marrom chocolate: `#5A2D18`
- Caramelo claro: `#D8B07A`
- Marrom-avermelhado (corações): `#8E3D24`

## Uso recomendado (carrossel/site)

- **Fundo escuro alternativo:** usar o marrom escuro `#733518` no lugar do preto/navy genérico
- **Fundo claro:** `#FEFEFE` ou `#F0DCBF`
- **Cor de destaque / CTA:** `#5D6B1D` (verde oliva) como cor principal de botão/CTA; `#C2A766` como acento secundário
- **Texto sobre fundo claro:** `#733518` ou `#5A2D18`
- **Texto sobre fundo escuro:** `#FEFEFE`

## Tipografia

Não especificada pelo cliente ainda. O logo usa uma fonte script/cursiva pra "Thai" (título) e uma sans-serif condensada em caixa alta pra "COZINHA FIT INCLUSIVA" (faixa). Pra carrossel/site, usar Inter (peso 700-900 pros títulos) até termos confirmação de fonte oficial — mantém legibilidade em qualquer tamanho.

## Estilo geral

Natural, acolhedor, artesanal/gourmet — não é um visual "clínico" de nutricionista. Elementos do logo (folhas, trigo, coco, chocolate, potinho de doce, colher de madeira, corações) reforçam: ingrediente natural + indulgência + comida de verdade. Evitar visual muito clean/corporativo — o tom é mais caseiro do que institucional.

## Elementos-chave

- Ilustrações orgânicas (folhas, ramos) como elemento decorativo, não geométrico
- Fita/faixa (banner) pra destacar texto secundário — como no logo ("COZINHA FIT INCLUSIVA")
- Evitar gradientes ou paleta "tech" — a marca é quente e artesanal, não fria/digital

## O que NUNCA fazer

- Evitar clichê de marketing fitness genérico ("chega de sofrer", "corpo dos sonhos") — o tom real do site é sobre inclusão alimentar e sabor, não estética corporal
- Evitar paleta fria (azul, cinza tech) — foge da identidade natural/quente já estabelecida

## Logo

- **Arquivo:** `identidade/logo.png` (persistido em 2026-07-06)
- **Descrição:** ilustração colorida com "Thai" em script verde-oliva, faixa bege com "COZINHA FIT INCLUSIVA" em marrom, cercada por chocolate, coco, trigo, cupcake, potinho de doce, colher de madeira com sementes e corações pequenos
- **Versão pra fundo escuro:** não informada — logo tem fundo branco/transparente, funciona melhor sobre fundo claro
- **Onde usar:** slide final do carrossel (CTA), header do site de apoio

## Fotos de produto

18 fotos reais de produto persistidas em `fotos/` (2026-07-06), mapeadas aos itens do cardápio em `briefing.md`. Usar essas fotos reais (não gerar/ilustrar produtos) em carrossel, blog e site sempre que o item aparecer.

## Observações adicionais

Paleta e logo aplicados retroativamente em 2026-07-06:
- Carrossel (`marketing/conteudo/carrossel-diferenciais-thai-cozinha-2026-07-05/`) — terracota `#C0392B` de placeholder trocado por verde oliva/marrom da marca, logo real no slide de CTA final.
- Site de apoio Astro (`site/astro-site/`) — variáveis de cor em `src/layouts/Layout.astro` atualizadas (claro e escuro), logo copiado pra `public/logo.png` e exibido no header.

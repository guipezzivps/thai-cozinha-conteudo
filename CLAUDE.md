# Thai Cozinha

> Projeto criado em 2026-07-05. Pasta dedicada — instruções aqui sobrescrevem as da raiz quando relevantes.

## Sobre

Site de apoio (satélite de conteúdo/SEO) + pipeline de criação de conteúdo automatizada pra Thai Cozinha, com foco em crescimento orgânico e gratuito. Não substitui o site principal (thaicozinha.com.br), que continua no ar sem alteração.

## Tipo

Cliente — Thai – Cozinha Fit Inclusiva (salgados e doces artesanais fit, sem glúten/lactose/APLV, entrega em Porto Alegre).

## Entregas previstas

- Site de apoio estático (Astro) em `site/astro-site/`
- Estratégia e pesquisa de SEO em `marketing/seo/`
- Artigos de blog + carrosséis/legendas gerados via `/seo` → `/publicar-tema` em `marketing/conteudo/`

## Onde salvar o que

- Briefing e contexto do negócio: `briefing.md` nesta pasta
- Site: `site/astro-site/`
- Pesquisa/estratégia SEO: `marketing/seo/`
- Conteúdo gerado (blog draft, carrossel, legendas): `marketing/conteudo/`

## Contexto que este projeto NÃO herda da raiz

Ao contrário do padrão default do MazyOS, este projeto **não herda o tom de voz nem a marca** definidos em `_memoria/` e `identidade/` da raiz — aqueles descrevem a Tua Marca Online (o negócio do freelancer), não a Thai Cozinha.

Ao rodar `/seo`, `/publicar-tema` ou `/carrossel` dentro desta pasta:

- **Contexto de negócio:** usar `briefing.md` (identidade, posicionamento, cardápio completo) em vez de `_memoria/empresa.md` da raiz
- **Tom de voz:** seguir o tom já presente no site atual da Thai Cozinha, refletido no `briefing.md` (direto, foco em restrição alimentar sem abrir mão do sabor, sem jargão técnico de nutrição)
- **Destino do site:** `clientes/Thai Cozinha/site/astro-site/` (não o `site/` genérico da raiz)
- **Destino da pesquisa/estratégia SEO:** `clientes/Thai Cozinha/marketing/seo/`
- **Destino de carrossel/legendas:** `clientes/Thai Cozinha/marketing/conteudo/`

## Restrições específicas deste projeto

- Sem orçamento: nenhuma integração ou API paga (sem Meta Business/WhatsApp Business API, sem API de IA paga além do que o Claude Code já oferece)
- Não mexer no site principal (thaicozinha.com.br) nem na pasta `alhopan-site`/outros clientes
- Sem rastreio de WhatsApp

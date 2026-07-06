# GEO — Aparecer nas respostas de IA — Thai Cozinha

> Passo 8 do `/seo`. Objetivo: aumentar a chance de a Thai Cozinha ser citada quando alguém pergunta pra ChatGPT/Gemini/Perplexity sobre lanches sem glúten/lactose em Porto Alegre — sem pagar nada por isso.

## Auditoria GEO (situação atual)

Pesquisa via WebSearch em 2026-07-05 pros termos prioritários (`01-pesquisa-demanda.md`) não encontrou o domínio thaicozinha.com.br indexado nem citado nas fontes que IAs generativas costumam usar (não apareceu em nenhum resultado orgânico do Google pros termos pesquisados). Ou seja: hoje a marca não tem presença de conteúdo suficiente pra ser citada por IA — é ponto de partida zero, não retrocesso.

Quem domina o espaço de conteúdo (fontes que IAs tendem a citar pro nicho):
- Belive (belivebefree.com.br) — maior autoridade nacional, mas sem blog
- Blogs de receita/estilo de vida (Celivita, CNN Brasil, Bom Gourmet) pros termos informacionais de lancheira/receita
- Conteúdo institucional de saúde (Nestlé Health Science, protocolos estaduais de saúde) pro termo "APLV"

## O que já foi implementado no site de apoio (pronto)

- `FAQPage` schema (JSON-LD) na home, com perguntas reais do nicho (glúten/lactose/APLV, entrega, informação nutricional)
- `Article` schema (JSON-LD) em cada post do blog
- `LocalBusiness` schema na home, com área de atendimento (Porto Alegre, RS)

## Regras de escrita pra cada artigo (aplicar em todo `/publicar-tema`)

- Responder a pergunta principal **nas primeiras linhas** do artigo, sem enrolação
- Incluir dados concretos: kcal por unidade, quantidade por kit, percentual de cacau, preço — nunca texto vago
- Usar perguntas reais como H2/H3 (formato Q&A) sempre que fizer sentido
- Evitar frases genéricas de marketing — IAs (e leitores) descartam texto sem substância

## Citações externas (ações pra aumentar menções)

- Cadastrar a Thai Cozinha em diretórios de nicho: guias de "restaurantes/lojas sem glúten em Porto Alegre" (ex: os sites que já rankeiam hoje — Famintas, Meu Roteiro Sem Glúten) — pedir inclusão ou avaliação, sem custo
- Buscar menção em blogs de mães/famílias com filhos com APLV (guest post ou simplesmente pedir menção com link)
- Reforçar perfil e avaliações no Google (fora de escopo agora — depende de Google Meu Negócio, não faz parte desse projeto)

## Monitoramento GEO (a cada 30 dias)

1. Testar os top 5 termos de `01-pesquisa-demanda.md` em ChatGPT, Gemini e Perplexity
2. Registrar: a Thai Cozinha apareceu? quem apareceu no lugar? qual fonte foi citada?
3. Ajustar o próximo artigo do calendário editorial com base no que faltou

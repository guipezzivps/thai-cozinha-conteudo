// Conversor markdown -> HTML minimalista, só pro painel interno.
// Suporta o suficiente pros docs de marketing/seo e briefing.md: headings,
// negrito/itálico/código inline, links, listas, blockquote, tabelas, hr, parágrafo.
// Não é CommonMark completo — não precisa ser, o conteúdo de origem é controlado.

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function inline(text: string): string {
  let out = escapeHtml(text);
  out = out.replace(/`([^`]+)`/g, '<code>$1</code>');
  out = out.replace(/~~([^~]+)~~/g, '<del>$1</del>');
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  out = out.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em>$1</em>');
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  return out;
}

function isTableSeparator(line: string): boolean {
  return /^\s*\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)+\|?\s*$/.test(line);
}

function splitTableRow(line: string): string[] {
  const trimmed = line.trim().replace(/^\|/, '').replace(/\|$/, '');
  return trimmed.split('|').map((c) => c.trim());
}

export function markdownToHtml(md: string): string {
  const lines = md.replace(/\r\n/g, '\n').split('\n');
  const out: string[] = [];

  let paragraph: string[] = [];
  let list: { ordered: boolean; items: string[] } | null = null;
  let quote: string[] = [];
  let inCode = false;
  let codeLines: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length) {
      out.push(`<p>${inline(paragraph.join(' '))}</p>`);
      paragraph = [];
    }
  };
  const flushList = () => {
    if (list) {
      const tag = list.ordered ? 'ol' : 'ul';
      out.push(`<${tag}>${list.items.map((i) => `<li>${inline(i)}</li>`).join('')}</${tag}>`);
      list = null;
    }
  };
  const flushQuote = () => {
    if (quote.length) {
      out.push(`<blockquote><p>${inline(quote.join(' '))}</p></blockquote>`);
      quote = [];
    }
  };
  const flushAll = () => {
    flushParagraph();
    flushList();
    flushQuote();
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (/^\s*```/.test(line)) {
      if (inCode) {
        out.push(`<pre><code>${escapeHtml(codeLines.join('\n'))}</code></pre>`);
        codeLines = [];
        inCode = false;
      } else {
        flushAll();
        inCode = true;
      }
      continue;
    }
    if (inCode) {
      codeLines.push(line);
      continue;
    }

    if (line.trim() === '') {
      // Não fecha lista aberta — listas soltas (com linha em branco entre itens)
      // continuam a mesma lista, senão cada item vira uma lista de um item só.
      flushParagraph();
      flushQuote();
      continue;
    }

    const heading = line.match(/^(#{1,4})\s+(.*)$/);
    if (heading) {
      flushAll();
      const level = heading[1].length;
      out.push(`<h${level}>${inline(heading[2])}</h${level}>`);
      continue;
    }

    if (/^\s*---+\s*$/.test(line) && !list) {
      flushAll();
      out.push('<hr />');
      continue;
    }

    const isTableRow = /\|/.test(line);
    if (isTableRow && lines[i + 1] && isTableSeparator(lines[i + 1])) {
      flushAll();
      const header = splitTableRow(line);
      i += 2;
      const bodyRows: string[][] = [];
      while (i < lines.length && /\|/.test(lines[i]) && lines[i].trim() !== '') {
        bodyRows.push(splitTableRow(lines[i]));
        i++;
      }
      i--;
      out.push(
        '<div class="table-wrap"><table><thead><tr>' +
          header.map((h) => `<th>${inline(h)}</th>`).join('') +
          '</tr></thead><tbody>' +
          bodyRows
            .map((row) => `<tr>${row.map((c) => `<td>${inline(c)}</td>`).join('')}</tr>`)
            .join('') +
          '</tbody></table></div>'
      );
      continue;
    }

    const quoteLine = line.match(/^\s*>\s?(.*)$/);
    if (quoteLine) {
      flushParagraph();
      flushList();
      quote.push(quoteLine[1]);
      continue;
    }

    const ulLine = line.match(/^\s*[-*]\s+(.*)$/);
    if (ulLine) {
      flushParagraph();
      flushQuote();
      if (!list || list.ordered) {
        flushList();
        list = { ordered: false, items: [] };
      }
      list.items.push(ulLine[1]);
      continue;
    }

    const olLine = line.match(/^\s*\d+\.\s+(.*)$/);
    if (olLine) {
      flushParagraph();
      flushQuote();
      if (!list || !list.ordered) {
        flushList();
        list = { ordered: true, items: [] };
      }
      list.items.push(olLine[1]);
      continue;
    }

    if (list) {
      // Continuação de um item de lista (linha indentada sem marcador próprio).
      list.items[list.items.length - 1] += ' ' + line.trim();
      continue;
    }

    flushQuote();
    paragraph.push(line.trim());
  }

  flushAll();
  return out.join('\n');
}

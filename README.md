# Projeto UNNI — Landing Page

Landing page institucional do Projeto UNNI, construída a partir do design
fornecido (Figma export), com fidelidade às cores, tipografia e imagens
originais.

## Stack

- **[Bun](https://bun.com)** — runtime, gerenciador de pacotes, bundler e dev server (sem Vite/Webpack)
- **[Preact](https://preactjs.com)** — UI (componentes funcionais + hooks)
- **TypeScript**
- **Tailwind CSS v4** (`bun-plugin-tailwind`, CSS-first config via `@theme`)

## Fontes

Carregadas via Google Fonts (`index.html`):

- **Lora** — títulos (`font-serif` / tags `h1`–`h4`)
- **Inter** — texto corrido (`font-sans`, padrão do `body`)
- **DM Sans** — labels de destaque em caixa alta, ex. "QUEM SOMOS" (`font-highlight` / classe `.eyebrow` / `.tag-label`)

## Cores de marca

Extraídas por amostragem de pixel direto do arquivo de design, definidas em
`src/index.css` dentro de `@theme`:

| Token | Hex | Uso |
|---|---|---|
| `--color-unni-navy` | `#1e1b4b` | seções escuras (estatísticas, contato) |
| `--color-unni-black` | `#0d0d12` | rodapé |
| `--color-unni-blue` | `#2853d9` | botões primários / CTAs |
| `--color-unni-gold` | `#eab308` | destaque de texto, números, labels |

## Estrutura

```
index.html              entrada HTML (bundlada pelo Bun)
src/
  main.tsx              monta o app Preact
  App.tsx                composição das seções
  index.css              tema Tailwind (cores, fontes, componentes)
  icons.tsx               ícones SVG inline (check, mail, instagram, quote)
  server.ts               servidor Bun (dev com HMR / produção)
  components/
    Navbar, Hero, QuemSomos, ImpactStats, EncontreSeuLugar,
    Causas, Testimonials, ContactSection, Footer, Logo
public/images/             logo (fundo transparente), foto de hero, foto "quem somos"
build.ts                 script de build de produção (Bun.build + tailwind plugin)
bunfig.toml               registra o plugin Tailwind para o bundler do Bun
```

## Como rodar

Instalar dependências:

```bash
bun install
```

Ambiente de desenvolvimento (hot reload):

```bash
bun run dev
```

Acesse `http://localhost:3000`.

Build de produção (gera `dist/`, com HTML/CSS/JS minificados e assets):

```bash
bun run build
```

Servir o build de produção:

```bash
bun run start
```

## Notas de implementação

- A seção **"Encontre o seu lugar aqui"** tem 3 abas interativas (`Para jovens`,
  `Para empresas`, `Para Instituições`). O conteúdo da aba "Para jovens" segue
  exatamente o texto do design; o conteúdo das outras duas abas foi escrito
  no mesmo tom/estilo (não estava visível no print) — ajuste livremente em
  `src/components/EncontreSeuLugar.tsx`.
- O formulário de contato é funcional no front-end (estado local, validação
  HTML5) mas não está conectado a um backend/e-mail real — o `onSubmit` em
  `ContactSection.tsx` é o ponto para integrar com uma API.
- A logo original (`logo-white_1.png`) tinha fundo preto sólido; foi
  processada para remover o fundo e exportada como PNG transparente
  (`public/images/logo.png`), permitindo uso tanto sobre o header
  transparente quanto sobre o rodapé escuro.

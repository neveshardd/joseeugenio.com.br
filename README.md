# portfolio-dev-and-arq

> **joseeugenio.com.br** — Portfólio profissional de José Eugênio, Software Engineer & Arquiteto.

Site pessoal desenvolvido com **Next.js 16**, **Tailwind CSS v4** e **Content Collections**, com seções sobre experiência profissional, projetos, blog técnico e formas de contato.

---

## Stack

| Categoria | Tecnologias |
|---|---|
| **Framework** | Next.js 16 (App Router, Turbopack) |
| **Linguagem** | TypeScript 5.9 |
| **Estilos** | Tailwind CSS v4, PostCSS, `tailwind-merge`, `tw-animate-css` |
| **Componentes** | Radix UI (Accordion, Avatar, Separator, Slot, Tooltip), Lucide Icons |
| **Animação** | Motion (Framer Motion), MagicUI (BlurFade, Dock, FlickeringGrid) |
| **Conteúdo** | Content Collections, MDX, rehype-pretty-code, Shiki |
| **Tema** | `next-themes` (dark/light mode) |
| **Ícones SVG** | Componentes customizados React para linguagens, ferramentas e DBs |

---

## Estrutura

```
src/
├── app/                    # Next.js App Router
│   ├── blog/               # Páginas do blog (slug dinâmico)
│   ├── globals.css         # Estilos globais Tailwind
│   ├── layout.tsx          # Layout raiz (fontes, tema, nav)
│   ├── page.tsx            # Home page (seções)
│   ├── not-found.tsx       # Página 404 customizada
│   └── opengraph-image.tsx # OG image dinâmica (Edge Runtime)
├── components/
│   ├── magicui/            # Animações e efeitos (BlurFade, Dock, Grid)
│   ├── mdx/                # Componentes MDX (CodeBlock, Media)
│   ├── section/            # Seções da home (Work, Projects, Contact)
│   ├── ui/                 # Componentes base (Badge, Avatar, etc.)
│   │   └── svgs/           # Ícones SVG de tecnologias (React, Go, Docker, etc.)
│   ├── icons.tsx           # Ícones custom (GitHub, Email, Globe)
│   ├── mode-toggle.tsx     # Alternador dark/light
│   ├── navbar.tsx          # Dock inferior com navegação
│   ├── project-card.tsx    # Card de projeto reutilizável
│   ├── theme-provider.tsx  # Provider de tema
│   └── timeline.tsx        # Timeline de experiência
├── data/
│   └── resume.tsx          # Dados centralizados (perfil, skills, work, projetos)
├── lib/
│   ├── utils.ts            # Utilitários (cn, formatDate)
│   ├── pagination.ts       # Lógica de paginação do blog
│   └── remark-code-meta.ts # Plugin remark para meta de código
└── mdx-components.tsx      # Mapeamento de componentes MDX
```

---

## Funcionalidades

### Perfil & Skills
- Foto, nome, bio e resumo profissional
- Grid de skills com ícones SVG oficiais de cada tecnologia
- Animações de entrada com `BlurFade`

### Experiência Profissional
- Timeline com cargos, empresas, período e descrição
- Logos das empresas
- Animações progressivas

### Projetos
- Cards com imagem, descrição, tecnologias usadas e links
- Status ativo/inativo
- Destaque para o SleepComet (SaaS de IA)

### Blog Técnico
- Artigos em MDX com syntax highlighting (Shiki + rehype-pretty-code)
- Paginação
- OpenGraph images geradas dinamicamente (Edge Runtime)
- 7 artigos publicados sobre desenvolvimento

### Contato
- Links para GitHub, Instagram e e-mail
- Dock inferior com acesso rápido

### Tema
- Suporte a tema claro e escuro
- Persistência via `next-themes`

---

## Como Rodar

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev        # http://localhost:4050

# Build de produção
npm run build

# Preview da build
npm start

# Lint
npm run lint
```

---

## Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia servidor dev na porta 4050 |
| `npm run build` | Build de produção com Next.js |
| `npm start` | Inicia servidor da build |
| `npm run lint` | ESLint em todo o projeto |
| `npm run lint:fix` | ESLint com auto-fix |

---

## Deploy

O deploy é feito na **Vercel** (otimizado para Next.js).

```bash
npm i -g vercel
vercel --prod
```

Configuração no `vercel.json`:
- Framework: `nextjs`
- Build: `next build`
- Output: `.next`

---

## Licença

MIT

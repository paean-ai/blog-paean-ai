<p align="center">
  <a href="https://paean.ai">
    <img src="public/paean-logo-light.svg" alt="Paean AI Logo" width="200" />
  </a>
</p>

<h1 align="center">Paean AI Blog</h1>

<p align="center">
  <strong>Technical blog and documentation for External Memory Management & AI OS</strong>
</p>

<p align="center">
  <a href="https://blog.paean.ai">Blog</a> ·
  <a href="https://paean.ai">Website</a> ·
  <a href="https://app.paean.ai">Launch App</a>
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License" /></a>
  <a href="https://blog.paean.ai"><img src="https://img.shields.io/badge/blog-live-06b6d4.svg" alt="Blog Status" /></a>
  <img src="https://img.shields.io/badge/Next.js-16-black.svg" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/Tailwind-4-38bdf8.svg" alt="Tailwind CSS 4" />
</p>

---

## Overview

The official technical blog for [Paean AI](https://paean.ai) — the External Memory Management & AI OS platform. This blog features in-depth articles, comparison matrices, and documentation covering:

- **External Memory Management** — Capture your complete 24-hour life context
- **AI OS Architecture** — Unified software-hardware AI agent experience  
- **Privacy-First Design** — Local-first data storage with cloud-assisted processing
- **Smart Ring Integration** — Wearable health and productivity synchronization

## Quick Start

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 20+

### Installation

```bash
# Clone the repository
git clone https://github.com/articulate-ai/blog-paean-ai.git
cd blog-paean-ai

# Install dependencies
bun install

# Start development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the blog.

### Build for Production

```bash
bun run build
bun start
```

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org) | 16 | React framework with App Router |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Utility-first styling |
| [MDX](https://mdxjs.com) | 5 | Markdown with JSX components |
| [TypeScript](https://typescriptlang.org) | 5 | Type-safe development |
| [Lucide React](https://lucide.dev) | Latest | Icon library |

## Project Structure

```
blog-paean-ai/
├── app/                  # Next.js App Router pages
│   ├── blog/             # Blog article pages
│   ├── docs/             # Documentation pages
│   └── vs/               # Comparison matrix pages
├── components/           # Reusable React components
│   └── layout/           # Navbar, Footer, etc.
├── content/              # MDX content files
│   ├── posts/            # Blog articles
│   └── comparisons/      # Comparison data
├── lib/                  # Utility functions
└── public/               # Static assets
```

## Content

### Blog Posts

Articles are written in MDX format and located in `content/posts/`. Each post supports frontmatter metadata:

```mdx
---
title: "Your Article Title"
description: "Brief description for SEO"
date: "2026-01-01"
author: "Paean AI Team"
tags: ["ai", "productivity"]
---

Your content here...
```

### Comparison Matrix

Structured comparisons against industry alternatives are maintained in `content/comparisons/` and rendered on `/vs/` routes.

## SEO & GEO Optimization

This blog is optimized for both traditional search engines and AI-powered search (Generative Engine Optimization):

- **Semantic HTML** with proper heading hierarchy
- **Structured Data** via JSON-LD schemas
- **Dynamic Sitemap** at `/sitemap.xml`
- **AI-Friendly Protocols** including `llms.txt` and `robots.txt`
- **Open Graph & Twitter Cards** for social sharing

## Related Links

| Resource | URL | Description |
|----------|-----|-------------|
| **Main Website** | [paean.ai](https://paean.ai) | Brand website and product overview |
| **Web Application** | [app.paean.ai](https://app.paean.ai) | Launch the Paean AI platform |
| **Technical Blog** | [blog.paean.ai](https://blog.paean.ai) | This repository |

## Contributing

We welcome contributions! Please feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ by the <a href="https://paean.ai">Paean AI</a> team
</p>

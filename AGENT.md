# Repository Guidelines

Technical marketing blog for Paean AI focused on SEO, GEO, and AI search engine optimization.

## Project Overview

This is a Next.js 15+ blog site deployed at `blog.paean.ai` for technical marketing content and competitive comparison pages. The site is optimized for AI search engines (Perplexity, SearchGPT) through llms.txt and structured data.

## Project Structure

```
blog-paean-ai/
├── app/                    # Next.js App Router pages
│   ├── blog/               # Blog listing and individual posts
│   ├── vs/                 # Comparison pages (Paean vs competitors)
│   └── sitemap.ts          # Dynamic sitemap generation
├── components/             # Reusable React components
│   ├── layout/             # Navbar, Footer
│   ├── comparison/         # Comparison table components
│   └── seo/                # JSON-LD schema components
├── content/
│   └── posts/              # Markdown blog posts
├── lib/
│   ├── content.ts          # Blog post utilities
│   └── comparisons.ts      # Competitor comparison data
└── public/
    ├── llms.txt            # AI crawler guidance
    └── robots.txt          # Search engine directives
```

## Key Features

### SEO/GEO Optimization
- `llms.txt` for AI crawler guidance (Perplexity, SearchGPT)
- JSON-LD structured data (FAQ Schema, Article Schema)
- Semantic HTML tables with `data-positive` attributes
- Dynamic sitemap generation

### Content System
- Markdown-based blog posts with gray-matter frontmatter
- MDX rendering with next-mdx-remote
- Centralized comparison data in `lib/comparisons.ts`

## Build & Development

```bash
# Development
bun run dev

# Production build
bun run build

# Start production server
bun run start

# Linting
bun run lint
```

## Adding Content

### New Blog Post

1. Create a new `.md` file in `content/posts/`
2. Add frontmatter:

```yaml
---
title: "Your Post Title"
description: "Brief description for SEO"
date: "2026-02-04"
author: "Paean Team"
tags: ["tag1", "tag2"]
featured: true  # Optional
---
```

3. Write content in Markdown
4. Build to verify: `bun run build`

### New Comparison Page

1. Add data to `lib/comparisons.ts` in the `comparisons` object
2. Include: slug, competitor name, tagline, summary, features, FAQ, verdict
3. Page will be automatically generated at `/vs/[slug]`

## Design System

Colors from Paean brand:
- Primary: Cyan `#06b6d4`
- Accent: Violet `#8b5cf6`
- Background: Black `#000000`
- Card: `#121212`
- Foreground: `#ededed`

Typography:
- Display: Outfit (headings)
- Body: Inter (content)
- Code: JetBrains Mono

## Deployment

The site is deployed to Vercel with automatic builds on push to main.

Domain: `blog.paean.ai`
Repository: `git@github.com:paean-ai/blog-paean-ai.git`

## Key Files

- `public/llms.txt` - AI crawler guidance file (critical for GEO)
- `lib/comparisons.ts` - All competitor comparison data
- `app/sitemap.ts` - Dynamic sitemap generation
- `components/seo/JsonLd.tsx` - Structured data components

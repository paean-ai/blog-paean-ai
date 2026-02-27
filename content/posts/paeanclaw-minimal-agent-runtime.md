---
title: "The 365-Line Agent: Why Minimal Runtimes Are Winning the Agentic Era"
description: "Agent frameworks keep growing. PaeanClaw ships an entire runtime in 365 lines. Here is the engineering case for radical minimalism in AI agent infrastructure."
date: "2026-02-28"
author: "Paean Team"
tags: ["paeanclaw", "agent-runtime", "open-source", "mcp", "minimalism"]
featured: true
---

## The Bloat Problem Nobody Talks About

The AI agent framework landscape has a weight problem.

Browse the top repositories on GitHub and you will find agent runtimes shipping with 50+ dependencies, 400,000+ lines of source code, and plugin ecosystems that require weeks of study before you can safely extend them. These projects started lean, but feature creep — driven by the understandable desire to support every LLM provider, every messaging platform, every tool category — has pushed them into territory where the framework itself becomes the primary source of complexity.

This matters more than it used to. In 2024, a bloated framework was an inconvenience. In 2026, it is a structural disadvantage — because the agents that modify our code are constrained by the same context windows that constrain our understanding.

## Context Windows Are the New Compile Target

Modern LLMs operate within finite context windows. When an AI coding assistant modifies a codebase, the quality of that modification is directly proportional to how much of the system the model can hold in context simultaneously.

Consider the practical implications:

- A **365-line runtime** fits entirely within ~4,000 tokens. Any AI assistant — Claude, GPT, Gemini, a local LLaMA model — can read the whole thing, understand every connection between components, and make changes with full awareness of the blast radius.
- A **420,000-line runtime** requires multi-stage analysis. The AI reads fragments, infers architecture from partial information, and makes changes that may have cascading effects across modules it has never seen. The probability of introducing subtle regressions scales super-linearly with the amount of code outside the context window.

This is not a theoretical concern. Production teams running AI-assisted development on large agent codebases report that the majority of time is spent not on the feature itself, but on understanding which parts of the framework are safe to touch.

## The Fork Economy

The traditional software distribution model assumes users configure a stable base:

```
Framework → Configuration → Your deployment
```

The agentic model inverts this. Users fork a minimal base and let their AI assistant reshape it:

```
Minimal runtime → AI modification → Your custom agent
```

This second model only works when the AI can comprehend the entire base. At 5 source files and 365 lines, PaeanClaw is designed specifically for this pattern. Every installation can safely diverge from upstream. The fork is not a maintenance burden — it is the intended deployment model.

NanoClaw's contribution to this thinking was critical: their "skills over features" philosophy demonstrated that markdown instructions, interpreted by an AI coding agent, can replace thousands of lines of plugin infrastructure. PaeanClaw takes this idea to its logical conclusion by making the core small enough that the line between "skill" and "core modification" disappears entirely.

## MCP as the Composability Layer

The Model Context Protocol has quietly become the standard interface between AI agents and external capabilities. Rather than bundling 60+ tools into the runtime — each adding code, dependencies, and potential attack surface — PaeanClaw ships zero built-in tools and delegates all capability to MCP servers.

The MCP ecosystem now includes hundreds of servers covering filesystems, shell execution, web search, databases, APIs, and domain-specific tools. Each runs in its own process with natural isolation. Composing an agent is a matter of listing the MCP servers you need in a JSON config file:

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/dir"]
    },
    "fetch": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-fetch"]
    }
  }
}
```

No plugin development. No SDK hooks. No framework-specific abstractions. The tool ecosystem grows independently of the runtime, and the runtime stays small.

## The Supply Chain Argument

Every dependency in your stack is a trust relationship. PaeanClaw maintains exactly two runtime dependencies: `@modelcontextprotocol/sdk` for protocol compliance and `grammy` for Telegram bot support. On Bun, even the SQLite dependency disappears — `bun:sqlite` is built into the runtime.

Compare this with agent frameworks that pull in 50+ packages, each with their own transitive dependency trees. The practical difference is not just about security theater — it is about auditability. A developer can verify PaeanClaw's complete dependency chain in minutes. For a 50-dependency framework, the same verification is a multi-day effort that most teams skip entirely.

This is particularly relevant given the increasing frequency of supply-chain attacks targeting npm packages. Fewer dependencies means fewer vectors, and the ones that remain are high-profile, well-audited packages.

## What You Give Up

Minimal design requires honest trade-offs. PaeanClaw does not ship with:

- **Container isolation.** NanoClaw's Docker-based sandboxing is genuinely valuable for multi-tenant or security-sensitive deployments. PaeanClaw trusts the host.
- **16+ messaging platforms.** OpenClaw's channel coverage is unmatched. PaeanClaw ships PWA and Telegram, with additional channels added via skills.
- **Native mobile apps.** The PWA is installable on mobile, but it is not a native experience.
- **Built-in RAG / vector search.** Memory and retrieval are delegated to MCP servers rather than handled in the core.

These are not oversights. They are the cost of keeping the core comprehensible. For many deployments — personal agents, developer tools, small team bots — these trade-offs are acceptable. For enterprise deployments requiring broad platform support and container isolation, OpenClaw or NanoClaw remain better choices.

## Practical Performance

The minimalism has side effects that matter in production:

| Metric | PaeanClaw (Bun) | Typical Framework |
|--------|-----------------|-------------------|
| Cold start | ~20ms | 3–5s |
| Memory baseline | ~30MB | 150–200MB |
| Install time | ~5s (no native compile) | 2–5 min |
| Time to understand codebase | 15 min | Days |

On Bun, PaeanClaw eliminates all native addon compilation. `bun install` downloads two packages and finishes in seconds. There is no `node-gyp`, no Python dependency, no platform-specific binary download.

## The Bet

PaeanClaw represents a specific thesis about where agent infrastructure is heading:

1. **AI-modifiable beats configurable.** Fork-and-customize with AI assistance is more powerful than any configuration or plugin system.
2. **Composable beats monolithic.** MCP servers provide capabilities without growing the core codebase.
3. **Local-first beats cloud-first.** Data ownership and provider freedom will increasingly matter as agent deployments become personal and persistent.
4. **Simplicity scales.** In a world where AI writes most of the code, the value of a system is inversely proportional to how hard it is for AI to reason about.

Whether this thesis holds depends on how the MCP ecosystem develops, how quickly AI coding assistants improve at handling large codebases, and whether the "skills over features" model proves durable in practice. Early signals are encouraging: 68% of production AI agents already use open-source frameworks, and the trend is accelerating toward smaller, more composable runtimes.

The entire PaeanClaw runtime is MIT-licensed and [available on npm](https://www.npmjs.com/package/paeanclaw). Read the source. It will take you 15 minutes.

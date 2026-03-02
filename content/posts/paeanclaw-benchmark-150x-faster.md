---
title: "150x Faster Startup, 5x Less Memory: PaeanClaw Benchmark Deep Dive"
description: "Concrete performance benchmarks showing how PaeanClaw's 365-line agent runtime outperforms OpenClaw and NanoClaw in startup time, memory usage, install speed, and deployment cost."
date: "2026-03-02"
author: "Paean Team"
tags: ["paeanclaw", "benchmarks", "performance", "agent-runtime", "open-source"]
featured: true
---

## The Numbers Speak

Agent frameworks tend to compare themselves on features. Feature tables are useful, but they do not tell you what happens when you actually run the software on your machine. We ran reproducible benchmarks across four agent runtimes — PaeanClaw, NanoClaw, OpenClaw, and OpenPaean — to measure what actually matters in daily operation.

All measurements were taken on macOS arm64 (M-series), March 2026, using Bun 1.x and Node.js 22.

## Benchmark Results

|                          | PaeanClaw (Bun)   | NanoClaw          | OpenClaw           | OpenPaean          |
| ------------------------ | ----------------- | ----------------- | ------------------ | ------------------ |
| **Cold Start**           | **~20ms**         | ~5s               | ~3s                | ~2s (cloud)        |
| **Memory Baseline**      | **~30MB**         | ~200MB            | ~150MB             | N/A (cloud)        |
| **Install Time**         | **~5s**           | ~2 min            | ~5 min             | ~10s               |
| **Dist Size**            | **~0.8MB**        | ~4MB              | ~28MB              | ~2MB               |
| **Runtime Dependencies** | **2**             | 9                 | ~50                | 16                 |
| **Native Addons**        | **0**             | 3+                | Several            | 0                  |
| **Min. Deploy Cost**     | **$0**            | ~$5/mo            | ~$20+/mo           | Subscription       |

The ratios tell the story:

- **150x faster startup** than OpenClaw (~20ms vs ~3s)
- **5x lower memory** than OpenClaw (~30MB vs ~150MB)
- **60x faster install** than OpenClaw (~5s vs ~5min)
- **25x fewer dependencies** than OpenClaw (2 vs ~50)
- **35x smaller dist** than OpenClaw (~0.8MB vs ~28MB)

These are not cherry-picked workloads. They are the fundamental operations every developer encounters: installing the tool, starting it, and running it alongside other processes.

## Why Cold Start Matters More Than You Think

A 3-second startup might seem trivial. It is not.

Agent runtimes are not web servers that boot once and run for weeks. In a typical developer workflow, the agent starts when you need it, responds, and either stays warm or gets killed when you close the terminal. Sub-second startup means the agent feels instant — like a built-in shell command. Multi-second startup means a loading spinner, a context switch, a broken flow.

PaeanClaw's ~20ms cold start on Bun means the agent is ready before your shell prompt finishes rendering. The user experience is indistinguishable from a local binary.

For comparison, ZeroClaw — a Rust-based agent runtime — achieves sub-10ms startup. PaeanClaw is the fastest JavaScript-based agent runtime we have measured, and within an order of magnitude of native code.

## The Memory Tax

Every megabyte of baseline memory is a megabyte unavailable for your LLM inference, your IDE, your browser, your tests. On a developer laptop, this is inconvenient. On a $5 VPS or a Raspberry Pi, it is the difference between running and not running.

PaeanClaw's ~30MB baseline on Bun is remarkably close to the theoretical minimum for a Bun process with HTTP server, SQLite database, and WebSocket connections. There is no bloat to trim — the memory usage is the feature set.

NanoClaw's ~200MB reflects the cost of running a host process plus a Docker container. OpenClaw's ~150MB is the tax for loading ~50 dependencies and initializing a 60-tool plugin runtime.

## Zero Native Addons: The Hidden Advantage

The single most common failure mode when installing Node.js tools is native addon compilation. `node-gyp` requires Python, a C++ compiler, and platform-specific build tools. When it fails — and on fresh machines, it fails often — the error messages are cryptic and the fixes are platform-dependent.

PaeanClaw on Bun has zero native addons. `bun install` downloads two packages and finishes in seconds. No `node-gyp`. No XCode Command Line Tools. No `apt install build-essential`. No broken Python environments. The install either works or it does not, and it works on every platform Bun supports.

On Node.js, PaeanClaw has one native addon (`better-sqlite3`), which is well-maintained but still requires compilation tools. The Bun runtime eliminates even this.

## Deployment Cost: The $0 Agent

OpenClaw's resource requirements push it toward beefy VPS instances — typically $20+/month for a comfortable deployment. NanoClaw's Docker dependency adds hosting overhead starting around $5/month.

PaeanClaw runs on anything that runs Bun or Node.js. A Raspberry Pi Zero ($5 one-time). A free-tier cloud instance. An old laptop in a closet. The $0 deployment cost is not a gimmick — it is the direct consequence of ~30MB memory and ~20ms startup. When your agent is this light, the hardware does not matter.

## Why 365 Lines Produces These Numbers

The performance advantages are not the result of optimization heroics. They are the natural consequence of writing less code.

| What OpenClaw loads at startup | PaeanClaw equivalent |
|---|----|
| ~50 npm packages with transitive deps | 2 packages |
| 60+ built-in tool definitions | 0 (MCP ecosystem) |
| Plugin runtime initialization | No plugin system |
| Gateway server + WebSocket layer | Single HTTP server |
| Configuration cascade (9 layers) | One JSON file |

Every line of code that OpenClaw loads, parses, and initializes at startup is a line that PaeanClaw does not have. The 1,150x codebase size difference translates directly into measurable performance differences.

This is not a criticism of OpenClaw's approach — feature completeness has legitimate value. But it is worth quantifying the cost, because most developers do not need 60 built-in tools. They need 3–5 tools, composed from the MCP ecosystem, starting in 20ms instead of 3 seconds.

## Provider Freedom as Technical Advantage

PaeanClaw's LLM integration is 67 lines of `fetch()` calls to the OpenAI chat completions API — the de facto standard that every major provider supports. No SDK abstractions. No provider-specific code paths. No vendor lock-in.

This architectural choice has a measurable impact: switching from OpenAI to Claude to Gemini to a local Ollama model requires changing three fields in a JSON config file. The agent restarts in 20ms with the new provider.

NanoClaw is tightly coupled to the Claude Agent SDK. OpenClaw uses its own Pi runtime with multi-model support but through a significant abstraction layer. PaeanClaw achieves the same provider coverage with 67 lines instead of thousands.

## Try It

```bash
mkdir my-agent && cd my-agent
bunx paeanclaw
```

The entire agent starts in ~20ms. The entire source code is [365 lines on npm](https://www.npmjs.com/package/paeanclaw). The entire benchmark is reproducible on your own machine.

Read the [full comparison](https://github.com/paean-ai/paeanclaw/blob/main/docs/COMPARISON.md) for the complete multi-dimensional analysis.

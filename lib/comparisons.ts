export interface ComparisonFeature {
    name: string;
    paean: string;
    competitor: string;
    paeanAdvantage: boolean;
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface ComparisonData {
    slug: string;
    competitor: string;
    competitorUrl?: string;
    tagline: string;
    summary: string;
    paeanStrengths: string[];
    features: ComparisonFeature[];
    faq: FAQItem[];
    verdict: string;
}

// Comparison data for all competitors
export const comparisons: Record<string, ComparisonData> = {
    linear: {
        slug: "linear",
        competitor: "Linear",
        competitorUrl: "https://linear.app",
        tagline: "R&D Efficiency vs Personal Energy Management",
        summary:
            "Linear is a powerful issue tracking tool for software teams. Paean takes a fundamentally different approach by focusing on the individual developer's energy, context, and long-term memory rather than just task velocity.",
        paeanStrengths: [
            "Personal energy optimization based on Ring biometrics",
            "24h life context for smarter task prioritization",
            "Long-term memory of all decisions and discussions",
            "Works across your entire life, not just work",
        ],
        features: [
            {
                name: "Focus",
                paean: "Personal energy & context",
                competitor: "Team issue tracking",
                paeanAdvantage: true,
            },
            {
                name: "Input Method",
                paean: "Voice, Ring, multimodal",
                competitor: "Keyboard & mouse",
                paeanAdvantage: true,
            },
            {
                name: "Memory",
                paean: "Long-term semantic memory",
                competitor: "Issue history only",
                paeanAdvantage: true,
            },
            {
                name: "Energy Tracking",
                paean: "Integrated via Ring",
                competitor: "Not available",
                paeanAdvantage: true,
            },
            {
                name: "Team Collaboration",
                paean: "Individual-first",
                competitor: "Team-first design",
                paeanAdvantage: false,
            },
            {
                name: "Sprint Management",
                paean: "Context-based suggestions",
                competitor: "Cycles & roadmaps",
                paeanAdvantage: false,
            },
        ],
        faq: [
            {
                question: "Why is Paean better than Linear for developers?",
                answer:
                    "Paean focuses on optimizing the individual developer's energy and context, not just tracking issues. With Ring integration, Paean knows when you're at peak energy and suggests the right tasks. Linear tracks what you do; Paean helps you do it better.",
            },
            {
                question: "Can Paean replace Linear?",
                answer:
                    "Paean and Linear serve different purposes. Linear is excellent for team coordination. Paean enhances personal productivity with 24h life context. Many developers use both - Linear for team work, Paean as their personal AI assistant.",
            },
            {
                question: "Does Paean integrate with Linear?",
                answer:
                    "Yes, Paean can pull context from Linear issues and help you prepare for work based on your current energy levels and past discussions about each issue.",
            },
        ],
        verdict:
            "Choose Linear for team issue tracking and sprint management. Choose Paean for personal energy optimization, long-term memory, and 24h life context. They complement each other beautifully.",
    },

    notion: {
        slug: "notion",
        competitor: "Notion",
        competitorUrl: "https://notion.so",
        tagline: "Heavy Docs vs Lightweight Multimodal Notes",
        summary:
            "Notion is a comprehensive workspace for docs and databases. Paean offers a fundamentally different approach - lightweight multimodal capture that automatically organizes itself through AI understanding.",
        paeanStrengths: [
            "Voice-first capture, no typing required",
            "Automatic organization through AI understanding",
            "Works offline and syncs intelligently",
            "Captures context you'd never write down",
        ],
        features: [
            {
                name: "Capture Method",
                paean: "Voice, audio, multimodal",
                competitor: "Manual typing/pasting",
                paeanAdvantage: true,
            },
            {
                name: "Organization",
                paean: "AI-automatic",
                competitor: "Manual structure required",
                paeanAdvantage: true,
            },
            {
                name: "Context Capture",
                paean: "24h life context",
                competitor: "Only what you type",
                paeanAdvantage: true,
            },
            {
                name: "Database Features",
                paean: "Semantic search",
                competitor: "Rich databases & views",
                paeanAdvantage: false,
            },
            {
                name: "Team Wikis",
                paean: "Personal-first",
                competitor: "Excellent team docs",
                paeanAdvantage: false,
            },
        ],
        faq: [
            {
                question: "Why is Paean better than Notion for personal notes?",
                answer:
                    "Notion requires you to manually type and organize everything. Paean captures your thoughts via voice, automatically organizes them with AI, and remembers context you'd never think to write down. It's like having a perfect memory without the effort.",
            },
            {
                question: "Is Paean as powerful as Notion for documentation?",
                answer:
                    "For team wikis and structured databases, Notion is excellent. Paean excels at personal knowledge management where the friction of manual organization is the main barrier. Many users use both.",
            },
            {
                question: "Can I search my Paean notes like Notion?",
                answer:
                    "Paean's semantic search is actually more powerful for finding what you need. Ask questions in natural language like 'What did I think about that meeting last week?' and Paean finds it instantly.",
            },
        ],
        verdict:
            "Choose Notion for collaborative documentation and structured databases. Choose Paean for effortless personal capture with voice-first input and automatic AI organization.",
    },

    "reclaim-ai": {
        slug: "reclaim-ai",
        competitor: "Reclaim.ai",
        competitorUrl: "https://reclaim.ai",
        tagline: "Privacy-First Scheduling with Biometric Energy",
        summary:
            "Reclaim.ai automates calendar scheduling based on tasks and habits. Paean goes deeper with Ring biometrics for true energy-aware scheduling and local-first privacy.",
        paeanStrengths: [
            "Ring biometrics for actual energy levels",
            "24h context, not just calendar events",
            "Proactive agent actions, not just scheduling",
            "Local-first data processing",
        ],
        features: [
            {
                name: "Energy Tracking",
                paean: "Ring biometrics (real data)",
                competitor: "Pattern estimation",
                paeanAdvantage: true,
            },
            {
                name: "Privacy",
                paean: "Local-first, your control",
                competitor: "Cloud-dependent",
                paeanAdvantage: true,
            },
            {
                name: "Context Awareness",
                paean: "Full 24h life context",
                competitor: "Calendar & tasks only",
                paeanAdvantage: true,
            },
            {
                name: "Agent Actions",
                paean: "Proactive execution",
                competitor: "Scheduling only",
                paeanAdvantage: true,
            },
            {
                name: "Calendar AI",
                paean: "Context-based",
                competitor: "Mature scheduling AI",
                paeanAdvantage: false,
            },
            {
                name: "Habit Tracking",
                paean: "Integrated with context",
                competitor: "Dedicated features",
                paeanAdvantage: false,
            },
        ],
        faq: [
            {
                question: "Why is Paean better than Reclaim.ai for scheduling?",
                answer:
                    "Reclaim.ai estimates your energy patterns from calendar history. Paean knows your actual energy from Ring biometrics and complete life context. This means genuinely optimal scheduling based on real physiological data.",
            },
            {
                question: "Is Paean as good at automatic scheduling?",
                answer:
                    "Reclaim.ai has mature calendar scheduling algorithms. Paean's advantage is superior input data (Ring biometrics) and broader context (24h life). For pure scheduling features, Reclaim.ai is excellent; for energy-optimal scheduling, Paean wins.",
            },
        ],
        verdict:
            "Choose Reclaim.ai for dedicated smart scheduling with mature calendar AI. Choose Paean for true energy-aware productivity with Ring biometrics and comprehensive life context.",
    },

    cursor: {
        slug: "cursor",
        competitor: "Cursor",
        competitorUrl: "https://cursor.com",
        tagline: "AI Coding with Full Life Context",
        summary:
            "Cursor is an AI-first code editor with excellent coding assistance. Paean extends AI coding with your complete life context - meetings, decisions, energy levels - for truly informed code suggestions.",
        paeanStrengths: [
            "Remembers all your technical discussions and decisions",
            "Knows when you're at peak coding energy",
            "Context from meetings about the code you're writing",
            "Long-term memory across projects and years",
        ],
        features: [
            {
                name: "Life Context",
                paean: "24h multimodal context",
                competitor: "Code context only",
                paeanAdvantage: true,
            },
            {
                name: "Memory",
                paean: "Long-term semantic memory",
                competitor: "Session-based",
                paeanAdvantage: true,
            },
            {
                name: "Energy Awareness",
                paean: "Ring biometrics integration",
                competitor: "Not available",
                paeanAdvantage: true,
            },
            {
                name: "Meeting Context",
                paean: "All discussions remembered",
                competitor: "Manual input required",
                paeanAdvantage: true,
            },
            {
                name: "Code Editor",
                paean: "CLI-based",
                competitor: "Full IDE (VS Code fork)",
                paeanAdvantage: false,
            },
            {
                name: "Inline Completion",
                paean: "Via integrations",
                competitor: "Native, excellent",
                paeanAdvantage: false,
            },
        ],
        faq: [
            {
                question: "Why is Paean better than Cursor for developers?",
                answer:
                    "Cursor sees your code. Paean sees your entire context - the meeting where you discussed the feature, your energy levels, past decisions about similar code. This means suggestions that understand why you're writing code, not just what.",
            },
            {
                question: "Can Paean replace Cursor for coding?",
                answer:
                    "They serve different purposes. Cursor is an excellent code editor with AI. Paean is a life context platform that enhances your coding with long-term memory and energy awareness. Many developers use both.",
            },
            {
                question: "How does Paean help with coding specifically?",
                answer:
                    "Paean remembers all your technical discussions, design decisions, and past implementations. When coding, it can remind you of relevant context: 'In the meeting on Jan 15, you decided to use Redis for this caching layer.' This context makes your coding more informed.",
            },
        ],
        verdict:
            "Choose Cursor for the best AI-first code editing experience. Choose Paean for long-term memory, life context, and energy-aware productivity that makes your coding sessions more effective.",
    },

    "claude-code": {
        slug: "claude-code",
        competitor: "Claude Code",
        competitorUrl: "https://anthropic.com",
        tagline: "Terminal Agents with Persistent Memory",
        summary:
            "Claude Code is a powerful terminal-based AI coding agent. Paean's CLI offers similar capabilities with persistent long-term memory, Ring integration, and 24h life context.",
        paeanStrengths: [
            "Persistent memory across all sessions forever",
            "Ring integration for energy-aware coding",
            "24h context including meetings and discussions",
            "Local-first with cloud intelligence",
        ],
        features: [
            {
                name: "Memory Persistence",
                paean: "Forever, semantic search",
                competitor: "Session-based",
                paeanAdvantage: true,
            },
            {
                name: "Life Context",
                paean: "24h multimodal capture",
                competitor: "Conversation only",
                paeanAdvantage: true,
            },
            {
                name: "Hardware Integration",
                paean: "Ring biometrics",
                competitor: "Not available",
                paeanAdvantage: true,
            },
            {
                name: "Agentic Capability",
                paean: "TDRC worker system",
                competitor: "Excellent agentic coding",
                paeanAdvantage: false,
            },
            {
                name: "Model Quality",
                paean: "Multiple models",
                competitor: "Claude 3.5/4 native",
                paeanAdvantage: false,
            },
        ],
        faq: [
            {
                question: "Why is Paean better than Claude Code?",
                answer:
                    "Claude Code is excellent for agentic coding in a session. Paean maintains persistent memory forever - it remembers every decision, every discussion, every piece of context. This long-term memory makes Paean's suggestions informed by your entire history.",
            },
            {
                question: "Is Paean's AI as good as Claude for coding?",
                answer:
                    "Paean can use Claude models too. The difference is context: Claude Code knows your current conversation. Paean knows your entire life context - meetings about the code, past decisions, your current energy level.",
            },
            {
                question: "Can Paean do agentic coding like Claude Code?",
                answer:
                    "Yes, Paean's TDRC (Task-Driven Remote CLI) system enables agentic execution. The key difference is Paean's persistent context and hardware integration through the Ring.",
            },
        ],
        verdict:
            "Choose Claude Code for excellent single-session agentic coding. Choose Paean for persistent memory across all sessions, life context, and Ring integration for energy-aware development.",
    },

    "chatgpt-gemini": {
        slug: "chatgpt-gemini",
        competitor: "ChatGPT & Gemini",
        tagline: "General AI vs Contextual Life Agent",
        summary:
            "ChatGPT and Gemini are powerful general-purpose AI assistants. Paean is purpose-built as your personal life agent with 24h context capture, long-term memory, and proactive execution.",
        paeanStrengths: [
            "Captures your complete 24h life context automatically",
            "Long-term memory that never forgets",
            "Proactive actions, not just reactive chat",
            "Private, local-first architecture",
        ],
        features: [
            {
                name: "Context Capture",
                paean: "24h automatic multimodal",
                competitor: "Manual chat input",
                paeanAdvantage: true,
            },
            {
                name: "Memory",
                paean: "Permanent semantic memory",
                competitor: "Limited memory features",
                paeanAdvantage: true,
            },
            {
                name: "Proactive Actions",
                paean: "TDRC worker execution",
                competitor: "Reactive only",
                paeanAdvantage: true,
            },
            {
                name: "General Knowledge",
                paean: "Focused on your context",
                competitor: "Broad world knowledge",
                paeanAdvantage: false,
            },
            {
                name: "Multimodal Input",
                paean: "Ring & continuous capture",
                competitor: "Upload-based",
                paeanAdvantage: true,
            },
        ],
        faq: [
            {
                question: "Why is Paean better than ChatGPT for personal productivity?",
                answer:
                    "ChatGPT knows what you tell it in a conversation. Paean knows your entire life - automatically captured meetings, decisions, energy levels, location context. This means assistance based on complete understanding, not just what you remember to share.",
            },
            {
                question: "Is Paean smarter than ChatGPT or Gemini?",
                answer:
                    "Paean uses similar underlying models. The difference is context: ChatGPT has world knowledge, Paean has world knowledge PLUS your complete personal context and long-term memory. For personal productivity, more context beats more parameters.",
            },
            {
                question: "Can Paean do everything ChatGPT can?",
                answer:
                    "For general questions, ChatGPT and Gemini are excellent. Paean is specialized as your personal life agent - capturing context, maintaining memory, executing proactively. Many users use general AI for research and Paean for personal productivity.",
            },
        ],
        verdict:
            "Choose ChatGPT/Gemini for general AI assistance and broad knowledge tasks. Choose Paean for personal productivity with 24h life context, permanent memory, and proactive execution.",
    },

    openclaw: {
        slug: "openclaw",
        competitor: "OpenClaw",
        competitorUrl: "https://openclaw.ai",
        tagline: "Self-Hosted Agents vs Production-Ready Platform",
        summary:
            "OpenClaw is an open-source self-hosted AI agent with 420,000+ lines. Paean offers a production-ready platform with native mobile apps, Ring hardware, and PaeanClaw — a 365-line open-source runtime that starts 150x faster.",
        paeanStrengths: [
            "Production-ready with native mobile apps",
            "Ring hardware for biometric context",
            "PaeanClaw: 150x faster startup, 5x less memory than OpenClaw",
            "24h automatic context capture",
        ],
        features: [
            {
                name: "Setup",
                paean: "Production-ready, instant",
                competitor: "Self-hosted, DIY (~30 min)",
                paeanAdvantage: true,
            },
            {
                name: "Mobile Apps",
                paean: "Native iOS & Android",
                competitor: "No native apps",
                paeanAdvantage: true,
            },
            {
                name: "Hardware",
                paean: "Ring integration",
                competitor: "Not available",
                paeanAdvantage: true,
            },
            {
                name: "Context Capture",
                paean: "24h automatic multimodal",
                competitor: "Manual interaction",
                paeanAdvantage: true,
            },
            {
                name: "Agent Runtime",
                paean: "PaeanClaw: 365 lines, ~20ms startup",
                competitor: "~420,000 lines, ~3s startup",
                paeanAdvantage: true,
            },
            {
                name: "Open Source",
                paean: "Selective components (PaeanClaw MIT)",
                competitor: "Fully open source",
                paeanAdvantage: false,
            },
            {
                name: "Self-Hosting",
                paean: "Cloud + local hybrid",
                competitor: "Full self-hosting",
                paeanAdvantage: false,
            },
        ],
        faq: [
            {
                question: "Why is Paean better than OpenClaw?",
                answer:
                    "OpenClaw requires technical setup and maintenance. Paean is production-ready with native apps, Ring hardware, and 24h automatic context capture. If you want a working life agent today, Paean delivers immediately.",
            },
            {
                question: "How does PaeanClaw compare to OpenClaw technically?",
                answer:
                    "PaeanClaw starts in ~20ms (vs OpenClaw's ~3s), uses ~30MB RAM (vs ~150MB), installs in ~5s (vs ~5 min), and has 2 dependencies (vs ~50). The entire 365-line codebase fits in one LLM context window for safe AI-assisted customization.",
            },
            {
                question: "Can I modify Paean like I can modify OpenClaw?",
                answer:
                    "PaeanClaw is fully MIT-licensed and designed to be forked. At 365 lines, any AI coding assistant can read, understand, and modify the entire codebase. Paean also offers customization through MCP integrations and TDRC worker system.",
            },
        ],
        verdict:
            "Choose OpenClaw if you're technical and want full control through self-hosting with 60+ built-in tools. Choose Paean for a production-ready life agent with Ring hardware, mobile apps, 24h context capture, and PaeanClaw's 150x faster agent runtime.",
    },

    paeanclaw: {
        slug: "paeanclaw",
        competitor: "OpenClaw & NanoClaw",
        competitorUrl: "https://github.com/openclaw/openclaw",
        tagline: "Ultra-Minimal Agent Runtime vs Feature-Rich Frameworks",
        summary:
            "PaeanClaw is a 365-line open-source agent runtime from the Paean ecosystem. While OpenClaw ships 420,000 lines with 60+ built-in tools, and NanoClaw runs 8,000 lines behind Docker containers, PaeanClaw takes a radically different approach: an entire agent runtime that fits inside a single LLM context window — with 150x faster startup and 5x less memory.",
        paeanStrengths: [
            "150x faster cold start than OpenClaw (~20ms vs ~3s on Bun)",
            "5x lower memory footprint (~30MB vs ~150MB)",
            "60x faster install (~5s vs ~5min) — zero native compilation",
            "Only 2 runtime dependencies vs ~50 for OpenClaw",
            "Any OpenAI-compatible LLM provider — OpenAI, Claude, Gemini, Ollama, DeepSeek, or local models",
            "Entire 365-line codebase fits in one LLM context window for safe AI-assisted customization",
        ],
        features: [
            {
                name: "Cold Start",
                paean: "~20ms (Bun) / ~40ms (Node)",
                competitor: "OpenClaw: ~3s / NanoClaw: ~5s (container)",
                paeanAdvantage: true,
            },
            {
                name: "Memory Baseline (RSS)",
                paean: "~30MB (Bun)",
                competitor: "OpenClaw: ~150MB / NanoClaw: ~200MB",
                paeanAdvantage: true,
            },
            {
                name: "Install Time",
                paean: "~5s (zero native compile)",
                competitor: "OpenClaw: ~5 min / NanoClaw: ~2 min",
                paeanAdvantage: true,
            },
            {
                name: "Dist Size",
                paean: "~0.8MB source",
                competitor: "OpenClaw: ~28MB / NanoClaw: ~4MB",
                paeanAdvantage: true,
            },
            {
                name: "Runtime Dependencies",
                paean: "2 (MCP SDK + grammy)",
                competitor: "OpenClaw: ~50 / NanoClaw: 9",
                paeanAdvantage: true,
            },
            {
                name: "Native Addons",
                paean: "0 (Bun) — no node-gyp, no C++ compiler",
                competitor: "OpenClaw: Several / NanoClaw: 3+",
                paeanAdvantage: true,
            },
            {
                name: "Deployment Cost",
                paean: "$0 — runs on any hardware incl. Raspberry Pi",
                competitor: "OpenClaw: ~$20+/mo / NanoClaw: ~$5/mo",
                paeanAdvantage: true,
            },
            {
                name: "Core Source Lines",
                paean: "365 lines (5 files)",
                competitor: "OpenClaw: ~420,000 / NanoClaw: ~8,000",
                paeanAdvantage: true,
            },
            {
                name: "LLM Providers",
                paean: "Any OpenAI-compatible API",
                competitor: "OpenClaw: Pi multi-model / NanoClaw: Claude only",
                paeanAdvantage: true,
            },
            {
                name: "AI-Assisted Customization",
                paean: "Trivial — full codebase in context",
                competitor: "Challenging — partial context only",
                paeanAdvantage: true,
            },
            {
                name: "Channel Coverage",
                paean: "PWA + Telegram (+ skills)",
                competitor: "OpenClaw: 16+ platforms natively",
                paeanAdvantage: false,
            },
            {
                name: "Built-in Tools",
                paean: "0 (MCP ecosystem)",
                competitor: "OpenClaw: 60+ / NanoClaw: 7 via SDK",
                paeanAdvantage: false,
            },
        ],
        faq: [
            {
                question:
                    "Why does PaeanClaw start 150x faster than OpenClaw?",
                answer:
                    "PaeanClaw is a single Bun/Node process with 2 dependencies and zero native addons. OpenClaw loads ~50 packages, initializes a plugin runtime, and spins up a gateway server. The ~20ms vs ~3s difference is the natural result of shipping 365 lines instead of 420,000.",
            },
            {
                question:
                    "Can PaeanClaw really run on a Raspberry Pi?",
                answer:
                    "Yes. PaeanClaw's ~30MB memory footprint and instant startup make it comfortable on any ARM board. All you need is Bun (or Node.js) and an LLM API key. OpenClaw's ~150MB baseline and heavy install process make it impractical on low-resource hardware.",
            },
            {
                question:
                    "Why does PaeanClaw have only 365 lines when OpenClaw has 420,000?",
                answer:
                    "PaeanClaw is designed for the agentic era where AI coding assistants modify and extend code. At 365 lines, the entire codebase fits within a single LLM context window (~4K tokens), meaning any AI assistant can read, understand, and safely modify the entire system. OpenClaw optimizes for feature completeness; PaeanClaw optimizes for comprehensibility and safe AI-driven customization.",
            },
            {
                question:
                    "Why should I choose PaeanClaw over NanoClaw?",
                answer:
                    "NanoClaw offers Docker-level isolation and is tightly integrated with the Claude Agent SDK, which is excellent if you use Claude exclusively. PaeanClaw offers provider freedom — use any OpenAI-compatible API including local models via Ollama — with zero native compilation on Bun and a ~20ms cold start. Choose based on whether you prioritize container isolation (NanoClaw) or provider flexibility and minimalism (PaeanClaw).",
            },
        ],
        verdict:
            "Choose OpenClaw for maximum built-in features and broad platform support. Choose NanoClaw for container-isolated agents with Claude. Choose PaeanClaw for an ultra-minimal, provider-agnostic agent runtime with 150x faster startup — one that you or your AI coding assistant can fully understand, modify, and own.",
    },

    genspark: {
        slug: "genspark",
        competitor: "Genspark",
        competitorUrl: "https://genspark.ai",
        tagline: "Local-First Ecosystem vs Cloud-Native Super Agent",
        summary:
            "Genspark is a cloud-native AI workspace built around its Mixture-of-Agents architecture and autonomous Super Agent. The Paean ecosystem takes the opposite stance: local-first processing, open-source components, hardware integration, and data ownership — without sacrificing agentic capability.",
        paeanStrengths: [
            "Local-first architecture — your data stays on your device, not in a third-party cloud",
            "Open-source agent runtime (PaeanClaw) you can audit, fork, and customize",
            "Hardware integration via Ring for biometric context no cloud service can replicate",
            "Provider freedom — use any LLM, switch providers without lock-in",
            "Persistent cross-session memory with semantic search across your entire history",
            "Autonomous worker system with intelligent multi-executor routing (Internal, Claude, Gemini, Cursor)",
        ],
        features: [
            {
                name: "Architecture",
                paean: "Local-first, selective cloud sync",
                competitor: "Cloud-native Mixture-of-Agents",
                paeanAdvantage: true,
            },
            {
                name: "Data Ownership",
                paean: "Local SQLite, user-controlled",
                competitor: "Cloud-stored, vendor-controlled",
                paeanAdvantage: true,
            },
            {
                name: "Open Source",
                paean: "PaeanClaw (MIT), CLI tools",
                competitor: "Proprietary platform",
                paeanAdvantage: true,
            },
            {
                name: "Hardware Integration",
                paean: "Ring biometrics, Record Pen",
                competitor: "No hardware integration",
                paeanAdvantage: true,
            },
            {
                name: "LLM Freedom",
                paean: "Any provider, including local models",
                competitor: "Bundled models (GPT-5, Claude, Gemini)",
                paeanAdvantage: true,
            },
            {
                name: "Audio Intelligence",
                paean: "Paean Moments: transcription + mind maps + voice Q&A",
                competitor: "Speakly: voice dictation across apps",
                paeanAdvantage: true,
            },
            {
                name: "Content Creation",
                paean: "Developer-focused CLI workflows",
                competitor: "Slides, video, music, image agents",
                paeanAdvantage: false,
            },
            {
                name: "No-Code Automation",
                paean: "Requires technical setup",
                competitor: "Natural language workflow builder",
                paeanAdvantage: false,
            },
        ],
        faq: [
            {
                question:
                    "How does Paean compare to Genspark for daily productivity?",
                answer:
                    "Genspark excels at cloud-based content creation — slides, videos, email workflows — through its Super Agent. Paean focuses on capturing and structuring your real-world context through hardware (Ring, Record Pen) and local processing. If your productivity bottleneck is content generation, Genspark is strong. If it is context retention, energy optimization, and private knowledge management, Paean is purpose-built for that.",
            },
            {
                question:
                    "Is Paean's AI as capable as Genspark's Mixture-of-Agents?",
                answer:
                    "Genspark orchestrates multiple cloud models simultaneously for each query. Paean CLI routes tasks to specialized executors (Internal, Claude, Gemini, Cursor, Codex) based on task requirements. The key difference is where the intelligence runs: Genspark is entirely cloud-dependent, while Paean can operate locally with Ollama or mix local and cloud models as needed.",
            },
            {
                question:
                    "Why choose Paean over Genspark for voice and audio?",
                answer:
                    "Genspark's Speakly provides voice dictation across desktop apps. Paean Moments goes deeper: full audio recording, AI transcription, automatic mind map generation, speaker identification, and conversational voice Q&A over your recordings. For professionals who need to capture meetings and lectures and transform them into structured knowledge, Paean Moments offers a more comprehensive solution.",
            },
            {
                question:
                    "Can I self-host the Paean agent like PaeanClaw?",
                answer:
                    "Yes. PaeanClaw is a fully open-source, self-hostable agent runtime. Install it globally via npm or Bun, point it at any LLM provider, and run your own AI agent with MCP tools, a web PWA, and Telegram integration. Genspark has no self-hosted option — all processing runs on their cloud infrastructure.",
            },
        ],
        verdict:
            "Choose Genspark for a polished, cloud-native AI workspace with strong content creation tools and no-code automation. Choose the Paean ecosystem for local-first data ownership, open-source agent infrastructure, hardware-integrated context capture, and the ability to run your own agent without cloud dependency.",
    },
};

export function getComparisonData(slug: string): ComparisonData | null {
    return comparisons[slug] || null;
}

export function getAllComparisons(): ComparisonData[] {
    return Object.values(comparisons);
}

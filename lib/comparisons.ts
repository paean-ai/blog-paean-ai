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
                name: "Privacy",
                paean: "Local-first processing",
                competitor: "Cloud-dependent",
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
            "Local-first processing - your data stays private",
            "24h context, not just calendar events",
            "Proactive agent actions, not just scheduling",
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
            {
                question: "How does Paean handle privacy compared to Reclaim.ai?",
                answer:
                    "Paean processes your data locally first, with cloud sync only when needed and under your control. Reclaim.ai requires cloud processing. If privacy is a priority, Paean's architecture is significantly more private.",
            },
        ],
        verdict:
            "Choose Reclaim.ai for dedicated smart scheduling with mature calendar AI. Choose Paean for true energy-aware productivity with Ring biometrics and local-first privacy.",
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
                name: "Privacy",
                paean: "Local-first architecture",
                competitor: "Cloud processing",
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
                name: "Privacy",
                paean: "Local-first processing",
                competitor: "Cloud-dependent",
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
            "OpenClaw is an open-source self-hosted AI agent. Paean offers a production-ready platform with mobile apps, Ring hardware, and enterprise-grade security while maintaining privacy-first principles.",
        paeanStrengths: [
            "Production-ready with native mobile apps",
            "Ring hardware for biometric context",
            "Enterprise security without sacrificing privacy",
            "24h automatic context capture",
        ],
        features: [
            {
                name: "Setup",
                paean: "Production-ready, instant",
                competitor: "Self-hosted, DIY",
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
                name: "Open Source",
                paean: "Selective components",
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
                question: "Is OpenClaw more private than Paean?",
                answer:
                    "OpenClaw's full self-hosting can be more private if configured correctly. Paean's local-first architecture with selective cloud sync offers strong privacy with much less complexity. For most users, Paean's privacy is sufficient and far more practical.",
            },
            {
                question: "Can I modify Paean like I can modify OpenClaw?",
                answer:
                    "Paean's CLI and worker system are extensible. While not fully open source, Paean offers customization through its MCP (Model Context Protocol) integrations and TDRC worker system.",
            },
        ],
        verdict:
            "Choose OpenClaw if you're technical and want full control through self-hosting. Choose Paean for a production-ready life agent with Ring hardware, mobile apps, and 24h automatic context capture.",
    },
};

export function getComparisonData(slug: string): ComparisonData | null {
    return comparisons[slug] || null;
}

export function getAllComparisons(): ComparisonData[] {
    return Object.values(comparisons);
}

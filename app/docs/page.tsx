import Link from "next/link";
import { ArrowRight, Terminal, Cloud, Zap, BookOpen, Download, Settings } from "lucide-react";

const sections = [
    {
        title: "Getting Started",
        description: "Install and configure Paean CLI for your development environment",
        href: "/docs/getting-started",
        icon: Download,
        articles: ["Installation", "Authentication", "Quick Start"],
    },
    {
        title: "CLI Commands",
        description: "Complete reference for all Paean CLI commands and options",
        href: "/docs/cli",
        icon: Terminal,
        articles: ["Interactive Mode", "Worker System", "Conversation History"],
    },
    {
        title: "Cloud Sync",
        description: "Understand how tasks sync between CLI and Paean App",
        href: "/docs/sync",
        icon: Cloud,
        articles: ["Task System", "Real-time Sync", "Conflict Resolution"],
    },
    {
        title: "Advanced Usage",
        description: "Master MCP integration, executors, and observability",
        href: "/docs/advanced",
        icon: Zap,
        articles: ["MCP Servers", "Executors", "Trace & Debug"],
    },
];

export default function DocsPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent" />
                <div className="container-width relative">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-6">
                            <BookOpen className="w-4 h-4" />
                            Documentation
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Paean CLI & Cloud Sync
                        </h1>
                        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            The command-line interface for autonomous AI development. Execute tasks locally
                            while syncing seamlessly with your Paean App workspace.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/docs/getting-started"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition-colors"
                            >
                                Get Started
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <a
                                href="https://app.paean.ai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors"
                            >
                                Open Paean App
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Install */}
            <section className="py-12 border-y border-white/10">
                <div className="container-width">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h2 className="text-xl font-semibold text-white mb-2">Quick Install</h2>
                            <p className="text-gray-400">Get started with a single command</p>
                        </div>
                        <div className="flex-1 max-w-xl">
                            <div className="bg-gray-900 rounded-lg border border-white/10 p-4 font-mono text-sm">
                                <span className="text-gray-500">$</span>{" "}
                                <span className="text-cyan-400">bun add -g paean</span>
                                <span className="text-gray-500 ml-4"># or: npm install -g paean</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Documentation Sections */}
            <section className="py-20">
                <div className="container-width">
                    <div className="grid md:grid-cols-2 gap-6">
                        {sections.map((section) => {
                            const Icon = section.icon;
                            return (
                                <Link
                                    key={section.href}
                                    href={section.href}
                                    className="group p-6 rounded-xl border border-white/10 hover:border-cyan-500/50 bg-white/[0.02] hover:bg-white/[0.04] transition-all"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                                {section.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm mb-4">
                                                {section.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {section.articles.map((article) => (
                                                    <span
                                                        key={article}
                                                        className="px-2 py-1 text-xs bg-white/5 text-gray-400 rounded"
                                                    >
                                                        {article}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Architecture Diagram */}
            <section className="py-20 border-t border-white/10">
                <div className="container-width">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">End-to-End Architecture</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Paean CLI works seamlessly with the cloud to provide a unified task management experience
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <pre className="bg-gray-900 rounded-xl border border-white/10 p-6 text-sm overflow-x-auto">
                            <code className="text-gray-300">{`
┌─────────────────────────────────────────────────────────────────┐
│                        Your Development                          │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐      │
│  │   IDE/CLI    │    │  Paean CLI   │    │ Local MCP    │      │
│  │              │◄──►│   (paean)    │◄──►│   Servers    │      │
│  └──────────────┘    └──────┬───────┘    └──────────────┘      │
└─────────────────────────────┼───────────────────────────────────┘
                              │ Real-time Sync
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                        Paean Cloud                               │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐      │
│  │    Tasks     │◄──►│   Moments    │◄──►│   Insights   │      │
│  │    System    │    │    Store     │    │    Engine    │      │
│  └──────────────┘    └──────────────┘    └──────────────┘      │
│                              │                                   │
└──────────────────────────────┼──────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Paean App (app.paean.ai)                      │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐      │
│  │    Web UI    │    │   iOS App    │    │ Android App  │      │
│  └──────────────┘    └──────────────┘    └──────────────┘      │
└─────────────────────────────────────────────────────────────────┘
              `}</code>
                        </pre>
                    </div>
                </div>
            </section>
        </div>
    );
}

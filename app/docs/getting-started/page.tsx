import Link from "next/link";
import { ArrowLeft, ArrowRight, Terminal, Check, Copy, ExternalLink } from "lucide-react";

export default function GettingStartedPage() {
    return (
        <div className="min-h-screen py-16">
            <div className="container-width">
                {/* Breadcrumb */}
                <div className="mb-8">
                    <Link
                        href="/docs"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Docs
                    </Link>
                </div>

                {/* Header */}
                <div className="max-w-3xl mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-4">
                        <Terminal className="w-4 h-4" />
                        Getting Started
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-4">
                        Install & Configure Paean CLI
                    </h1>
                    <p className="text-lg text-gray-400">
                        Get up and running with Paean CLI in under 5 minutes. This guide covers installation,
                        authentication, and your first interaction.
                    </p>
                </div>

                {/* Content */}
                <div className="max-w-3xl space-y-12">
                    {/* Installation */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-cyan-500 text-black flex items-center justify-center text-sm font-bold">1</span>
                            Installation
                        </h2>
                        <div className="space-y-4">
                            <p className="text-gray-400">
                                Paean CLI is available as an npm package. We recommend using <code className="text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded">bun</code> for faster installation.
                            </p>

                            {/* Bun Install */}
                            <div className="bg-gray-900 rounded-xl border border-white/10 overflow-hidden">
                                <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/[0.02]">
                                    <span className="text-sm text-gray-400">Recommended (Bun)</span>
                                </div>
                                <div className="p-4 font-mono text-sm">
                                    <span className="text-gray-500">$</span>{" "}
                                    <span className="text-cyan-400">bun add -g paean</span>
                                </div>
                            </div>

                            {/* npm Install */}
                            <div className="bg-gray-900 rounded-xl border border-white/10 overflow-hidden">
                                <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/[0.02]">
                                    <span className="text-sm text-gray-400">Alternative (npm)</span>
                                </div>
                                <div className="p-4 font-mono text-sm">
                                    <span className="text-gray-500">$</span>{" "}
                                    <span className="text-cyan-400">npm install -g paean</span>
                                </div>
                            </div>

                            {/* npx */}
                            <div className="bg-gray-900 rounded-xl border border-white/10 overflow-hidden">
                                <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/[0.02]">
                                    <span className="text-sm text-gray-400">Run without installing</span>
                                </div>
                                <div className="p-4 font-mono text-sm">
                                    <span className="text-gray-500">$</span>{" "}
                                    <span className="text-cyan-400">npx paean</span>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                                <p className="text-sm text-gray-300">
                                    <strong className="text-cyan-400">Requirements:</strong> Node.js 18+ or Bun runtime, and a Paean AI account.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Authentication */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-cyan-500 text-black flex items-center justify-center text-sm font-bold">2</span>
                            Authentication
                        </h2>
                        <div className="space-y-4">
                            <p className="text-gray-400">
                                Log in to connect your CLI with your Paean account. This enables cloud sync for tasks, moments, and preferences.
                            </p>

                            <div className="bg-gray-900 rounded-xl border border-white/10 overflow-hidden">
                                <div className="p-4 font-mono text-sm">
                                    <span className="text-gray-500">$</span>{" "}
                                    <span className="text-cyan-400">paean login</span>
                                </div>
                            </div>

                            <p className="text-gray-400">
                                This opens your browser for secure OAuth authentication. Once complete, your credentials are stored locally in <code className="text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded">~/.paean/config.json</code>.
                            </p>

                            <div className="p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20">
                                <p className="text-sm text-gray-300">
                                    <strong className="text-yellow-400">Don&apos;t have an account?</strong> Create one at{" "}
                                    <a href="https://app.paean.ai" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                                        app.paean.ai
                                    </a>
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Quick Start */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-cyan-500 text-black flex items-center justify-center text-sm font-bold">3</span>
                            Quick Start
                        </h2>
                        <div className="space-y-4">
                            <p className="text-gray-400">
                                Start an interactive session with your AI agent:
                            </p>

                            <div className="bg-gray-900 rounded-xl border border-white/10 overflow-hidden">
                                <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/[0.02]">
                                    <span className="text-sm text-gray-400">Interactive Mode</span>
                                </div>
                                <div className="p-4 font-mono text-sm space-y-2">
                                    <div>
                                        <span className="text-gray-500">$</span>{" "}
                                        <span className="text-cyan-400">paean</span>
                                    </div>
                                    <div className="text-gray-500">
                                        # Opens interactive chat with project context
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-400">
                                For complex projects, enable planning mode for pre-flight analysis:
                            </p>

                            <div className="bg-gray-900 rounded-xl border border-white/10 overflow-hidden">
                                <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/[0.02]">
                                    <span className="text-sm text-gray-400">Planning Mode</span>
                                </div>
                                <div className="p-4 font-mono text-sm space-y-2">
                                    <div>
                                        <span className="text-gray-500">$</span>{" "}
                                        <span className="text-cyan-400">paean --plan</span>
                                    </div>
                                    <div className="text-gray-500">
                                        # Analyzes project structure before starting
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-400">
                                Execute a task without entering chat:
                            </p>

                            <div className="bg-gray-900 rounded-xl border border-white/10 overflow-hidden">
                                <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/[0.02]">
                                    <span className="text-sm text-gray-400">Quick Prompt</span>
                                </div>
                                <div className="p-4 font-mono text-sm space-y-2">
                                    <div>
                                        <span className="text-gray-500">$</span>{" "}
                                        <span className="text-cyan-400">paean prompt &quot;Analyze the current project structure&quot;</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Next Steps */}
                    <section className="pt-8 border-t border-white/10">
                        <h2 className="text-xl font-bold text-white mb-6">Next Steps</h2>
                        <div className="grid gap-4">
                            <Link
                                href="/docs/cli"
                                className="group flex items-center justify-between p-4 rounded-xl border border-white/10 hover:border-cyan-500/50 bg-white/[0.02] hover:bg-white/[0.04] transition-all"
                            >
                                <div>
                                    <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">CLI Commands</h3>
                                    <p className="text-sm text-gray-400">Explore all available commands and options</p>
                                </div>
                                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                            </Link>
                            <Link
                                href="/docs/sync"
                                className="group flex items-center justify-between p-4 rounded-xl border border-white/10 hover:border-cyan-500/50 bg-white/[0.02] hover:bg-white/[0.04] transition-all"
                            >
                                <div>
                                    <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">Cloud Sync</h3>
                                    <p className="text-sm text-gray-400">Learn how tasks sync between CLI and Paean App</p>
                                </div>
                                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

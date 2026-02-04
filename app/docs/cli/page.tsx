import Link from "next/link";
import { ArrowLeft, ArrowRight, Terminal, MessageSquare, History, Zap, PlayCircle } from "lucide-react";

export default function CLIPage() {
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
                        CLI Commands
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-4">
                        CLI Command Reference
                    </h1>
                    <p className="text-lg text-gray-400">
                        Complete reference for all Paean CLI commands, from interactive chat to autonomous workers.
                    </p>
                </div>

                {/* Content */}
                <div className="max-w-3xl space-y-12">
                    {/* Interactive Mode */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <MessageSquare className="w-6 h-6 text-cyan-400" />
                            Interactive Mode
                        </h2>
                        <div className="space-y-4">
                            <p className="text-gray-400">
                                The default mode for day-to-day assistance. Chat with an AI agent that understands your project context.
                            </p>

                            <div className="bg-gray-900 rounded-xl border border-white/10 overflow-hidden">
                                <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/[0.02]">
                                    <span className="text-sm text-gray-400">Start Chat</span>
                                </div>
                                <div className="p-4 font-mono text-sm space-y-3">
                                    <div>
                                        <span className="text-gray-500">$</span>{" "}
                                        <span className="text-cyan-400">paean</span>
                                        <span className="text-gray-500 ml-4"># Start interactive chat</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">$</span>{" "}
                                        <span className="text-cyan-400">paean --plan</span>
                                        <span className="text-gray-500 ml-4"># With project analysis</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                                <p className="text-sm text-gray-300">
                                    <strong className="text-cyan-400">Tip:</strong> Use <code className="text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded">--plan</code> mode for complex projects. It analyzes your codebase structure before starting.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Worker System */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Zap className="w-6 h-6 text-cyan-400" />
                            Autonomous Worker
                        </h2>
                        <div className="space-y-4">
                            <p className="text-gray-400">
                                Offload long-running or complex tasks to the background worker for 24/7 execution.
                            </p>

                            <h3 className="text-lg font-semibold text-white pt-4">Quick Prompt</h3>
                            <p className="text-gray-400">
                                Execute a task without entering a chat session. The supervisor analyzes your request and decides the best execution strategy.
                            </p>

                            <div className="bg-gray-900 rounded-xl border border-white/10 overflow-hidden">
                                <div className="p-4 font-mono text-sm space-y-3">
                                    <div>
                                        <span className="text-gray-500">$</span>{" "}
                                        <span className="text-cyan-400">paean prompt &quot;Refactor the auth module&quot;</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">$</span>{" "}
                                        <span className="text-cyan-400">paean prompt &quot;Fix login bug&quot; --executor cursor</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">$</span>{" "}
                                        <span className="text-cyan-400">paean prompt &quot;Refactor, test, build&quot; --chain</span>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-lg font-semibold text-white pt-4">Continuous Worker</h3>
                            <p className="text-gray-400">
                                Start a persistent worker that polls for and executes tasks continuously.
                            </p>

                            <div className="bg-gray-900 rounded-xl border border-white/10 overflow-hidden">
                                <div className="p-4 font-mono text-sm space-y-3">
                                    <div>
                                        <span className="text-gray-500">$</span>{" "}
                                        <span className="text-cyan-400">paean worker start</span>
                                    </div>
                                    <div className="text-gray-500 text-xs pt-2">
                                        Options: --interval &lt;ms&gt; --max-retries &lt;n&gt; --no-verification
                                    </div>
                                </div>
                            </div>

                            {/* Executors */}
                            <h3 className="text-lg font-semibold text-white pt-4">Available Executors</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="text-left py-3 px-4 text-gray-400 font-medium">Executor</th>
                                            <th className="text-left py-3 px-4 text-gray-400 font-medium">Use Case</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        <tr>
                                            <td className="py-3 px-4 text-cyan-400 font-mono">internal</td>
                                            <td className="py-3 px-4 text-gray-300">Built-in Paean agent (default)</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4 text-cyan-400 font-mono">claude</td>
                                            <td className="py-3 px-4 text-gray-300">Complex logic via Claude CLI</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4 text-cyan-400 font-mono">cursor</td>
                                            <td className="py-3 px-4 text-gray-300">Context-aware code edits</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4 text-cyan-400 font-mono">gemini</td>
                                            <td className="py-3 px-4 text-gray-300">Large context analysis</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Conversation History */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <History className="w-6 h-6 text-cyan-400" />
                            Conversation History
                        </h2>
                        <div className="space-y-4">
                            <p className="text-gray-400">
                                Manage and resume previous conversations. All conversations sync to your Paean App workspace.
                            </p>

                            <div className="bg-gray-900 rounded-xl border border-white/10 overflow-hidden">
                                <div className="p-4 font-mono text-sm space-y-3">
                                    <div>
                                        <span className="text-gray-500">$</span>{" "}
                                        <span className="text-cyan-400">paean ls</span>
                                        <span className="text-gray-500 ml-4"># List recent conversations</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">$</span>{" "}
                                        <span className="text-cyan-400">paean ls -n 50</span>
                                        <span className="text-gray-500 ml-4"># List more</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">$</span>{" "}
                                        <span className="text-cyan-400">paean resume</span>
                                        <span className="text-gray-500 ml-4"># Resume latest</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">$</span>{" "}
                                        <span className="text-cyan-400">paean resume 8f3a9b2c</span>
                                        <span className="text-gray-500 ml-4"># Resume specific</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Utility Commands */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <PlayCircle className="w-6 h-6 text-cyan-400" />
                            Utility Commands
                        </h2>
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white">Context Generation</h3>
                            <p className="text-gray-400">
                                Generate a comprehensive context file for AI agents.
                            </p>

                            <div className="bg-gray-900 rounded-xl border border-white/10 overflow-hidden">
                                <div className="p-4 font-mono text-sm space-y-3">
                                    <div>
                                        <span className="text-gray-500">$</span>{" "}
                                        <span className="text-cyan-400">paean context -o .agent/context.md</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">$</span>{" "}
                                        <span className="text-cyan-400">paean context --json</span>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-lg font-semibold text-white pt-4">Task Validation</h3>
                            <p className="text-gray-400">
                                Verify if pending tasks have been completed by recent changes.
                            </p>

                            <div className="bg-gray-900 rounded-xl border border-white/10 overflow-hidden">
                                <div className="p-4 font-mono text-sm space-y-3">
                                    <div>
                                        <span className="text-gray-500">$</span>{" "}
                                        <span className="text-cyan-400">paean validate</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">$</span>{" "}
                                        <span className="text-cyan-400">paean validate --auto-complete</span>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-lg font-semibold text-white pt-4">Observability</h3>
                            <p className="text-gray-400">
                                Debug and analyze agent performance with built-in tracing.
                            </p>

                            <div className="bg-gray-900 rounded-xl border border-white/10 overflow-hidden">
                                <div className="p-4 font-mono text-sm space-y-3">
                                    <div>
                                        <span className="text-gray-500">$</span>{" "}
                                        <span className="text-cyan-400">paean trace --latest</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">$</span>{" "}
                                        <span className="text-cyan-400">paean trace --report</span>
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
                                href="/docs/sync"
                                className="group flex items-center justify-between p-4 rounded-xl border border-white/10 hover:border-cyan-500/50 bg-white/[0.02] hover:bg-white/[0.04] transition-all"
                            >
                                <div>
                                    <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">Cloud Sync</h3>
                                    <p className="text-sm text-gray-400">Learn how CLI syncs with Paean App</p>
                                </div>
                                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                            </Link>
                            <Link
                                href="/docs/advanced"
                                className="group flex items-center justify-between p-4 rounded-xl border border-white/10 hover:border-cyan-500/50 bg-white/[0.02] hover:bg-white/[0.04] transition-all"
                            >
                                <div>
                                    <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">Advanced Usage</h3>
                                    <p className="text-sm text-gray-400">MCP integration, custom executors</p>
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

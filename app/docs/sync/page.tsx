import Link from "next/link";
import { ArrowLeft, ArrowRight, Cloud, RefreshCw, CheckCircle, Smartphone, Monitor, Terminal } from "lucide-react";

export default function SyncPage() {
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
                        <Cloud className="w-4 h-4" />
                        Cloud Sync
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-4">
                        End-to-End Task Sync
                    </h1>
                    <p className="text-lg text-gray-400">
                        Understand how tasks flow between Paean CLI and Paean App, enabling seamless
                        collaboration between your terminal and all your devices.
                    </p>
                </div>

                {/* Content */}
                <div className="max-w-3xl space-y-12">
                    {/* Overview */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">How It Works</h2>
                        <div className="space-y-4">
                            <p className="text-gray-400">
                                When you create or complete tasks via CLI, they automatically sync to the Paean Cloud.
                                These tasks appear in your Paean App workspace and can be managed from any device.
                            </p>

                            {/* Flow Diagram */}
                            <div className="bg-gray-900 rounded-xl border border-white/10 p-6 overflow-x-auto">
                                <pre className="text-sm text-gray-300">{`
  ┌──────────────┐          ┌──────────────┐          ┌──────────────┐
  │  Paean CLI   │  ──────► │ Paean Cloud  │ ◄──────  │  Paean App   │
  │  (Terminal)  │          │  (Backend)   │          │ (Web/Mobile) │
  └──────────────┘          └──────────────┘          └──────────────┘
        │                          │                         │
        │    Create Task           │                         │
        │ ─────────────────────►   │                         │
        │                          │   Real-time Push        │
        │                          │ ─────────────────────►  │
        │                          │                         │
        │                          │   Complete Task         │
        │   Sync Status            │ ◄─────────────────────  │
        │ ◄─────────────────────   │                         │
        │                          │                         │
                `}</pre>
                            </div>
                        </div>
                    </section>

                    {/* Task System */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <CheckCircle className="w-6 h-6 text-cyan-400" />
                            Task System
                        </h2>
                        <div className="space-y-4">
                            <p className="text-gray-400">
                                Tasks are the core unit of work in Paean. They can be created from anywhere
                                and are automatically assigned to available workers.
                            </p>

                            <h3 className="text-lg font-semibold text-white pt-4">Create Tasks via CLI</h3>

                            <div className="bg-gray-900 rounded-xl border border-white/10 overflow-hidden">
                                <div className="p-4 font-mono text-sm space-y-3">
                                    <div>
                                        <span className="text-gray-500"># Quick task creation</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">$</span>{" "}
                                        <span className="text-cyan-400">paean prompt &quot;Fix the login validation bug&quot;</span>
                                    </div>
                                    <div className="text-gray-500 pt-2"># Task appears in Paean App instantly</div>
                                </div>
                            </div>

                            <h3 className="text-lg font-semibold text-white pt-4">Task Lifecycle</h3>
                            <div className="grid gap-3">
                                {[
                                    { status: "Pending", desc: "Task created, waiting for worker", color: "text-yellow-400" },
                                    { status: "Assigned", desc: "Worker picked up the task", color: "text-blue-400" },
                                    { status: "Running", desc: "Task is being executed", color: "text-cyan-400" },
                                    { status: "Verifying", desc: "Post-execution validation", color: "text-purple-400" },
                                    { status: "Completed", desc: "Task finished successfully", color: "text-green-400" },
                                ].map((item) => (
                                    <div key={item.status} className="flex items-center gap-4 p-3 bg-white/[0.02] rounded-lg border border-white/5">
                                        <span className={`font-mono text-sm ${item.color}`}>{item.status}</span>
                                        <span className="text-gray-400 text-sm">{item.desc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Real-time Sync */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <RefreshCw className="w-6 h-6 text-cyan-400" />
                            Real-time Sync
                        </h2>
                        <div className="space-y-4">
                            <p className="text-gray-400">
                                Changes sync bidirectionally in real-time. Complete a task in the app,
                                and your CLI worker knows immediately.
                            </p>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Terminal className="w-5 h-5 text-cyan-400" />
                                        <h4 className="font-semibold text-white">CLI → Cloud</h4>
                                    </div>
                                    <ul className="space-y-2 text-sm text-gray-400">
                                        <li>• Task creation & completion</li>
                                        <li>• Execution logs & traces</li>
                                        <li>• Worker heartbeat status</li>
                                        <li>• Conversation history</li>
                                    </ul>
                                </div>
                                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Smartphone className="w-5 h-5 text-cyan-400" />
                                        <h4 className="font-semibold text-white">App → Cloud</h4>
                                    </div>
                                    <ul className="space-y-2 text-sm text-gray-400">
                                        <li>• Manual task creation</li>
                                        <li>• Priority adjustments</li>
                                        <li>• Task cancellation</li>
                                        <li>• Moment captures</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Use Cases */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">Common Workflows</h2>
                        <div className="space-y-6">
                            <div className="p-5 rounded-xl bg-gradient-to-r from-cyan-500/5 to-transparent border border-cyan-500/20">
                                <h3 className="font-semibold text-white mb-2">🏠 Work from anywhere</h3>
                                <p className="text-gray-400 text-sm mb-3">
                                    Create a task on mobile while commuting, let your CLI worker execute it at home.
                                </p>
                                <div className="font-mono text-xs text-cyan-400 bg-black/30 p-2 rounded">
                                    Mobile: Create &quot;Refactor auth module&quot; → Home CLI: Auto-executes
                                </div>
                            </div>

                            <div className="p-5 rounded-xl bg-gradient-to-r from-purple-500/5 to-transparent border border-purple-500/20">
                                <h3 className="font-semibold text-white mb-2">🔄 Continuous Development</h3>
                                <p className="text-gray-400 text-sm mb-3">
                                    Run the worker 24/7 to process tasks even when you&apos;re away.
                                </p>
                                <div className="font-mono text-xs text-purple-400 bg-black/30 p-2 rounded">
                                    $ paean worker start → Polls and executes tasks continuously
                                </div>
                            </div>

                            <div className="p-5 rounded-xl bg-gradient-to-r from-green-500/5 to-transparent border border-green-500/20">
                                <h3 className="font-semibold text-white mb-2">📊 Full Visibility</h3>
                                <p className="text-gray-400 text-sm mb-3">
                                    Track all execution traces and token usage from the Paean App dashboard.
                                </p>
                                <div className="font-mono text-xs text-green-400 bg-black/30 p-2 rounded">
                                    App Dashboard → View task history, costs, and performance
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Next Steps */}
                    <section className="pt-8 border-t border-white/10">
                        <h2 className="text-xl font-bold text-white mb-6">Next Steps</h2>
                        <div className="grid gap-4">
                            <Link
                                href="/docs/advanced"
                                className="group flex items-center justify-between p-4 rounded-xl border border-white/10 hover:border-cyan-500/50 bg-white/[0.02] hover:bg-white/[0.04] transition-all"
                            >
                                <div>
                                    <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">Advanced Usage</h3>
                                    <p className="text-sm text-gray-400">MCP integration and custom executors</p>
                                </div>
                                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                            </Link>
                            <a
                                href="https://app.paean.ai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between p-4 rounded-xl border border-white/10 hover:border-cyan-500/50 bg-white/[0.02] hover:bg-white/[0.04] transition-all"
                            >
                                <div>
                                    <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">Open Paean App</h3>
                                    <p className="text-sm text-gray-400">See your tasks in the web workspace</p>
                                </div>
                                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

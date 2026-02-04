import Link from "next/link";
import { ArrowLeft, Zap, Settings, Bug, ExternalLink } from "lucide-react";

export default function AdvancedPage() {
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
                        <Zap className="w-4 h-4" />
                        Advanced Usage
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-4">
                        MCP, Executors & Observability
                    </h1>
                    <p className="text-lg text-gray-400">
                        Power-user features for extending Paean CLI with custom tools and debugging capabilities.
                    </p>
                </div>

                {/* Content */}
                <div className="max-w-3xl space-y-12">
                    {/* MCP Configuration */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Settings className="w-6 h-6 text-cyan-400" />
                            MCP Server Configuration
                        </h2>
                        <div className="space-y-4">
                            <p className="text-gray-400">
                                Paean CLI supports the Model Context Protocol (MCP) for extending agent capabilities
                                with custom tools and data sources.
                            </p>

                            <h3 className="text-lg font-semibold text-white pt-4">Configuration File</h3>
                            <p className="text-gray-400">
                                Add MCP servers to <code className="text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded">~/.paean/mcp_config.json</code>:
                            </p>

                            <div className="bg-gray-900 rounded-xl border border-white/10 overflow-hidden">
                                <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/[0.02]">
                                    <span className="text-sm text-gray-400">~/.paean/mcp_config.json</span>
                                </div>
                                <div className="p-4 font-mono text-sm">
                                    <pre className="text-gray-300">{`{
  "mcpServers": {
    "git": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-git"]
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path"]
    },
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres"],
      "env": {
        "DATABASE_URL": "postgresql://..."
      }
    }
  }
}`}</pre>
                                </div>
                            </div>

                            <h3 className="text-lg font-semibold text-white pt-4">Popular MCP Servers</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="text-left py-3 px-4 text-gray-400 font-medium">Server</th>
                                            <th className="text-left py-3 px-4 text-gray-400 font-medium">Capabilities</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        <tr>
                                            <td className="py-3 px-4 text-cyan-400 font-mono text-xs">@modelcontextprotocol/server-git</td>
                                            <td className="py-3 px-4 text-gray-300">Git operations, diff, log</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4 text-cyan-400 font-mono text-xs">@modelcontextprotocol/server-filesystem</td>
                                            <td className="py-3 px-4 text-gray-300">File read/write, directory listing</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4 text-cyan-400 font-mono text-xs">@modelcontextprotocol/server-postgres</td>
                                            <td className="py-3 px-4 text-gray-300">Database queries, schema inspection</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4 text-cyan-400 font-mono text-xs">@modelcontextprotocol/server-slack</td>
                                            <td className="py-3 px-4 text-gray-300">Slack messaging, channel access</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                                <p className="text-sm text-gray-300">
                                    <strong className="text-cyan-400">Learn more:</strong>{" "}
                                    <a
                                        href="https://modelcontextprotocol.io"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-cyan-400 hover:underline inline-flex items-center gap-1"
                                    >
                                        Model Context Protocol
                                        <ExternalLink className="w-3 h-3" />
                                    </a>
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Observability */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Bug className="w-6 h-6 text-cyan-400" />
                            Observability & Debugging
                        </h2>
                        <div className="space-y-4">
                            <p className="text-gray-400">
                                Trace and debug your agent&apos;s behavior with built-in observability tools.
                            </p>

                            <h3 className="text-lg font-semibold text-white pt-4">Execution Traces</h3>

                            <div className="bg-gray-900 rounded-xl border border-white/10 overflow-hidden">
                                <div className="p-4 font-mono text-sm space-y-3">
                                    <div>
                                        <span className="text-gray-500">$</span>{" "}
                                        <span className="text-cyan-400">paean trace</span>
                                        <span className="text-gray-500 ml-4"># List all traces</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">$</span>{" "}
                                        <span className="text-cyan-400">paean trace --latest</span>
                                        <span className="text-gray-500 ml-4"># View latest execution</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">$</span>{" "}
                                        <span className="text-cyan-400">paean trace --report</span>
                                        <span className="text-gray-500 ml-4"># Usage report</span>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-lg font-semibold text-white pt-4">Trace Data Includes</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-1">•</span>
                                    <span>Full conversation history with timestamps</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-1">•</span>
                                    <span>Tool calls and their results</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-1">•</span>
                                    <span>Token usage and cost breakdown</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-1">•</span>
                                    <span>Error messages and stack traces</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-1">•</span>
                                    <span>Executor routing decisions</span>
                                </li>
                            </ul>

                            <h3 className="text-lg font-semibold text-white pt-4">Configuration Files</h3>
                            <p className="text-gray-400">
                                Paean stores configuration and traces in <code className="text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded">~/.paean/</code>:
                            </p>

                            <div className="bg-gray-900 rounded-xl border border-white/10 p-4 font-mono text-sm">
                                <pre className="text-gray-300">{`~/.paean/
├── config.json      # Auth and preferences
├── mcp_config.json  # MCP server configuration
└── traces/          # Execution logs and debug data`}</pre>
                            </div>
                        </div>
                    </section>

                    {/* Tips */}
                    <section className="pt-8 border-t border-white/10">
                        <h2 className="text-xl font-bold text-white mb-6">Pro Tips</h2>
                        <div className="grid gap-4">
                            <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/5 to-transparent border border-cyan-500/20">
                                <h3 className="font-semibold text-white mb-2">🔗 Chain Complex Workflows</h3>
                                <p className="text-gray-400 text-sm">
                                    Use <code className="text-cyan-400">--chain</code> for dependent multi-step operations.
                                </p>
                                <div className="mt-2 font-mono text-xs text-cyan-400 bg-black/30 p-2 rounded">
                                    paean prompt &quot;lint, then fix errors, then commit&quot; --chain
                                </div>
                            </div>
                            <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500/5 to-transparent border border-purple-500/20">
                                <h3 className="font-semibold text-white mb-2">⚡ Force Specific Executors</h3>
                                <p className="text-gray-400 text-sm">
                                    Override auto-routing when you know which executor works best.
                                </p>
                                <div className="mt-2 font-mono text-xs text-purple-400 bg-black/30 p-2 rounded">
                                    paean prompt &quot;refactor auth&quot; --executor cursor
                                </div>
                            </div>
                            <div className="p-4 rounded-xl bg-gradient-to-r from-green-500/5 to-transparent border border-green-500/20">
                                <h3 className="font-semibold text-white mb-2">🔄 Auto-validate Changes</h3>
                                <p className="text-gray-400 text-sm">
                                    Automatically mark completed tasks based on git changes.
                                </p>
                                <div className="mt-2 font-mono text-xs text-green-400 bg-black/30 p-2 rounded">
                                    paean validate --auto-complete
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

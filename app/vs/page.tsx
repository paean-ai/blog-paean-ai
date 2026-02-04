import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { getAllComparisons } from "@/lib/comparisons";

export const metadata: Metadata = {
    title: "Paean vs Competitors - AI Assistant Comparison Matrix",
    description:
        "See how Paean compares to Linear, Notion, Reclaim.ai, Cursor, Claude Code, ChatGPT, Gemini, and OpenClaw. Discover why 24h life context and external memory management set Paean apart.",
    openGraph: {
        title: "Paean vs Competitors - AI Assistant Comparison Matrix",
        description:
            "Comprehensive comparisons of Paean's 24h life context platform against popular productivity and AI tools.",
    },
};

export default function ComparisonsPage() {
    const comparisons = getAllComparisons();

    return (
        <div className="min-h-screen py-16">
            <div className="container-width">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-outfit)]">
                        <span className="text-gradient-brand">Paean</span>
                        <span className="text-white"> vs. The Competition</span>
                    </h1>
                    <p className="text-lg text-gray-400">
                        Discover how Paean's 24h life context, external memory management,
                        and privacy-first architecture compare to popular productivity and
                        AI tools.
                    </p>
                </div>

                {/* Quick Comparison Table */}
                <div className="mb-16 overflow-x-auto">
                    <table className="w-full glass-panel rounded-xl">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="text-left py-4 px-6 text-gray-400 font-medium">
                                    Capability
                                </th>
                                <th className="text-left py-4 px-6 text-cyan-400 font-medium">
                                    Paean
                                </th>
                                <th className="text-left py-4 px-6 text-gray-400 font-medium">
                                    Others
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-white/5">
                                <td className="py-4 px-6 font-medium text-white">
                                    24h Life Context
                                </td>
                                <td className="py-4 px-6 text-emerald-400">
                                    ✅ Full multimodal capture
                                </td>
                                <td className="py-4 px-6 text-gray-500">❌ Limited or none</td>
                            </tr>
                            <tr className="border-b border-white/5">
                                <td className="py-4 px-6 font-medium text-white">
                                    Privacy-First
                                </td>
                                <td className="py-4 px-6 text-emerald-400">
                                    ✅ Local-first processing
                                </td>
                                <td className="py-4 px-6 text-gray-500">⚠️ Cloud-dependent</td>
                            </tr>
                            <tr className="border-b border-white/5">
                                <td className="py-4 px-6 font-medium text-white">
                                    Energy Tracking
                                </td>
                                <td className="py-4 px-6 text-emerald-400">
                                    ✅ Ring biometric integration
                                </td>
                                <td className="py-4 px-6 text-gray-500">
                                    ❌ No hardware support
                                </td>
                            </tr>
                            <tr className="border-b border-white/5">
                                <td className="py-4 px-6 font-medium text-white">
                                    Long-term Memory
                                </td>
                                <td className="py-4 px-6 text-emerald-400">
                                    ✅ Semantic search forever
                                </td>
                                <td className="py-4 px-6 text-gray-500">⚠️ Session-based</td>
                            </tr>
                            <tr>
                                <td className="py-4 px-6 font-medium text-white">
                                    Proactive Actions
                                </td>
                                <td className="py-4 px-6 text-emerald-400">
                                    ✅ TDRC Worker System
                                </td>
                                <td className="py-4 px-6 text-gray-500">⚠️ Reactive only</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Comparison Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                    {comparisons.map((comp) => (
                        <Link
                            key={comp.slug}
                            href={`/vs/${comp.slug}`}
                            className="group p-6 rounded-xl glass-panel hover:bg-white/5 transition-colors"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h2 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                        Paean vs {comp.competitor}
                                    </h2>
                                    <p className="text-sm text-cyan-400/80 mt-1">{comp.tagline}</p>
                                </div>
                                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                            </div>

                            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                {comp.summary}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {comp.paeanStrengths.slice(0, 2).map((strength, idx) => (
                                    <span
                                        key={idx}
                                        className="text-xs px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400"
                                    >
                                        {strength.split(" ").slice(0, 3).join(" ")}...
                                    </span>
                                ))}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

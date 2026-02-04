import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Check, Zap } from "lucide-react";
import { getComparisonData, getAllComparisons } from "@/lib/comparisons";
import { ComparisonTable } from "@/components/comparison/ComparisonTable";
import { FAQSchema } from "@/components/seo/JsonLd";

interface Props {
    params: Promise<{ competitor: string }>;
}

export async function generateStaticParams() {
    const comparisons = getAllComparisons();
    return comparisons.map((comp) => ({
        competitor: comp.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { competitor } = await params;
    const data = getComparisonData(competitor);

    if (!data) {
        return {
            title: "Comparison Not Found",
        };
    }

    return {
        title: `Paean vs ${data.competitor} - ${data.tagline}`,
        description: data.summary,
        openGraph: {
            title: `Paean vs ${data.competitor} - ${data.tagline}`,
            description: data.summary,
            type: "article",
        },
    };
}

export default async function ComparisonPage({ params }: Props) {
    const { competitor } = await params;
    const data = getComparisonData(competitor);

    if (!data) {
        notFound();
    }

    return (
        <>
            <FAQSchema competitorName={data.competitor} faq={data.faq} />

            <div className="min-h-screen py-16">
                <div className="container-width">
                    {/* Back Link */}
                    <Link
                        href="/vs"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        All Comparisons
                    </Link>

                    {/* Header */}
                    <div className="max-w-4xl mb-12">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-sm px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400">
                                Comparison
                            </span>
                            {data.competitorUrl && (
                                <a
                                    href={data.competitorUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-500 hover:text-gray-400 flex items-center gap-1"
                                >
                                    Visit {data.competitor}
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            )}
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-outfit)]">
                            <span className="text-gradient-brand">Paean</span>
                            <span className="text-white"> vs {data.competitor}</span>
                        </h1>

                        <p className="text-xl text-cyan-400/80 mb-4">{data.tagline}</p>

                        <p className="text-lg text-gray-400">{data.summary}</p>
                    </div>

                    {/* Paean Strengths */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-6 font-[family-name:var(--font-outfit)]">
                            Why Choose Paean
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {data.paeanStrengths.map((strength, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-3 p-4 rounded-lg glass-panel"
                                >
                                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-300">{strength}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Feature Comparison Table */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-6 font-[family-name:var(--font-outfit)]">
                            Feature Comparison
                        </h2>
                        <div className="glass-panel rounded-xl overflow-hidden">
                            <ComparisonTable
                                features={data.features}
                                competitorName={data.competitor}
                            />
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-6 font-[family-name:var(--font-outfit)]">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-4">
                            {data.faq.map((item, idx) => (
                                <div key={idx} className="glass-panel rounded-xl p-6">
                                    <h3 className="text-lg font-semibold text-white mb-3">
                                        {item.question}
                                    </h3>
                                    <p className="text-gray-400">{item.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Verdict */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-6 font-[family-name:var(--font-outfit)]">
                            The Verdict
                        </h2>
                        <div className="glass-panel rounded-xl p-8 border-l-4 border-cyan-500">
                            <p className="text-lg text-gray-300">{data.verdict}</p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center py-12 border-t border-white/5">
                        <h2 className="text-2xl font-bold text-white mb-4 font-[family-name:var(--font-outfit)]">
                            Ready to Experience the Difference?
                        </h2>
                        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
                            Try Paean's 24h life context capture and see how external memory
                            management transforms your productivity.
                        </p>
                        <a
                            href="https://paean.ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-medium rounded-lg transition-colors"
                        >
                            <Zap className="w-4 h-4" />
                            Get Started with Paean
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

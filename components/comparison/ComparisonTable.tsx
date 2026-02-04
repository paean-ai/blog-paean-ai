import { ComparisonFeature } from "@/lib/comparisons";
import { Check, X, Minus } from "lucide-react";

interface ComparisonTableProps {
    features: ComparisonFeature[];
    competitorName: string;
}

export function ComparisonTable({
    features,
    competitorName,
}: ComparisonTableProps) {
    return (
        <div className="overflow-x-auto">
            <table className="comparison-table w-full">
                <thead>
                    <tr>
                        <th className="text-left py-4 px-4 text-gray-400 font-medium">
                            Feature
                        </th>
                        <th className="text-left py-4 px-4 text-cyan-400 font-medium">
                            Paean
                        </th>
                        <th className="text-left py-4 px-4 text-gray-400 font-medium">
                            {competitorName}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {features.map((feature, index) => (
                        <tr
                            key={feature.name}
                            className={index % 2 === 0 ? "bg-white/[0.02]" : ""}
                        >
                            <td className="py-4 px-4 font-medium text-white">
                                {feature.name}
                            </td>
                            <td
                                className="py-4 px-4"
                                data-positive={feature.paeanAdvantage ? "true" : "false"}
                            >
                                <div className="flex items-center gap-2">
                                    {feature.paeanAdvantage ? (
                                        <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                                    ) : (
                                        <Minus className="w-4 h-4 text-gray-500 flex-shrink-0" />
                                    )}
                                    <span
                                        className={
                                            feature.paeanAdvantage
                                                ? "text-emerald-400"
                                                : "text-gray-400"
                                        }
                                    >
                                        {feature.paean}
                                    </span>
                                </div>
                            </td>
                            <td className="py-4 px-4">
                                <div className="flex items-center gap-2">
                                    {!feature.paeanAdvantage ? (
                                        <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                                    ) : (
                                        <X className="w-4 h-4 text-gray-500 flex-shrink-0" />
                                    )}
                                    <span
                                        className={
                                            !feature.paeanAdvantage
                                                ? "text-emerald-400"
                                                : "text-gray-400"
                                        }
                                    >
                                        {feature.competitor}
                                    </span>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

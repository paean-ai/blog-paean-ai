import { FAQItem } from "@/lib/comparisons";

interface FAQSchemaProps {
    competitorName: string;
    faq: FAQItem[];
}

export function FAQSchema({ competitorName, faq }: FAQSchemaProps) {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
    );
}

interface ArticleSchemaProps {
    title: string;
    description: string;
    datePublished: string;
    dateModified?: string;
    author?: string;
    url: string;
}

export function ArticleSchema({
    title,
    description,
    datePublished,
    dateModified,
    author = "Paean AI Team",
    url,
}: ArticleSchemaProps) {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description: description,
        datePublished: datePublished,
        dateModified: dateModified || datePublished,
        author: {
            "@type": "Organization",
            name: author,
        },
        publisher: {
            "@type": "Organization",
            name: "Paean AI",
            logo: {
                "@type": "ImageObject",
                url: "https://blog.paean.ai/logo.png",
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url,
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
    );
}

export function OrganizationSchema() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Paean AI",
        url: "https://paean.ai",
        logo: "https://paean.ai/logo.png",
        description:
            "External Memory Management & AI OS. Capture your complete 24-hour life context and transform it into actionable intelligence.",
        sameAs: [
            "https://github.com/paean-ai",
            "https://twitter.com/paean_ai",
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
    );
}

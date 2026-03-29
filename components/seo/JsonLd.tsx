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
      url: "https://paean.ai",
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
    alternateName: "A8E Group",
    url: "https://paean.ai",
    logo: "https://paean.ai/logo.png",
    description:
      "Context-aware personal AI platform. Ambient sensing hardware, persistent memory, Digital Twins, and an open agent economy.",
    sameAs: [
      "https://github.com/nicepkg",
      "https://twitter.com/paean_ai",
      "https://a8e.ai",
      "https://0.works",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

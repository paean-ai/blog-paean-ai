import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { OrganizationSchema } from "@/components/seo/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blog.paean.ai"),
  title: {
    default: "Paean AI Blog — Context-Aware Personal Intelligence",
    template: "%s | Paean AI Blog",
  },
  description:
    "Engineering insights on ambient AI, Digital Twins, agent economies, and the infrastructure powering context-aware personal intelligence. From the team building the human–AI symbiosis layer.",
  keywords: [
    "Paean AI",
    "Digital Twin",
    "AI Agent",
    "Agent Economy",
    "Ambient AI",
    "Context-Aware AI",
    "Smart Ring",
    "AI Companion",
    "Agent Store",
    "MCP Protocol",
    "Personal AI",
    "Wearable AI",
  ],
  authors: [{ name: "Paean AI Team" }],
  creator: "Paean AI",
  publisher: "A8E Group",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blog.paean.ai",
    siteName: "Paean AI Blog",
    title: "Paean AI Blog — Context-Aware Personal Intelligence",
    description:
      "Engineering insights on ambient AI, Digital Twins, and the agent economy.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Paean AI Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paean AI Blog",
    description:
      "Engineering insights on ambient AI, Digital Twins, and the agent economy.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <OrganizationSchema />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

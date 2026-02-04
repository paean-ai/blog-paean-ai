import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

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
    default: "Paean AI Blog - External Memory Management & AI OS",
    template: "%s | Paean AI Blog",
  },
  description:
    "Technical blog and comparison matrix for Paean - the External Memory Management & AI OS platform. Capture your complete 24-hour life context and transform it into actionable intelligence.",
  keywords: [
    "Paean AI",
    "External Memory Management",
    "AI OS",
    "24h Life Agent",
    "AI Assistant",
    "Privacy-first AI",
    "Smart Ring",
    "Life Context",
  ],
  authors: [{ name: "Paean AI Team" }],
  creator: "Paean AI",
  publisher: "Paean AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blog.paean.ai",
    siteName: "Paean AI Blog",
    title: "Paean AI Blog - External Memory Management & AI OS",
    description:
      "Technical blog and comparison matrix for Paean - the privacy-first AI agent platform.",
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
    description: "External Memory Management & AI OS",
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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

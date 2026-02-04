import Link from "next/link";
import { Github, Twitter, Mail } from "lucide-react";

const footerLinks = {
    product: [
        { href: "https://paean.ai", label: "Get Paean", external: true },
        { href: "https://paean.ai/products/ring", label: "Paean Ring", external: true },
        { href: "https://paean.ai/products/pal", label: "Paean Pal", external: true },
    ],
    resources: [
        { href: "/blog", label: "Blog" },
        { href: "/docs", label: "Documentation" },
        { href: "/vs", label: "Comparisons" },
    ],
    company: [
        { href: "https://paean.ai/about", label: "About", external: true },
        { href: "https://paean.ai/privacy", label: "Privacy", external: true },
        { href: "https://paean.ai/terms", label: "Terms", external: true },
    ],
};

const socialLinks = [
    { href: "https://github.com/paean-ai", icon: Github, label: "GitHub" },
    { href: "https://twitter.com/paean_ai", icon: Twitter, label: "Twitter" },
    { href: "mailto:hello@paean.ai", icon: Mail, label: "Email" },
];

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-black">
            <div className="container-width py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
                                <span className="text-black font-bold text-sm">P</span>
                            </div>
                            <span className="font-semibold text-lg text-white">Paean</span>
                        </Link>
                        <p className="text-sm text-gray-400 mb-4">
                            External Memory Management & AI OS.
                            <br />
                            Think Less. Execute More.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4">Product</h3>
                        <ul className="space-y-3">
                            {footerLinks.product.map((link) => (
                                <li key={link.href}>
                                    {link.external ? (
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-gray-400 hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="text-sm text-gray-400 hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    {link.external ? (
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-gray-400 hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="text-sm text-gray-400 hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5">
                    <p className="text-sm text-gray-500 text-center">
                        © {new Date().getFullYear()} Paean AI. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

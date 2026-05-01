import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../app/assets/logo.png";

const copy = {
    en: {
        disclaimer: "The information on this website is intended for healthcare professionals and business partners only. Products distributed by Nomt-Nutripharma LLC are subject to local regulatory approvals. This website does not constitute medical advice.",
        links: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
            { label: "Regulatory Information", href: "#" },
            { label: "Partner Portal", href: "#" },
        ],
        certifications: ["MFDA Registered", "Import Licensed", "10+ Years Experience", "Nationwide Distribution"],
        rights: `© ${new Date().getFullYear()} Nomt-Nutripharma LLC. All rights reserved.`,
        portal: "Partner Portal Login →",
    },
    mn: {
        disclaimer: "Энэхүү вэбсайт дахь мэдээлэл нь зөвхөн эрүүл мэндийн мэргэжилтнүүд болон бизнесийн түншүүдэд зориулагдсан болно. Номт-Нутрифарма ХХК-ийн түгээдэг бүтээгдэхүүнүүд орон нутгийн зохицуулалтын зөвшөөрөлд хамаарна.",
        links: [
            { label: "Нууцлалын бодлого", href: "#" },
            { label: "Үйлчилгээний нөхцөл", href: "#" },
            { label: "Зохицуулалтын мэдээлэл", href: "#" },
            { label: "Түншийн портал", href: "#" },
        ],
        certifications: ["МЭМХЭГ Бүртгэлтэй", "Импортын зөвшөөрөлтэй", "10+ Жилийн туршлага", "Улс даяар түгээлт"],
        rights: `© ${new Date().getFullYear()} Номт-Нутрифарма ХХК. Бүх эрх хуулиар хамгаалагдсан.`,
        portal: "Түншийн портал нэвтрэх →",
    },
};

export const Footer: React.FC<{ language: "en" | "mn" }> = ({ language }) => {
    const t = copy[language];

    return (
        <footer style={{ background: "#0F172A" }} className="border-t border-white/8">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="mb-4 inline-block px-3 py-2 rounded-xl" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
                            <Image
                                src={logo}
                                width={140}
                                height={56}
                                alt="Nomt-Nutripharma"
                                className="object-contain h-12 w-auto"
                            />
                        </div>
                        <p className="text-xs text-white/40 leading-relaxed">{t.disclaimer}</p>
                    </div>

                    {/* Certifications */}
                    <div>
                        <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
                            {language === "en" ? "Certifications" : "Гэрчилгээнүүд"}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {t.certifications.map((cert) => (
                                <span key={cert} className="px-3 py-1.5 rounded-full text-xs font-semibold border"
                                    style={{ borderColor: "rgba(13,148,136,0.25)", color: "#0D9488", background: "rgba(13,148,136,0.06)" }}>
                                    {cert}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
                            {language === "en" ? "Legal & Access" : "Хуулийн мэдээлэл"}
                        </p>
                        <ul className="space-y-2">
                            {t.links.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="section-divider mb-8" />

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-white/30">{t.rights}</p>
                    <a href="#" className="text-xs font-semibold" style={{ color: "#0D9488" }}>
                        {t.portal}
                    </a>
                </div>
            </div>
        </footer>
    );
};

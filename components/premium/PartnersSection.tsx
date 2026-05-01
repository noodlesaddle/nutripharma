"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const copy = {
    en: {
        tag: "Partner Portfolio",
        headline: "Brands We Represent",
        sub: "As an Official Authorized Distributor, we are the exclusive regional gateway for these world-class brands.",
        badge: "Official Authorized Distributor",
    },
    mn: {
        tag: "Түншийн портфолио",
        headline: "Бидний төлөөлдөг брэндүүд",
        sub: "Албан ёсны эрх бүхий дистрибьютерийн хувиар бид эдгээр дэлхийн түвшний брэндүүдийн бүс нутгийн цорын ганц гарц юм.",
        badge: "Албан ёсны эрх бүхий дистрибьютор",
    },
};

const brands = [
    {
        name: "Nutricost",
        category: "Nutritional Supplements",
        logo: "https://www.nasc.cc/wp-content/uploads/2024/09/Nutricost-Logo.jpg",
        description: "Premium nutritional supplements trusted by millions worldwide.",
        since: "2023",
    },
    {
        name: "Radiant Viewer",
        category: "Medical Imaging Software",
        logo: "https://www.radiantviewer.com/img/mainbg.jpg",
        description: "Leading DICOM viewer for medical professionals globally.",
        since: "2022",
    },
];

export const PartnersSection: React.FC<{ language: "en" | "mn" }> = ({ language }) => {
    const t = copy[language];

    return (
        <section id="partners" className="py-28 relative overflow-hidden"
            style={{ background: "linear-gradient(180deg, #0F172A 0%, #1E293B 100%)" }}>

            {/* Grid */}
            <div className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `linear-gradient(rgba(13,148,136,1) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,1) 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 border"
                        style={{ borderColor: "rgba(13,148,136,0.3)", color: "#0D9488", background: "rgba(13,148,136,0.08)" }}>
                        {t.tag}
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">{t.headline}</h2>
                    <p className="text-white/50 max-w-xl mx-auto">{t.sub}</p>
                </motion.div>

                {/* Brand cards */}
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {brands.map((brand, i) => (
                        <motion.div
                            key={brand.name}
                            className="group relative rounded-2xl overflow-hidden glass border border-white/10 hover:border-teal-DEFAULT/40 transition-all duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            whileHover={{ y: -4 }}
                        >
                            {/* Image */}
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300 group-hover:scale-105 transition-transform"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-DEFAULT via-navy-DEFAULT/40 to-transparent" style={{ background: "linear-gradient(to top, #0F172A, rgba(15,23,42,0.4), transparent)" }} />

                                {/* Badge */}
                                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                                    style={{ background: "rgba(13,148,136,0.15)", border: "1px solid rgba(13,148,136,0.3)", color: "#0D9488" }}>
                                    <Award className="w-3 h-3" />
                                    {t.badge}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "#0D9488" }}>
                                    {brand.category}
                                </p>
                                <h3 className="text-xl font-bold text-white mb-2">{brand.name}</h3>
                                <p className="text-white/50 text-sm leading-relaxed mb-4">{brand.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-white/30">
                                        {language === "en" ? "Partner since" : "Түнш болсон"} {brand.since}
                                    </span>
                                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#0D9488" }} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Infinite logo marquee */}
                <motion.div
                    className="mt-16 overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <p className="text-center text-xs font-semibold tracking-widest uppercase mb-6 text-white/30">
                        {language === "en" ? "Our Distribution Network" : "Манай түгээлтийн сүлжээ"}
                    </p>
                    <div className="flex gap-8 animate-marquee whitespace-nowrap">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass border border-white/8 flex-shrink-0">
                                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#0D9488" }} />
                                <span className="text-sm font-medium text-white/60">
                                    {["Nutricost", "Radiant Viewer", "MFDA Registered", "Cold Chain", "Import Licensed", "10+ Years", "500+ Partners", "24h Delivery"][i % 8]}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

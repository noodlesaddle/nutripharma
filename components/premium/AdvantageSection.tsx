"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Thermometer, Building2 } from "lucide-react";

const copy = {
    en: {
        tag: "The Distributor Advantage",
        headline: "Why Global Brands Choose Us",
        sub: "Three pillars that make Nomt-Nutripharma the most trusted distribution partner in the region.",
        cards: [
            {
                icon: ShieldCheck,
                title: "Regulatory Expertise",
                sub: "Full-spectrum compliance",
                body: "We handle all MFDA and Health Authority registrations end-to-end. Our dedicated regulatory team ensures your products reach market faster, with zero compliance risk.",
                points: ["MFDA registration management", "Import license handling", "Pharmacovigilance support", "Regulatory compliance support"],
            },
            {
                icon: Thermometer,
                title: "Cold-Chain Logistics",
                sub: "State-of-the-art infrastructure",
                body: "Temperature-controlled warehousing from 2°C to 25°C with real-time IoT monitoring. Your products maintain integrity from our facility to the final dispensing point.",
                points: ["2°C–8°C cold storage", "Real-time IoT tracking", "24/7 temperature alerts", "Last-mile cold delivery"],
            },
            {
                icon: Building2,
                title: "Market Penetration",
                sub: "Unmatched regional reach",
                body: "Direct access to 500+ pharmacies, hospitals, and clinics across the region. Our established relationships ensure rapid shelf placement and sustained market presence.",
                points: ["500+ pharmacy network", "Hospital & clinic access", "KOL engagement programs", "Local marketing support"],
            },
        ],
    },
    mn: {
        tag: "Дистрибьюторын давуу тал",
        headline: "Дэлхийн брэндүүд яагаад биднийг сонгодог вэ",
        sub: "Номт-Нутрифармыг бүс нутгийн хамгийн найдвартай түгээлтийн түнш болгодог гурван тулгуур.",
        cards: [
            {
                icon: ShieldCheck,
                title: "Зохицуулалтын мэдлэг",
                sub: "Иж бүрэн нийцэл",
                body: "Бид МЭМХЭГ болон Эрүүл мэндийн байгууллагын бүртгэлийг эхнээс нь дуустал хариуцна. Манай зохицуулалтын баг таны бүтээгдэхүүнийг зах зээлд хурдан нэвтрүүлнэ.",
                points: ["МЭМХЭГ бүртгэлийн менежмент", "Импортын зөвшөөрөл", "Фармакологийн хяналт", "Зохицуулалтын нийцлийн дэмжлэг"],
            },
            {
                icon: Thermometer,
                title: "Хүйтэн гинжин логистик",
                sub: "Орчин үеийн дэд бүтэц",
                body: "2°C-аас 25°C хүртэлх температурт хяналттай агуулах, IoT мониторинг. Таны бүтээгдэхүүн манай байгууллагаас эцсийн хэрэглэгч хүртэл бүрэн бүтэн хадгалагдана.",
                points: ["2°C–8°C хүйтэн агуулах", "Бодит цагийн IoT хяналт", "24/7 температурын дохио", "Сүүлийн миль хүйтэн хүргэлт"],
            },
            {
                icon: Building2,
                title: "Зах зээлд нэвтрэх",
                sub: "Бүс нутгийн хамрах хүрээ",
                body: "Бүс нутгийн 500 гаруй эмийн сан, эмнэлэг, клиникт шууд хандах боломж. Манай тогтсон харилцаа хурдан байршуулалт, тогтвортой зах зээлийн байр суурийг хангана.",
                points: ["500+ эмийн сангийн сүлжээ", "Эмнэлэг, клиникийн хандалт", "KOL оролцооны хөтөлбөр", "Орон нутгийн маркетинг"],
            },
        ],
    },
};

export const AdvantageSection: React.FC<{ language: "en" | "mn" }> = ({ language }) => {
    const t = copy[language];

    return (
        <section id="advantage" className="py-28 bg-white relative overflow-hidden">
            {/* Subtle background */}
            <div className="absolute inset-0 opacity-[0.015]"
                style={{
                    backgroundImage: `linear-gradient(rgba(15,23,42,1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,1) 1px, transparent 1px)`,
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
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
                        style={{ background: "rgba(15,23,42,0.06)", color: "#0F172A" }}>
                        {t.tag}
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold gradient-text-teal mb-4">{t.headline}</h2>
                    <p className="text-slate-500 max-w-xl mx-auto">{t.sub}</p>
                </motion.div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {t.cards.map((card, i) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={i}
                                className="group relative rounded-2xl p-8 border border-slate-100 bg-white hover:border-navy-DEFAULT/20 transition-all duration-300 hover:shadow-2xl hover:shadow-navy-DEFAULT/8 hover:-translate-y-1"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                {/* Top accent */}
                                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-teal-DEFAULT/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ background: "linear-gradient(90deg, transparent, #0D9488, transparent)" }} />

                                {/* Icon */}
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                                    style={{ background: "rgba(15,23,42,0.06)" }}>
                                    <Icon className="w-6 h-6" style={{ color: "#0F172A" }} />
                                </div>

                                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#0D9488" }}>
                                    {card.sub}
                                </p>
                                <h3 className="text-xl font-bold mb-3" style={{ color: "#0F172A" }}>{card.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6">{card.body}</p>

                                <ul className="space-y-2">
                                    {card.points.map((pt, j) => (
                                        <li key={j} className="flex items-center gap-2.5 text-sm text-slate-600">
                                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#0D9488" }} />
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

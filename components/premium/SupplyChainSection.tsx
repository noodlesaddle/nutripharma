"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Thermometer, BarChart3, ShieldCheck, Truck } from "lucide-react";

const copy = {
    en: {
        tag: "Supply Chain Excellence",
        headline: "From Source to Patient",
        sub: "Our end-to-end supply chain infrastructure ensures every product arrives safely, on time, and in perfect condition.",
        steps: [
            {
                icon: ShieldCheck,
                title: "Regulatory-Compliant Warehousing",
                body: "Our facilities follow international distribution standards with full audit trails, documentation, and temperature monitoring.",
                stat: "MFDA Licensed",
            },
            {
                icon: Thermometer,
                title: "Cold Chain Storage",
                body: "State-of-the-art temperature-controlled zones from 2°C to 25°C with redundant backup systems.",
                stat: "2°C – 25°C",
            },
            {
                icon: BarChart3,
                title: "Real-time Inventory Tracking",
                body: "IoT-enabled warehouse management system with live stock visibility and automated reorder alerts.",
                stat: "Live Tracking",
            },
            {
                icon: Truck,
                title: "24-Hour Last-Mile Delivery",
                body: "Dedicated fleet with temperature-monitored vehicles ensuring same-day or next-day delivery to 500+ partners.",
                stat: "24h Delivery",
            },
        ],
    },
    mn: {
        tag: "Нийлүүлэлтийн гинжин сүлжээний өндөр чанар",
        headline: "Эх үүсвэрээс өвчтөн хүртэл",
        sub: "Манай иж бүрэн нийлүүлэлтийн гинжин дэд бүтэц нь бүтээгдэхүүн бүр аюулгүй, цаг тухайд нь, төгс байдалтай хүрэхийг баталгаажуулна.",
        steps: [
            {
                icon: ShieldCheck,
                title: "Зохицуулалтад нийцсэн агуулах",
                body: "Манай байгууллага олон улсын түгээлтийн стандартыг хангасан бүрэн аудитын мөрдлөг, баримт бичиг, температурын хяналттай.",
                stat: "МЭМХЭГ Зөвшөөрөлтэй",
            },
            {
                icon: Thermometer,
                title: "Хүйтэн гинжин агуулах",
                body: "2°C-аас 25°C хүртэлх температурт хяналттай бүсүүд, нөөц системтэй.",
                stat: "2°C – 25°C",
            },
            {
                icon: BarChart3,
                title: "Бодит цагийн нөөцийн хяналт",
                body: "IoT-ийн агуулахын удирдлагын систем, шууд нөөцийн харагдах байдал, автомат захиалгын дохио.",
                stat: "Шууд хяналт",
            },
            {
                icon: Truck,
                title: "24 цагийн хүргэлт",
                body: "Температур хянагдсан тусгай автомашинтай флот, 500 гаруй түнш рүү өдрийн дотор хүргэлт.",
                stat: "24ц Хүргэлт",
            },
        ],
    },
};

export const SupplyChainSection: React.FC<{ language: "en" | "mn" }> = ({ language }) => {
    const t = copy[language];
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

    return (
        <section id="supply-chain" ref={ref} className="py-28 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    className="text-center mb-20"
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

                {/* Timeline */}
                <div className="relative max-w-3xl mx-auto">
                    {/* Animated vertical line */}
                    <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-100">
                        <motion.div
                            className="absolute top-0 left-0 w-full"
                            style={{ height: lineHeight, background: "linear-gradient(to bottom, #0D9488, #0F766E)" }}
                        />
                    </div>

                    <div className="space-y-12">
                        {t.steps.map((step, i) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={i}
                                    className="relative flex gap-8 items-start"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.4 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                >
                                    {/* Node */}
                                    <div className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 border"
                                        style={{ background: "white", borderColor: "rgba(13,148,136,0.3)", boxShadow: "0 0 0 4px white" }}>
                                        <Icon className="w-6 h-6" style={{ color: "#0F172A" }} />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 pb-4">
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <h3 className="text-lg font-bold mb-2" style={{ color: "#0F172A" }}>{step.title}</h3>
                                                <p className="text-slate-500 text-sm leading-relaxed">{step.body}</p>
                                            </div>
                                            <span className="flex-shrink-0 px-3 py-1 rounded-full text-xs font-bold"
                                                style={{ background: "rgba(13,148,136,0.1)", color: "#0F766E" }}>
                                                {step.stat}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

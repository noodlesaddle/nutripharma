"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ArrowDown } from "lucide-react";
import { DashboardVisual } from "./HeroVisual";
// Swap to HubVisual or StackedCardsVisual to try other options

interface HeroSectionProps {
    language: "en" | "mn";
}

const copy = {
    en: {
        tag: "Authorized Regional Distributor",
        headline: "Your Strategic Gateway to Regional Healthcare Markets.",
        sub: "World-class pharmaceutical distribution, regulatory mastery, and brand stewardship — built for global leaders entering our market.",
        cta1: "Apply for Partnership",
        cta2: "View Our Portfolio",
        scroll: "Scroll to explore",
        trust: [
            { value: "10+", label: "Years Experience" },
            { value: "500+", label: "Pharmacy Partners" },
            { value: "100%", label: "Compliance Record" },
            { value: "24h", label: "Delivery SLA" },
        ],
    },
    mn: {
        tag: "Бүс нутгийн албан ёсны дистрибьютор",
        headline: "Бүс нутгийн эрүүл мэндийн зах зээлд нэвтрэх стратегийн гарц.",
        sub: "Дэлхийн фармацевтикийн тэргүүлэгч брэндүүдэд дэлхийн түвшний түгээлт, зохицуулалтын мэдлэг, брэнд менежментийг хангана.",
        cta1: "Түншлэлийн хүсэлт",
        cta2: "Портфолио үзэх",
        scroll: "Доош гүйлгэх",
        trust: [
            { value: "10+", label: "Жилийн туршлага" },
            { value: "500+", label: "Эмийн сангийн түнш" },
            { value: "100%", label: "Нийцлийн бүртгэл" },
            { value: "24ц", label: "Хүргэлтийн SLA" },
        ],
    },
};

// ─── Hero Section ────────────────────────────────────────────────────────────
export const HeroSection: React.FC<HeroSectionProps> = ({ language }) => {
    const t = copy[language];
    const containerRef = useRef<HTMLDivElement>(null);
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            setMouse({
                x: e.clientX - rect.left - rect.width / 2,
                y: e.clientY - rect.top - rect.height / 2,
            });
        };
        window.addEventListener("mousemove", onMove, { passive: true });
        return () => window.removeEventListener("mousemove", onMove);
    }, []);

    return (
        <section
            id="home"
            ref={containerRef}
            className="relative min-h-screen flex items-center overflow-hidden"
            style={{
                background: "linear-gradient(160deg, #F8FAFC 0%, #F0FDFA 55%, #ECFDF5 100%)",
            }}
        >
            {/* Dot grid */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                    opacity: 0.45,
                }}
            />

            {/* Right-side teal glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse at 75% 50%, rgba(13,148,136,0.08) 0%, transparent 60%)",
                }}
            />

            {/* Top accent bar */}
            <div
                className="absolute top-0 left-0 right-0"
                style={{
                    height: 3,
                    background:
                        "linear-gradient(90deg, transparent 0%, #0D9488 25%, #14B8A6 75%, transparent 100%)",
                }}
            />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-16">
                <div className="grid xl:grid-cols-2 gap-10 xl:gap-16 items-center">

                    {/* ── Left column ── */}
                    <div>
                        {/* Tag pill */}
                        <motion.div
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6"
                            style={{
                                background: "rgba(13,148,136,0.08)",
                                border: "1px solid rgba(13,148,136,0.22)",
                            }}
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <span
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ background: "#0D9488" }}
                            />
                            <span
                                className="text-xs font-semibold tracking-widest uppercase"
                                style={{ color: "#0D9488" }}
                            >
                                {t.tag}
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            className="text-4xl sm:text-5xl font-bold leading-[1.1] mb-5"
                            style={{ color: "#0F172A" }}
                            initial={{ opacity: 0, y: 22 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            {t.headline}
                        </motion.h1>

                        {/* Sub */}
                        <motion.p
                            className="text-base leading-relaxed mb-8 max-w-lg"
                            style={{ color: "#64748B" }}
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                        >
                            {t.sub}
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            className="flex flex-wrap gap-3 mb-10"
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                        >
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold btn-primary"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                {t.cta1}
                                <ChevronRight className="w-4 h-4" />
                            </a>
                            <a
                                href="#partners"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium btn-secondary"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector("#partners")?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                {t.cta2}
                            </a>
                        </motion.div>

                        {/* Stats grid */}
                        <motion.div
                            className="grid grid-cols-4 gap-3 mb-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.42 }}
                        >
                            {t.trust.map((s, i) => (
                                <motion.div
                                    key={s.label}
                                    className="text-center py-3 px-2 rounded-xl"
                                    style={{
                                        background: "white",
                                        border: "1px solid #E2E8F0",
                                        boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                                    }}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.48 + i * 0.06 }}
                                >
                                    <div
                                        className="text-xl font-bold"
                                        style={{ color: "#0D9488" }}
                                    >
                                        {s.value}
                                    </div>
                                    <div
                                        className="text-xs mt-0.5 leading-tight"
                                        style={{ color: "#94A3B8" }}
                                    >
                                        {s.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Cert badges row */}
                        <motion.div
                            className="flex flex-wrap items-center gap-2 pt-6"
                            style={{ borderTop: "1px solid #E2E8F0" }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.65 }}
                        >
                            <span
                                className="text-xs font-medium mr-1"
                                style={{ color: "#94A3B8" }}
                            >
                                {language === "en" ? "Licensed:" : "Зөвшөөрөлтэй:"}
                            </span>
                            {[
                                language === "en" ? "MFDA Registered" : "МЭМХЭГ Бүртгэлтэй",
                                language === "en" ? "Import Licensed" : "Импортын зөвшөөрөлтэй",
                                language === "en" ? "10+ Years" : "10+ Жил",
                            ].map((cert) => (
                                <span
                                    key={cert}
                                    className="px-2.5 py-1 rounded-md text-xs font-semibold"
                                    style={{
                                        background: "#F0FDFA",
                                        color: "#0D9488",
                                        border: "1px solid #CCFBF1",
                                    }}
                                >
                                    {cert}
                                </span>
                            ))}
                        </motion.div>
                    </div>

                    {/* ── Right column: visual ── */}
                    <motion.div
                        className="relative hidden xl:block"
                        style={{ height: 420 }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <DashboardVisual mouseX={mouse.x} mouseY={mouse.y} language={language} />
                    </motion.div>
                </div>
            </div>

            {/* Scroll cue */}
            <motion.div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
                style={{ color: "#94A3B8" }}
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
            >
                <span className="text-xs tracking-widest uppercase">{t.scroll}</span>
                <ArrowDown className="w-3.5 h-3.5" />
            </motion.div>
        </section>
    );
};

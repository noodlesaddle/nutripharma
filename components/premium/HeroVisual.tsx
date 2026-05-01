"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Thermometer,
    Globe2,
    BarChart3,
    Award,
    Clock,
    CheckCircle2,
    TrendingUp,
    Package,
    Truck,
} from "lucide-react";

interface VisualProps {
    mouseX: number;
    mouseY: number;
    language?: "en" | "mn";
}

// ─── Option A: Hub + Orbiting Cards ─────────────────────────────────────────
export const HubVisual: React.FC<VisualProps> = ({ mouseX, mouseY, language = "en" }) => {
    const px = mouseX * 0.007;
    const py = mouseY * 0.007;
    const isMn = language === "mn";

    const satellites = [
        {
            icon: ShieldCheck,
            label: "Regulatory",
            sub: "MFDA · Health Ministry · Licensed",
            color: "#0D9488",
            bg: "#F0FDFA",
            border: "#CCFBF1",
            angle: -90,
            delay: 0,
        },
        {
            icon: Thermometer,
            label: "Cold Chain",
            sub: "2°C – 8°C",
            color: "#0EA5E9",
            bg: "#F0F9FF",
            border: "#BAE6FD",
            angle: 0,
            delay: 0.1,
        },
        {
            icon: Truck,
            label: "Distribution",
            sub: "500+ partners",
            color: "#8B5CF6",
            bg: "#FAF5FF",
            border: "#DDD6FE",
            angle: 90,
            delay: 0.2,
        },
        {
            icon: BarChart3,
            label: "Market Access",
            sub: "Nationwide",
            color: "#F59E0B",
            bg: "#FFFBEB",
            border: "#FDE68A",
            angle: 180,
            delay: 0.3,
        },
    ];

    const R = 150;

    return (
        <motion.div
            className="relative w-full h-full flex items-center justify-center"
            animate={{ x: px, y: py }}
            transition={{ type: "spring", stiffness: 40, damping: 20 }}
        >
            {/* Orbit rings */}
            <div
                className="absolute rounded-full border border-dashed"
                style={{ width: R * 2 + 20, height: R * 2 + 20, borderColor: "rgba(13,148,136,0.12)" }}
            />
            <div
                className="absolute rounded-full border"
                style={{ width: 200, height: 200, borderColor: "rgba(13,148,136,0.06)" }}
            />

            {/* Satellite cards */}
            {satellites.map((s) => {
                const Icon = s.icon;
                const rad = (s.angle * Math.PI) / 180;
                const cx = Math.cos(rad) * R;
                const cy = Math.sin(rad) * R;

                return (
                    <motion.div
                        key={s.label}
                        className="absolute flex flex-col items-center gap-1.5 px-4 py-3 rounded-2xl"
                        style={{
                            background: s.bg,
                            border: `1px solid ${s.border}`,
                            boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                            width: 118,
                            left: "50%",
                            top: "50%",
                            marginLeft: cx - 59,
                            marginTop: cy - 40,
                            zIndex: 10,
                        }}
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + s.delay, duration: 0.4, type: "spring" }}
                        whileHover={{ scale: 1.06, y: -3 }}
                    >
                        <div
                            className="w-8 h-8 rounded-xl flex items-center justify-center"
                            style={{ background: `${s.color}18` }}
                        >
                            <Icon className="w-4 h-4" style={{ color: s.color }} />
                        </div>
                        <div className="text-xs font-bold text-center" style={{ color: "#0F172A" }}>
                            {s.label}
                        </div>
                        <div className="text-xs text-center" style={{ color: "#94A3B8" }}>
                            {s.sub}
                        </div>
                    </motion.div>
                );
            })}

            {/* Center hub */}
            <motion.div
                className="relative z-20 flex flex-col items-center gap-2 px-6 py-5 rounded-2xl text-center"
                style={{
                    background: "#0D9488",
                    boxShadow: "0 0 0 8px rgba(13,148,136,0.10), 0 8px 32px rgba(13,148,136,0.30)",
                    width: 136,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15, duration: 0.5, type: "spring" }}
            >
                <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{ border: "2px solid #0D9488" }}
                    animate={{ scale: [1, 1.2], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
                <Globe2 className="w-7 h-7 text-white" />
                <div className="text-sm font-bold text-white">Nomt Hub</div>
                <div className="text-xs text-white/70">Ulaanbaatar</div>
                <div
                    className="mt-1 px-2 py-0.5 rounded-full text-xs font-semibold"
                    style={{ background: "rgba(255,255,255,0.18)", color: "white" }}
                >
                    ● Active
                </div>
            </motion.div>

            {/* Floating cert badges */}
            {[
                { label: isMn ? "МЭМХЭГ Бүртгэлтэй" : "MFDA Registered", style: { top: 8, right: 8 }, delay: 0.9 },
                { label: isMn ? "Импортын зөвшөөрөл" : "Import Licensed", style: { bottom: 8, left: 8 }, delay: 1.1 },
                { label: isMn ? "24ц Хүргэлт" : "24h Delivery", style: { top: 8, left: 8 }, delay: 1.3 },
            ].map((b) => (
                <motion.div
                    key={b.label}
                    className="absolute flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-semibold"
                    style={{
                        ...b.style,
                        background: "white",
                        border: "1px solid #E2E8F0",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                        color: "#0D9488",
                        zIndex: 30,
                    }}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: b.delay, duration: 0.35 }}
                >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {b.label}
                </motion.div>
            ))}
        </motion.div>
    );
};

// ─── Option B: Live Operations Dashboard ─────────────────────────────────────
export const DashboardVisual: React.FC<VisualProps> = ({ mouseX, mouseY, language = "en" }) => {
    const px = mouseX * 0.006;
    const py = mouseY * 0.006;

    const isMn = language === "mn";

    const metrics = [
        { label: isMn ? "Идэвхтэй хүргэлт" : "Active Deliveries", value: "247", unit: isMn ? "өнөөдөр" : "today", color: "#0D9488", bar: 82 },
        { label: isMn ? "Нийцлийн хувь" : "Compliance Rate", value: "100", unit: "%", color: "#10B981", bar: 100 },
        { label: isMn ? "Хүйтэн гинжний ажиллагаа" : "Cold Chain Uptime", value: "99.9", unit: "%", color: "#0EA5E9", bar: 99 },
        { label: isMn ? "Түншийн эмийн сан" : "Partner Pharmacies", value: "500", unit: isMn ? "+ идэвхтэй" : "+ active", color: "#8B5CF6", bar: 75 },
    ];

    // Mini sparkline data (relative heights 0–1)
    const sparkline = [0.4, 0.55, 0.45, 0.7, 0.6, 0.8, 0.72, 0.9, 0.85, 1.0];

    return (
        <motion.div
            className="relative w-full h-full flex items-center justify-center"
            animate={{ x: px, y: py }}
            transition={{ type: "spring", stiffness: 40, damping: 20 }}
        >
            {/* Main card */}
            <motion.div
                className="w-full max-w-sm rounded-2xl overflow-hidden"
                style={{
                    background: "white",
                    border: "1px solid #E2E8F0",
                    boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {/* Header */}
                <div
                    className="px-5 py-4 flex items-center justify-between"
                    style={{ borderBottom: "1px solid #F1F5F9" }}
                >
                    <div>
                        <div className="text-sm font-bold" style={{ color: "#0F172A" }}>
                            {isMn ? "Үйл ажиллагааны самбар" : "Operations Dashboard"}
                        </div>
                        <div className="text-xs" style={{ color: "#94A3B8" }}>
                            Nomt-Nutripharma · {isMn ? "Шууд" : "Live"}
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <motion.div
                            className="w-2 h-2 rounded-full"
                            style={{ background: "#10B981" }}
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <span className="text-xs font-semibold" style={{ color: "#10B981" }}>
                            {isMn ? "Шууд" : "Live"}
                        </span>
                    </div>
                </div>

                {/* Sparkline chart */}
                <div className="px-5 pt-4 pb-2">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium" style={{ color: "#64748B" }}>
                            {isMn ? "Сарын хүргэлт" : "Monthly Deliveries"}
                        </span>
                        <div className="flex items-center gap-1" style={{ color: "#10B981" }}>
                            <TrendingUp className="w-3 h-3" />
                            <span className="text-xs font-semibold">+18%</span>
                        </div>
                    </div>
                    <div className="flex items-end gap-1" style={{ height: 40 }}>
                        {sparkline.map((h, i) => (
                            <motion.div
                                key={i}
                                className="flex-1 rounded-sm"
                                style={{ background: i === sparkline.length - 1 ? "#0D9488" : "#E2E8F0" }}
                                initial={{ height: 0 }}
                                animate={{ height: `${h * 100}%` }}
                                transition={{ delay: 0.4 + i * 0.05, duration: 0.4, ease: "easeOut" }}
                            />
                        ))}
                    </div>
                </div>

                {/* Metrics */}
                <div className="px-5 pb-4 space-y-3.5">
                    {metrics.map((m, i) => (
                        <motion.div
                            key={m.label}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + i * 0.08 }}
                        >
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-xs font-medium" style={{ color: "#64748B" }}>
                                    {m.label}
                                </span>
                                <span className="text-sm font-bold" style={{ color: "#0F172A" }}>
                                    {m.value}
                                    <span className="text-xs font-normal ml-0.5" style={{ color: "#94A3B8" }}>
                                        {m.unit}
                                    </span>
                                </span>
                            </div>
                            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "#F1F5F9" }}>
                                <motion.div
                                    className="h-full rounded-full"
                                    style={{ background: m.color }}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${m.bar}%` }}
                                    transition={{ delay: 0.6 + i * 0.1, duration: 0.7, ease: "easeOut" }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer */}
                <div
                    className="px-5 py-3 flex items-center gap-2"
                    style={{ background: "#F8FAFC", borderTop: "1px solid #F1F5F9" }}
                >
                    <Clock className="w-3.5 h-3.5" style={{ color: "#94A3B8" }} />
                    <span className="text-xs" style={{ color: "#94A3B8" }}>
                        {isMn ? "24ц хүргэлтийн SLA · Энэ сард 100% цагтаа" : "24h delivery SLA · 100% on-time this month"}
                    </span>
                </div>
            </motion.div>

            {/* Top-right floating badge */}
            <motion.div
                className="absolute -top-3 -right-3 flex items-center gap-2 px-3 py-2 rounded-xl"
                style={{
                    background: "white",
                    border: "1px solid #E2E8F0",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                    zIndex: 20,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
            >
                <Award className="w-4 h-4" style={{ color: "#0D9488" }} />
                <div>
                    <div className="text-xs font-bold" style={{ color: "#0F172A" }}>
                        {isMn ? "МЭМХЭГ Бүртгэлтэй" : "MFDA Registered"}
                    </div>
                    <div className="text-xs" style={{ color: "#94A3B8" }}>
                        {isMn ? "Импортын зөвшөөрөл · 10+ жил" : "Import Licensed · 10+ Years"}
                    </div>
                </div>
            </motion.div>

            {/* Bottom-left floating badge */}
            <motion.div
                className="absolute -bottom-3 -left-3 flex items-center gap-2 px-3 py-2 rounded-xl"
                style={{
                    background: "#0D9488",
                    boxShadow: "0 4px 20px rgba(13,148,136,0.30)",
                    zIndex: 20,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 }}
            >
                <ShieldCheck className="w-4 h-4 text-white" />
                <div>
                    <div className="text-xs font-bold text-white">
                        {isMn ? "100% Нийцтэй" : "100% Compliant"}
                    </div>
                    <div className="text-xs text-white/70">
                        {isMn ? "Зөрчилгүй" : "Zero violations"}
                    </div>
                </div>
            </motion.div>

            {/* Right side mini stat */}
            <motion.div
                className="absolute -right-3 top-1/2 -translate-y-1/2 flex flex-col gap-2"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 }}
            >
                {[
                    { icon: Package, value: "500+", label: isMn ? "Түнш" : "Partners" },
                    { icon: Truck, value: "24h", label: isMn ? "Хүргэлт" : "Delivery" },
                ].map((s) => {
                    const Icon = s.icon;
                    return (
                        <div
                            key={s.label}
                            className="flex flex-col items-center px-3 py-2 rounded-xl"
                            style={{
                                background: "white",
                                border: "1px solid #E2E8F0",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                                minWidth: 68,
                            }}
                        >
                            <Icon className="w-3.5 h-3.5 mb-1" style={{ color: "#0D9488" }} />
                            <div className="text-sm font-bold" style={{ color: "#0D9488" }}>{s.value}</div>
                            <div className="text-xs" style={{ color: "#94A3B8" }}>{s.label}</div>
                        </div>
                    );
                })}
            </motion.div>
        </motion.div>
    );
};

// ─── Option C: Stacked Feature Cards ─────────────────────────────────────────
export const StackedCardsVisual: React.FC<VisualProps> = ({ mouseX, mouseY }) => {
    const px = mouseX * 0.005;
    const py = mouseY * 0.005;

    const cards = [
        {
            icon: ShieldCheck,
            title: "Regulatory Mastery",
            body: "Full MFDA registration, import licensing, and pharmacovigilance handled end-to-end.",
            tag: "Compliance",
            color: "#0D9488",
            rotate: -5,
            translateY: 20,
            delay: 0,
        },
        {
            icon: Thermometer,
            title: "Cold Chain Logistics",
            body: "State-of-the-art 2°C–8°C storage with real-time IoT monitoring and 24/7 alerts.",
            tag: "Infrastructure",
            color: "#0EA5E9",
            rotate: 0,
            translateY: 10,
            delay: 0.1,
        },
        {
            icon: Globe2,
            title: "Market Penetration",
            body: "Direct access to 500+ pharmacies, hospitals, and clinics across the region.",
            tag: "Distribution",
            color: "#8B5CF6",
            rotate: 5,
            translateY: 0,
            delay: 0.2,
        },
    ];

    return (
        <motion.div
            className="relative w-full h-full flex items-center justify-center"
            animate={{ x: px, y: py }}
            transition={{ type: "spring", stiffness: 40, damping: 20 }}
        >
            <div className="relative" style={{ width: 300, height: 280 }}>
                {cards.map((card, i) => {
                    const Icon = card.icon;
                    return (
                        <motion.div
                            key={card.title}
                            className="absolute inset-0 rounded-2xl p-6 cursor-default"
                            style={{
                                background: "white",
                                border: "1px solid #E2E8F0",
                                boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                                zIndex: i + 1,
                            }}
                            initial={{ opacity: 0, y: 30, rotate: card.rotate }}
                            animate={{ opacity: 1, y: card.translateY, rotate: card.rotate }}
                            transition={{ delay: 0.2 + card.delay, duration: 0.5, type: "spring", stiffness: 80 }}
                            whileHover={{
                                y: card.translateY - 10,
                                rotate: 0,
                                zIndex: 20,
                                boxShadow: "0 20px 48px rgba(0,0,0,0.12)",
                                transition: { duration: 0.2 },
                            }}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span
                                    className="px-2.5 py-1 rounded-full text-xs font-semibold"
                                    style={{ background: `${card.color}12`, color: card.color }}
                                >
                                    {card.tag}
                                </span>
                                <div
                                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                                    style={{ background: `${card.color}10` }}
                                >
                                    <Icon className="w-5 h-5" style={{ color: card.color }} />
                                </div>
                            </div>
                            <h3 className="text-base font-bold mb-2" style={{ color: "#0F172A" }}>
                                {card.title}
                            </h3>
                            <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
                                {card.body}
                            </p>
                        </motion.div>
                    );
                })}
            </div>

            {/* Side stats */}
            <motion.div
                className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-3"
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
            >
                {[
                    { value: "10+", label: "Years" },
                    { value: "500+", label: "Partners" },
                    { value: "24h", label: "Delivery" },
                ].map((s) => (
                    <div
                        key={s.label}
                        className="text-center px-3 py-2.5 rounded-xl"
                        style={{
                            background: "white",
                            border: "1px solid #E2E8F0",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                            minWidth: 64,
                        }}
                    >
                        <div className="text-lg font-bold" style={{ color: "#0D9488" }}>{s.value}</div>
                        <div className="text-xs" style={{ color: "#94A3B8" }}>{s.label}</div>
                    </div>
                ))}
            </motion.div>
        </motion.div>
    );
};
